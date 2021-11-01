export default function ThreeColumns() {
    let times = [1, 2, 3]
    return `
<div class="album py-5 ">
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-md-3 g-3">
        ${times.map(s=>`
            <div class="col">
                <div class="card shadow-sm border-dark">
                    <div class="card-body k-bg-4">
                        <h3 class="k-color-2 fw-light">Declarative</h3>
                        <p class="card-text text-muted">Kiwi JS makes it painless to create interactive UIs. Design simple
                            views for each state in your application, and React will efficiently update and render just the
                            right components when your data changes.</p>
                        <p class="card-text text-muted">Declarative views make your code more predictable and easier to debug.</p>
                    </div>
                </div>
            </div>
        `)}
        </div>
    </div>
  </div>
    `
}