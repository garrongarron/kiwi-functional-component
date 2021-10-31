export default function changeAtiveTab(event) {
    let tabID = event.target.dataset.tab
    console.log(tabID);
    let element = event.target;
    while (element.nodeName !== "A") {
        element = element.parentNode;
    }
    let ulElement = element.parentNode.parentNode;
    let aElements = ulElement.querySelectorAll("li > a");
    let tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
    for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove("text-white");
        aElements[i].classList.remove("bg-pink-600");
        aElements[i].classList.add("text-pink-600");
        aElements[i].classList.add("bg-white");
        tabContents[i].classList.add("hidden");
        tabContents[i].classList.remove("block");
    }
    element.classList.remove("text-pink-600");
    element.classList.remove("bg-white");
    element.classList.add("text-white");
    element.classList.add("bg-pink-600");
    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
}