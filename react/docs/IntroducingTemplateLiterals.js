import DisplayCode from "../livecode/DisplayCode.js"

export default function IntroducingTemplateLiterals(){
    this.beforeAppendChild = async (parentNode) => {
        let code = parentNode.querySelectorAll('code')
        let data = await fetch('react/livecode/HelloMessage.js')
        data = await data.text()
        code.forEach(code=>{
          code.textContent = data
        })
        Prism.highlightAll();
    }
    this.enableSubComponents([DisplayCode])
    return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Introducing Template Literals
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Consider this variable declaration:</h3>
      <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

        <DisplayCode></DisplayCode>
      <p>This funny tag syntax is a string similar to HTML sintax.</p>
      <hr>
      <h2>Template Literals</h2>
      <p>It is a single string, and it is native in JavaScript. We recommend using it with React to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript.</p>
      <p>This string will became in HTML “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basicsconcepts necessary to get you started.</p>
      
      <h3>Why Template Literals?</h3>

      <p>React do not need to over engineer ading more libraries like JSX. In fact, the rendering goes streightly into HTML usint the innerHTML property of the nodeElements from the DOM.</p>
      <p>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.</p>
      <p>With that out of the way, let’s get started!</p>

      <h3>Printing variables into the template literals</h3>
      <p>In the example below, we declare a variable called name and then use it inside template literals by wrapping it in a dollar sign plus curly braces:</p>
      <DisplayCode></DisplayCode>

      <p>You can put any valid JavaScript expression inside the curly braces in template literals. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.</p>
      <p>In the example below, we embed the result of calling a JavaScript function, formatName(user), into an (h1) element.</p>
      <DisplayCode></DisplayCode>


      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>If you want to sent a JSON string you must to use ingle quotes to avoid conficts with the double quottes from the JSON format.</em>   
      
  </div>`
}