document.addEventListener("DOMContentLoaded", function () {
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach(container => {
    container.addEventListener("click", function () {
      if (container.classList.contains("zoomed")) {
        container.classList.remove("zoomed");
      } else {
        imageContainers.forEach(otherContainer => {
          otherContainer.classList.remove("zoomed");
        });
        container.classList.add("zoomed");
      }
    });
  });
});
// Add this JavaScript code to handle smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function () {
  const imageContainers = document.querySelectorAll('.image-container');
  
  imageContainers.forEach(container => {
    container.addEventListener('click', function () {
      const imageContainer = this;

      // Add the zoomed class on click
      imageContainer.classList.add('zoomed');

      // After 2 seconds, remove the zoomed class to unhover
      setTimeout(() => {
        imageContainer.classList.remove('zoomed');
      }, 2000); // Change the duration as needed
    });
  });
});
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function () {
  const imageContainers = document.querySelectorAll('.image-container');
  const themeToggle = document.getElementById('theme-toggle');
  let isLightMode = true;

  themeToggle.addEventListener('click', function () {
    document.documentElement.classList.toggle('light-mode');
    isLightMode = !isLightMode;
  });

  imageContainers.forEach(container => {
    container.addEventListener('click', function () {
      const imageContainer = this;

      // Add the zoomed class on click
      imageContainer.classList.add('zoomed');

      // After 2 seconds, remove the zoomed class to unhover
      setTimeout(() => {
        imageContainer.classList.remove('zoomed');
      }, 2000); // Change the duration as needed
    });
  });
});


