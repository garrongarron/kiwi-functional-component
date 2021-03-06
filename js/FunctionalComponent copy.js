const insideTheDom = {
    components: [],
    check: function () {
        insideTheDom.components.forEach(component => {
            if (!document.contains(component.node)) {
                component.exit()
            }
        })
    },
    add: function (component, clean) {
        let index = this.components.indexOf(component)
        if (index > -1) return
        this.components.push(component)
        component.exit = clean
    }

}
const primitevesAllowed = 'number string undefined'.split(' ')
const validatePrimitive = (variable) => {
    if (!primitevesAllowed.includes(typeof variable)) {
        throw `Argument is not an string, number or undefined : '${variable}' in primitiveDispatcher() method.`
    }
}
const FIRST_TIME = Symbol('firstTime')
const STATE_INDEX = Symbol('stateIndex')
const DEFAUT_STATE_DONE = Symbol('defaultStateDone')
const SET_PTOPERTIES = Symbol('setProperties')
const ADD_CHILD = Symbol('addChild')
const CHILDREN = Symbol('children')
const SUB_COMPONENTS = Symbol('subComponent')
const LISTENERS = Symbol('listeners')
const SETING_LISTENER = Symbol('settingListener')
const EXEC = Symbol('exec')
const CUSTOM_MAP = Symbol('customMap')
const ORIGINAL_MAP = Symbol('customMap')
const REFRESH = Symbol('refresh')
let publicMethods = {
    beforeAppendChild: function (parentNode) { },
    prop: {},
    noProp: ["beforeAppendChild", "prop", "enableSubComponents", "enableEvents", "kiwiSelector", "useState", "noProp"],
    enableSubComponents: function (params) {
        this[SUB_COMPONENTS] = params
    },
    enableEvents: function (params) {
        this[LISTENERS] = (Array.isArray(params)) ? params : [params]
    },
    kiwiSelector: function (selector) {
        document.querySelector(selector).appendChild(this[EXEC]())
    },
    useState: function (value) {
        if (!this.state) this.state = {}
        let n = this[STATE_INDEX]++
        if (!this[DEFAUT_STATE_DONE])
            this.state[n] = value
        return [
            (typeof value == 'undefined') ? value : JSON.parse(JSON.stringify(this.state[n])),
            (newState) => {
                if (typeof this.state[n] == 'object') {
                    Object.assign(this.state[n], (typeof newState == 'function') ? newState() : newState)
                }
                this.state[n] = newState
                console.log('nuevo estado', this.state[n]);
                let old = this.node
                let newNode = this[EXEC](true)
                let flag = this[REFRESH](old, newNode)
                if (flag) {
                    this.node = old
                }
                if (!flag) old.parentNode.replaceChild(newNode, old)//?
                insideTheDom.check()
            }
        ]

    },
    outOfDom: function* generator(i) {
        yield null;
        yield i + 10;
    },
    arrayDispatcher: function (database = []) {
        if (!Array.isArray(database)) {
            throw `Argument is not an array: '${database}' in arrayDispacher() method.`
        }
        const callbacks = []
        const list = {
            get items() { return [...database] },
            subscribe: function (callback) {
                callbacks.push(callback)
            }
        }
        let updateList = (newDatabase) => {
            database = newDatabase
            callbacks.forEach(c => c())
        }
        return [list, updateList, database]
    },
    variableDispatcher: function (variable) {
        validatePrimitive(variable)
        const callbacks = []
        let valueStored = variable
        const store = {
            get value() { return valueStored },
            subscribe: function (callback) {
                callbacks.push(callback)
            },
        }
        let updateStore = (newValue) => {
            validatePrimitive(newValue)
            valueStored = newValue
            callbacks.forEach(c => c())
        }
        return [store, updateStore, valueStored]
    },

}
let privateMethods = function () {
    this[FIRST_TIME] = true
    this[STATE_INDEX] = 0
    this[DEFAUT_STATE_DONE] = false
    this[SET_PTOPERTIES] = function (attr) {
        const prop = {}
        for (let index = 0; index < attr.length; index++) {
            if (typeof this[attr[index].value] == 'function') {
                prop[attr[index].name] =
                    (this.noProp.includes(attr[index].value))
                        ? attr[index].value
                        : this[attr[index].value]();
                if (this.noProp.includes(attr[index].value))
                    console.warn(`Atttribute Value '${attr[index].value}' as string due it is a reserved keyword`);
            } else {
                try {
                    prop[attr[index].name] = JSON.parse(attr[index].value)
                } catch (error) {
                    prop[attr[index].name] = attr[index].value
                }
            }
        }
        return prop
    }
    this[ADD_CHILD] = function (parent) {
        Object.keys(this[SUB_COMPONENTS]).map(name => {
            let subComponent = this[SUB_COMPONENTS][name]
            let nodeList = parent.querySelectorAll(name.toLowerCase())
            this[CHILDREN] = this[CHILDREN] || []
            this[CHILDREN].forEach(c => { c.free = true })
            for (let index = 0; index < nodeList.length; index++) {
                const node = nodeList[index];
                let prop = this[SET_PTOPERTIES](node.attributes)
                let instanceCached = null
                let j = 0
                let fromCache = false
                for (j = 0; j < this[CHILDREN].length; j++) {
                    const c = this[CHILDREN][j];
                    if (c.instanceComponet.constructor.name != name) continue;
                    if (!c.free) continue;
                    instanceCached = c.instanceComponet
                    fromCache = true
                    this[CHILDREN][j] = {
                        free: false,
                        instanceComponet: c.instanceComponet
                    }
                    break;
                }
                let instanceComponet = (fromCache) ? instanceCached : getComponent(subComponent)
                if (!fromCache) {
                    this[CHILDREN][index] = {
                        free: false,
                        instanceComponet
                    }
                }
                instanceComponet.prop = {}
                Object.assign(instanceComponet.prop, prop)
                let newNode = instanceComponet[EXEC]()
                node.parentNode.replaceChild(newNode, node)
            }
        })
        return parent
    }
    this[SUB_COMPONENTS] = []
    this[LISTENERS] = []
    this[SETING_LISTENER] = function (parent) {
        this[LISTENERS].map(selector => {
            let nodeList = parent.querySelectorAll('[' + selector + ']')
            for (let index = 0; index < nodeList.length; index++) {
                const node = nodeList[index];
                let method = node.getAttribute(selector)
                if (!method) throw "There is no attribute '" + selector + "' value on:\n\n" + node.outerHTML
                node.addEventListener(selector, this[method].bind(this))
            }
        });
    }
    this[ORIGINAL_MAP] = Array.prototype.toString
    this[CUSTOM_MAP] = function () { return this.join(' ') }
    this[REFRESH] = function (old, newNode) {
        let flag = true
        function process(n1, n2) {
            if (n1.lenght == n2.lenght) {
                n1.forEach((text, index) => {
                    // console.log(n2[index]);
                    if (text.textContent != n2[index].textContent) {
                        if (text.nodeName != n2[index].nodeName) return
                        text.textContent = n2[index].textContent
                        flag = true
                    }
                })
            }
        }
        old.querySelectorAll('*').forEach((node, index) => {
            // console.log(node.attributes, newNode.querySelectorAll('*')[index].attributes);
            // node.attributes, newNode.querySelectorAll('*')[index].attributes
            let generated = newNode.querySelectorAll('*')[index]
            let tmp = {}
            for (const attr of node.attributes) { 
                tmp[attr.name] = attr.value
            }
            for (const attr of generated.attributes) { 
                tmp[attr.name] = attr.value
            }
            
            Object.keys(tmp).forEach((key) => {
                //delete that is missing
                if(generated.getAttribute(key)==null){
                    node.removeAttribute(key)
                } else{
                    if(node.getAttribute(key)!=generated.getAttribute(key)){
                        node.setAttribute(key, generated.getAttribute(key))
                    }
                }
            })

            let q1 = node.childNodes
            let q2 = generated.childNodes
            process(q1, q2);
        });
        return flag
    }
    this[EXEC] = function (again) {
        //@TODO AVOID TAG NO CLOSED
        let node = document.createElement('section');
        this[STATE_INDEX] = 0
        Array.prototype.toString = this[CUSTOM_MAP]
        let string = this.constructor(this.prop)
        Array.prototype.toString = this[ORIGINAL_MAP]
        this[DEFAUT_STATE_DONE] = true
        node.innerHTML = string
        this[SETING_LISTENER](node)
        this[ADD_CHILD](node)
        if (this[FIRST_TIME]) {
            this[FIRST_TIME] = false
            let clean = this.beforeAppendChild(node)
            if (typeof clean == 'function') {
                insideTheDom.add(this, clean)
            }
        }
        this.node = node.children[0]
        if (!this.node) throw `Check the return of ${this.constructor.name}` + '\n' + `${this.constructor.toString()}`
        return this.node
    }
    return this
}
const component = privateMethods.bind(publicMethods)()
function emptyComponent() { }
Object.assign(emptyComponent.prototype, component)
let getComponent = (Component) => {
    let instanceComponet = new emptyComponent()
    instanceComponet.constructor = Component
    return instanceComponet
}
export default getComponent