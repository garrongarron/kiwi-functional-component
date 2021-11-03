import eventBus from "../src/basic/EventBus.js"

export default function Section() {
  this.goto = (e) => {
    eventBus.dispatch('General-page', 1)
    e.preventDefault()
  }
  this.enableEvents('click')
  return `<section class="container-fluid py-5 text-center container-fluid k-bg-4" >
      <div class="row py-lg-5" >
        <div class="col-lg-6 col-md-8 mx-auto" style="padding-top: 56px">
          <h1 class="fw-bolder  k-color-2">Kiwi JS</h1>
          <p class="lead text-light">A killer  JavaScript library for building user interfaces<br/>
            <b class="k-color-1">Faster</b>, 
            <b class="k-color-1">smaller</b>, 
            <b class="k-color-1">native</b>. No npm required. <br> It's not hype, it is JavaScript</p>
            <a href="#" class="btn my-2 py-2 k-bg-2" click="goto">Get Starter</a>
            <a href="#" class="btn my-2 py-2 k-border-2 k-color-2 ms-4" click="goto">Take a tutorial</a>
          </p>
        </div>
      </div>
    </section>`
}