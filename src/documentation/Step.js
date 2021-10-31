import changeAtiveTab from "./changeAtiveTab.js";
import Database from "./Database.js";

export default function button({ data }) {
  if (arguments[1]) return
  this.enableEvents('click');
  this.changeAtiveTab = changeAtiveTab
  return `<li class="-mb-px mr-2 last:mr-0 flex-auto text-center block">
    <a class="cursor-pointer text-xs font-bold uppercase px-2 py-1 shadow-lg rounded block leading-normal 
    ${(data != 'Instalacion') ? 'text-pink-600 bg-white' : 'text-white bg-pink-600'}" 
    click="changeAtiveTab" data-tab="tab-${data}">
       ${data}
    </a>
  </li>`
}

export function content({ data, class: block }) {
  if (arguments[1]) return
  // console.log(Database);
  
  return `<div class="${block}" id="tab-${data}">
    <h1 class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-block">
    ${data}
    </h1>
    ${(Database[data])?Database[data]:'none'}
  </div>`
}

// export default [button, body]