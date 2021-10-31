const database = {
    "Instalacion":`<a href="src/demo-instalation/" target="_blank">Example</a> 
    <pre>
    /* src/index.js */
    import '../js/FunctionalComponent.js'; // #1 before components are loaded
    import App from './Layout.js'; // #2
    
    let layout = App.getComponent(App)
    layout.kiwiSelector('body')
  </pre>`,
  "First component":`<a href="src/demo-instalation/" target="_blank">Example</a>
  <pre>
    /* src/Layout.js */
    export default function Layout() {
        return \`&lt;div&gt;I am a Component&lt;/div&gt;\`
    }
  </pre>
  `,
  "SubComponents":`<a href="src/demo-subcomponent/" target="_blank">Example</a>
<pre>    /* src/Layout.js */
    import Footer from &quot;./Footer.js&quot;
    import Main from &quot;./Main.js&quot;
    import Nav from &quot;./Nav.js&quot;

    export default function Layout() {
        if (arguments[1]) return
        this.enableSubComponents([Nav, Main, Footer])
        return \`
        &lt;div &gt;
            &lt;Nav&gt;&lt;/Nav&gt;
            &lt;Main&gt;&lt;/Main&gt;
            &lt;Footer&gt;&lt;/Footer&gt;
        &lt;/div&gt;
        \`
    }

</pre>

<hr/>
<pre>

    /* src/Nav.js */
    export default function Nav() {
        return \`&lt;div&gt;I am a Nav Component&lt;/div&gt;\`
    }
  </pre>
  <hr/>
<pre>

    /* src/Main.js */
    export default function Main() {
        return \`&lt;div&gt;I am a Main Component&lt;/div&gt;\`
    }
  </pre>
  <hr/>
<pre>

    /* src/Footer.js */
    export default function Footer() {
        return \`&lt;div&gt;I am a Footer Component&lt;/div&gt;\`
    }
  </pre>
  `,
  "Events":`<a href="src/demo-events/" target="_blank">Example</a>
  <pre>
    /* src/Events.js */
    export default function Events(){
        this.doSomething = (e) =&gt;{
            console.log(e.target.textContent);
        }
        this.enableEvents('click')
        return \`&lt;div click=&quot;doSomething&quot;&gt;Click me&lt;/div&gt;\`
    }
</pre>`,
    "Props":`<a href="src/demo-props/" target="_blank">Example</a><pre>
    function Nav(\{ links , name, data}) \{//props as parameters
        if (arguments[1]) return
        return \`
        &lt;Nav&gt;
            &lt;!-- props as object properties --&gt;
            &lt;h1&gt;$\{this.prop.name}&lt;/h1&gt;
            &lt;ul&gt;
                &lt;li&gt;$\{name}&lt;/li&gt;
                $\{links._map(link =&gt;\`&lt;li&gt;$\{link}&lt;/li&gt;\`)}
            &lt;/ul&gt;
            &lt;br/&gt;
            &lt;ul&gt;
                $\{data._map(link =&gt;\`&lt;li&gt;$\{link}&lt;/li&gt;\`)}
            &lt;/ul&gt;
        &lt;/Nav&gt;\`
    }

    export default function AppProperties() \{
        if (arguments[1]) return
        this.enableSubComponents([Nav])
        let data = [
            &#39;Get started&#39;,
            &#39;Documentation&#39;,
        ]
        this.dataProvider = () =&gt; \{ 
            return data;
        }
        return \`
        &lt;Header click=&quot;doSomething&quot;&gt;
            &lt;Nav links=&quot;dataProvider&quot; 
                name=&quot;Jhon&quot; 
                data=&#39;$\{JSON.stringify(data)}&#39;&gt;
                &lt;!-- links: as a method --&gt;
                &lt;!-- name: as a string --&gt;
                &lt;!-- data: as a JSON stringified && single quotes required --&gt;
            &lt;/Nav&gt;
        &lt;/Header&gt;\`
    }
</pre>`,
    "Map":`<a href="src/demo-map/" target="_blank">Example</a>
<pre>    /* src/List.js */
    export default function List() \{
        if (arguments[1]) return
        let pages = [&#39;Home&#39;, &#39;Product&#39;, &#39;Contact&#39;]
        return \`
        &lt;ul&gt;
            $\{pages._map(page =&gt;\`&lt;li&gt;$\{page}&lt;/li&gt;\`)}
        &lt;/ul&gt;\`
    }

</pre>`,
    "State":`<a href="src/demo-state/" target="_blank">Example</a>
    <pre>
    /* src/State.js */
    export default function State() {
        let value = JSON.parse(localStorage.getItem(&#39;counter&#39;) || &#39;0&#39;)
        let [counter, setCounter] = this.useState(value)
        this.doSomething = () =&gt; {
            localStorage.setItem(&#39;counter&#39;, counter + 1)
            setCounter(counter + 1)
        }
        this.enableEvents(&#39;click&#39;)
        return \`&lt;div click=&quot;doSomething&quot;&gt;\$\{counter}&lt;/div&gt;\`
    }

</pre>`,
    "Just Once":`<a href="src/demo-justonce/" target="_blank">Example</a><pre>
    /* src/JustOnce.js */
    export default function JustOnce() {
        let [counter, setCounter] = this.useState(1)
        this.beforeAppendChild = (parentNode) =&gt; {
            /* Only once */
            console.log(parentNode.firstChild.innerText);
        }
        this.doSomething = () =&gt;{
            setCounter(counter + 1)
        }
        this.enableEvents(&#39;click&#39;)
        return \`&lt;div click=&quot;doSomething&quot;&gt;Counter: $\{counter}&lt;/div&gt;\`
    }

</pre>`,
    "Every Time":`<a href="src/demo-everytime/" target="_blank">Example</a>
    <pre>
    /* src/EveryTyme.js */
    export default function EveryTyme() {
        let [counter, setCounter] = this.useState(1)
        this.beforeAppendChild = (parent) =&gt; {
            console.log(parent.firstChild.innerText);
            /* Every time */
            this._firstTime = true
        }
        this.doSomething = () =&gt;{
            setCounter(counter + 1)
        }
        this.enableEvents(&#39;click&#39;)
        return \`&lt;div click=&quot;doSomething&quot;&gt;Counter: $\{counter}&lt;/div&gt;\`
    }

</pre>`
}
export default database;