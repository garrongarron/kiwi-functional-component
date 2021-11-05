import getComponent from './js/FunctionalComponent.js';

function Calculator({ name = 'Mate', calc }) {
    return `<div>
        <h1>Hi, ${name}!</h1> 
        <div> 1 + 2 = ${calc && calc.sum(1, 2) || '?'}</div>
        <div> 3 + 4 = ${(calc) ? calc.sum(3, 4) : '?'}</div>
    </div>`;
}
function Main() {
    this.enableSubComponents({ Calculator })
    this.objectSender = () => {
        return {
            sum: (a, b) => a + b
        }
    }
    return `<div>
        <Calculator name="Mike" />
        <Calculator calc="objectSender" />
    </div>`
}
getComponent(Main).kiwiSelector('body')

