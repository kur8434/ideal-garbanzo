// script.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content loading (example for testimonials or FAQs)
window.addEventListener('scroll', function() {
    let loadPoint = document.getElementById('dynamic-content');
    if (window.scrollY + window.innerHeight >= loadPoint.offsetTop) {
        loadDynamicContent(); // Function to load content dynamically
    }
});

function loadDynamicContent() {
    // Placeholder for dynamic content loading
    // This could be an AJAX call to fetch and display content
    console.log("Loading dynamic content...");
}
