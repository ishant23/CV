// Select the navigation links and add an event listener to toggle the active class
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add the active class to the clicked link
    this.classList.add('active');
  });
});

// Select the "back to top" button and add an event listener to scroll to the top of the page
const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Select the header element and add a scroll event listener to change the opacity of the header as the user scrolls
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const headerHeight = header.offsetHeight;

  if (scrollPosition > headerHeight) {
    header.style.opacity = '0.8';
  } else {
    header.style.opacity = '1';
  }
});
