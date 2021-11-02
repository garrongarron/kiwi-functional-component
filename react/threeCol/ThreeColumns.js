import ComponentBased from "./ComponentBased.js"
import Declarative from "./Declarative.js"
import LearnOnce from "./LearnOnce.js"

export default function ThreeColumns() {
    
    this.enableSubComponents([Declarative, ComponentBased, LearnOnce])
    return `
<div class="album py-5 ">
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-md-3 g-3">
            <Declarative></Declarative>
            <ComponentBased></ComponentBased>
            <LearnOnce></LearnOnce>
        </div>
    </div>
  </div>
    `
}