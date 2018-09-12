import _ from 'lodash';
import RiRi from '../img/ri.jpeg'

//just to show how various shit works
export default function component() {

  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  let riri = new Image();
  riri.src = RiRi;

  let br = document.createElement('br')

  element.appendChild(br);

  element.appendChild(riri);

  return element;
}

//document.body.appendChild(component());
