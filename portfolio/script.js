// Smooth scrolling and active link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight nav item on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form submission (dummy handler)
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out!');
});
// Accordion behavior for Education cards
function toggleDetails(el) {
  const isOpen = el.classList.contains("open");
  document.querySelectorAll(".card.open").forEach(card => {
    card.classList.remove("open");
  });
  if (!isOpen) {
    el.classList.add("open");
  }
}


// Scroll Animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .experience-card, .project-card, .card, .certification-card').forEach(el => {
  observer.observe(el);
});
