import DisplayCode from "../livecode/DisplayCode.js"

export default function CustomObservers() {
  this.beforeAppendChild = async (parent) => {
    let parentNode = parent.children[0]
    {
      let code = parentNode.querySelector('#event-bus code')
      let data = await fetch('src/basic/EventBus.js')
      data = await data.text()
      code.textContent = data
    }
    {
      let variableDispatcher = `import getComponent from './js/FunctionalComponent.js';
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
      getComponent(Main).kiwiSelector('body')`
      let code = parentNode.querySelector('#variable-dispatcher code')
      code.textContent = variableDispatcher

    }
    {
      let arrayDispatcher = `import getComponent from './js/FunctionalComponent.js';
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
  `
      let code = parentNode.querySelector('#array-dispatcher code')
      code.textContent = arrayDispatcher
    }
   
    Prism.highlightAll();
  }
  this.enableSubComponents({ DisplayCode })

  return `<div class="col-md-8" style="padding-top: 2rem; margin-bottom: 2rem" >
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
      
  </div>`
}