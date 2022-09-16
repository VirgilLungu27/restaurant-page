import _ from 'lodash';

function contactLoad() { 
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="menuhero">
        <img src="./food-pattern.jpg" a="chineserestaurant">
    </div>        
    <div class="menumenuhistory">
        <h4>Our contact information can be found below.</h4>
    </div>
    <div class="contactinfo">
        <h4>E-mail: qingdaobucharest@qingdao.com</h4>
        <h4>Phone number: 0814 999 999
    </div>
    ` 
    return element;
}

export { contactLoad } ;