// Basic site interactivity
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('#nav-toggle');
  const navMenu = document.querySelector('nav ul');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
  
  // Highlight active link based on current URL
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});