import Amala from "../../../images/amala.png";
import Boli from "../../../images/boli.jpg";
import Eba from "../../../images/eba.jpg";
import Edikan from "../../../images/edikan.png";
import Fufu from "../../../images/fufu.jpg";
import Jollof_Rice from "../../../images/Jollof-rice.jpg";
import Yam_Egg from "../../../images/yam-egg.jpg";


export const menu_list = () => {
    const section = document.createElement('section')
    
    section.classList.add('menu-list')    
    section.append(getCard(Amala, 5, 'Amala with ewedu and gbegiri soup'), 
                   getCard(Yam_Egg, 8, 'Traditional yam and egg sauce'), 
                   getCard(Boli, 12, 'Port Harcourt boli and groundnut'), 
                   getCard(Edikan, 10, 'Calabar edikan ikon soup'), 
                   getCard(Eba, 7, 'Eba and famous egusi soup' ), 
                   getCard(Jollof_Rice, 9, 'Party jollof rice with chicken lap'))
    
    return section
}

function getCard(food, cost, description) {
const card1 = document.createElement('div')
    const name = document.createElement('h5')
    const price = document.createElement('h6')
    const order_btn = document.createElement('button')
    const amala = new Image() 
    amala.src = food

    card1.classList.add('card')
    name.textContent = `${description}`;
    price.textContent = `$${cost}.00`;
    order_btn.textContent = `Book Now`;

    card1.append(amala, name, price, order_btn)
    return card1
}
