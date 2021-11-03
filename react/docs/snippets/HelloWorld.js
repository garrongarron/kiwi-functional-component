import getComponent from '../js/FunctionalComponent.js';

function HelloWorld() {
    return `<div>Hello World</div>`
}

let component = getComponent(HelloWorld)
component.kiwiSelector('body')   