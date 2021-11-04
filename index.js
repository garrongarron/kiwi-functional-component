import getComponent from './js/FunctionalComponent.js';
import Bar from './test/Bar.js';

export default function Stringify() {
    this.enableSubComponents({Bar})
    return `<h1>
    <Bar></Bar>
</h1>`
}

let component = getComponent(Stringify)
component.kiwiSelector('body')

let userDeserialized = JSON.parse(
    document.querySelector('h1')
        .getAttribute('user')
)
