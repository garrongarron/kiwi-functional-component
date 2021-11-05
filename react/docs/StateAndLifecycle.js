import DisplayCode from "../livecode/DisplayCode.js"

export default function StateAndLifecycle(){
    this.beforeAppendChild = async (parentNode) => {
        setTimeout(() => {
          Prism.highlightAll();
        }, 10);
    }
    this.enableSubComponents({DisplayCode})

    this.useStateExample = () => `let [counter, setCounter] = this.useState(0)`

    this.useStateExample2 = () => `export default function State() {
      let value = JSON.parse(localStorage.getItem(&#39;counter&#39;) || &#39;0&#39;)
      let [counter, setCounter] = this.useState(value)
      this.doSomething = () =&gt; {
          localStorage.setItem(&#39;counter&#39;, counter + 1)
          setCounter(counter + 1)
      }
      this.enableEvents(&#39;click&#39;) // we will see this  in the next section
      return \`&lt;div click=&quot;doSomething&quot;&gt;$\{counter}&lt;/div&gt;\`
  }`

    return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    State And Lifecycle
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">State is not touched.</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>
      <p>In Kiwi Js the we can not acces straing to the state of the components. We can handle it by a a special method called <strong>this.useState()</strong>.</p>
      <p>This method return an array with thwo elements. The first one is a shallow copy of one element of the state and se second element is a setter method.</p>
        <DisplayCode content="useStateExample"></DisplayCode>
      <p>The method receive a defaul value of the state element you want to handle withc is use only the first time the component is run.</p>
      <p>After the first run the value of that state element is changing as much as to want using the setter method.</p>
      <p>The destructuring javascript sintax is  really useful to work with.</p>
      <p>You can change the value of the shallow copy as you want and there is not restriction to do that.</p>
      <p>You must to know that the setter method has a side effect witch is reexecute the function component to re render the component.</p>
      <hr />
      
      <h2>The UseState Method</h2>
      <p>It is not needed import any special module to work with <strong>this.useState()</strong>  method.</p>
      <p>The best way to use the <strong>this.useState()</strong>  method is combining with local storage functionality.</p>
      <DisplayCode full="true" content="useStateExample2"></DisplayCode>
      <p>You will find a cool example in the landing page of this website in the TodoList Project.</p>
      <p>That example is using  some other special method tha we will see in the following lesson such as <strong> this.beforeAppendChild</strong>  method, <strong> this.arrayDispatcher</strong>  method, and <strong> this.enableEvents</strong>  method.</p>
      
  </div>`
}