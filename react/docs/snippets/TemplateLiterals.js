import getComponent from '../js/FunctionalComponent.js';

export default function TemplateLiterals(){
    let name = "Taylor"
    return `<div>Hello ${name}</div>`
}

let component = getComponent(HelloWorld)
component.kiwiSelector('body')   