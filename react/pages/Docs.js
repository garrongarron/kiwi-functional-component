import eventBus from "../../src/basic/EventBus.js";
import Aside from "../docs/Aside.js";
import ComponentsAndProps from "../docs/ComponentsAndProps.js";
import CompositionVsInheritance from "../docs/CompositionVsInheritance.js";
import ConditionalRendering from "../docs/ConditionalRendering.js";
import documentationList from "../docs/DocumentationList.js";
import Forms from "../docs/Forms.js";
import HandlingEvents from "../docs/HandlingEvents.js";
import HelloWorld from "../docs/HelloWorld.js";
import IntroducingTemplateLiterals from "../docs/IntroducingTemplateLiterals.js";
import LiftingStateUp from "../docs/LiftingStateUp.js";
import ListAndKeys from "../docs/ListAndKeys.js";
import RenderingElements from "../docs/RenderingElements.js";
import StateAndLifecycle from "../docs/StateAndLifecycle.js";
import ThinkingInReact from "../docs/ThinkingInReact.js";
import CustomObservers from "../docs/CustomObservers.js";
import Hooks from "../docs/Hooks.js";


function Switcher(){
    this.enableSubComponents({HelloWorld, IntroducingTemplateLiterals, RenderingElements, ComponentsAndProps,
        StateAndLifecycle, HandlingEvents, ConditionalRendering, ListAndKeys, Forms, LiftingStateUp, CompositionVsInheritance, ThinkingInReact
    ,CustomObservers, Hooks})
        
    let pages = {}
    Object.keys(documentationList).forEach(key => {
        pages[key] = `<${key}></${key}>`
    })
    let value = localStorage.getItem('concept') || 'HelloWorld'
    const [pageIndex, setPageIndex] = this.useState(value)
    this.beforeAppendChild = () => {
        eventBus.subscribe('Docs-page', (index) => {
            localStorage.setItem('concept', index)
            setPageIndex(index)
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
    } 
    return `${pages[pageIndex]}`;
}
export default function Docs() {
    this.enableSubComponents({Switcher, Aside})
    return `<div class="container" style="padding-top: 56px">
        <div class="row g-5">
            <Switcher></Switcher>
            <Aside></Aside>
        </div>
    </div>`;
}