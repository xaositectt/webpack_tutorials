import riCreate from './js/index'
// import printShit from './js/print'
import './style/style.css'
// import { cube } from './js/math'

function createButton() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  btn.innerHTML = 'Click me!';
  // btn.onclick = printShit;

  element.appendChild(btn);

  return element
}

function createCalc() {
   let pre = document.createElement('pre')
   pre.innerHTML = [
     'well hello there Ri <3',
     'this is an imported function to calculate the volume of a cube',
    //  '5 cubed is equal to ' + cube(5)
   ].join('\n\n')

   return pre
}

let element = createButton()
let calcText = createCalc()

document.body.appendChild(element)
document.body.appendChild(calcText)
document.body.appendChild(riCreate())

if (module.hot) {
  module.hot.accept('./js/print.js', function () {
    console.log('Accepting the updated print module.')
    document.body.removeChild(element)
    element = createButton() //re-render the createButton to allow button to update
    document.body.appendChild(element)
  })
}
