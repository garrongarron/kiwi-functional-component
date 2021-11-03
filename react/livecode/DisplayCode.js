export default function DisplayCode({full=false, id }) {
    this.beforeAppendChild = (parentNode) => {
        this.fullScreen = full
        parentNode.querySelector('pre').style.maxHeight = (this.fullScreen) ? 'none' : '200px'
    }
    this.fullScreen = (e) => {
        this.fullScreen = !this.fullScreen
        e.currentTarget.parentNode.querySelector('pre').style.maxHeight = (this.fullScreen) ? 'none' : '200px'
        e.currentTarget.querySelector('svg').setAttribute('fill',(!this.fullScreen)?'chartreuse':'gray')
    }
    
    this.enableEvents('click')
    return `
    <div ${(id)?`id="${id}"`:''} class="card mb-4 rounded-3 shadow-sm border-dark k-bg-4">
        <div click="fullScreen" class="d-flex align-items-center justify-content-between card-header py-3 text-white bg-dark border-dark" style="cursor: pointer;">
            <h4 class="my-0 fw-normal">Demo</h4>
            <svg with="20" height="20" fill="chartreuse" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
                <g>
                    <g>
                    <path d="m251.6,185.7c-36.9,0-67,31.5-67,70.3 0,38.7 30,70.3 67,70.3 36.9,0 67-31.5 67-70.3 0-38.7-30.1-70.3-67-70.3z"/>
                    <path d="m251.6,367.1c-59.4,0-107.8-49.8-107.8-111.1 0-61.3 48.4-111.1 107.8-111.1s107.8,49.8 107.8,111.1c0,61.3-48.4,111.1-107.8,111.1zm246.3-121.9c-63.8-102.4-149.8-158.8-241.9-158.8-92.1,0-178.1,56.4-241.9,158.8-4.1,6.6-4.1,15 0,21.6 63.8,102.4 149.8,158.8 241.9,158.8 92.1,0 178-56.4 241.9-158.8 4.1-6.6 4.1-15 0-21.6z"/>
                    </g>
                </g>
            </svg>
        </div>
        <div class="card-body text-white">
            <pre style="overflow-y:scroll; max-height: 200px; transition: max-height 0.5s ease-out;"><code class="language-javascript" ></code></pre>
        </div>
    </div>
    `
}