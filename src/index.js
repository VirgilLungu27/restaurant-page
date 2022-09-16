import _ from 'lodash';
import './style.css';
import { menuLoad } from './menu.js';

const element = document.createElement('div');
element.className = 'content';

function component() {
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `
  <div class="hero">
  <img src="./food-pattern.jpg" a="chineserestaurant">
  <button id="menu">Menu</button>
  <button id="contact">Contact</button>
  <button id="history">History</button>
  <button id="about">About</button>
  </div>
  <div class="welcome"><h1>Welcome to Qingdao.</h1></div>
  <div class="restaurant"><h3>The Qingdao restaurant offers customers great food for affordable prices, with a wide variety of Asian dishes.</h3></div>
  <div class="chef"><h3>We offer food prepared by experienced chefs, with ingredients outsourced from responsible sources.</h3></div>
  <div class="militari"><h3>Discover our shop in Militari and enjoy high-quality Chinese food.</h3></div>
  <div class="hours"><h4>Monday - Thursday: 10:00 - 23:00\n Friday - Saturday: 10:00 - 02:00\n Sunday: 14:00 - 00:00 <h5>306 Splaiul Independentei \n Bucuresti</h5></div>
  `
  return element;
}
document.body.appendChild(component());

const menuButton = document.getElementById('menu')

menuButton.addEventListener('click', function menuChange() {
  document.body.removeChild(component());
  document.body.appendChild(menuLoad());
})