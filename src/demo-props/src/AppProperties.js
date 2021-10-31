function Nav({ links , name, data}) {//props as parameters
    if (arguments[1]) return
    return `
    <Nav>
        <!-- props as object properties -->
        <h1>${this.prop.name}</h1>
        <ul>
            <li>${name}</li>
            ${links._map(link =>`<li>${link}</li>`)}
        </ul>
        <br/>
        <ul>
            ${data._map(link =>`<li>${link}</li>`)}
        </ul>
    </Nav>`
}

export default function AppProperties() {
    if (arguments[1]) return
    this.enableSubComponents([Nav])
    let data = [
        'Get started',
        'Documentation',
    ]
    this.dataProvider = () => { 
        return data;
    }
    return `
    <Header click="doSomething">
        <Nav links="dataProvider" 
            name="Jhon" 
            data='${JSON.stringify(data)}'>
            <!-- links: as a method -->
            <!-- name: as a string -->
            <!-- data: as a JSON stringified && single quotes required -->
        </Nav>
    </Header>`
}