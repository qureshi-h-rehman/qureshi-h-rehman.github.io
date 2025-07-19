// effects.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize contact form
  initContactForm();
  
  // Initialize feather icons
  feather.replace();
  
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Make header sticky
  const header = document.getElementById('header-placeholder').firstElementChild;
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('sticky-header');
        header.style.backdropFilter = 'blur(10px)';
      } else {
        header.classList.remove('sticky-header');
        header.style.backdropFilter = 'none';
      }
    });
  }

  // Timeline Animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.timeline-content').style.transform = 'scale(1.05)';
    });
  });

  // Dark Mode Toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  // Form Validation
  const form = document.querySelector('#contact form');
  if (form) {
    form.addEventListener('submit', (e) => {
      if(!validateEmail(form.email.value)) {
        e.preventDefault();
        alert('Please enter a valid email address');
      }
    });
  }
});

function initContactForm() {
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}