import DisplayCode from "../livecode/DisplayCode.js"

export default function IntroducingTemplateLiterals() {
  this.beforeAppendChild =  (node, ) => {
    let parentNode = node.children[0]
    let loadSnippets = async (id, filename) =>{
      let code = parentNode.querySelector(`#${id} code`)
      let data = await fetch(`react/docs/snippets/${filename}.js`)
      data = await data.text()
      code.textContent = data
      Prism.highlightAll();
    }
    loadSnippets('literal','TemplateLiterals')
    loadSnippets('formater','FormatName')
    loadSnippets('malicious', 'PreventsInjectionAttacks')
    loadSnippets('stringify', 'Stringify')
  }
  this.enableSubComponents({DisplayCode})
  return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Introducing Template Literals
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Consider this functional component:</h3>
      <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

        <DisplayCode full="true" id="literal"></DisplayCode>
      <p>This tiny component shows <i>Hello Taylor</i> on screen.</p>
      <hr>
      <h2>Template Literals</h2>
      <p>It use a single string, and it is native in JavaScript. We recommend using it with Kiwi JS to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript.</p>
      <p>This string will became in HTML “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics concepts necessary to get you started.</p>
      
      <h3>Why Template Literals?</h3>

      <p>Kiwi JS does not need to over engineer adding more libraries like JSX. In fact, the rendering goes straight into HTML using the innerHTML property of the nodeElements from the DOM.</p>
      <p>Instead of artificially separating technologies by putting markup and logic in separate files, Kiwi JS separates concerns with loosely coupled units called “components” that contain both.</p>
      <p>With that out of the way, let’s get started!</p>

      <h3>Printing variables into the template literals</h3>
      <p>In the example below, we declare a variable called name and then use it inside template literals by wrapping it in a dollar sign plus curly braces:</p>
      <DisplayCode full="true" id="formater"></DisplayCode>

      <p>You can put any valid JavaScript expression inside the curly braces in template literals. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions and then they will by taken as strings.</p>
      
      <h3>Prevents Injection Attacks</h3>
      <p>If there is Javascript inside of the nodes it will not be rexecuted</p>
      <DisplayCode full="true" id="malicious"></DisplayCode>


      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <p>If you want to sent a JSON string you must to use single quotes to avoid conflicts with the double quotes from the JSON format.</p>   
      <DisplayCode full="true" id="stringify"></DisplayCode>
      <p>As you can see, we could serialize and deserialize an Object using single quotes into the value of the attribute of the node.</p>
      <p>Naturally, the deserialize object is not the same that was serialized, but in the following lessons we learn how to receive the same object  working with properties in a particular way.</p>

  </div>`
}