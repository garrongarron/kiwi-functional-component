// import getComponent from '../js/FunctionalComponent.js';

function State() {
    let [counter, setCounter] = this.useState(0)
    this.tick = () => {
        setCounter(counter + 1)
    }
    setTimeout(this.tick, 1000)
    return `<div> Counter: ${counter}</div>`
}

// let component = getComponent(State)
// component.kiwiSelector('body')
export default State