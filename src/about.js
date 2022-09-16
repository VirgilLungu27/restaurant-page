import _ from 'lodash';

function aboutLoad() { 
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="menuhero">
        <img src="./food-pattern.jpg" a="chineserestaurant">
    </div>        
    <div class="aboutinfo">
        <h4>This project was created by Virgil Lungu. He is not an entrepreneur nor is he a VIP. This project was done using JavaScript's module pattern.</h4>
    </div>
    ` 
    return element;
}

export { aboutLoad } ;