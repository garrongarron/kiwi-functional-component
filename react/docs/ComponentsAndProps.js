import DisplayCode from "../livecode/DisplayCode.js"

export default function ComponentsAndProps() {
  this.beforeAppendChild = async (parentNode) => {
    Prism.highlightAllUnder(parentNode)
  }

  this.functionComponent = () => `import getComponent from &#39;./js/FunctionalComponent.js&#39;;

  function Welcome(props) {
      return \`&lt;h1&gt;Hello, $\{props.name}&lt;/h1&gt;\`;
  }
  
  getComponent(Welcome).kiwiSelector(&#39;body&#39;)`

  this.composing = () => `import getComponent from &#39;./js/FunctionalComponent.js&#39;;
function Welcome(props) {
    return \`&lt;h1&gt;Hello, $\{props.name}&lt;/h1&gt;\`;
}
function Main(){
    this.enableSubComponents({Welcome})
    return \`&lt;div&gt;
    &lt;Welcome name=&quot;Sara&quot; /&gt;
    &lt;Welcome name=&quot;Cahal&quot; /&gt;
    &lt;Welcome name=&quot;Edite&quot; /&gt;
    &lt;/div&gt;\`
}
getComponent(Main).kiwiSelector(&#39;body&#39;)`


  this.div = () => `function Main(){
  return \`&lt;div /&gt;\`
}`

  this.customcomponent = () => `function Main(){
  this.enableSubComponents({Welcome})
  return \`&lt;Welcome name=&quot;Sara&quot; /&gt;\`
}`

  this.pure = () => `function sum(a, b) {
  return a + b;
}`
  this.impure = () => `function withdraw(account, amount) {
  account.total -= amount;
}`

  this.properties = () => `import getComponent from &#39;./js/FunctionalComponent.js&#39;;

function Calculator({ name = &#39;Mate&#39;, calc }) {
    return \`&lt;div&gt;
        &lt;h1&gt;Hi, $\{name}!&lt;/h1&gt; 
        &lt;div&gt; 1 + 2 = $\{calc &amp;&amp; calc.sum(1, 2) || &#39;?&#39;}&lt;/div&gt;
        &lt;div&gt; 3 + 4 = $\{(calc) ? calc.sum(3, 4) : &#39;?&#39;}&lt;/div&gt;
    &lt;/div&gt;\`;
}
function Main() {
    this.enableSubComponents({ Calculator })
    this.tool = () =&gt; {
        return {
            sum: (a, b) =&gt; a + b
        }
    }
    return \`&lt;div&gt;
        &lt;Calculator name=&quot;Mike&quot; /&gt;
        &lt;Calculator calc=&quot;tool&quot; /&gt;
    &lt;/div&gt;\`
}
getComponent(Main).kiwiSelector(&#39;body&#39;)`
  
  this.methodAsProperties = () => `function Main() {
    this.enableSubComponents({ Calculator })
    this.nameProvider = () =&gt; &#39;Hello&#39; //Correct
    this.nameProvider = function(){ return &#39;Hello&#39; } //Correct
    this.nameProvider(){ return &#39;Hello&#39; } // < ==== Wrong
    return \`&lt;div&gt;
        &lt;Calculator name=&quot;nameProvider&quot; /&gt;
        &lt;Calculator name=&quot;nameProvider&quot; /&gt;
        &lt;Calculator calc=&quot;objectSender&quot; /&gt;
    &lt;/div&gt;\`
}`

  this.enableSubComponents({ DisplayCode })
  return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Components and Props
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Component represent HTMLElement:</h3> 
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer"> @samugarrondev</a></p>
      <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.</p>
      <p>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return a string describing what should appear on the screen.<p>
      <hr>
      <h2>Function Components</h2>
      <p>The simplest way to define a component is to write a JavaScript function:</p>
      <DisplayCode full="true" id="fragemted-update" content="functionComponent" ></DisplayCode>
      
      <p>This function is a valid Kiwi JS component because it accepts a single “props” (which stands for properties) object argument with data and returns a Kiwi JS element. We call such components “function components” because they are literally JavaScript functions.</p>
      
      <hr/>
      <h3>Rendering a Component</h3>
      <p>Previously, we only encountered Kiwi JS elements that represent DOM tags: (div, or h1)</p>
      <DisplayCode full="true" id="composing" content="div" ></DisplayCode>
      <p>However, elements can also represent user-defined sub-components.</p>
      <DisplayCode full="true" id="composing" content="customcomponent" ></DisplayCode>
      
      <hr/>
      <h3>Composing Components</h3>
      <p>When Kiwi JS sees an element representing a user-defined component and it is enabed with the <strong>this.enableSubComponents({Welcome})</strong>, it take the attributes  to this component as a variables to be sent to that sub-component. We call those attributes “props”..</p>
      <p>Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in Kiwi JS apps, all those are commonly expressed as components.<p>
      <p>For example, we can create an App component that renders Welcome many times:</p>
      <DisplayCode full="true" id="composing" content="composing" ></DisplayCode>

      



      <h3>Props are Read-Only? (not really)</h3>
      <p>Whether you declare a component as a function, it must never modify its own props. Consider this sum function:</p>
      <DisplayCode content="pure"></DisplayCode>
      <p>Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.</p>
      <p>In contrast, this function is impure because it changes its own input:</p>
      
      
      <DisplayCode content="impure"></DisplayCode>
      <p>Kisi JS is really flexible you can also send object as a props.</p>


      <h3>Methods as properties</h3>
      <p>In the following example you will see how <strong>custom method</strong> is send as a prop to a sub-component.</p>
      <DisplayCode full="true" content="properties"></DisplayCode>
      <p>You can also use destructuring assignment syntax to handle the props in a better way.</p>

      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>Every custom method have to be written as a property.</em>   
      
      <br />
      <p>Check the following example.</p>
      <DisplayCode full="true" content="methodAsProperties"></DisplayCode>
      
      
  </div>`
}