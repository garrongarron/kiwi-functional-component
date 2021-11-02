// database
const callbackContainer = Symbol('callbackContainer')
const database = Symbol('database')
const state = {
    get items() {
        return [...this[database]]
    },
    set items(array) {
        this[database] = array
        this[callbackContainer].forEach(c => c())
    },
    addCallback: function (callback) {
        this[callbackContainer].push(callback)
    }
}
state[callbackContainer] = []
state[database] = []

// list
function TodoList() {
    let [items, setImtems] = this.useState([])
    this.beforeAppendChild = () =>{
        state.addCallback(() => {
            setImtems(state.items)
        })
    }
    return `
    <ul>
        ${items.map(item => (`<li>${item}</li>`))}
    </ul>`
}

// buton
function button() {
    let [items, setImtems] = this.useState([])
    this.beforeAppendChild = () =>{
        state.addCallback(() => {
            setImtems(state.items)
        })
    }
    return `<button >Add #${items.length + 1}</button>`
}

// layout
export default function Todo() {
    this.enableSubComponents([TodoList, button])
    this.handleChange = function (e) {
        e.preventDefault()
        state.items = state.items.concat(
            e.target.querySelector('input').value
        )
        e.target.querySelector('input').value = ''
    }
    this.enableEvents(['click', 'submit'])
    return `<div>
    <h3>TODO</h3>
    <TodoList></TodoList>
    <form submit="handleChange" >
        <label for="new-todo">What needs to be done?</label>
        <input id="new-todo" value="">
        <button></button>
    </form>
</div>`
}