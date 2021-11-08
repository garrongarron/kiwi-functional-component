import DisplayCode from "../livecode/DisplayCode.js"

export default function ThinkingInReact() {
  this.beforeAppendChild = async (parentNode) => {
    let code = parentNode.querySelector('#reducer code')
    let data = await fetch('react/livecode/Reducer.js')
    data = await data.text()
    code.textContent = data
    Prism.highlightAll();
  }
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


  this.useEffect2 = () => `import getComponent from &#39;./js/FunctionalComponent.js&#39;;

function SubComponent({name}){
this.useEffect(() =&gt; { //side effect
  document.title = \`You clicked $\{count} times\`;
}, []) 
return \`&lt;li&gt; hello $\{name + &#39; &#39; + (n)}&lt;/li&gt;\`

getComponent(FragmentedUpdate).kiwiSelector(&#39;body&#39;)`


  this.enableSubComponents({ DisplayCode })
  return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Hooks
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">UseState was a Hook:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>
      <p>The most common hook is the <strong>this.useState()</strong> method. As you know, we were using that hook in the previous examples. </p>

        <DisplayCode content="fragmentedUpdate" full="true"></DisplayCode>
      <p>There is a goon explanation of useState hook in the previous lesson.</p>
      <hr>
      <h2>UseEffect</h2>
      <p>The Effect Hook lets you perform side effects in function components.</p>
      <DisplayCode content="useEffect2" full="true"></DisplayCode>
      <p>We set the document title to a custom message. As a second parameter, it is expected receive the dependencies to execute the callbak sent.</p>
      
      <h3>UseReducer</h3>

      <p>This is a fractional implementation of the observer pattern design, where there are state changes when a particular event named "action" happens.</p>
      <DisplayCode id="reducer" full="true"></DisplayCode>
      <p> There is not required import any extra module to use these hooks, because they are built-in by default.</p>

</div>`
}