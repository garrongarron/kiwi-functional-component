function Output({ variable }) {
    let [text, setText] = this.useState(variable.value)
    this.beforeAppendChild = () => {
        variable.subscribe(() => {
            setText(variable.value)
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
    const [variable, setVariable, value] =
        this.variableDispatcher('Hello, **world**!')
    this.handleChange = (e) => {
        setVariable(e.target.value)
    }
    this.enableSubComponents({Output})
    this.variableProvider = () => variable
    return `
        <div class="MarkdownEditor">
            <h3>Input</h3>
            <label for="markdown-content">
                Enter some markdown
            </label><br/>
            <textarea  id="markdown-content" 
                keyup="handleChange">${value}</textarea>
            <h3>Output</h3>
            <Output variable="variableProvider"></Output>
        </div>`
}