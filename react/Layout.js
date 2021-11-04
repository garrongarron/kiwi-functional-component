import header from "./Header.js";
import Footer from "./Footer.js";
import Content from "./Content.js";


export default function Layout(){
    this.enableSubComponents({header, Footer, Content})
    
    return `<div class="-k-bg-3">
        <header></header>
        <Content></Content>
        <Footer></Footer>
    </div>`
}

