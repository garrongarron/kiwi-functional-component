import getComponent from "../../js/FunctionalComponent.js"
import DisplayCode from "./DisplayCode.js"
import Remarkable from "./Remarkable.js"

export default function AComponentUsingExternalPlugins(){
    this.beforeAppendChild = async (parentNode) => {
        let code = parentNode.querySelector('code')
        let data = await fetch('react/livecode/Remarkable.js')
        data = await data.text()
        code.textContent = data
        Prism.highlightAll();
        let component = getComponent(Remarkable)
        component.kiwiSelector('.demo-external-library')
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
                            <h3 class="text-black fw-bold">A Component Using External Plugins</h3>
                            <p class="card-text text-bold">Kiwi JS really allows you to interface with other libraries and frameworks. This example uses <b>remarkable</b>, an external Markdown library, to convert the &lt;textarea&gt;’s value in real time.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-6">
                    <DisplayCode></DisplayCode>
                </div>
                <!-- demo -->
                <div class="col-lg-3"> 
                    <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                        <div class="card-header py-3 text-white bg-secondary ">
                            <h4 class="my-0 fw-normal">Result</h4>
                        </div>
                        <div class="card-body border-secondary demo-external-library">
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
        `
}