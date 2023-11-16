import loadHomeTab from './homePage';

const initializePage = () => {
  const body = document.querySelector('body');

  const header = document.createElement('header');
  const header_home = document.createElement('div');
  const header_menu = document.createElement('div');
  const header_contact = document.createElement('div');
  header_home.textContent = "Home";
  header_menu.textContent = "Menu";
  header_contact.textContent = "Contact";
  header.appendChild(header_home);
  header.appendChild(header_menu);
  header.appendChild(header_contact);

  const footer = document.createElement('footer');
  footer.textContent = "Designed by Oliver Yeo | Icons made by Hery Mery and Freepik - flaticon.com";

  body.insertBefore(header, body.firstChild);
  body.appendChild(footer);

  // Load up the homepage
  loadHomeTab();
}

export default initializePage;