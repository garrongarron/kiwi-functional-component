import getComponent from "../../js/FunctionalComponent.js"
import DisplayCode from "./DisplayCode.js"
import State from "./State.js"

export default function AStatefulComponent(){
    this.beforeAppendChild = async (parentNode) => {
        let code = parentNode.querySelector('code')
        let data = await fetch('react/livecode/State.js')
        data = await data.text()
        code.textContent = data.replaceAll('// ', '').split('\n').filter((line, lineNumber)=>{
            return ![].includes(lineNumber)
        }).join('\n')
        // Prism.highlightAll();
        let component = getComponent(State )
        component.kiwiSelector('.a-stateful-component')
        
    }
    this.enableSubComponents({DisplayCode})
    return `
    <div class="album pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
                <!-- left -->
                <div class="col-lg-4">
                    <div class="">
                        <div class="card-body">
                            <h3 class="text-black fw-bold">A Stateful Component</h3>
                            <p class="card-text text-bold">In addition to taking input data (accessed via this.prop), a component can maintain internal <b>state</b> data (accessed via <b>this.useState()</b> method)</p>
                            <p class="card-text text-bold">When a component’s state data changes, the rendered markup will be updated by re-invoking <b>constructor()</b> method.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-6">
                    <DisplayCode></DisplayCode>
                </div>
                <!-- demo -->
                <div class="col-lg-2"> 
                    <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                        <div class="card-header py-3 text-white bg-secondary ">
                            <h4 class="my-0 fw-normal">Result</h4>
                        </div>
                        <div class="card-body border-secondary a-stateful-component">
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
        `
}