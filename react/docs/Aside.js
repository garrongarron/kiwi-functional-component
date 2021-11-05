import eventBus from "../../src/basic/EventBus.js"
import list from "./DocumentationList.js"

export default function Aside() {
  this.goto = (e) => {
    eventBus.dispatch('Docs-page', e.target.getAttribute('index'))
    e.preventDefault()

    e.target.parentNode.parentNode.querySelectorAll('a').forEach(a => {
      a.classList.remove('k-color-2')
      a.classList.add('k-color-3')
    })
    e.currentTarget.classList.remove('k-color-3')
    e.currentTarget.classList.add('k-color-2')
  }
  this.enableEvents(['click'])

  return `<div class="col-md-4">
    <div class="position-sticky" style="top: 4rem; padding-bottom: 4rem"> 
      <div class="p-4">
        <h4 class="fst-italic">Main concepts</h4>
        <ol class="list-group mb-0">
          ${Object.keys(list).map((key, index) => `<li><a href="#"  class="k-color-3" click="goto" index="${key}">${list[key]}</a></li>`)}
        </ol>
      </div>

      <div class="p-4 mb-8 bg-dark rounded text-light" >
        <h4 class="fst-italic">About</h4>
        <p class="mb-0">This library was made after research the React library features and pretends reduce the boilerplate and improve the developer experience. It is native, small, and fast... There is no lighter at the moment but the "string-highlight
" extension by Jenkey2011 could help to highlight the Template Literals in Visual Studio Code.</p>
        <p>Download the library from <a href="https://raw.githubusercontent.com/garrongarron/kiwi-functional-component/main/js/FunctionalComponent.js" target="_blank" rel="noopener noreferrer">here</a></p>
      </div>
    </div>
  </div>`
}