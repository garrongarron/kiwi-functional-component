// import Header from "./Header.js"
import footer from "./Footer.js"
import main from "./Main.js"
import nav from "./Nav.js"

export default function App() {
    if (arguments[1]) return
    this.enableSubComponents([nav, main, footer])
    return `
    <div >
        <nav></nav>
        <main></main>
        <footer></footer>
    </div>
    `
}