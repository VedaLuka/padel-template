// script.js

// =====================================
// Background Slideshow for Home Section
// =====================================

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.slideshow');
    
    // Array of slide elements
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    let currentIndex = 0; // Current slide index
    let slideshowInterval; // To store the interval
    
    // Function to slide to the next image
    const slideNext = () => {
      // Calculate the next index
      const nextIndex = (currentIndex + 1) % totalSlides;
      
      // Update the transform property to slide
      slideshow.style.transform = `translateX(-${nextIndex * (100 / totalSlides)}%)`;
      
      // Update the current index
      currentIndex = nextIndex;
    };
    
    // Function to start the slideshow
    const startSlideshow = () => {
      slideshowInterval = setInterval(slideNext, 5000); // Change slide every 5 seconds
    };
    
    // Function to stop the slideshow
    const stopSlideshow = () => {
      clearInterval(slideshowInterval);
    };
    
    // Initial Slide Setup (optional: to start with the first slide)
    slideshow.style.transform = `translateX(0%)`;
    
    // Start the slideshow
    startSlideshow();
    
    // Pause slideshow on hover
    const homeSection = document.querySelector('.home-section');
    homeSection.addEventListener('mouseenter', stopSlideshow);
    homeSection.addEventListener('mouseleave', startSlideshow);
  });
  
// Responsive Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('show'); // Toggles the 'show' class on the nav-links
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
  
    const showSlide = (index) => {
      const totalSlides = slide.length;
      currentIndex = (index + totalSlides) % totalSlides; // Ensures the index wraps around
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
  
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
  
    // Function to update the slider position
    const updateSlider = () => {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      slides.style.transition = 'transform 0.5s ease-in-out';
    };
  
    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
      if (currentIndex === 0) {
        // Instantly jump to the last slide and then move to the second-to-last
        slides.style.transition = 'none';
        currentIndex = slide.length - 1; // Jump to the last slide
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
          slides.style.transition = 'transform 0.5s ease-in-out';
          currentIndex -= 1;
          updateSlider();
        }, 50); // Delay ensures smooth transition
      } else {
        currentIndex -= 1;
        updateSlider();
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentIndex === slide.length - 1) {
        // Instantly jump to the first slide and then move to the second
        slides.style.transition = 'none';
        currentIndex = 0; // Jump to the first slide
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
          slides.style.transition = 'transform 0.5s ease-in-out';
          currentIndex += 1;
          updateSlider();
        }, 50); // Delay ensures smooth transition
      } else {
        currentIndex += 1;
        updateSlider();
      }
    });
  });
  