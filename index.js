import getComponent from './js/FunctionalComponent.js';

let m = 0
function useFriendStatus(n) {
    this.runAsHook()
    const [isOnline, setIsOnline] = this.useState(111);//zzz
    this.useEffect(() => {
        m = setInterval(() => {
            setIsOnline(new Date().getSeconds());
        }, 1000);
        return () => {
            clearInterval(m)
        };
    }, [n]);
    return isOnline
}
let n = 5
let hook  = getComponent(useFriendStatus)
function HelloMessage({ prop = "Taylor" }) {
    this.useEffect(() => {
        console.log(123456789, 'just once', this);
    }, []);
    let isOnline = hook.constructor(n)
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