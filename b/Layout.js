import header from "./Header.js";
import Section from "./Section.js";
import ThreeColumns from "./threeCol/ThreeColumns.js";
import LiveExample from "./LiveExample.js";
import Footer from "./Footer.js";
import Pricing from "./Pricing.js";


export default function Layout(){
    this.enableSubComponents([header, Section, ThreeColumns, LiveExample, Pricing, Footer])

    return `<div class="k-bg-3">
        <header></header>
        <main>
            <Section></Section>
            <ThreeColumns></ThreeColumns>
            <div class="container"><hr></div>
            <LiveExample></LiveExample>
            <LiveExample></LiveExample>
            <LiveExample></LiveExample>
        </main>
        <Pricing></Pricing>
        <Footer></Footer>
    </div>`
}

