import getComponent from './js/FunctionalComponent.js';

let n = 0
const initialState = {
    name: 'Jhon'
}
function reducer(state, action) {
    switch (action.type) {
        case 'hello':
            return { ...state, name: 'Peter ' + (n++) }
            break;
        default:
            break;
    }
    return state
}
function Main() {
    const [{ name }, dispatch] = this.useReducer(reducer, initialState);
    setTimeout(() => {
        dispatch({ type: 'hello' })
    }, 2000);
    return `<div>
        <ul>
            <li> hello ${name}</li>
        </ul>
    </div>`
}
getComponent(Main).kiwiSelector('body')