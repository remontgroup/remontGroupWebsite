const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.getElementById(link.getAttribute('href').substring(1));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});