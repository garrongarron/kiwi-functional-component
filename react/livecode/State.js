// import getComponent from '../js/FunctionalComponent.js';
let n = null
function State() {
    let [counter, setCounter] = this.useState(0)
    this.tick = () => {
        (document.contains(this.node))
            ? setCounter(counter + 1)
            : clearInterval(n)
    }
    n = setTimeout(this.tick, 1000)
    return `<div> Counter: ${counter}</div>`
}
// let component = getComponent(State)
// component.kiwiSelector('body')
export default State