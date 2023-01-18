import typescriptLogo from './typescript.svg'
import { setupCounter } from './setData'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="set-data" type="button">Set data</button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#set-data')!)
