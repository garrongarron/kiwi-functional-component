import AComponentUsingExternalPlugins from "../livecode/AComponentUsingExternalPlugins.js"
import AnApplication from "../livecode/AnApplication.js"
import ASimpleComponent from "../livecode/ASimpleComponent.js"
import AStatefulComponent from "../livecode/AStatefulComponent.js"
import Pricing from "../Pricing.js"
import Section from "../Section.js"
import ThreeColumns from "../threeCol/ThreeColumns.js"

export default function Home(){
    this.enableSubComponents([Section, ThreeColumns, 
        ASimpleComponent, AStatefulComponent, AnApplication,AComponentUsingExternalPlugins,
        Pricing])
    return `<main>
    <Section></Section>
    <ThreeColumns></ThreeColumns>
    <div class="container"><hr></div>
    <ASimpleComponent></ASimpleComponent>
    <AStatefulComponent></AStatefulComponent>
    <AnApplication></AnApplication>
    <AComponentUsingExternalPlugins></AComponentUsingExternalPlugins>
    <Pricing></Pricing>
</main>`
}