import '../../js/Remarcable.js'
// stateHander
const callbackContainer = Symbol('callbackContainer')
const state = {
    str:'',
    get text() {
        return this.str
    },
    set text(str) {
        this.str = str
        this[callbackContainer].forEach(c => c())
    },
    addCallback: function (callback) {
        this[callbackContainer].push(callback)
    }
}
state[callbackContainer] = []


function Output(){
    let [text, setText] = this.useState('Hello, **world**!')
    this.beforeAppendChild = () =>{
        state.addCallback(() => {
            setText(state.text)
        })
    }
    var md = new remarkable.Remarkable();
    let output = md.render(text) 
    return `
<div class="content">
    ${output}
</div>`
}
export default function Remarkable() {
    this.enableEvents(['keyup'])
    this.handleChange = (e) => {
        state.text = e.target.value
    }
    this.enableSubComponents([Output])
    return `
<div class="MarkdownEditor">
    <h3>Input</h3>
    <label for="markdown-content">
        Enter some markdown
    </label><br/>
    <textarea  id="markdown-content" 
    keyup="handleChange">Hello, **world**!</textarea>
    <h3>Output</h3>
    <Output></Output>
</div>`
}