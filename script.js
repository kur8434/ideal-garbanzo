// Enhanced script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic content loading for testimonials
    loadDynamicContent();
});

// Function to load dynamic content
function loadDynamicContent() {
    // Example: Load testimonials dynamically
    const testimonialsContainer = document.getElementById('testimonials');
    if (testimonialsContainer) {
        // Placeholder: Replace with AJAX call to fetch testimonials
        fetchTestimonials().then(testimonials => {
            testimonials.forEach(testimonial => {
                const testimonialElement = createTestimonialElement(testimonial);
                testimonialsContainer.appendChild(testimonialElement);
            });
        });
    }
}

// Placeholder function for fetching testimonials
function fetchTestimonials() {
    // This should be replaced with a real data fetching logic
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { name: "John Doe", text: "Great experience with ЕДЕМ." },
                { name: "Jane Smith", text: "ЕДЕМ has changed my life!" }
            ]);
        }, 1000);
    });
}

// Function to create a testimonial element
function createTestimonialElement(testimonial) {
    const div = document.createElement('div');
    div.classList.add('testimonial');
    div.innerHTML = `<strong>${testimonial.name}</strong><p>${testimonial.text}</p>`;
    return div;
}

// Optional: Subtle animations or interactivity
// For example, animate elements on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});
