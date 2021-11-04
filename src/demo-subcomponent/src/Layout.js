/* src/Layout.js */
import Footer from "./Footer.js"
import Main from "./Main.js"
import Nav from "./Nav.js"

export default function Layout() {
    if (arguments[1]) return
    this.enableSubComponents({Nav, Main, Footer})
    return `
        <div >
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </div>
        `
}

Layout.getComponent(Layout)