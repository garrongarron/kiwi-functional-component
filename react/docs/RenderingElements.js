import DisplayCode from "../livecode/DisplayCode.js"

export default function RenderingElements(){
    this.beforeAppendChild = async (parentNode) => {
      Prism.highlightAllUnder(parentNode)
    }
    this.helloMessage = () =>`import getComponent from '../js/FunctionalComponent.js';

    function HelloMessage({ prop = "Taylor" }) {
        return \`<div>
            Hello $\{prop}
        </div>\`
    }
    
    let root = getComponent(HelloMessage)
    root.kiwiSelector('body') `

    this.kiwiSekector = () => `let root = getComponent(HelloMessage)
root.kiwiSelector('body') 
// or
getComponent(HelloMessage).kiwiSelector('body') `

    this.enableSubComponents({DisplayCode})
    return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Rendering Elements
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Rendering an Element into the DOM</h3>
      <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

        <DisplayCode full="true" id="hello-message" content="helloMessage"></DisplayCode>
      <p>Kiwi JS allows you create any regular function as a component, just using the wrapper <strong>getComponent()</strong> .</p>
      <hr>
      <h2>Component Root</h2>
      <p>That first component will be able to select from the <strong>document</strong> any node Element as a container using the method <strong>kiwiSelector()</strong> and using as parameter any <strong>css selector</strong>.</p>
      <DisplayCode full="true" id="kiwiSekector" content="kiwiSekector"></DisplayCode>

      <h2>Updating the Rendered Element</h2>
      <p>That first component will be able to select from the <strong>document</strong> any node Element as a container using the method <strong>kiwiSelector()</strong> and using as parameter any <strong>css selector</strong>.</p>
      <DisplayCode full="true" ></DisplayCode>
      
      
  </div>`
}