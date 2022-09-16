import _ from 'lodash';

function historyLoad() { 
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="menuhero">
        <img src="./food-pattern.jpg" a="chineserestaurant">
    </div>        
    <div class="menumenuhistory">
        <h4>The history of Chinese cuisine is marked by both variety and change. The archaeologist and scholar Kwang-chih Chang says "Chinese people are especially preoccupied with food" and "food is at the center of, or at least it accompanies or symbolizes, many social interactions". Over the course of history, he says, "continuity vastly outweighs change." He explains basic organizing principles which go back to earliest times and give a continuity to the food tradition, principally that a normal meal is made up of grains and other starches (traditional Chinese: 飯; pinyin: fàn) and vegetable or meat dishes (菜; cài).</h4>
    </div>

    <div class="restauranthistory">
        <h4>The Qingdao restaurant in Bucharest was founded in 2019 upon the initiative of Mr. Virgil Lungu, a local entrepreneur conducting business in various parts of Romania. After a trip to China and Taiwan in 2015, he found a powerful attraction to local food and noticed a need of more competition on the Asian food market in Romania.</h4>
    </div>
    ` 
    return element;
}

export { historyLoad } ;