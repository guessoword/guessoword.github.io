// Scroll Animation
const sections = document.querySelectorAll('.scroll-section');

const onScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', onScroll);

// Initial check in case the page is already scrolled
onScroll();

// Dropdown Animation
const dropdownLinks = document.querySelectorAll('.dropdown-link');
dropdownLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.nextElementSibling.style.display = 'block';
    });
    link.addEventListener('mouseleave', () => {
        link.nextElementSibling.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;  // Duration in milliseconds (2 seconds)
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        
        // Calculate the increment based on the speed
        const increment = target / speed;

        // Start the animation
        let count = 0;
        
        const updateCount = () => {
            // Increment the number by the calculated increment
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);  // Round to ensure clean numbers
                requestAnimationFrame(updateCount);  // Request the next frame for smooth animation
            } else {
                counter.innerText = target;  // Ensure it ends exactly at the target
            }
        };
        
        updateCount();  // Start the count animation
    });
});

const nav = document.querySelector('nav');
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

