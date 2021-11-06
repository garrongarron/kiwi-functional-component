import getComponent from './js/FunctionalComponent.js';

function Hijo({ n }) {
    this.useEffect((a) => {
        console.log('Start', n)
        return () => {
            console.log('End', n)
        }
    })
    return `<button >Add #1</button>`
}

function HelloMessage({ prop = "Taylor" }) {
    let [items, setItems] = this.useState(true)
    this.enableSubComponents({ Hijo })
    this.enableEvents(['click'])
    this.toggle = () => {
        setItems(!items)
    }
    return `<div>
        Hello ${prop}
        <button click="toggle">Click me</button>
        ${(items) ? `<Hijo n="1"></Hijo>` : ''}
    </div>`
}


let root = getComponent(HelloMessage)
root.kiwiSelector('body')