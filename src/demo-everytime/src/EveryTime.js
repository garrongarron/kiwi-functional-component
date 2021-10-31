/* src/EveryTyme.js */
export default function EveryTime() {
    let [counter, setCounter] = this.useState(1)
    this.beforeAppendChild = (parent) => {
        console.log(parent.firstChild.innerText);
        /* Every time */
        this._firstTime = true
    }
    this.doSomething = () => {
        setCounter(counter + 1)
    }
    this.enableEvents('click')
    return `<div click="doSomething">Counter: ${counter}</div>`
}