import getComponent from "../../js/FunctionalComponent.js"
import Todo from "./Todo.js"

export default function AnApplication(){
    this.beforeAppendChild = async (parentNode) => {
        let code = parentNode.querySelector('pre')
        let data = await fetch('b/livecode/Todo.js')
        data = await data.text()
        code.textContent = data
        let component = getComponent(Todo)
        component.kiwiSelector('.todo-app')
    }
    return `
    <div class="album pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
                <!-- left -->
                <div class="col-lg-3">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="text-black fw-bold">An Application</h3>
                            <p class="card-text text-bold">Using <i>properies</i> and <i>state</i>, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-6">
                    <div class="card mb-4 rounded-3 shadow-sm border-dark k-bg-4">
                        <div class="card-header py-3 text-white bg-dark border-dark">
                            <h4 class="my-0 fw-normal">Demo</h4>
                        </div>
                        <div class="card-body text-white">
                            <pre style="overflow-y:scroll; max-height:200px">
                                    1
                            </pre>
                        </div>
                    </div>
                </div>
                <!-- demo -->
                <div class="col-lg-3"> 
                    <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                        <div class="card-header py-3 text-white bg-secondary ">
                            <h4 class="my-0 fw-normal">Result</h4>
                        </div>
                        <div class="card-body border-secondary todo-app">
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
        `
}