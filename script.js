document.addEventListener('DOMContentLoaded', () => {
  // Navbar Toggle and Smooth Scrolling
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('show');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      navLinks.classList.remove('show');
    });
  });

  // Scroll-Based Animation
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section'); // Select all sections
    sections.forEach(section => {
      const content = section.querySelector('.content'); // Select the content inside the section
      if (content) {
        const rect = content.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          content.classList.add('active'); // Trigger animation
        }
      }
    });
  });

  // Slideshow Functionality
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  const updateSlides = () => {
    slides.forEach(slide => slide.classList.remove('active-slide'));
    slides[currentIndex].classList.add('active-slide');
  };

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    });
  }

  let slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }, 5000);

  const homeSection = document.querySelector('.home-section');
  if (homeSection) {
    homeSection.addEventListener('mouseenter', () => clearInterval(slideshowInterval));
    homeSection.addEventListener('mouseleave', () => {
      slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
      }, 5000);
    });
  }

  // Prevent Pinch and Double-Tap Zoom
  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.addEventListener('dblclick', (e) => e.preventDefault());
});
