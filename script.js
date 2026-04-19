document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-up, .animate-fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Mobile Menu Toggle (Simplified for demo)
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        // In a real app, this would toggle a mobile menu class
        alert('Mobile menu feature will be added soon.');
    });

    // Simple Form Submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent successfully. (Demo Form)');
        contactForm.reset();
    });
});
