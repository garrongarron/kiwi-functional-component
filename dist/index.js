var Se=0,A={components:[],check:function(){A.components.forEach(e=>{document.contains(e.node)||e.exit()})},add:function(e,o){this.components.indexOf(e)>-1||(this.components.push(e),e.exit=o)}},xe="number string undefined".split(" "),ue=e=>{if(!xe.includes(typeof e))throw`Argument is not an string, number or undefined : '${e}' in primitiveDispatcher() method.`},me=e=>{if(!Array.isArray(e))throw`Argument is not an array: '${e}' in arrayDispacher() method.`},y=Symbol("firstTime"),w=Symbol("stateIndex"),C=Symbol("defaultStateDone"),ge=Symbol("setProperties"),fe=Symbol("addChild"),f=Symbol("children"),T=Symbol("subComponent"),L=Symbol("listeners"),j=Symbol("settingListener"),E=Symbol("exec"),be=Symbol("refresh"),q=Symbol("re-render"),m=Symbol("useEffectCallbacks"),S=Symbol("useEffectCallbacksPrev"),N=Symbol("runSideEffects"),x=Symbol("hookBehaviour"),ke={runAsHook:function(){this[x]=!0,this[w]=0},useEffect:function(e,o=[],t){let i=JSON.stringify(o);this[m][this.id]||(this[m][this.id]=[]);let a=this[m][this.id].length;if(this[m][this.id].push([e,i]),this[S][a]!=i&&this[x]){this[S][a]=i;let s=e();typeof s=="function"&&A.add(this,s)}},beforeAppendChild:function(e){},prop:{},noProp:["beforeAppendChild","prop","enableSubComponents","enableEvents","kiwiSelector","useState","noProp"],enableSubComponents:function(e){if(Array.isArray(e))throw"this.enableSubComponents() only allow Objects but not allows arrays."+`
`+this.constructor;this[T]=e},enableEvents:function(e){this[L]=Array.isArray(e)?e:[e]},kiwiSelector:function(e){let o=this[E]();document.querySelector(e).appendChild(o)},useState:function(e){let o=e;this.state||(this.state={});let t=this[w]++;return this[C]?o=this.state[t]:this.state[t]=o,[typeof o=="undefined"?o:JSON.parse(JSON.stringify(this.state[t])),i=>{typeof this.state[t]=="object"&&Object.assign(this.state[t],typeof i=="function"?i():i),this.state[t]=i,this[x]&&(this[w]=0,this[C]=!0),this[q](),A.check()}]},useReducer:function(e,o={}){return this[C]||(this.state=o),[this.state,t=>{this.state=e(this.state,t),this[q]()}]},arrayDispatcher:function(e=[]){me(e);let o=[];return[{get items(){return[...e]},subscribe:function(a){o.push(a)}},a=>{me(e),e.length=0,a.forEach(s=>{e.push(s)}),o.forEach(s=>s([...e]))},[...e]]},variableDispatcher:function(e){ue(e);let o=[],t=e;return[{get value(){return t},subscribe:function(s){o.push(s)}},s=>{ue(s),t=s,o.forEach(r=>r(s))},t]}},De=function(){return this[x]=!1,this[N]=function(e){!this[m][this.id]||(this[m][this.id].forEach((o,t)=>{if(this[S][t]!=o[1]){this[S][t]=o[1];let i=o[0](e);typeof i=="function"&&A.add(this,i)}}),this[m][this.id]=[])},this[m]={},this[S]=[],this[y]=!0,this[w]=0,this[C]=!1,this[ge]=function(e){let o={};for(let t=0;t<e.length;t++)if(typeof this[e[t].value]=="function")o[e[t].name]=this.noProp.includes(e[t].value)?e[t].value:this[e[t].value](),this.noProp.includes(e[t].value)&&console.warn(`Atttribute Value '${e[t].value}' as string due it is a reserved keyword`);else try{o[e[t].name]=JSON.parse(e[t].value)}catch{o[e[t].name]=e[t].value}return o},this[fe]=function(e){return Object.keys(this[T]).map(o=>{let t=this[T][o],i=e.querySelectorAll(o.toLowerCase());this[f]=this[f]||[],this[f].forEach(a=>{a.free=!0});for(let a=0;a<i.length;a++){let s=i[a],r=this[ge](s.attributes),l=null,c=0,d=!1;for(c=0;c<this[f].length;c++){let v=this[f][c];if(v.instanceComponet.constructor.name==o&&!!v.free){l=v.instanceComponet,d=!0,this[f][c]={free:!1,instanceComponet:v.instanceComponet};break}}let p=d?l:ve(t);d||(this[f][a]={free:!1,instanceComponet:p}),p.prop={},Object.assign(p.prop,r);let I=p[E]();s.parentNode.replaceChild(I,s)}}),e},this[T]=[],this[L]=[],this[j]=function(e,o=null){this[L].map(t=>{let i=e.querySelectorAll("["+t+"]");for(let a=0;a<i.length;a++){let s=i[a],r=s.getAttribute(t);if(!r)throw"There is no attribute '"+t+`' value on:

`+s.outerHTML;o?s.removeEventListener(t,this[r]):s.addEventListener(t,this[r])}})},this[be]=function(e,o){let t=!0;function i(r,l){let c=!1;r.lenght==l.lenght&&r.forEach((d,p)=>{if(d.textContent!=l[p].textContent){if(d.nodeName!=l[p].nodeName)return;d.childNodes[0]&&l[p].childNodes[0]?d.childNodes[0].textContent=l[p].childNodes[0].textContent:d.textContent=l[p].textContent,t=!1,c=!0}}),c||(t=!1)}let a=e.querySelectorAll("*"),s=o.querySelectorAll("*");if(a.length!=o.querySelectorAll("*").length)return!0;a.forEach((r,l)=>{r.tagName!=s[l].tagName&&r.parentNode.replaceChild(s[l].cloneNode(!0),r)});try{a.forEach((r,l)=>{let c=s[l],d={};for(let h of r.attributes)d[h.name]=h.value;for(let h of c.attributes)d[h.name]=h.value;let p=!1;if(Object.keys(d).forEach(h=>{c.getAttribute(h)==null?(r.removeAttribute(h),p=!0):r.getAttribute(h)!=c.getAttribute(h)&&(r.setAttribute(h,c.getAttribute(h)),p=!0)}),p)return!1;let I=r.childNodes,v=c.childNodes;i(I,v)})}catch(r){console.error("SOMETHING WRONG: ",r)}return t},this[q]=function(){try{let e=this.node,o=this.node.parentNode;this[j](this.node.parentNode,!0);let t=this[E](!0);this[be](e,t)?e.parentNode.replaceChild(t,e):(this.node=e,this[j](o)),this[N](o)}catch{}},this[E]=function(e){var o=document.createElement("section");this[w]=0,Array.prototype.toString=function(){return this.join("")};let t=this.constructor(this.prop);if(this[x])return t;let i=t.split("/>");if(i.length>1){let s=i.pop(),r=i.map(l=>{let c=l.split("<"),p=c[c.length-1].split(" ")[0];return l+`></${p}>`});r.push(s),t=r.join("")}Array.prototype.toString=function(){return this.join(",")},this[C]=!0,o.innerHTML=t,this[j](o),this[fe](o);let a=this[y];if(this[y]&&(this[y]=!1,this.beforeAppendChild(o)),a&&this[N](o),this.node=o.children[0],!this.node)throw`Check the return of ${this.constructor.name}
${this.constructor.toString()}`;return this.node},this},b=De.bind(ke)();function Ae(){}var ve=e=>{let o=new Ae,t=i=>{o[i]=typeof b[i]=="object"?Array.isArray(b[i])?[]:{}:typeof b[i]=="function"?b[i].bind(o):b[i]};return Object.keys(b).map(t),Object.getOwnPropertySymbols(b).forEach(t),o.constructor=e,o[y]&&(o.id=Se++),o},g=ve;var ye=class{constructor(){this.event={}}subscribe(o,t){this.event[o]||(this.event[o]=[]),!(this.event[o].indexOf(t)>-1)&&this.event[o].push(t)}unSubscribe(o,t){if(!this.event[o])return;let i=this.event[o].indexOf(t);i>-1&&this.event[o].splice(i,1)}dispatch(o,t){!this.event[o]||this.event[o].forEach(i=>i(t))}},Te=new ye,u=Te;function k({size:e="20"}){return`
    <svg width="${e}" height="${e}" class="k-rotating-8">
        <circle cx="50%" cy="50%" r="40%" stroke="olive" stroke-width="12%" fill="chartreuse" />
        
        <circle cx="50%" cy="35%" r="7%"  fill="green" />
        <circle cx="65%" cy="45%" r="7%"  fill="green" />
        <circle cx="60%" cy="65%" r="7%"  fill="green" />
        <circle cx="40%" cy="65%" r="7%"  fill="green" />
        <circle cx="35%" cy="45%" r="7%"  fill="green" />
        
    </svg>
        `}function J(){return this.goto=e=>{u.dispatch("General-page",0),e.preventDefault()},this.enableEvents("click"),this.enableSubComponents({Logo:k}),`
<header class="fixed-top">
  <div class="bg-dark collapse" id="navbarHeader" style="">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">What is this?</h4>
          <p class="text-muted"> This is the official web site of the Kiwi JS library (React clone, but better XD).</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a class="text-white" href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">Follow on Twitter</a></li>
            <!-- <li><a href="#" class="text-white">Like on Facebook (pending)</a></li>
            <li><a href="#" class="text-white">Email me (pending)</a></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#"  click="goto" class="navbar-brand d-flex align-items-center k-color-2">
        <Logo></Logo>
        <strong class="ps-2 k-color-2">Kiwi JS</strong>
      </a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
    `}function H(){let e="Installation Main_Concepts Advanced_Guides API_Reference Hooks Testing Contributing FAQ".split(" ");return this.enableSubComponents({Logo:k}),`
<div class="container-fluid bg-dark text-light">
    <div class="container text-muted">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-5">
            <!-- 1 -->
            <div class="col-lg-6 d-flex align-items-start">
                <div>
                    <h4 class="fw-bold mb-0">Kiwi JS</h4>
                    <p> 2021 by <a class="k-color-1 text-decoration-none" href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>
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
                        ${e.map(o=>`<li>${o}</li>`)}
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
    
    `}var je={HelloWorld:"Hello World",IntroducingTemplateLiterals:"Introducing TemplateLiterals",RenderingElements:"Rendering Elements",ComponentsAndProps:"Components And Props",StateAndLifecycle:"State And Lifecycle",HandlingEvents:"Handling Events",CustomObservers:"Custom Observers",Hooks:"Hooks"},D=je;function M(){return this.goto=e=>{u.dispatch("Docs-page",e.target.getAttribute("index")),e.preventDefault(),e.target.parentNode.parentNode.querySelectorAll("a").forEach(o=>{o.classList.remove("k-color-2"),o.classList.add("k-color-3")}),e.currentTarget.classList.remove("k-color-3"),e.currentTarget.classList.add("k-color-2")},this.enableEvents(["click"]),`<div class="col-md-4">
    <div class="position-sticky" style="top: 4rem; padding-bottom: 4rem"> 
      <div class="p-4">
        <h4 class="fst-italic">Main concepts</h4>
        <ol class="list-group mb-0">
          ${Object.keys(D).map((e,o)=>`<li><a href="#"  class="k-color-3" click="goto" index="${e}">${D[e]}</a></li>`)}
        </ol>
      </div>

      <div class="p-4 mb-8 bg-dark rounded text-light" >
        <h4 class="fst-italic">About</h4>
        <p class="mb-0">This library was made after research the React library features and pretends reduce the boilerplate and improve the developer experience. It is native, small, and fast... There is no lighter at the moment but the "string-highlight
" extension by Jenkey2011 could help to highlight the Template Literals in Visual Studio Code.</p>
        <p>Download the library from <a href="https://raw.githubusercontent.com/garrongarron/kiwi-functional-component/main/js/FunctionalComponent.js" target="_blank" rel="noopener noreferrer">here</a></p>
      </div>
    </div>
  </div>`}function n({full:e=!1,id:o,type:t="javascript",filename:i=null,content:a=null}){return this.beforeAppendChild=s=>{this.fullScreen=e,s.querySelector("pre").style.maxHeight=this.fullScreen?"none":"200px"},this.fullScreen=s=>{this.fullScreen=!this.fullScreen,s.currentTarget.parentNode.querySelector("pre").style.maxHeight=this.fullScreen?"none":"200px",s.currentTarget.querySelector("svg").setAttribute("fill",this.fullScreen?"gray":"chartreuse")},this.enableEvents("click"),`
    <div ${o?`id="${o}"`:""} class="card mb-4 rounded-3 shadow-sm border-dark k-bg-4">
        <div click="fullScreen" class="d-flex align-items-center justify-content-between card-header py-3 text-white bg-dark border-dark" style="cursor: pointer;">
            <h4 class="my-0 fw-normal">${i||"Demo"}</h4>
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
            <pre class="scroll-bar" style="overflow-y:scroll; max-height: 200px; transition: max-height 0.5s ease-out;"><code class="language-${t||"javascript"}" >${a||""}</code></pre>
        </div>
    </div>
    `}function O(){return this.beforeAppendChild=async e=>{Prism.highlightAllUnder(e)},this.functionComponent=()=>`import getComponent from &#39;./js/FunctionalComponent.js&#39;;

  function Welcome(props) {
      return \`&lt;h1&gt;Hello, \${props.name}&lt;/h1&gt;\`;
  }
  
  getComponent(Welcome).kiwiSelector(&#39;body&#39;)`,this.composing=()=>`import getComponent from &#39;./js/FunctionalComponent.js&#39;;
function Welcome(props) {
    return \`&lt;h1&gt;Hello, \${props.name}&lt;/h1&gt;\`;
}
function Main(){
    this.enableSubComponents({Welcome})
    return \`&lt;div&gt;
    &lt;Welcome name=&quot;Sara&quot; /&gt;
    &lt;Welcome name=&quot;Cahal&quot; /&gt;
    &lt;Welcome name=&quot;Edite&quot; /&gt;
    &lt;/div&gt;\`
}
getComponent(Main).kiwiSelector(&#39;body&#39;)`,this.div=()=>"function Main(){\n  return `&lt;div /&gt;`\n}",this.customcomponent=()=>`function Main(){
  this.enableSubComponents({Welcome})
  return \`&lt;Welcome name=&quot;Sara&quot; /&gt;\`
}`,this.pure=()=>`function sum(a, b) {
  return a + b;
}`,this.impure=()=>`function withdraw(account, amount) {
  account.total -= amount;
}`,this.properties=()=>`import getComponent from &#39;./js/FunctionalComponent.js&#39;;

function Calculator({ name = &#39;Mate&#39;, calc }) {
    return \`&lt;div&gt;
        &lt;h1&gt;Hi, \${name}!&lt;/h1&gt; 
        &lt;div&gt; 1 + 2 = \${calc &amp;&amp; calc.sum(1, 2) || &#39;?&#39;}&lt;/div&gt;
        &lt;div&gt; 3 + 4 = \${(calc) ? calc.sum(3, 4) : &#39;?&#39;}&lt;/div&gt;
    &lt;/div&gt;\`;
}
function Main() {
    this.enableSubComponents({ Calculator })
    this.tool = () =&gt; {
        return {
            sum: (a, b) =&gt; a + b
        }
    }
    return \`&lt;div&gt;
        &lt;Calculator name=&quot;Mike&quot; /&gt;
        &lt;Calculator calc=&quot;tool&quot; /&gt;
    &lt;/div&gt;\`
}
getComponent(Main).kiwiSelector(&#39;body&#39;)`,this.methodAsProperties=()=>`function Main() {
    this.enableSubComponents({ Calculator })
    this.nameProvider = () =&gt; &#39;Hello&#39; //Correct
    this.nameProvider = function(){ return &#39;Hello&#39; } //Correct
    this.nameProvider(){ return &#39;Hello&#39; } // < ==== Wrong
    return \`&lt;div&gt;
        &lt;Calculator name=&quot;nameProvider&quot; /&gt;
        &lt;Calculator name=&quot;nameProvider&quot; /&gt;
        &lt;Calculator calc=&quot;objectSender&quot; /&gt;
    &lt;/div&gt;\`
}`,this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Components and Props
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Component represent HTMLElement:</h3> 
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer"> @samugarrondev</a></p>
      <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.</p>
      <p>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called \u201Cprops\u201D) and return a string describing what should appear on the screen.<p>
      <hr>
      <h2>Function Components</h2>
      <p>The simplest way to define a component is to write a JavaScript function:</p>
      <DisplayCode full="true" id="fragemted-update" content="functionComponent" ></DisplayCode>
      
      <p>This function is a valid Kiwi JS component because it accepts a single \u201Cprops\u201D (which stands for properties) object argument with data and returns a Kiwi JS element. We call such components \u201Cfunction components\u201D because they are literally JavaScript functions.</p>
      
      <hr/>
      <h3>Rendering a Component</h3>
      <p>Previously, we only encountered Kiwi JS elements that represent DOM tags: (div, or h1)</p>
      <DisplayCode full="true" id="composing" content="div" ></DisplayCode>
      <p>However, elements can also represent user-defined sub-components.</p>
      <DisplayCode full="true" id="composing" content="customcomponent" ></DisplayCode>
      
      <hr/>
      <h3>Composing Components</h3>
      <p>When Kiwi JS sees an element representing a user-defined component and it is enabed with the <strong>this.enableSubComponents({Welcome})</strong>, it take the attributes  to this component as a variables to be sent to that sub-component. We call those attributes \u201Cprops\u201D..</p>
      <p>Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in Kiwi JS apps, all those are commonly expressed as components.<p>
      <p>For example, we can create an App component that renders Welcome many times:</p>
      <DisplayCode full="true" id="composing" content="composing" ></DisplayCode>

      



      <h3>Props are Read-Only? (not really)</h3>
      <p>Whether you declare a component as a function, it must never modify its own props. Consider this sum function:</p>
      <DisplayCode content="pure"></DisplayCode>
      <p>Such functions are called \u201Cpure\u201D because they do not attempt to change their inputs, and always return the same result for the same inputs.</p>
      <p>In contrast, this function is impure because it changes its own input:</p>
      
      
      <DisplayCode content="impure"></DisplayCode>
      <p>Kisi JS is really flexible you can also send object as a props.</p>


      <h3>Methods as properties</h3>
      <p>In the following example you will see how <strong>custom method</strong> is send as a prop to a sub-component.</p>
      <DisplayCode full="true" content="properties"></DisplayCode>
      <p>You can also use destructuring assignment syntax to handle the props in a better way.</p>

      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>Every custom method have to be written as a property.</em>   
      
      <br />
      <p>Check the following example.</p>
      <DisplayCode full="true" content="methodAsProperties"></DisplayCode>
      
      
  </div>`}function P(){return this.beforeAppendChild=async e=>{let o=e.querySelectorAll("code"),t=await fetch("react/livecode/HelloMessage.js");t=await t.text(),o.forEach(i=>{i.textContent=t}),Prism.highlightAll()},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    CompositionVsInheritance
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Consider this variable declaration:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

        <DisplayCode></DisplayCode>
      <p>This funny tag syntax is a string similar to HTML sintax.</p>
      <hr>
      <h2>Template Literals</h2>
      <p>It is a single string, and it is native in JavaScript. We recommend using it with React to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript.</p>
      <p>This string will became in HTML \u201Celements\u201D. We will explore rendering them to the DOM in the next section. Below, you can find the basicsconcepts necessary to get you started.</p>
      
      <h3>Why Template Literals?</h3>

      <p>React do not need to over engineer ading more libraries like JSX. In fact, the rendering goes streightly into HTML usint the innerHTML property of the nodeElements from the DOM.</p>
      <p>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called \u201Ccomponents\u201D that contain both.</p>
      <p>With that out of the way, let\u2019s get started!</p>

      <h3>Printing variables into the template literals</h3>
      <p>In the example below, we declare a variable called name and then use it inside template literals by wrapping it in a dollar sign plus curly braces:</p>
      <DisplayCode></DisplayCode>

      <p>You can put any valid JavaScript expression inside the curly braces in template literals. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.</p>
      <p>In the example below, we embed the result of calling a JavaScript function, formatName(user), into an (h1) element.</p>
      <DisplayCode></DisplayCode>


      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>If you want to sent a JSON string you must to use ingle quotes to avoid conficts with the double quottes from the JSON format.</em>   
      
  </div>`}function R(){return this.beforeAppendChild=async e=>{let o=e.querySelectorAll("code"),t=await fetch("react/livecode/HelloMessage.js");t=await t.text(),o.forEach(i=>{i.textContent=t}),Prism.highlightAll()},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    ConditionalRendering
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Consider this variable declaration:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

        <DisplayCode></DisplayCode>
      <p>This funny tag syntax is a string similar to HTML sintax.</p>
      <hr>
      <h2>Template Literals</h2>
      <p>It is a single string, and it is native in JavaScript. We recommend using it with React to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript.</p>
      <p>This string will became in HTML \u201Celements\u201D. We will explore rendering them to the DOM in the next section. Below, you can find the basicsconcepts necessary to get you started.</p>
      
      <h3>Why Template Literals?</h3>

      <p>React do not need to over engineer ading more libraries like JSX. In fact, the rendering goes streightly into HTML usint the innerHTML property of the nodeElements from the DOM.</p>
      <p>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called \u201Ccomponents\u201D that contain both.</p>
      <p>With that out of the way, let\u2019s get started!</p>

      <h3>Printing variables into the template literals</h3>
      <p>In the example below, we declare a variable called name and then use it inside template literals by wrapping it in a dollar sign plus curly braces:</p>
      <DisplayCode></DisplayCode>

      <p>You can put any valid JavaScript expression inside the curly braces in template literals. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.</p>
      <p>In the example below, we embed the result of calling a JavaScript function, formatName(user), into an (h1) element.</p>
      <DisplayCode></DisplayCode>


      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>If you want to sent a JSON string you must to use ingle quotes to avoid conficts with the double quottes from the JSON format.</em>   
      
  </div>`}function W(){return this.beforeAppendChild=async e=>{let o=e.querySelectorAll("code"),t=await fetch("react/livecode/HelloMessage.js");t=await t.text(),o.forEach(i=>{i.textContent=t}),Prism.highlightAll()},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Forms
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Consider this variable declaration:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

        <DisplayCode></DisplayCode>
      <p>This funny tag syntax is a string similar to HTML sintax.</p>
      <hr>
      <h2>Template Literals</h2>
      <p>It is a single string, and it is native in JavaScript. We recommend using it with React to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript.</p>
      <p>This string will became in HTML \u201Celements\u201D. We will explore rendering them to the DOM in the next section. Below, you can find the basicsconcepts necessary to get you started.</p>
      
      <h3>Why Template Literals?</h3>

      <p>React do not need to over engineer ading more libraries like JSX. In fact, the rendering goes streightly into HTML usint the innerHTML property of the nodeElements from the DOM.</p>
      <p>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called \u201Ccomponents\u201D that contain both.</p>
      <p>With that out of the way, let\u2019s get started!</p>

      <h3>Printing variables into the template literals</h3>
      <p>In the example below, we declare a variable called name and then use it inside template literals by wrapping it in a dollar sign plus curly braces:</p>
      <DisplayCode></DisplayCode>

      <p>You can put any valid JavaScript expression inside the curly braces in template literals. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.</p>
      <p>In the example below, we embed the result of calling a JavaScript function, formatName(user), into an (h1) element.</p>
      <DisplayCode></DisplayCode>


      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>If you want to sent a JSON string you must to use ingle quotes to avoid conficts with the double quottes from the JSON format.</em>   
      
  </div>`}function F(){return this.beforeAppendChild=async e=>{let o=e.childNodes[0];{let t=o.querySelector("#a code"),i=await fetch("react/livecode/Todo.js");i=await i.text(),t.textContent=i}{let t=o.querySelector("#b code"),i=await fetch("react/livecode/Remarkable.js");i=await i.text(),t.textContent=i}Prism.highlightAll()},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
      Handling Events
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">How to handle events in Kiwi JS:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

      <DisplayCode filename="Todo" id="a" full="false"></DisplayCode>

      <p>As you can see, this example is using <strong>this.enableEvents(['submit'])</strong> to bind the <strong>submit</strong> event to the <strong>this.handleChange</strong> method.</p>
      <p>In the example below, you will see that the <strong>this.enableEvents(['keyup'])</strong> is used to bind the <strong>keyup</strong> event to the <strong>this.handleChange</strong> method. </p>
      
      <DisplayCode filename="Remarkable" id="b" full="false"></DisplayCode>
  </div>`}function U(){return this.beforeAppendChild=async e=>{let o=e.children[0];{let t=o.querySelector("#hello-world code"),i=await fetch("react/docs/snippets/HelloWorld.js");i=await i.text(),t.textContent=i,Prism.highlightAll()}{let t=o.querySelector("#index code"),i=await fetch("react/docs/snippets/Model.html.txt");i=await i.text(),t.textContent=i,Prism.highlightAll()}},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Hello World
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">The smallest Kiwi JS example</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>
      <p>The fist step to try this library is create a specific foolder for the project. 
        There create the following <strong>index.html</strong> file.</p>
        <DisplayCode filename="index.html" full="true" id="index" type="html"  ></DisplayCode>
      <p> Then you can create a <strong>js</strong> sub-folder to place the <strong>FunctionalComponent.js</strong> library that you can download from <a href="https://raw.githubusercontent.com/garrongarron/kiwi-functional-component/main/js/FunctionalComponent.js" target="_blank" rel="noopener noreferrer">here</a>. </p>
      <DisplayCode filename="Folder structure" full="true" id="index" type="bash" content="index.html
js/FunctionalComponent.js
src/HelloWorld.js" ></DisplayCode>

      <p>After that, write the following EcmaScript 6 module named <strong>HelloWorld.js</strong> into a <strong>src</strong> sub-folder.</p>
        <DisplayCode filename="src/HelloWorld.js" full="true" id="hello-world" type="javascript"></DisplayCode>
      <p>It displays a heading saying \u201CHello, World!\u201D on the page.</p>
        
      <hr>
      <h2>How to Read This Guide</h2>
      <p>In this guide, we will examine the building blocks of Kiwi JS apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.</p>
      <blockquote class="blockquote">
        <p>Tip</p>
      </blockquote>
      <p>This guide is designed for people who prefer learning concepts step by step. If you prefer to learn by doing, check out our practical tutorial. You might find this guide and the tutorial complementary to each other.</p>
      <p>This is the first chapter in a step-by-step guide about main Kiwi JS concepts. You can find a list of all its chapters in the navigation sidebar.</p>
      <p>Every chapter in this guide builds on the knowledge introduced in earlier chapters. <b>You can learn most of Kiwi JS by reading the \u201CMain Concepts\u201D guide chapters in the order they appear in the sidebar.</b> For example, \u201CIntroducing TemplateLiterals\u201D is the next chapter after this one.</p>

      <h3>Knowledge Level Assumptions</h3>
      <p>Kiwi JS is a JavaScript library, and so we\u2019ll assume you have a basic understanding of the JavaScript language. <b>If you don\u2019t feel very confident, we recommend going through a JavaScript tutorial to check your knowledge level</b> and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour, but as a result you won\u2019t have to feel like you\u2019re learning both Kiwi JS and JavaScript at the same time.</p>
      
      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>This guide occasionally uses some newer JavaScript syntax in the examples. 
        <!-- If you haven\u2019t worked with JavaScript in the last few years, these three points should get you most of the way. -->
      </em>
      <br />
      <br />

      <h2>Let\u2019s Get Started!</h2>
      <p>Keep learning using the right side bar with different topics if you ar in desctop, if you are in mobile you can go to the bottom part to si the list of links.</p>
      <!-- <p>Keep scrolling down, and you\u2019ll find the link to the next chapter of this guide right before the website footer.</p> -->
      
  </div>`}function $(){return this.beforeAppendChild=e=>{let o=e.children[0],t=async(i,a)=>{let s=o.querySelector(`#${i} code`),r=await fetch(`react/docs/snippets/${a}.js`);r=await r.text(),s.textContent=r,Prism.highlightAll()};t("literal","TemplateLiterals"),t("formater","FormatName"),t("malicious","PreventsInjectionAttacks"),t("stringify","Stringify")},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Introducing Template Literals
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Consider this functional component:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

        <DisplayCode full="true" id="literal"></DisplayCode>
      <p>This tiny component shows <i>Hello Taylor</i> on screen.</p>
      <hr>
      <h2>Template Literals</h2>
      <p>It use a single string, and it is native in JavaScript. We recommend using it with Kiwi JS to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript.</p>
      <p>This string will became in HTML \u201Celements\u201D. We will explore rendering them to the DOM in the next section. Below, you can find the basics concepts necessary to get you started.</p>
      
      <h3>Why Template Literals?</h3>

      <p>Kiwi JS does not need to over engineer adding more libraries like JSX. In fact, the rendering goes straight into HTML using the innerHTML property of the nodeElements from the DOM.</p>
      <p>Instead of artificially separating technologies by putting markup and logic in separate files, Kiwi JS separates concerns with loosely coupled units called \u201Ccomponents\u201D that contain both.</p>
      <p>With that out of the way, let\u2019s get started!</p>

      <h3>Printing variables into the template literals</h3>
      <p>In the example below, we declare a variable called name and then use it inside template literals by wrapping it in a dollar sign plus curly braces:</p>
      <DisplayCode full="true" id="formater"></DisplayCode>

      <p>You can put any valid JavaScript expression inside the curly braces in template literals. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions and then they will by taken as strings.</p>
      
      <h3>Prevents Injection Attacks</h3>
      <p>If there is Javascript inside of the nodes it will not be rexecuted</p>
      <DisplayCode full="true" id="malicious"></DisplayCode>


      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <p>If you want to sent a JSON string you must to use single quotes to avoid conflicts with the double quotes from the JSON format.</p>   
      <DisplayCode full="true" id="stringify"></DisplayCode>
      <p>As you can see, we could serialize and deserialize an Object using single quotes into the value of the attribute of the node.</p>
      <p>Naturally, the deserialize object is not the same that was serialized, but in the following lessons we learn how to receive the same object  working with properties in a particular way.</p>

  </div>`}function K(){return this.beforeAppendChild=async e=>{let o=e.querySelectorAll("code"),t=await fetch("react/livecode/HelloMessage.js");t=await t.text(),o.forEach(i=>{i.textContent=t}),Prism.highlightAll()},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    LiftingStateUp
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Consider this variable declaration:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

        <DisplayCode></DisplayCode>
      <p>This funny tag syntax is a string similar to HTML sintax.</p>
      <hr>
      <h2>Template Literals</h2>
      <p>It is a single string, and it is native in JavaScript. We recommend using it with React to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript.</p>
      <p>This string will became in HTML \u201Celements\u201D. We will explore rendering them to the DOM in the next section. Below, you can find the basicsconcepts necessary to get you started.</p>
      
      <h3>Why Template Literals?</h3>

      <p>React do not need to over engineer ading more libraries like JSX. In fact, the rendering goes streightly into HTML usint the innerHTML property of the nodeElements from the DOM.</p>
      <p>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called \u201Ccomponents\u201D that contain both.</p>
      <p>With that out of the way, let\u2019s get started!</p>

      <h3>Printing variables into the template literals</h3>
      <p>In the example below, we declare a variable called name and then use it inside template literals by wrapping it in a dollar sign plus curly braces:</p>
      <DisplayCode></DisplayCode>

      <p>You can put any valid JavaScript expression inside the curly braces in template literals. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.</p>
      <p>In the example below, we embed the result of calling a JavaScript function, formatName(user), into an (h1) element.</p>
      <DisplayCode></DisplayCode>


      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>If you want to sent a JSON string you must to use ingle quotes to avoid conficts with the double quottes from the JSON format.</em>   
      
  </div>`}function B(){return this.beforeAppendChild=async e=>{let o=e.querySelectorAll("code"),t=await fetch("react/livecode/HelloMessage.js");t=await t.text(),o.forEach(i=>{i.textContent=t}),Prism.highlightAll()},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    ListAndKeys
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Consider this variable declaration:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

        <DisplayCode></DisplayCode>
      <p>This funny tag syntax is a string similar to HTML sintax.</p>
      <hr>
      <h2>Template Literals</h2>
      <p>It is a single string, and it is native in JavaScript. We recommend using it with React to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript.</p>
      <p>This string will became in HTML \u201Celements\u201D. We will explore rendering them to the DOM in the next section. Below, you can find the basicsconcepts necessary to get you started.</p>
      
      <h3>Why Template Literals?</h3>

      <p>React do not need to over engineer ading more libraries like JSX. In fact, the rendering goes streightly into HTML usint the innerHTML property of the nodeElements from the DOM.</p>
      <p>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called \u201Ccomponents\u201D that contain both.</p>
      <p>With that out of the way, let\u2019s get started!</p>

      <h3>Printing variables into the template literals</h3>
      <p>In the example below, we declare a variable called name and then use it inside template literals by wrapping it in a dollar sign plus curly braces:</p>
      <DisplayCode></DisplayCode>

      <p>You can put any valid JavaScript expression inside the curly braces in template literals. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.</p>
      <p>In the example below, we embed the result of calling a JavaScript function, formatName(user), into an (h1) element.</p>
      <DisplayCode></DisplayCode>


      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>If you want to sent a JSON string you must to use ingle quotes to avoid conficts with the double quottes from the JSON format.</em>   
      
  </div>`}function _(){return this.beforeAppendChild=async e=>{Prism.highlightAllUnder(e)},this.helloMessage=()=>`import getComponent from &#39;../js/FunctionalComponent.js&#39;;

function HelloMessage({ prop = &quot;Taylor&quot; }) {
    return \`&lt;div&gt;
        Hello \${prop}
    &lt;/div&gt;\`
}

let root = getComponent(HelloMessage)
root.kiwiSelector(&#39;body&#39;)  `,this.kiwiSekector=()=>`let root = getComponent(HelloMessage)
root.kiwiSelector('body') 
// or
getComponent(HelloMessage).kiwiSelector('body') `,this.fragmentedUpdate=()=>`import getComponent from &#39;./js/FunctionalComponent.js&#39;;

function FragmentedUpdate() {
    let [counter, setCounter] = this.useState(0)
    this.tick = () =&gt; {
        setCounter(counter+1)
    }
    setTimeout(this.tick, 1000)
    return \`&lt;main&gt;
        &lt;h1&gt;Counter&lt;/h1&gt;
        &lt;ul&gt;&lt;li&gt;It is \${counter}.&lt;/li&gt;&lt;/ul&gt;
        &lt;/main&gt;\`
}

getComponent(FragmentedUpdate).kiwiSelector(&#39;body&#39;)`,this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Rendering Elements
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Rendering an Element into the DOM</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

        <DisplayCode full="true" id="hello-message" content="helloMessage"></DisplayCode>
      <p>Kiwi JS allows you create any regular function as a component, just using the wrapper <strong>getComponent()</strong> .</p>
      <hr>
      <h2>Component Root</h2>
      <p>That first component will be able to select from the <strong>document</strong> any node Element as a container using the method <strong>kiwiSelector()</strong> and using as parameter any <strong>css selector</strong>.</p>
      <DisplayCode full="true" id="kiwiSekector" content="kiwiSekector"></DisplayCode>

      <h2>Updating the Rendered Element</h2>
      <p>As you can explore in the developer tools, Kiwi JS components only update the component element that is different, keeping the component's content static without re-rendering.</p>
      <DisplayCode full="true" id="fragemted-update" content="fragmentedUpdate" ></DisplayCode>
      
      
  </div>`}function Y(){return this.beforeAppendChild=async e=>{setTimeout(()=>{Prism.highlightAll()},10)},this.enableSubComponents({DisplayCode:n}),this.useStateExample=()=>"let [counter, setCounter] = this.useState(0)",this.useStateExample2=()=>`export default function State() {
      let value = JSON.parse(localStorage.getItem(&#39;counter&#39;) || &#39;0&#39;)
      let [counter, setCounter] = this.useState(value)
      this.doSomething = () =&gt; {
          localStorage.setItem(&#39;counter&#39;, counter + 1)
          setCounter(counter + 1)
      }
      this.enableEvents(&#39;click&#39;) // we will see this  in the next section
      return \`&lt;div click=&quot;doSomething&quot;&gt;\${counter}&lt;/div&gt;\`
  }`,`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    State And Lifecycle
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">State is not touched.</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>
      <p>In Kiwi Js the we can not acces straing to the state of the components. We can handle it by a a special method called <strong>this.useState()</strong>.</p>
      <p>This method return an array with two elements. The first one is a shallow copy of one element of the state and se second element is a setter method.</p>
        <DisplayCode content="useStateExample"></DisplayCode>
      <p>The method receive a defaul value of the state element you want to handle witch is use only the first time the component is run.</p>
      <p>After the first run the value of that state element is changing as much as to want using the setter method.</p>
      <p>The destructuring javascript sintax is  really useful to work with.</p>
      <p>You can change the value of the shallow copy as you want and there is not restriction to do that.</p>
      <p>You must to know that the setter method has a side effect witch is re-execute the function component to re render the component.</p>
      <hr />
      
      <h2>The UseState Method</h2>
      <p>It is not needed import any special module to work with <strong>this.useState()</strong>  method.</p>
      <p>The best way to use the <strong>this.useState()</strong>  method is combining with localStorage API.</p>
      <DisplayCode full="true" content="useStateExample2"></DisplayCode>
      <p>You will find a cool example in the landing page of this website in the TodoList Project.</p>
      <p>That example is using  some other special method tha we will see in the following lesson such as <strong> this.beforeAppendChild</strong>  method, <strong> this.arrayDispatcher</strong>  method, and <strong> this.enableEvents</strong>  method.</p>
      
  </div>`}function V(){return this.beforeAppendChild=async e=>{let o=e.querySelectorAll("code"),t=await fetch("react/livecode/HelloMessage.js");t=await t.text(),o.forEach(i=>{i.textContent=t}),Prism.highlightAll()},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    ThinkingInReact
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">Consider this variable declaration:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>

        <DisplayCode></DisplayCode>
      <p>This funny tag syntax is a string similar to HTML sintax.</p>
      <hr>
      <h2>Template Literals</h2>
      <p>It is a single string, and it is native in JavaScript. We recommend using it with React to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript.</p>
      <p>This string will became in HTML \u201Celements\u201D. We will explore rendering them to the DOM in the next section. Below, you can find the basicsconcepts necessary to get you started.</p>
      
      <h3>Why Template Literals?</h3>

      <p>React do not need to over engineer ading more libraries like JSX. In fact, the rendering goes streightly into HTML usint the innerHTML property of the nodeElements from the DOM.</p>
      <p>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called \u201Ccomponents\u201D that contain both.</p>
      <p>With that out of the way, let\u2019s get started!</p>

      <h3>Printing variables into the template literals</h3>
      <p>In the example below, we declare a variable called name and then use it inside template literals by wrapping it in a dollar sign plus curly braces:</p>
      <DisplayCode></DisplayCode>

      <p>You can put any valid JavaScript expression inside the curly braces in template literals. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.</p>
      <p>In the example below, we embed the result of calling a JavaScript function, formatName(user), into an (h1) element.</p>
      <DisplayCode></DisplayCode>


      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>If you want to sent a JSON string you must to use ingle quotes to avoid conficts with the double quottes from the JSON format.</em>   
      
  </div>`}function G(){return this.beforeAppendChild=async e=>{let o=e.children[0];{let t=o.querySelector("#event-bus code"),i=await fetch("src/basic/EventBus.js");i=await i.text(),t.textContent=i}{let t=`import getComponent from './js/FunctionalComponent.js';
      function Main() {
          const [variable, setVariable, value] = this.variableDispatcher('Default value')
          variable.subscribe(
              (newValue) => console.log(newValue) // New value 
          ) 
          console.log(variable.value) // Default value
          console.log(value) // Default value 
          setVariable('New value')
          console.log(variable.value) //  New value 
          console.log(value) // Default value <= Not updated
          return \`<div>
              Working with variableDispatcher
          </div>\`
      }
      getComponent(Main).kiwiSelector('body')`,i=o.querySelector("#variable-dispatcher code");i.textContent=t}{let t=`import getComponent from './js/FunctionalComponent.js';
  function Main() {
      const [list, setList, array] = this.arrayDispatcher(['default value'])
      list.subscribe(
          (newList) => console.log(newList) // ['new value'] <= shallow copy
      ) 
      console.log(list.items) // ['default value'] <= shallow copy
      console.log(array) // ['default value'] <= original array
      setList(['new value'])
      console.log(list.items) // ['new value'] <= shallow copy
      console.log(array) // ['new value'] <= original array
      return \`<div>
          Working with arrayDispatcher
      </div>\`
  }
  getComponent(Main).kiwiSelector('body')
  `,i=o.querySelector("#array-dispatcher code");i.textContent=t}Prism.highlightAll()},this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Custom Observers
    </h2>
    <article class="blog-post">
      <h3 class="blog-post-title">Sharing Data:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>
      <p>One of the most chalenger features of javascript developers is share data alog the web application. Kiwi Js offer you an built-in solution to share  data with sub-components reacting when the data is updated. They are the <strong>this.arrayDispatcher(['default value'])</strong> and <strong>this.variableDispatcher('default value')</strong> methods.</p>
      <p>But before let dive into the Observer Patern and the EventBus Example.</p>
      <hr>
      <h2>Observer Patern and the EventBus </h2>
      <p>As you must to know, the observer pattern is a way of many elements spread along the app can be notified when special event happened.</p>
      <p>There are 4 concept that you have to know when you use the observer patern.</p>
      <ul>
        <li><strong>Dispatch</strong>: When the event is triggered.</li>
        <li><strong>Subscribe</strong>: How to be part of the observer system. Similar to <i>addEventListener</i> native method.</li>
        <li><strong>Callback</strong>: It is the equivalent of the <i>eventHandler</i>.</li>
        <li><strong>Payload</strong>: It is the object that is sent to every callbak subscribed. It is the equivalent to the <i>event Object</i>. </li>
      </ul>
      <p>In the code bellow you will see an EventBus class that implement those concepts.</p>
        <DisplayCode id="event-bus" fileName="EventBus"></DisplayCode>
      <p>Kiwi JS make an simplified implementation of that class in the following mehtods.</p>
      

      <hr/>
      <h2>Variable Dispatcher Method</h2>
      <p>This is a method that provide an array with three elements:</p>
      <ol>
        <li>A subscriber object that contain the <strong>value</strong> and the <strong>subscribe</strong> method.</li>
        <li>A Setter method to update the value of that variable and will trigger every callback subscribed</li>
        <li>The original value</li>
      </ol>

      <DisplayCode  id="variable-dispatcher" fileName="Variable Dispatcher" full="true" ></DisplayCode>

      <p>After the setter is triggered the variable value is not updated due the primitive values does not mutate. At the moment the primitives values allowed are:</p>
      <ol>
        <li>number</li>
        <li>string</li>
        <li>undefined</li>
      </ol>
      <hr/>
      <h2>Array Dispatcher  Method</h2>
      <p>This is a method that provide an array with three elements:</p>
      <ol>
        <li>A subscriber object that contain the <strong>items</strong> and the <strong>subscribe</strong> method.</li>
        <li>A Setter method to update the list of that variable and will trigger every callback subscribed</li>
        <li>The original array</li>
      </ol>

      <DisplayCode id="array-dispatcher" fileName="Array Dispatcher " full="true" ></DisplayCode>

      <blockquote class="blockquote">
        <p>Note</p>
      </blockquote>
      <em>When the setters method are triggered the component is not re renderer as the state setter of useState feature.</em>   
      
  </div>`}function X(){return this.beforeAppendChild=async e=>{let o=e.querySelector("#reducer code"),t=await fetch("react/livecode/Reducer.js");t=await t.text(),o.textContent=t,Prism.highlightAll()},this.fragmentedUpdate=()=>`import getComponent from &#39;./js/FunctionalComponent.js&#39;;

function FragmentedUpdate() {
    let [counter, setCounter] = this.useState(0)
    this.tick = () =&gt; {
        setCounter(counter+1)
    }
    setTimeout(this.tick, 1000)
    return \`&lt;main&gt;
        &lt;h1&gt;Counter&lt;/h1&gt;
        &lt;ul&gt;&lt;li&gt;It is \${counter}.&lt;/li&gt;&lt;/ul&gt;
        &lt;/main&gt;\`
}

getComponent(FragmentedUpdate).kiwiSelector(&#39;body&#39;)`,this.useEffect2=()=>`import getComponent from &#39;./js/FunctionalComponent.js&#39;;

function SubComponent({name}){
this.useEffect(() =&gt; { //side effect
  document.title = \`You clicked \${count} times\`;
}, []) 
return \`&lt;li&gt; hello \${name + &#39; &#39; + (n)}&lt;/li&gt;\`

getComponent(FragmentedUpdate).kiwiSelector(&#39;body&#39;)`,this.enableSubComponents({DisplayCode:n}),`<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
    <h2 class="pb-4 mb-4 fst-italic border-bottom">
    Hooks
    </h2>

    <article class="blog-post">
      <h3 class="blog-post-title">UseState was a Hook:</h3>
      <p class="blog-post-meta">November 4, 2021 by <a href="https://twitter.com/samugarrondev" target="_blank" rel="noopener noreferrer">@samugarrondev</a></p>
      <p>The most common hook is the <strong>this.useState()</strong> method. As you know, we were using that hook in the previous examples. </p>

        <DisplayCode content="fragmentedUpdate" full="true"></DisplayCode>
      <p>There is a goon explanation of useState hook in the previous lesson.</p>
      <hr>
      <h2>UseEffect</h2>
      <p>The Effect Hook lets you perform side effects in function components.</p>
      <DisplayCode content="useEffect2" full="true"></DisplayCode>
      <p>We set the document title to a custom message. As a second parameter, it is expected receive the dependencies to execute the callbak sent.</p>
      
      <h3>UseReducer</h3>

      <p>This is a fractional implementation of the observer pattern design, where there are state changes when a particular event named "action" happens.</p>
      <DisplayCode id="reducer" full="true"></DisplayCode>
      <p> There is not required import any extra module to use these hooks, because they are built-in by default.</p>

</div>`}function Ee(){this.enableSubComponents({HelloWorld:U,IntroducingTemplateLiterals:$,RenderingElements:_,ComponentsAndProps:O,StateAndLifecycle:Y,HandlingEvents:F,ConditionalRendering:R,ListAndKeys:B,Forms:W,LiftingStateUp:K,CompositionVsInheritance:P,ThinkingInReact:V,CustomObservers:G,Hooks:X});let e={};Object.keys(D).forEach(a=>{e[a]=`<${a}></${a}>`});let o=localStorage.getItem("concept")||"HelloWorld",[t,i]=this.useState(o);return this.beforeAppendChild=()=>{u.subscribe("Docs-page",a=>{localStorage.setItem("concept",a),i(a),window.scrollTo({top:0,left:0,behavior:"smooth"})})},`${e[t]}`}function z(){return this.enableSubComponents({Switcher:Ee,Aside:M}),`<div class="container" style="padding-top: 56px">
        <div class="row g-5">
            <Switcher></Switcher>
            <Aside></Aside>
        </div>
    </div>`}function Ie({variable:e}){let[o,t]=this.useState(e.value);this.beforeAppendChild=()=>{e.subscribe(()=>{t(e.value)})};var i=new remarkable.Remarkable;return`
        <div class="content">
            ${i.render(o)}
        </div>`}function Q(){this.enableEvents(["keyup"]);let[e,o,t]=this.variableDispatcher("Hello, **world**!");return this.handleChange=i=>{o(i.target.value)},this.enableSubComponents({Output:Ie}),this.variableProvider=()=>e,`
        <div class="MarkdownEditor">
            <h3>Input</h3>
            <label for="markdown-content">
                Enter some markdown
            </label><br/>
            <textarea  id="markdown-content" 
                keyup="handleChange">${t}</textarea>
            <h3>Output</h3>
            <Output variable="variableProvider"></Output>
        </div>`}function Z(){return this.beforeAppendChild=async e=>{let o=e.querySelector("code"),t=await fetch("react/livecode/Remarkable.js");t=await t.text(),o.textContent=t,Prism.highlightAll(),g(Q).kiwiSelector(".demo-external-library")},this.enableSubComponents({DisplayCode:n}),`
    <div class="album pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
                <!-- left -->
                <div class="col-lg-3">
                    <div class="">
                        <div class="card-body">
                            <h3 class="text-black fw-bold">A Component Using External Plugins</h3>
                            <p class="card-text text-bold">Kiwi JS really allows you to interface with other libraries and frameworks. This example uses <b>remarkable</b>, an external Markdown library, to convert the &lt;textarea&gt;\u2019s value in real time.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-6">
                    <DisplayCode></DisplayCode>
                </div>
                <!-- demo -->
                <div class="col-lg-3"> 
                    <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                        <div class="card-header py-3 text-white bg-secondary ">
                            <h4 class="my-0 fw-normal">Result</h4>
                        </div>
                        <div class="card-body border-secondary demo-external-library">
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
        `}function Le({list:e}){let[o,t]=this.useState(e.items);return this.beforeAppendChild=()=>{e.subscribe(()=>{t(e.items)})},`
    <ul>
        ${o.map(i=>`<li>${i}</li>`)}
    </ul>`}function qe({list:e}){let[o,t]=this.useState(e.items);return this.beforeAppendChild=()=>{e.subscribe(()=>{t(e.items)})},`<button >Add #${o.length+1}</button>`}function ee(){this.enableSubComponents({TodoList:Le,button:qe});let[e,o,t]=this.arrayDispatcher(["default value"]);return this.handleChange=function(i){t.push(i.target.querySelector("input").value),o(t),i.target.querySelector("input").value="",i.preventDefault()},this.enableEvents(["submit"]),this.dataProvider=()=>e,`<div>
    <h3>TODO</h3>
    <TodoList list="dataProvider"></TodoList>
    <form submit="handleChange" >
        <label for="new-todo">What needs to be done?</label>
        <input id="new-todo" value="">
        <button list="dataProvider"></button>
    </form>
</div>`}function te(){let[e,o]=this.useState(!0);return this.beforeAppendChild=async t=>{this.codeContainer=t.querySelector("pre");let i=t.querySelector("code"),a=await fetch("react/livecode/Todo.js");a=await a.text(),i.textContent=a,Prism.highlightAll(),g(ee).kiwiSelector(".todo-app"),this.fullScreen=!1},this.enableSubComponents({DisplayCode:n}),`
    <div class="album pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
                <!-- left -->
                <div class="col-lg-3">
                    <div class="">
                        <div class="card-body">
                            <h3 class="text-black fw-bold">An Application</h3>
                            <p class="card-text text-bold">Using <i>properies</i> and <i>state</i>, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-6">
                    <DisplayCode></DisplayCode>
                </div>
                <!-- demo 123-->
                <div class="col-lg-3 an-aplication"> 
                    <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                        <div class="card-header py-3 text-white bg-secondary ">
                            <h4 class="my-0 fw-normal">Result</h4>
                        </div>
                        <div class="card-body border-secondary todo-app">
                        </div>
                    </div>
                </div>
                <style>
                    .an-aplication input, 
                    .an-aplication button
                    {
                        margin-bottom: 10px;
                        border-radius: 5px;
                        border: 1 solid gray;
                    }
                </style>
            
            </div>
        </div>
      </div>
        `}function oe(){return this.beforeAppendChild=async e=>{let o=e.querySelector("code"),t=await fetch("react/livecode/HelloMessage.js");t=await t.text(),o.textContent=t},this.enableSubComponents({DisplayCode:n}),`
    <div class="album pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
                <!-- left -->
                <div class="col-lg-4">
                    <div class="">
                        <div class="card-body">
                            <h3 class="text-black fw-bold">A Simple Component</h3>
                            <p class="card-text text-bold">Kiwi JS components doesn't implement any special method, It use a <b>functionals component</b> to takes input data and returns what to display. This example uses <b>Template literals</b> and it is not needed any syntactic sugar. Input data that is passed into the component can be accessed as parameter and  via this.prop. (We dont use props in plural)</p>
                            <p class="card-text text-bold">There is <b>not compilation step</b> required.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-6">
                    <DisplayCode ></DisplayCode>
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
        `}var we=null;function Ne(){let[e,o]=this.useState(0);return this.tick=()=>{document.contains(this.node)?o(e+1):clearInterval(we)},we=setTimeout(this.tick,1e3),`<div> Counter: ${e}</div>`}var Ce=Ne;function ie(){return this.beforeAppendChild=async e=>{let o=e.querySelector("code"),t=await fetch("react/livecode/State.js");t=await t.text(),o.textContent=t.replaceAll("// ","").split(`
`).filter((a,s)=>![].includes(s)).join(`
`),g(Ce).kiwiSelector(".a-stateful-component")},this.enableSubComponents({DisplayCode:n}),`
    <div class="album pt-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-3">
                <!-- left -->
                <div class="col-lg-4">
                    <div class="">
                        <div class="card-body">
                            <h3 class="text-black fw-bold">A Stateful Component</h3>
                            <p class="card-text text-bold">In addition to taking input data (accessed via this.prop), a component can maintain internal <b>state</b> data (accessed via <b>this.useState()</b> method)</p>
                            <p class="card-text text-bold">When a component\u2019s state data changes, the rendered markup will be updated by re-invoking <b>constructor()</b> method.</p>
                        </div>
                    </div>
                </div>
                <!-- left -->
                <div class="col-lg-6">
                    <DisplayCode></DisplayCode>
                </div>
                <!-- demo -->
                <div class="col-lg-2"> 
                    <div class="card mb-4 rounded-3 shadow-sm border-secondary">
                        <div class="card-header py-3 text-white bg-secondary ">
                            <h4 class="my-0 fw-normal">Result</h4>
                        </div>
                        <div class="card-body border-secondary a-stateful-component">
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
        `}function ae(){return this.goto=e=>{u.dispatch("General-page",1),e.preventDefault()},this.enableEvents("click"),`<div class="container-fluid py-5 text-center container-fluid k-bg-4">
    <a href="#" class="btn my-2 py-2 k-bg-2" click="goto">Get Starter</a>
    <a href="#" class="btn my-2 py-2 k-border-2 k-color-2 ms-4" click="goto">Take a tutorial</a>
  </div>`}function se(){return this.goto=e=>{u.dispatch("General-page",1),e.preventDefault()},this.enableEvents("click"),`<section class="container-fluid py-5 text-center container-fluid k-bg-4" >
      <div class="row py-lg-5" >
        <div class="col-lg-6 col-md-8 mx-auto" style="padding-top: 56px">
          <h1 class="fw-bolder  k-color-2">Kiwi JS</h1>
          <p class="lead text-light">A killer  JavaScript library for building user interfaces<br/>
            <b class="k-color-1">Faster</b>, 
            <b class="k-color-1">smaller</b>, 
            <b class="k-color-1">native</b>. No npm required. <br> It's not hype, it is JavaScript</p>
            <a href="#" class="btn my-2 py-2 k-bg-2" click="goto">Get Starter</a>
            <a href="#" class="btn my-2 py-2 k-border-2 k-color-2 ms-4" click="goto">Take a tutorial</a>
          </p>
        </div>
      </div>
    </section>`}function ne(){return`<div class="col">
    <div class="card shadow-sm border-dark">
        <div class="card-body k-bg-4">
            <h3 class="k-color-2 fw-light">Component-Based</h3>
            <p class="card-text text-light">Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
            <p class="card-text text-light">Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
        </div>
    </div>
</div>`}function re(){return` <div class="col">
    <div class="card shadow-sm border-dark">
        <div class="card-body k-bg-4">
            <h3 class="k-color-2 fw-light">Declarative</h3>
            <p class="card-text text-light">Kiwi JS makes it painless to create interactive UIs. Design simple
                views for each state in your application, and Kiwi JS will efficiently update and render just the
                right components when your data changes.</p>
            <p class="card-text text-light">Declarative views make your code more predictable and easier to debug.</p>
        </div>
    </div>
</div>`}function le(){return`<div class="col">
    <div class="card shadow-sm border-dark">
        <div class="card-body k-bg-4">
            <h3 class="k-color-2 fw-light">Learn Once, Write Anywhere</h3>
            <p class="card-text text-light">We don\u2019t make assumptions about the rest of your technology stack, so you can develop new features in Kiwi JS without rewriting existing code.</p>
            <p class="card-text text-light">It would be easy render on the server using Node and power mobile apps using this library.</p>
        </div>
    </div>
</div>`}function ce(){return this.enableSubComponents({Declarative:re,ComponentBased:ne,LearnOnce:le}),`
<div class="album py-5 ">
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-md-3 g-3">
            <Declarative></Declarative>
            <ComponentBased></ComponentBased>
            <LearnOnce></LearnOnce>
        </div>
    </div>
  </div>
    `}function pe(){return this.enableSubComponents({Section:se,ThreeColumns:ce,ASimpleComponent:oe,AStatefulComponent:ie,AnApplication:te,AComponentUsingExternalPlugins:Z,Pricing:ae}),`<main>
    <Section></Section>
    <ThreeColumns></ThreeColumns>
    <div class="container"><hr></div>
    <ASimpleComponent></ASimpleComponent>
    <AStatefulComponent></AStatefulComponent>
    <AnApplication></AnApplication>
    <AComponentUsingExternalPlugins></AComponentUsingExternalPlugins>
    <Pricing></Pricing>
</main>`}function de(){this.enableSubComponents({Home:pe,Docs:z});let e=JSON.parse(localStorage.getItem("page")||"0"),[o,t]=this.useState(e);return this.beforeAppendChild=()=>{u.subscribe("General-page",a=>{console.log(a),localStorage.setItem("page",a),t(a),window.scrollTo({top:0,left:0,behavior:"smooth"})})},`<div>${["<Home></Home>","<Docs></Docs>"][o]}</div>`}function he(){return this.enableSubComponents({header:J,Footer:H,Content:de}),`<div class="-k-bg-3">
        <header></header>
        <Content></Content>
        <Footer></Footer>
    </div>`}g(he).kiwiSelector("body");
//# sourceMappingURL=index.js.map
