// list
function TodoList({ list }) {
    let [items, setItems] = this.useState(list.items)
    this.beforeAppendChild = () => {//runs only once
        list.subscribe(() => {
            setItems(list.items)
        })
    }
    return `
    <ul>
        ${items.map(item => `<li>${item}</li>`)}
    </ul>`
}

// buton
function button({ list }) {
    let [items, setItems] = this.useState(list.items)
    this.beforeAppendChild = () => {//runs only once
        list.subscribe(() => {
            setItems(list.items)
        })
    }
    return `<button >Add #${items.length + 1}</button>`
}

// layout
export default function Todo() {
    this.enableSubComponents([TodoList, button])
    const [list, setList, array] = this.arrayDispatcher(['default value'])
    this.handleChange = function (e) {
        array.push(e.target.querySelector('input').value)
        setList(array)
        e.target.querySelector('input').value = ''
        e.preventDefault()
    }
    this.enableEvents(['submit'])
    this.list = () => list
    return `<div>
    <h3>TODO</h3>
    <TodoList list="list"></TodoList>
    <form submit="handleChange" >
        <label for="new-todo">What needs to be done?</label>
        <input id="new-todo" value="">
        <button list="list"></button>
    </form>
</div>`
}