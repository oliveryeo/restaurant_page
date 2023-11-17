import './styles.css';
import wipePage from './wipePage';

// Function to create the Menu view page
const loadMenuTab = () => {
  wipePage();
  // Create title, testimony, hours, location then append to contentBox, then append to #content
  const title = document.createElement('div');
  title.classList.add('title');
  const pigIcon_1 = new Image();
  pigIcon_1.src = pig_1;
  const pigIcon_2 = new Image();
  pigIcon_2.src = pig_2;
  title.appendChild(pigIcon_1);
  title.innerHTML += "Menu";
  title.appendChild(pigIcon_2);

  const menuTitle = document.createElement('div');
  menuTitle.classList.add('menu-title');

}

export default loadMenuTab;
