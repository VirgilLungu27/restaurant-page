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

            <div><h4>Coca Cola 500ml</h4><h4>7 lei</h4></div>
            <div><h4>Fanta 500ml</h4><h4> 7 lei</h4></div>
            <div><h4>Sprite 500ml</h4><h4> 7 lei</h4></div>
            <h4>Dorna 500ml <span></span> 6 lei</h4>
            <h4>Borsec 500ml <span></span> 6 lei</h4>
            <h4>Ciuc 500ml <span></span> 8 lei</h4>
            <h4>Staropramen 500ml <span></span> 9 lei</h4>
            <h4>Heineken 400ml <span></span> 10 lei</h4>

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