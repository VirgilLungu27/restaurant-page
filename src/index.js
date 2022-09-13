import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `<img src="./chainesh.jpg" a="chineserestaurant">
  <h3>The Qingdao restaurant offers customers great food for low prices, with a wide variety of Asian dishes.</h3>`
  return element;
}

document.body.appendChild(component());