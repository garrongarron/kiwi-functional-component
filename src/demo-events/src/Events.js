/* src/Events.js */
export default function Events() {
    this.doSomething = (e) => {
        console.log(e.target.textContent);
    }
    this.enableEvents('click')
    return `<div click="doSomething">Click me</div>`
}