export default function LiveExample(){
    let times = [1, 2, 3]
    return `
    <div class="album pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
                <!-- left -->
                <div class="col-lg-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="text-black fw-bold">Declarative</h3>
                            <p class="card-text text-bold">Kiwi JS makes it painless to create interactive UIs. Design simple
                                views for each state in your application, and React will efficiently update and render just the
                                right components when your data changes.</p>
                            <p class="card-text text-bold">Declarative views make your code more predictable and easier to debug.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-5">
                    <div class="card mb-4 rounded-3 shadow-sm border-dark k-bg-4">
                        <div class="card-header py-3 text-white bg-dark border-dark">
                            <h4 class="my-0 fw-normal">Live demo</h4>
                        </div>
                        <div class="card-body text-white">
                            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg k-bg-2">Contact us</button>
                        </div>
                    </div>
                </div>
                <!-- demo -->
                <div class="col-lg-3"> 
                    <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                        <div class="card-header py-3 text-white bg-secondary ">
                            <h4 class="my-0 fw-normal">Result</h4>
                        </div>
                        <div class="card-body border-secondary">
                            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg k-bg-2">Contact us</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
        `
}