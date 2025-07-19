// Load Header and initialize
document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      initHeaderFunctions();
      feather.replace();
    })
    .catch(error => console.error('Error loading header:', error));

  function initHeaderFunctions() {
    // Mobile Menu Toggle
    document.addEventListener('click', function(e) {
      const menu = document.getElementById('mobileMenu');
      const icon = document.getElementById('menuIcon');
      
      // Menu button click
      if (e.target.closest('#menuBtn')) {
        if (menu && icon) {
          menu.classList.toggle('hidden');
          icon.innerHTML = menu.classList.contains('hidden') 
            ? '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />'
            : '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
        }
      }
      
      // Close menu when any mobile menu link is clicked
      if (e.target.closest('#mobileMenu a')) {
        if (menu && icon) {
          menu.classList.add('hidden');
          icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />';
        }
      }
      
      // Theme Toggle
      if (e.target.closest('#themeToggle')) {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', 
          document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        feather.replace();
      }
    });
    
    // Apply saved theme
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }
});
