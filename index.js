import getComponent from './js/FunctionalComponent.js';
import Bar from './test/Bar.js';

function Stringify() {
    let [counter, setCounter] = this.useState(0)
    this.timer = () => {
        setCounter(counter+1)
    }
    this.enableEvents(['click'])
    return `<div><div><h2 click="timer" ${(counter%2==0)?'class="aasd"':''} >It is ${counter}.</h2></div></div>`
}
getComponent(Stringify).kiwiSelector('body')

