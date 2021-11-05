import eventBus from "../src/basic/EventBus.js"
import Logo from "./Logo.js"

export default function Header() {
  this.goto = (e) => {
    eventBus.dispatch('General-page', 0)
    e.preventDefault()
  }
  this.enableEvents('click')
  this.enableSubComponents({Logo})
  return `
<header class="fixed-top">
  <div class="bg-dark collapse" id="navbarHeader" style="">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">What is this?</h4>
          <p class="text-muted"> This is the official web site of the Kiwi JS library (react clone, but better).</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Follow on Twitter (pending)</a></li>
            <li><a href="#" class="text-white">Like on Facebook (pending)</a></li>
            <li><a href="#" class="text-white">Email me (pending)</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#"  click="goto" class="navbar-brand d-flex align-items-center k-color-2">
        <Logo></Logo>
        <strong class="ps-2 k-color-2">Kiwi JS</strong>
      </a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
    `
}