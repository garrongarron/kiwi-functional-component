const FIRST_TIME = Symbol('firstTime')
const STATE_INDEX = Symbol('stateIndex')
const DEFAUT_STATE_DONE = Symbol('defaultStateDone')
const SET_PTOPERTIES = Symbol('setProperties') 
const ADD_CHILD = Symbol('addChild') 
const SUB_COMPONENTS = Symbol('subComponent')
const LISTENERS = Symbol('listeners')
const SETING_LISTENER = Symbol('settingListener')
const EXEC = Symbol('exec')
let functional = {
    beforeAppendChild: function (parentNode) { },
    _map: function (callback) {
        if (Array.isArray(this))
            return this.map(callback).join('')
        document.body.innerHTML = `Property is not Array`;
        console.error((this).toString(), 'is not an Array');
        throw `Property is not an Array`
    },
    prop: {},
    noProp: ["beforeAppendChild", "_map", "prop", "enableSubComponents", "enableEvents", "kiwiSelector", "useState", "noProp"],
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
    }
}
;(function () {
    this[FIRST_TIME] = true
    this[STATE_INDEX] = 0
    this[DEFAUT_STATE_DONE] = false
    this[SET_PTOPERTIES] = function (node, instanceComponet) {
        for (let index = 0; index < node.attributes.length; index++) {
            if (typeof this[node.attributes[index].value] == 'function') {
                instanceComponet.prop[node.attributes[index].name] =
                    (this.noProp.includes(node.attributes[index].value))
                        ? node.attributes[index].value
                        : this[node.attributes[index].value]();
                if (this.noProp.includes(node.attributes[index].value))
                    console.warn(`Atttribute Value '${node.attributes[index].value}' as string due it is a reserved keyword`);
            } else {
                try {
                    instanceComponet.prop[node.attributes[index].name] = JSON.parse(node.attributes[index].value)
                } catch (error) {
                    instanceComponet.prop[node.attributes[index].name] = node.attributes[index].value
                }
            }
        }
    }
    this[ADD_CHILD] = function (parent) {
        this[SUB_COMPONENTS].map(subComponent => {
            let nodeList = parent.querySelectorAll(subComponent.name.toLowerCase())
            for (let index = 0; index < nodeList.length; index++) {
                const node = nodeList[index];
                let instanceComponet = new subComponent({}, true)
                this[SET_PTOPERTIES](node, instanceComponet)
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
    this[EXEC] = function (again) {
        var node = document.createElement('section');
        this[STATE_INDEX] = 0
        this.template = this.constructor(this.prop)
        this[DEFAUT_STATE_DONE] = true
        node.innerHTML = this.template
        this[SETING_LISTENER](node)
        this[ADD_CHILD](node)
        if (this[FIRST_TIME]) {
            this[FIRST_TIME] = false
            this.beforeAppendChild(node)
        }
        this.node = node.children[0]
        return this.node
    }
}).bind(functional)()

Object.prototype.getComponent = (Component) => {
    return new Component({}, true)
}
Object.assign(Object.prototype, functional)


