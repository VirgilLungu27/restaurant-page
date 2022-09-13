import _ from 'lodash';
import './style.css'
function component() {
  const element = document.createElement('div');
  element.className = 'content';
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `
  <img src="./chainesh.jpg" a="chineserestaurant">
  <div class="welcome"><h1>Welcome to Qingdao.</q1></div>
  <div class="restaurant"><h3>The Qingdao restaurant offers customers great food for affordable prices, with a wide variety of Asian dishes.</h3></div>
  <div class="chef"><h3>We offer food prepared by experienced chefs, with ingredients outsourced from responsible sources.</div>`
  return element;
}

document.body.appendChild(component());