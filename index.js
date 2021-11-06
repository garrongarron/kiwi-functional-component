import getComponent from './js/FunctionalComponent.js';

function reducer(state, action) {
    switch (action.type) {
        case 'hello':
            return { ...state, name: 'Peter '+ (n++) }
            break;

        default:
            break;

    }
    return state
}
const initialState = {
    name: 'Jhon'
}
let n = 0
function Main() {
    const [{ name }, dispatch] = this.useReducer(reducer, initialState);
    setTimeout(() => {
        dispatch({ type: 'hello' })
    }, 1000);



    return `<div>
        <ul>
            <li> hello ${name}</li>
        </ul>
    </div>`
}
getComponent(Main).kiwiSelector('body')

