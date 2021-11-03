import eventBus from "../src/basic/EventBus.js"
import Docs from "./pages/Docs.js"
import Home from "./pages/Home.js"

export default function Content() {
    this.enableSubComponents([Home, Docs])
    let value = JSON.parse(localStorage.getItem('page') || '0')
    const [pageIndex, setPageIndex] = this.useState(value)
    this.beforeAppendChild = () => {
        eventBus.subscribe('General-page', (index) => {
            console.log(index);
            localStorage.setItem('page', index)
            setPageIndex(index)
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
    }
    let pages = [
        "<Home></Home>",
        "<Docs></Docs>",
    ]
    return `<div>${pages[pageIndex]}</div>`
}