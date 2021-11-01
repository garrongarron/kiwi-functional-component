const FIRST_TIME = Symbol('firstTime')
const STATE_INDEX = Symbol('stateIndex')
const DEFAUT_STATE_DONE = Symbol('defaultStateDone')
const SET_PTOPERTIES = Symbol('setProperties')
const ADD_CHILD = Symbol('addChild')
const SUB_COMPONENTS = Symbol('subComponent')
const LISTENERS = Symbol('listeners')
const SETING_LISTENER = Symbol('settingListener')
const EXEC = Symbol('exec')
const CUSTOM_MAP = Symbol('customMap')
const ORIGINAL_MAP = Symbol('customMap')
let publicMethods = {
    beforeAppendChild: function (parentNode) { },
    prop: {},
    noProp: ["beforeAppendChild", "prop", "enableSubComponents", "enableEvents", "kiwiSelector", "useState", "noProp"],
    enableSubComponents: function (params) {
        this[SUB_COMPONENTS] = (Array.isArray(params)) ? params : [params]
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
                this.state[n] = newState
                let old = this.node
                this.node.parentNode.replaceChild(this[EXEC](true), old)//?
            },
        ]
    },
    template: 'template'
}
function Component() { }
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
        this[SUB_COMPONENTS].map(subComponent => {
            let nodeList = parent.querySelectorAll(subComponent.name.toLowerCase())
            for (let index = 0; index < nodeList.length; index++) {
                const node = nodeList[index];
                Object.assign(Component.prototype, component)
                let instanceComponet = new Component()
                let prop = this[SET_PTOPERTIES](node.attributes)
                Object.assign(instanceComponet.prop, prop)
                instanceComponet.constructor = subComponent
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
                node.addEventListener(selector, this[method].bind(this))
            }
        });
    }
    this[ORIGINAL_MAP] = Array.prototype.toString
    this[CUSTOM_MAP] = function () { return this.join(' ') }
    this[EXEC] = function (again) {
        var node = document.createElement('section');
        this[STATE_INDEX] = 0
        Array.prototype.toString = this[CUSTOM_MAP]
        let string = this.constructor(this.prop) // constructor as a second time
        Array.prototype.toString = this[ORIGINAL_MAP]
        this[DEFAUT_STATE_DONE] = true
        node.innerHTML = string
        this[SETING_LISTENER](node)
        this[ADD_CHILD](node)
        if (this[FIRST_TIME]) {
            this[FIRST_TIME] = false
            this.beforeAppendChild(node)
        }
        this.node = node.children[0]
        return this.node
    }
    return this
}
const component = privateMethods.bind(publicMethods)()

let getComponent = (Component) => {
    Object.assign(Component.prototype, component)
    return new Component({}, true)
}
export default getComponent