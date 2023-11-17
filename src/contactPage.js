import './styles.css';
import wipePage from './wipePage';
import pig_1 from './pig_1.png';
import pig_2 from './pig_2.png';
import mamaPig from './mamaPig.png';
import papaPig from './papaPig.png';

const loadContactTab = () => {
  wipePage();
  // Create title, contacts, then append to contentBox, then append to #content
  // Title
  const title = document.createElement('div');
  title.classList.add('title');
  const pigIcon_1 = new Image();
  pigIcon_1.src = pig_1;
  const pigIcon_2 = new Image();
  pigIcon_2.src = pig_2;
  title.appendChild(pigIcon_1);
  title.innerHTML += "Contact Us";
  title.appendChild(pigIcon_2);

  // Contacts
  const contact_1_name = document.createElement('div');
  contact_1_name.textContent = "Mama Pig";
  
  const contact_1_description_1 = document.createElement('div');
  contact_1_description_1.textContent = "Co-owner";
  const contact_1_description_2 = document.createElement('div');
  contact_1_description_2.textContent = "888-888-8881";
  const contact_1_description_3 = document.createElement('div');
  contact_1_description_3.textContent = "mamaPig@piggyfamily.com";
  const contact_1_description = document.createElement('div');
  contact_1_description.appendChild(contact_1_description_1);
  contact_1_description.appendChild(contact_1_description_2);
  contact_1_description.appendChild(contact_1_description_3);

  const mamaPigImg = new Image();
  mamaPigImg.src = mamaPig;

  const contact_1 = document.createElement('div');
  contact_1.classList.add('contact-us');
  contact_1.appendChild(contact_1_name);
  contact_1.appendChild(contact_1_description);
  contact_1.appendChild(mamaPigImg);

  const contact_2_name = document.createElement('div');
  contact_2_name.textContent = "Papa Pig";
  
  const contact_2_description_1 = document.createElement('div');
  contact_2_description_1.textContent = "Co-owner";
  const contact_2_description_2 = document.createElement('div');
  contact_2_description_2.textContent = "888-888-8882";
  const contact_2_description_3 = document.createElement('div');
  contact_2_description_3.textContent = "papaPig@piggyfamily.com";
  const contact_2_description = document.createElement('div');
  contact_2_description.appendChild(contact_2_description_1);
  contact_2_description.appendChild(contact_2_description_2);
  contact_2_description.appendChild(contact_2_description_3);

  const papaPigImg = new Image();
  papaPigImg.src = papaPig;

  const contact_2 = document.createElement('div');
  contact_2.classList.add('contact-us');
  contact_2.appendChild(contact_2_name);
  contact_2.appendChild(contact_2_description);
  contact_2.appendChild(papaPigImg);

  // Append everything to #content
  const contentBox = document.createElement('div');
  contentBox.classList.add('content-box');
  contentBox.appendChild(title);
  contentBox.appendChild(contact_1);
  contentBox.appendChild(contact_2);
  
  const content = document.querySelector('#content');
  content.appendChild(contentBox);

  const header = document.querySelector('header');
  header.children[2].classList.add('selected-tab'); // last child is the contact tab
}

export default loadContactTab;

// Function to create the Contact view page