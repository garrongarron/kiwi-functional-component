/* src/State.js */
export default function State() {
    let value = JSON.parse(localStorage.getItem('counter') || '0')
    let [counter, setCounter] = this.useState(value)
    this.doSomething = () => {
        localStorage.setItem('counter', counter + 1)
        setCounter(counter + 1)
    }
    this.enableEvents('click')
    return `<div click="doSomething">${counter}</div>`
}