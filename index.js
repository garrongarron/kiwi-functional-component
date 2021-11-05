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
    //ok
    this.nameProvider = () => 'Hello'
    //ok
    this.nameProvider = function(){ return 'Hello' }
    //bad
    this.nameProvider(){ return 'Hello' }
    
    return `<div>
        <Calculator name="Sara" />
        <Calculator name="Cahal" />
        <Calculator calc="objectSender" />
    </div>`
}
getComponent(Main).kiwiSelector('body')

