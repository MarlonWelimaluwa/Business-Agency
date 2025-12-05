// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

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

            // Close mobile menu after clicking
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activateNavLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    observer.observe(card);
});

// Add animation class to CSS
const style = document.createElement('style');
style.textContent = `
    .service-card,
    .portfolio-item,
    .testimonial-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .service-card.animate-in,
    .portfolio-item.animate-in,
    .testimonial-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Form submission handler (you can modify this to connect to your backend)
const contactForm = document.querySelector('.contact-form-wrapper');
if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();

        const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
        const emailInput = contactForm.querySelector('input[placeholder="Your Email"]');
        const subjectInput = contactForm.querySelector('input[placeholder="Subject"]');
        const messageInput = contactForm.querySelector('textarea');

        // Basic validation
        if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulate form submission
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');

            // Clear form
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';

            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        }, 1500);
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Portfolio hover effect enhancement
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Counter animation for stats (if you want to add numbers)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Prevent Bootstrap navbar from closing when clicking inside
document.querySelectorAll('.navbar-collapse').forEach(collapse => {
    collapse.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            // Let it close for nav links
            return;
        }
        e.stopPropagation();
    });
});

console.log('BrandStudio Landing Page - Loaded Successfully!');