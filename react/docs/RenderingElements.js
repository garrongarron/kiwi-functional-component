import DisplayCode from "../livecode/DisplayCode.js"

export default function RenderingElements() {
  this.beforeAppendChild = async (parentNode) => {
    Prism.highlightAllUnder(parentNode)
  }
  this.helloMessage = () => `import getComponent from &#39;../js/FunctionalComponent.js&#39;;

function HelloMessage({ prop = &quot;Taylor&quot; }) {
    return \`&lt;div&gt;
        Hello $\{prop}
    &lt;/div&gt;\`
}

let root = getComponent(HelloMessage)
root.kiwiSelector(&#39;body&#39;)  `

  this.kiwiSekector = () => `let root = getComponent(HelloMessage)
root.kiwiSelector('body') 
// or
getComponent(HelloMessage).kiwiSelector('body') `

  this.fragmentedUpdate = () => `import getComponent from &#39;./js/FunctionalComponent.js&#39;;

function FragmentedUpdate() {
    let [counter, setCounter] = this.useState(0)
    this.tick = () =&gt; {
        setCounter(counter+1)
    }
    setTimeout(this.tick, 1000)
    return \`&lt;main&gt;
        &lt;h1&gt;Counter&lt;/h1&gt;
        &lt;ul&gt;&lt;li&gt;It is $\{counter}.&lt;/li&gt;&lt;/ul&gt;
        &lt;/main&gt;\`
}

getComponent(FragmentedUpdate).kiwiSelector(&#39;body&#39;)`

  this.enableSubComponents({ DisplayCode })
  return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Rendering Elements
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Rendering an Element into the DOM</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

        <DisplayCode full="true" id="hello-message" content="helloMessage"></DisplayCode>
      <p>Kiwi JS allows you create any regular function as a component, just using the wrapper <strong>getComponent()</strong> .</p>
      <hr>
      <h2>Component Root</h2>
      <p>That first component will be able to select from the <strong>document</strong> any node Element as a container using the method <strong>kiwiSelector()</strong> and using as parameter any <strong>css selector</strong>.</p>
      <DisplayCode full="true" id="kiwiSekector" content="kiwiSekector"></DisplayCode>

      <h2>Updating the Rendered Element</h2>
      <p>As you can explore in the developer tools, Kiwi JS components only update the component element that is different, keeping the component's content static without re-rendering.</p>
      <DisplayCode full="true" id="fragemted-update" content="fragmentedUpdate" ></DisplayCode>
      
      
  </div>`
}