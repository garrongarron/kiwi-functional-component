import getComponent from './js/FunctionalComponent.js';

export default function Stringify() {
    const user = {
        firstName: 'Jordan',
        lastName: 'Walke'
    };
    return `
    <h1 user='${JSON.stringify(user)}'>
        ${user.firstName}
    </h1>`
}

let component = getComponent(Stringify)
component.kiwiSelector('body')

let userDeserialized = JSON.parse(
    document.querySelector('h1').getAttribute('user')
)
console.log(userDeserialized);