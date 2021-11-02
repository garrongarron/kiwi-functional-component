import header from "./Header.js";
import Section from "./Section.js";
import ThreeColumns from "./threeCol/ThreeColumns.js";
import ASimpleComponent from "./livecode/ASimpleComponent.js";
import Footer from "./Footer.js";
import Pricing from "./Pricing.js";
import AStatefulComponent from "./livecode/AStatefulComponent.js";
import AnApplication from "./livecode/AnApplication.js";
import AComponentUsingExternalPlugins from "./livecode/AComponentUsingExternalPlugins.js";


export default function Layout(){
    this.enableSubComponents([header, Section, ThreeColumns, 
        ASimpleComponent, AStatefulComponent, AnApplication,AComponentUsingExternalPlugins,
        Pricing, Footer])

    return `<div class="k-bg-3">
        <header></header>
        <main>
            <Section></Section>
            <ThreeColumns></ThreeColumns>
            <div class="container"><hr></div>
            <ASimpleComponent></ASimpleComponent>
            <AStatefulComponent></AStatefulComponent>
            <AnApplication></AnApplication>
            <AComponentUsingExternalPlugins></AComponentUsingExternalPlugins>
        </main>
        <Pricing></Pricing>
        <Footer></Footer>
    </div>`
}

