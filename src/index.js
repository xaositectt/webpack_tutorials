import _ from 'lodash';
import './css/style.css';
import RiRi from './img/ri.jpeg'
import Data from './xml/data.xml'

//just to show how various shit works
function component() {

  console.log(Data)

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
