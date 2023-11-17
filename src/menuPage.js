import './styles.css';
import wipePage from './wipePage';
import pig_1 from './pig_1.png';
import pig_2 from './pig_2.png';
import beverage from './beverage.png';
import bandung from './bandung.jpeg';
import mains from './mains.png';
import chickenChop from './chicken-chop.jpeg';


// Function to create the Menu view page
const loadMenuTab = () => {
  wipePage();
  // Create title, menuTitle, menuDescription, then append to contentBox, then append to #content
  // title
  const title = document.createElement('div');
  title.classList.add('title');
  const pigIcon_1 = new Image();
  pigIcon_1.src = pig_1;
  const pigIcon_2 = new Image();
  pigIcon_2.src = pig_2;
  title.appendChild(pigIcon_1);
  title.innerHTML += "Piggy Menu";
  title.appendChild(pigIcon_2);

  // menuTitle
  const menuTitle_1 = document.createElement('div');
  menuTitle_1.classList.add('menu-title');
  menuTitle_1.textContent = "Beverages";
  const beverage_icon = new Image();
  beverage_icon.src = beverage;
  menuTitle_1.appendChild(beverage_icon);

  const menuTitle_2 = document.createElement('div');
  menuTitle_2.classList.add('menu-title');
  menuTitle_2.textContent = "Mains";
  const mains_icon = new Image();
  mains_icon.src = mains;
  menuTitle_2.appendChild(mains_icon);

  // menuDescription
  const description_1_title = document.createElement('div');
  description_1_title.textContent = "Piggy Bandung";

  const description_1_text = document.createElement('div');
  description_1_text.textContent = "A sweet, rosy and milky drink made with upmost love from the Piggy Family! This drink will fill up your day with sweetness and love!"

  const description_1_price = document.createElement('div');
  description_1_price.textContent = "$2.50";

  const bandungImg = new Image();
  bandungImg.src = bandung;
  
  const menuDescription_1 = document.createElement('div');
  menuDescription_1.classList.add('menu-description');
  menuDescription_1.appendChild(description_1_title);
  menuDescription_1.appendChild(description_1_text);
  menuDescription_1.appendChild(description_1_price);
  menuDescription_1.appendChild(bandungImg);

  const description_2_title = document.createElement('div');
  description_2_title.textContent = "Piggy Chicken Chop";

  const description_2_text = document.createElement('div');
  description_2_text.textContent = "An amazing, flavour-rich black pepper chicken chop, made with a secret recipe passed down from generations of the Piggy Family. A single bite will bring you to tears and joy!";

  const description_2_price = document.createElement('div');
  description_2_price.textContent = "$8.50";

  const chickenChopImg = new Image();
  chickenChopImg.src = chickenChop;
  
  const menuDescription_2 = document.createElement('div');
  menuDescription_2.classList.add('menu-description');
  menuDescription_2.appendChild(description_2_title);
  menuDescription_2.appendChild(description_2_text);
  menuDescription_2.appendChild(description_2_price);
  menuDescription_2.appendChild(chickenChopImg);
  
  // Append everything to #content
  const contentBox = document.createElement('div');
  contentBox.classList.add('content-box');
  contentBox.appendChild(title);
  contentBox.appendChild(menuTitle_1);
  contentBox.appendChild(menuDescription_1);
  contentBox.appendChild(menuTitle_2);
  contentBox.appendChild(menuDescription_2);
  
  const content = document.querySelector('#content');
  content.appendChild(contentBox);

  const header = document.querySelector('header');
  header.children[1].classList.add('selected-tab'); // 1st child is the home tab

};

export default loadMenuTab;
