import getComponent from './js/FunctionalComponent.js';
function Main() {
    const [variable, setVariable, value] = this.variableDispatcher('Default value')
    variable.subscribe(
        (newValue) => console.log(newValue) // New value 
    ) 
    console.log(variable.value) // Default value
    console.log(value) // Default value 
    setVariable('New value')
    console.log(variable.value) //  New value 
    console.log(value) // Default value <= Not updated
    return `<div>
        Working with variableDispatcher
    </div>`
}
getComponent(Main).kiwiSelector('body')

