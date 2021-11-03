import getComponent from './js/FunctionalComponent.js';

export default function PreventsInjectionAttacks() {
    const title = `<script>console.log('Hello from malicious code')</script>`;
    // This is safe:
    return `<h1>${title}</h1>`
}

let component = getComponent(PreventsInjectionAttacks)
component.kiwiSelector('body') 