import changeAtiveTab from "./changeAtiveTab.js"
import database from "./Database.js";
import Step, {content} from "./Step.js";


export default function main() {
  this.enableEvents('click');
  this.enableSubComponents([Step, content])
  let titles = Object.keys(database)
  this.changeAtiveTab = changeAtiveTab
  return `<div class="flex flex-wrap pb-60" id="tabs-id" style="min-height:75vh;">
    <div class="w-full px-8">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        ${titles.map(step=>`<${Step.name} data="${step}"></${Step.name}>`)}
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            ${titles.map(step=>`<${content.name} data="${step}" class="${(step=='Instalacion')?'block':'hidden'}"></${content.name}>`)}
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}