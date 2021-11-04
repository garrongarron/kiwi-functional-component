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
        <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
      </div>
    </div>
  </div>`
}