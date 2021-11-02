import getComponent from './js/FunctionalComponent.js';

function Hijo({n}){
    this.beforeAppendChild = () =>{
        //inicialize custom properties inside of this method
        
        this.n = setInterval(() => {
            console.log(new Date().getTime());    
        }, 1000);
        // any time this node component
        // get out from the dom
        return () => {
            clearInterval(this.n);
            console.log('out from the dom '+n)
            // this.
        }
    }
    return `<button >Add #1</button>`
}

function HelloMessage({ prop = "Taylor" }) {
    let [items, setItems] = this.useState(true)
    this.enableSubComponents([Hijo])
    this.enableEvents(['click'])
    this.toggle = () =>{
        setItems(!items)
    }
    return `<div>
        Hello ${prop}
        <button click="toggle">Click me</button>
        ${(items)?`<Hijo n="1"></Hijo>`:''}
    </div>`
}


let root = getComponent(HelloMessage)
root.kiwiSelector('body')  