import eventBus from "../src/basic/EventBus.js"

export default function Pricing(){
  this.goto = (e) => {
    eventBus.dispatch('General-page', 1)
    e.preventDefault()
  }
  this.enableEvents('click')
    return `<div class="container-fluid py-5 text-center container-fluid k-bg-4">
    <a href="#" class="btn my-2 py-2 k-bg-2" click="goto">Get Starter</a>
    <a href="#" class="btn my-2 py-2 k-border-2 k-color-2 ms-4" click="goto">Take a tutorial</a>
  </div>`
}