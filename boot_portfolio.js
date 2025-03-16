// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile navbar toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler) {
  navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
  });
}

// Close mobile menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

  // Initialize carousels
  var carouselList = [].slice.call(document.querySelectorAll('.carousel'));
  var carousels = carouselList.map(function(carouselEl) {
    return new bootstrap.Carousel(carouselEl, {
      interval: 5000,
      wrap: true
    });
  });

  // Set current year in footer copyright
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Add animation classes when elements come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, .skill-card, .education-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        if (!element.classList.contains('animate-scale-in')) {
          element.classList.add('animate-scale-in');
        }
      }
    });
  };
  
  // Run animation check on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic form validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would normally send the form data to a server
    // For demo purposes, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
    // Reset the form
    contactForm.reset();
  });
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// Run animation check on load and scroll
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer copyright
  const currentYearElement = document.querySelector('.copyright');
  if (currentYearElement) {
    currentYearElement.innerHTML = currentYearElement.innerHTML.replace('2025', new Date().getFullYear());
  }
  
  // Initialize animations
  animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);