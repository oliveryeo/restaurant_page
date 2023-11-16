import './styles.css';
import wipePage from './wipePage';
import pig_1 from './pig_1.png';
import pig_2 from './pig_2.png';

// Function to create the homeTab view page
const loadHomeTab = () => {
  wipePage();
  // Create title, testimony, hours, location then append to contentBox, then append to #content
  const title = document.createElement('div');
  title.classList.add('title');
  const pigIcon_1 = new Image();
  pigIcon_1.src = pig_1;
  const pigIcon_2 = new Image();
  pigIcon_2.src = pig_2;
  title.appendChild(pigIcon_1);
  title.innerHTML += "Pig Pig Family's Teahouse";
  title.appendChild(pigIcon_2);

  const testimony = document.createElement('div');
  testimony.classList.add('testimony');
  
  const testimony_text = document.createElement('div');
  const testimony_author = document.createElement('div');

  testimony_author.textContent = '- Mama Pig';
  testimony_text.textContent = 'This tea is so damn good that I wanna bring along all the pigs in the world to try it out!';
  
  testimony.appendChild(testimony_text);
  testimony.appendChild(testimony_author);

  const hours = document.createElement('div');
  hours.classList.add('hours');
  const hours_title = document.createElement('div');
  const hours_sunday = document.createElement('div');
  const hours_monday = document.createElement('div');
  const hours_tuesday = document.createElement('div');
  const hours_wednesday = document.createElement('div');
  const hours_thursday = document.createElement('div');
  const hours_friday = document.createElement('div');
  const hours_saturday = document.createElement('div');

  hours_title.textContent = 'Opening Hours';
  hours_sunday.textContent = 'Sunday: Closed';
  hours_monday.textContent = 'Monday: 8am - 6pm';
  hours_tuesday.textContent = 'Tuesday: 8am - 6pm';
  hours_wednesday.textContent = 'Wednesday: 8am - 6pm';
  hours_thursday.textContent = 'Thursday: 8am - 6pm';
  hours_friday.textContent = 'Friday: 8am - 3pm';
  hours_saturday.textContent = 'Saturday: 11am - 3pm';

  hours.appendChild(hours_title);
  hours.appendChild(hours_sunday);
  hours.appendChild(hours_monday);
  hours.appendChild(hours_tuesday);
  hours.appendChild(hours_wednesday);
  hours.appendChild(hours_thursday);
  hours.appendChild(hours_friday);
  hours.appendChild(hours_saturday);

  const location = document.createElement('div');
  location.classList.add('location');
  const location_title = document.createElement('div');
  const location_description = document.createElement('div');

  location_title.textContent = 'Location';
  location_description.textContent = '223 Piggy Drive, Piggyland, Pigpen';

  location.appendChild(location_title);
  location.appendChild(location_description);

  const contentBox = document.createElement('div');
  contentBox.classList.add('content-box');
  contentBox.appendChild(title);
  contentBox.appendChild(testimony);
  contentBox.appendChild(hours);
  contentBox.appendChild(location);

  const content = document.querySelector('#content');
  content.appendChild(contentBox);

  const header = document.querySelector('header');
  header.children[0].classList.add('selected-tab'); // 1st child is the home tab
};

export default loadHomeTab;
