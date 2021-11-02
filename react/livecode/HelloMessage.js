import getComponent from '../js/FunctionalComponent.js';

function HelloMessage({ prop = "Taylor" }) {
    return `<div>
        Hello ${prop}
    </div>`
}

let root = getComponent(HelloMessage)
root.kiwiSelector('body')                      