import eventBus from "../../src/basic/EventBus.js";
import Aside from "../docs/Aside.js";
import ComponentsAndProps from "../docs/ComponentsAndProps.js";
import CompositionVsInheritance from "../docs/CompositionVsInheritance.js";
import ConditionalRendering from "../docs/ConditionalRendering.js";
import Forms from "../docs/Forms.js";
import HandlingEvents from "../docs/HandlingEvents.js";
import HelloWorld from "../docs/HelloWorld.js";
import IntroducingTemplateLiterals from "../docs/IntroducingTemplateLiterals.js";
import LiftingStateUp from "../docs/LiftingStateUp.js";
import ListAndKeys from "../docs/ListAndKeys.js";
import RenderingElements from "../docs/RenderingElements.js";
import StateAndLifecycle from "../docs/StateAndLifecycle.js";
import ThinkingInReact from "../docs/ThinkingInReact.js";

export default function Docs() {
    this.enableSubComponents([Aside, HelloWorld, IntroducingTemplateLiterals, RenderingElements, ComponentsAndProps,
        StateAndLifecycle, HandlingEvents, ConditionalRendering, ListAndKeys, Forms, LiftingStateUp, CompositionVsInheritance, ThinkingInReact])
    let pages = [
        "<HelloWorld></HelloWorld>",
        "<IntroducingTemplateLiterals></IntroducingTemplateLiterals>",
        "<RenderingElements></RenderingElements>",
        "<ComponentsAndProps></ComponentsAndProps>",
        "<StateAndLifecycle></StateAndLifecycle>",
        "<HandlingEvents></HandlingEvents>",
        "<ConditionalRendering></ConditionalRendering>",
        "<ListAndKeys></ListAndKeys>",
        "<Forms></Forms>",
        "<LiftingStateUp></LiftingStateUp>",
        "<CompositionVsInheritance></CompositionVsInheritance>",
        "<ThinkingInReact></ThinkingInReact>",
    ]
    const [pageIndex, setPageIndex] = this.useState(1)
    this.beforeAppendChild = () => {
        eventBus.subscribe('Docs-page', (index) => {
            setPageIndex(index)
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
    }
    return `<div class="container" style="padding-top: 56px">
        <div class="row g-5">
            ${pages[pageIndex]}
            <Aside><Aside>
        </div>
    </div>`;
}