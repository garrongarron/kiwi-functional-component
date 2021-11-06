import getComponent from './js/FunctionalComponent.js';

function SubComponent({name}){
    this.useEffect(() => {
        console.log(n);
    }, []) // [n]
    return `<li> hello ${name + ' ' + (n)}</li>`
}

let n = 0

function Main() {
    this.enableSubComponents({SubComponent})
    let [name, setName] = this.useState("John")    
    setTimeout(() => {
        n++
        setName(name)
    }, 1000);
    return `<div>
        <ul>
            <SubComponent name=${name}>
        </ul>
    </div>`
}

getComponent(Main).kiwiSelector('body')