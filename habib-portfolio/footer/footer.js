document.addEventListener('DOMContentLoaded', () => {
  // Load footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
      initFooter();
    })
    .catch(error => console.error('Error loading footer:', error));

  function initFooter() {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Smooth scrolling for footer links
    document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }
});