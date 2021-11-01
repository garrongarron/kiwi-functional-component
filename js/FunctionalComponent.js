const FIRST_TIME = Symbol('firstTime')
const STATE_INDEX = Symbol('firstTime')
const DEFAUT_STATE_DONE = Symbol('firstTime') //defaultStateDone
const SET_PTOPERTIES = Symbol('setProperties') //defaultStateDone

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
    noProp: ["beforeAppendChild", "stateIndex", "defaultStateDone", "_firstTime", "_map", "prop", "setProperties", "enableSubComponents", "subComponent", "addChild", "enableEvents", "listeners", "settingListener", "exec", "kiwiSelector", "useState", "noProp"],
    setProperties: function (node, instanceComponet) {
        for (let index = 0; index < node.attributes.length; index++) {
            if (typeof this[node.attributes[index].value] == 'function') {
                instanceComponet.prop[node.attributes[index].name] =
                    (noProp.includes(node.attributes[index].value))
                        ? node.attributes[index].value
                        : this[node.attributes[index].value]();
                if (noProp.includes(node.attributes[index].value))
                    console.warn(`Atttribute Value '${node.attributes[index].value}' as string due it is a reserved keyword`);

            } else {
                try {
                    instanceComponet.prop[node.attributes[index].name] = JSON.parse(node.attributes[index].value)
                } catch (error) {
                    instanceComponet.prop[node.attributes[index].name] = node.attributes[index].value
                }
            }
        }
    },
    enableSubComponents: function (params) {
        this.subComponent = (Array.isArray(params)) ? params : [params]
    },
    subComponent: [],
    addChild: function (parent) {
        this.subComponent.map(subComponent => {
            let nodeList = parent.querySelectorAll(subComponent.name.toLowerCase())
            for (let index = 0; index < nodeList.length; index++) {
                const node = nodeList[index];
                let instanceComponet = new subComponent({}, true)
                this.setProperties(node, instanceComponet)
                let newNode = instanceComponet.exec()
                node.parentNode.replaceChild(newNode, node)
            }
        })
        return parent
    },
    enableEvents: function (params) {
        this.listeners = (Array.isArray(params)) ? params : [params]
    },
    listeners: [],
    settingListener: function (parent) {
        this.listeners.map(selector => {
            let nodeList = parent.querySelectorAll('[' + selector + ']')
            for (let index = 0; index < nodeList.length; index++) {
                const node = nodeList[index];
                let method = node.getAttribute(selector)
                node.addEventListener(selector, this[method].bind(this))
            }
        });
    },
    exec: function (again) {
        var node = document.createElement('section');
        this[STATE_INDEX] = 0
        this.template = this.constructor(this.prop)
        this[DEFAUT_STATE_DONE] = true
        node.innerHTML = this.template
        this.settingListener(node)
        this.addChild(node)
        console.log(this[FIRST_TIME]);
        if (this[FIRST_TIME]) {
            this[FIRST_TIME] = false
            this.beforeAppendChild(node)
        }
        this.node = node.children[0]
        return this.node
    },
    kiwiSelector: function (selector) {
        document.querySelector(selector).appendChild(this.exec())
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
                this.node.parentNode.replaceChild(this.exec(true), old)//?
            },
        ]
    }
}
functional[FIRST_TIME] = true
functional[STATE_INDEX] = 0
functional[DEFAUT_STATE_DONE] = false


Object.prototype.getComponent = (Component) => {
    return new Component({}, true)
}
Object.assign(Object.prototype, functional)


