import DisplayCode from "../livecode/DisplayCode.js"

export default function HandlingEvents() {
  this.beforeAppendChild = async (parent) => {
    let parentNode = parent.childNodes[0];
    {
      let code = parentNode.querySelector('#a code')
      let data = await fetch('react/livecode/Todo.js')
      data = await data.text()
      code.textContent = data
    }
    {
      let code = parentNode.querySelector('#b code')
      let data = await fetch('react/livecode/Remarkable.js')
      data = await data.text()
      code.textContent = data
    }
    Prism.highlightAll();
  }
  this.enableSubComponents({ DisplayCode })
  return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
      Handling Events
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">How to handle event in Kiwi JS:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

      <DisplayCode filename="Todo" id="a" full="false"></DisplayCode>

      <p>As you can see, this example is using <strong>this.enableEvents(['submit'])</strong> to bind the <strong>submit</strong> event to the <strong>this.handleChange</strong> method.</p>
      <p>In the example below, you will see that the <strong>this.enableEvents(['keyup'])</strong> is used to bind the <strong>keyup</strong> event to the <strong>this.handleChange</strong> method. </p>
      
      <DisplayCode filename="Remarkable" id="b" full="false"></DisplayCode>
  </div>`
}