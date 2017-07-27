const remote = require('electron').remote
const main = remote.require('./main.js') // relative to root directory!

let button = document.createElement('button')
button.textContent = 'Setup'
button.addEventListener('click', ()=> {
  main.openWindow()
})

document.body.appendChild(button)

