import _ from 'lodash';

function menuLoad() { 
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <img src="./food-pattern.jpg" a="chineserestaurant">
    </div>` 
    return element;
}

export { menuLoad } ;