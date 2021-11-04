import getComponent from '../js/FunctionalComponent.js';

function HelloWorld() {
    return `<h1>Hello, World</h1>`
}

let component = getComponent(HelloWorld)
component.kiwiSelector('body')   