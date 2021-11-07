import getComponent from './js/FunctionalComponent.js';

// function useFriendStatus(n) {
//     this.runAsHook()
//     const [isOnline, setIsOnline] = this.useState(111);
//     this.useEffect(() => {
//         setTimeout(() => {
//             setIsOnline(n);
//         }, 1000);
//     }, [n]);
//     console.log('execution useFriendStatus (', isOnline, ")", `id:${this.id}`, this.state, n);
//     return isOnline
// }
let n = 5
// let hook  = getComponent(useFriendStatus)
function HelloMessage({ prop = "Taylor" }) {
    this.useEffect(() => {
        console.log(123456789, 'just once', this);
    }, []);
    let isOnline = 1 //hook.constructor(n)
    let [items, setItems] = this.useState(true)
    this.enableEvents(['click'])
    this.toggle = () => {
        n++
        setItems(!items)
    }
    return `<div>
        Hello ${prop}
        <button click="toggle">Click me ${items} ${isOnline} </button>
    </div>`
}


let root = getComponent(HelloMessage)
root.kiwiSelector('body')