import '../../../js/FunctionalComponent.js'; // #1 before components are loaded
import App from './Events.js'; // #2

let layout = App.getComponent(App)
layout.kiwiSelector('body')