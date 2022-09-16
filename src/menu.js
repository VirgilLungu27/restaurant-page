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
            <div><h4>Dorna 500ml</h4><h4> 6 lei</h4></div>
            <div><h4>Borsec 500ml</h4><h4> 6 lei</h4></div>
            <div><h4>Ciuc 500ml</h4><h4> 8 lei</h4></div>
            <div><h4>Staropramen 500ml</h4><h4> 9 lei</h4></div>
            <div><h4>Heineken 400ml</h4><h4> 10 lei</h4></div>
            <div><h4>Feteasca Alba 750ml</h4><h4> 65 lei</h4></div>
            <div><h4>Cabernet 750ml</h4><h4> 71 lei</h4></div>
            <div><h4>Finlandia 25ml</h4><h4> 10 lei</h4></div>

        </div>
        <div class="menusides">
            <h3>Sides</h3>
                <div><h4>4 slices of bread</h4><h4>2 lei</h4></div>
                <div><h4>150g French Fries</h4><h4>5 lei</h4></div>
                <div><h4>20g Mayonnaise</h4><h4>2 lei</h4></div>
                <div><h4>20g Sweet Ketchup</h4><h4>2 lei</h4></div>
                <div><h4>20g Spicy Ketchup</h4><h4>2 lei</h4></div>
        </div>
        <div class="menumaincourse">
            <h3>Main Dishes</h3>
        </div>
    </div>
    ` 
    return element;
}

export { menuLoad } ;