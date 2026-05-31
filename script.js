// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInDown 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Mobile menu toggle (if needed in future)
console.log('Portfolio website loaded successfully!');

// Update year in footer
const year = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    footerText.textContent = `© ${year} Lalubhulu. All rights reserved.`;
}