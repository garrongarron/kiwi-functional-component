import DisplayCode from "../livecode/DisplayCode.js"

export default function HelloWorld() {
  this.beforeAppendChild = async (parentNode) => {
    let node = parentNode.children[0]

    {
      let code = node.querySelector('#hello-world code')
      let data = await fetch('react/docs/snippets/HelloWorld.js')
      data = await data.text()
      code.textContent = data
      Prism.highlightAll();
    }
    {
      let code = node.querySelector('#index code')
      let data = await fetch('react/docs/snippets/Model.html.txt')
      data = await data.text()
      code.textContent = data
      Prism.highlightAll();
    }
  }

  this.enableSubComponents({ DisplayCode })
  return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Hello World
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">The smallest Kiwi JS example</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>
      <p>The fist step to try this library is create a specific foolder for the project. 
        There create the following <strong>index.html</strong> file.</p>
        <DisplayCode filename="index.html" full="true" id="index" type="html"  ></DisplayCode>
      <p> Then you can create a <strong>js</strong> sub-folder to place the <strong>FunctionalComponent.js</strong> library that you can download from <a href="#">here</a>. </p>
      <DisplayCode filename="Folder structure" full="true" id="index" type="bash" content="${`index.html
js/FunctionalComponent.js
src/HelloWorld.js`}" ></DisplayCode>

      <p>After that, write the following EcmaScript 6 module named <strong>HelloWorld.js</strong> into a <strong>src</strong> sub-folder.</p>
        <DisplayCode filename="src/HelloWorld.js" full="true" id="hello-world" type="javascript"></DisplayCode>
      <p>It displays a heading saying “Hello, World!” on the page.</p>
        
      <hr>
      <h2>How to Read This Guide</h2>
      <p>In this guide, we will examine the building blocks of Kiwi JS apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.</p>
      <blockquote class="blockquote">
        <p>Tip</p>
      </blockquote>
      <p>This guide is designed for people who prefer learning concepts step by step. If you prefer to learn by doing, check out our practical tutorial. You might find this guide and the tutorial complementary to each other.</p>
      <p>This is the first chapter in a step-by-step guide about main Kiwi JS concepts. You can find a list of all its chapters in the navigation sidebar.</p>
      <p>Every chapter in this guide builds on the knowledge introduced in earlier chapters. <b>You can learn most of Kiwi JS by reading the “Main Concepts” guide chapters in the order they appear in the sidebar.</b> For example, “Introducing TemplateLiterals” is the next chapter after this one.</p>

      <h3>Knowledge Level Assumptions</h3>
      <p>Kiwi JS is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language. <b>If you don’t feel very confident, we recommend going through a JavaScript tutorial to check your knowledge level</b> and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour, but as a result you won’t have to feel like you’re learning both Kiwi JS and JavaScript at the same time.</p>
      
      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>This guide occasionally uses some newer JavaScript syntax in the examples. 
        <!-- If you haven’t worked with JavaScript in the last few years, these three points should get you most of the way. -->
      </em>
      <br />
      <br />

      <h2>Let’s Get Started!</h2>
      <p>Keep learning using the right side bar with different topics if you ar in desctop, if you are in mobile you can go to the bottom part to si the list of links.</p>
      <!-- <p>Keep scrolling down, and you’ll find the link to the next chapter of this guide right before the website footer.</p> -->
      
  </div>`
}