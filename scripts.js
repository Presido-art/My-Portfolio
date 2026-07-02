

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});










//PROFFESSION
const texts = [
    "Web Developer.",
    "Web Designer.",
    "Graphics designer.",
    "Problem Solver."
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 120;
const deletingSpeed = 80;
const delayAfterTyping = 600;

const typingElement = document.getElementById("typing");

function typeEffect() {
    const currentText = texts[index];

    if (!isDeleting) {
        typingElement.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, delayAfterTyping);
        }
    } else {
        typingElement.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();


//COUNTER
const counters = document.querySelectorAll(".counter");
const duration = 2000;

counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        count += increment;

        if (count < target) {
            counter.textContent = Math.ceil(count) + "+";
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + "+";
        }
    };

    updateCounter();
});


//Animation
// Select all elements with the 'animation' class
const animatedElements = document.querySelectorAll('.animation');

// Define the observer options
const observerOptions = {
    root: null, // observe against the viewport
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 10% of the element is visible
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the active class when in view
            entry.target.classList.add('scroll-animation');
            // Optional: Stop observing the element after it has animated once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Start observing all target elements
animatedElements.forEach(element => {
    observer.observe(element);
});
