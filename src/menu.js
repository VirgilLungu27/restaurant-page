import _ from 'lodash';

function menuLoad() { 
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="menuhero">
        <img src="./food-pattern.jpg" a="chineserestaurant">
    </div>
    <div class="menumenu">
        <h3>Menu</h3>
    </div>
    ` 
    return element;
}

export { menuLoad } ;