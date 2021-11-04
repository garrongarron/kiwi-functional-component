import getComponent from "../../js/FunctionalComponent.js"
import DisplayCode from "./DisplayCode.js"
import Todo from "./Todo.js"

export default function AnApplication(){
    let [items, setItems] = this.useState(true)
    this.beforeAppendChild = async (parentNode) => {
        this.codeContainer = parentNode.querySelector('pre')
        let code = parentNode.querySelector('code')
        let data = await fetch('react/livecode/Todo.js')
        data = await data.text()
        code.textContent = data
        Prism.highlightAll();
        let component = getComponent(Todo)
        component.kiwiSelector('.todo-app')
        this.fullScreen = false
    }
    this.enableSubComponents({DisplayCode})
    return `
    <div class="album pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
                <!-- left -->
                <div class="col-lg-3">
                    <div class="">
                        <div class="card-body">
                            <h3 class="text-black fw-bold">An Application</h3>
                            <p class="card-text text-bold">Using <i>properies</i> and <i>state</i>, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-6">
                    <DisplayCode></DisplayCode>
                </div>
                <!-- demo 123-->
                <div class="col-lg-3 an-aplication"> 
                    <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                        <div class="card-header py-3 text-white bg-secondary ">
                            <h4 class="my-0 fw-normal">Result</h4>
                        </div>
                        <div class="card-body border-secondary todo-app">
                        </div>
                    </div>
                </div>
                <style>
                    .an-aplication input, 
                    .an-aplication button
                    {
                        margin-bottom: 10px;
                        border-radius: 5px;
                        border: 1 solid gray;
                    }
                </style>
            
            </div>
        </div>
      </div>
        `
}