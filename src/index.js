import riCreate from './js/index'
import printShit from './js/print'

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  btn.innerHTML = 'Click me!';
  btn.onclick = printShit;

  // conole.log('hit')

  element.appendChild(btn);

  return element;
}

printShit();
document.body.appendChild(component());

document.body.appendChild(riCreate());
