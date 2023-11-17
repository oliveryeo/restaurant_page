import initializePage from './initializePage';
import loadHomeTab from './homePage';
import loadMenuTab from './menuPage';
// import loadContactTab from './contactPage';

console.log("Hello!");

// Add header and footer, and load up homeTab
initializePage();

const homeButton = document.querySelector('header > button:first-child');
const menuButton = document.querySelector('header > button:nth-child(2)');
const contactButton = document.querySelector('header > button:last-child');

homeButton.addEventListener('click', () => {
  loadHomeTab();
});

menuButton.addEventListener('click', () => {
  loadMenuTab();
});



