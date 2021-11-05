import Logo from "./Logo.js"

export default function Footer(){
    let links = `Installation Main_Concepts Advanced_Guides API_Reference Hooks Testing Contributing FAQ`.split(' ')
    this.enableSubComponents({Logo})
    return `
<div class="container-fluid bg-dark text-light">
    <div class="container text-muted">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-5">
            <!-- 1 -->
            <div class="col-lg-6 d-flex align-items-start">
                <div>
                    <h4 class="fw-bold mb-0">Open Source</h4>
                    <p>Copyright © 2021 SamuGarron Dev.</p>
                    <center>
                        <Logo size="150"></Logo>
                    </center>
                    
                </div>
            </div>
            <!-- 2 -->
            <div class="col-lg-3 d-flex align-items-start visually-hidden">
                <div>
                <h4 class="fw-bold mb-0 text-muted">Docs</h4>
                <!-- <p>Paragraph of text beneath the heading to explain the heading.</p> -->
                    <ul class="list-unstyled text-small">
                        ${links.map(link =>`<li>${link}</li>`)}
                    </ul>
                </div>
            </div>
            <!-- 3 -->
            <div class="col-lg-3 d-flex align-items-start visually-hidden">
                <div>
                <h4 class="fw-bold mb-0">Channels</h4>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    
    `
}