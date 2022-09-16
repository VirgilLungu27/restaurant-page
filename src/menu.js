import _ from 'lodash';

function menuLoad() { 
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="menuhero">
        <img src="./food-pattern.jpg" a="chineserestaurant">
    </div>
    <div class="menupage">
        <div class="menumenu">
            <h3>Menu</h3>
        </div>
        <div class="menubeverages">
            <h3>Beverages</h3>
            <h4>Coca Cola 500ml <span></span> 7 lei</h4>
        </div>
        <div class="menusides">
            <h3>Sides</h3>
        </div>
        <div class="menumaincourse">
            <h3>Main Dishes</h3>
        </div>
    </div>
    ` 
    return element;
}

export { menuLoad } ;