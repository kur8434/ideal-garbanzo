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

function calculateCalories() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var activityLevel = document.getElementById('activity-level').value;
    var unitSystem = document.getElementById('unit-system').value;
    
    // Convert units to metric if necessary
    if (unitSystem === 'imperial') {
        weight = weight / 2.20462; // Convert pounds to kg
        height = height * 2.54; // Convert inches to cm
    }

    // Calculate Basal Metabolic Rate (BMR)
    var bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Adjust BMR based on activity level
    var multiplier;
    switch (activityLevel) {
        case 'inactive':
            multiplier = 1.2;
            break;
        case 'somewhat':
            multiplier = 1.375;
            break;
        case 'active':
            multiplier = 1.55;
            break;
        case 'very':
            multiplier = 1.725;
            break;
    }

 var calories = bmr * multiplier;
    document.getElementById('calorie-result').textContent = calories.toFixed(2);
    document.getElementById('result').style.display = 'block'; // Make the result div visible
}


function calculateBMI() {
    var unitSystem = document.getElementById('bmi-unit-system').value;
    var weight = document.getElementById('bmi-weight').value;
    var height = document.getElementById('bmi-height').value;

    // Convert to metric if the user selected imperial
    if (unitSystem === 'imperial') {
        weight = weight * 0.453592; // Convert pounds to kg
        height = height * 2.54; // Convert inches to cm
    }

    // Convert height from cm to meters for BMI calculation
    height = height / 100;

    var bmi = weight / (height * height);
    var category = getBMICategory(bmi);

    document.getElementById('bmi-value').textContent = bmi.toFixed(2);
    document.getElementById('bmi-category').textContent = category;
    document.getElementById('bmi-result').style.display = 'block'; // Show the result
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    return 'Obesity';
}


function selectAvatar(gender) {
    // Here you can add logic to handle the avatar selection
    console.log("Avatar selected:", gender);

    // Example: Redirect to a specific page based on the selection
    if (gender === 'male') {
        window.location.href = 'male-section.html'; // Adjust the URL as needed
    } else {
        window.location.href = 'female-section.html'; // Adjust the URL as needed
    }
}


