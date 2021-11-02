export default function ASimpleComponent() {
    this.beforeAppendChild = async (parentNode) => {
        let code = parentNode.querySelector('pre')
        let data = await fetch('react/livecode/HelloMessage.js')
        data = await data.text()
        code.textContent = data
    }
    return `
    <div class="album pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
                <!-- left -->
                <div class="col-lg-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="text-black fw-bold">A Simple Component</h3>
                            <p class="card-text text-bold">Kiwi JS components doesn't implement any special method, It use a <b>functionals component</b> to takes input data and returns what to display. This example uses <b>Template literals</b> and it is not needed any syntactic sugar. Input data that is passed into the component can be accessed as parameter and  via this.prop. (We dont use props in plural)</p>
                            <p class="card-text text-bold">There is <b>not compilation step</b> required.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-6">
                    <div class="card mb-4 rounded-3 shadow-sm border-dark k-bg-4">
                        <div class="card-header py-3 text-white bg-dark border-dark">
                            <h4 class="my-0 fw-normal">Demo</h4>
                        </div>
                        <div class="card-body text-white">
                            <pre>
                                    1
                            </pre>
                        </div>
                    </div>
                </div>
                <!-- demo -->
                <div class="col-lg-2"> 
                    <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                        <div class="card-header py-3 text-white bg-secondary ">
                            <h4 class="my-0 fw-normal">Result</h4>
                        </div>
                        <div class="card-body border-secondary">
                            Hello Taylor
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
        `
}