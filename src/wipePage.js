const wipePage = () => {
  const header = document.querySelector('header');
  const content = document.querySelector('#content');

  // Clear all classes from header children
  for (const child of header.children) {
    child.className = "";
  }
  
  // Clear all content
  content.textContent = "";
}

export default wipePage;