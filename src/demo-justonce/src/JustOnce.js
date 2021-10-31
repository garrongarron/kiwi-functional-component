/* src/JustOnce.js */
export default function JustOnce() {
    let [counter, setCounter] = this.useState(1)
    this.beforeAppendChild = (parentNode) => {
        /* Only once */
        console.log(parentNode.firstChild.innerText);
    }
    this.doSomething = () => {
        setCounter(counter + 1)
    }
    this.enableEvents('click')
    return `<div click="doSomething">Counter: ${counter}</div>`
}