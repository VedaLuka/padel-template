document.addEventListener('DOMContentLoaded', () => {
  // Navbar Toggle and Smooth Scrolling
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  // Toggle menu visibility on hamburger click
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close menu on link click or outside click
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('show');
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      navLinks.classList.remove('show'); // Close menu after navigation
    });
  });

  // Slideshow Functionality
  const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  const updateSlider = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    slides.style.transition = 'transform 0.5s ease-in-out';
  };

  // Event listeners for slider navigation buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex === 0) {
        currentIndex = slide.length - 1;
      } else {
        currentIndex -= 1;
      }
      updateSlider();
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex === slide.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      updateSlider();
    });
  }

  // Slideshow Auto-Play
  let slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlider();
  }, 5000);

  // Pause and Resume Slideshow on Hover
  const homeSection = document.querySelector('.home-section');
  if (homeSection) {
    homeSection.addEventListener('mouseenter', () => clearInterval(slideshowInterval));
    homeSection.addEventListener('mouseleave', () => {
      slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slide.length;
        updateSlider();
      }, 5000);
    });
  }
});
// Scroll-based animation for all sections
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
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  // Show the first slide initially
  slides[currentIndex].classList.add('active-slide');

  // Function to update slides
  const updateSlides = (index) => {
    slides.forEach(slide => slide.classList.remove('active-slide'));
    slides[index].classList.add('active-slide');
  };

  // Previous button event
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides(currentIndex);
  });

  // Next button event
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides(currentIndex);
  });
});


document.addEventListener('gesturestart', function(e) {
  e.preventDefault(); // Prevent pinch-to-zoom
});

document.addEventListener('dblclick', function(e) {
  e.preventDefault(); // Prevent double-tap zoom
});
