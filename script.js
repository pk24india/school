// script.js

// JavaScript code for handling tab content visibility
document.addEventListener("DOMContentLoaded", function () {
    // Get all the tabs and sections
    const tabs = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    // Hide all sections except the first one
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = "none";
        }
    });

    // Add click event listeners to the tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            // Hide all sections
            sections.forEach((section) => {
                section.style.display = "none";
            });

            // Show the selected section
            sections[index].style.display = "block";
        });
    });
// script.js

// Set up variables
let currentIndex = 0;
let slides = document.querySelectorAll('.mySlides');

// Hide all slides initially
slides.forEach(slide => slide.style.display = 'none');

// Function to show slides
function showSlides() {
    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');

    // Increment index and reset if needed
    currentIndex++;
    if (currentIndex > slides.length) {
        currentIndex = 1;
    }

    // Display the current slide
    slides[currentIndex - 1].style.display = 'block';

    // Call the function again after 2 seconds (2000 milliseconds)
    setTimeout(showSlides, 2000);
}

// Start the slideshow
showSlides();

});
