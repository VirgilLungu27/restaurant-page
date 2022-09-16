import _ from 'lodash';

function menuLoad() { 
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `<img src="./food-pattern.jpg" a="chineserestaurant">` 
    return element;
}

export { menuLoad } ;