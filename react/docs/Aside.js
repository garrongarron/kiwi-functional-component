import eventBus from "../../src/basic/EventBus.js"

export default function Aside(){
  let list = 'HelloWorld IntroducingTemplateLiterals RenderingElements ComponentsAndProps StateAndLifecycle HandlingEvents ConditionalRendering '+
  'ListAndKeys Forms LiftingStateUp CompositionVsInheritance ThinkingInReact'
  list = list.split(' ')
    this.goto = (e) =>{
      eventBus.dispatch('Docs-page',e.target.getAttribute('index')*1)
      e.preventDefault()
    }
    this.enableEvents(['click'])
    return `<div class="col-md-4">
    <div class="position-sticky" style="top: 4rem; padding-bottom: 4rem"> 
      <div class="p-4">
        <h4 class="fst-italic">Main concepts</h4>
        <ol class="list-unstyled mb-0">
          ${list.map((link, index)=>`<li><a href="#"  click="goto" index="${index}">${link}</a></li>`)}
        </ol>
      </div>

      <div class="p-4 mb-8 bg-dark rounded text-light" >
        <h4 class="fst-italic">About</h4>
        <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
      </div>
    </div>
  </div>`
}