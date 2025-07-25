// JavaScript for 5 Star Resturent website

document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp Order Button
    document.getElementById('whatsapp-btn').addEventListener('click', function() {
        const phoneNumber = '+1234567890'; // Replace with actual phone number
        const message = encodeURIComponent('Hello, I would like to place a food order.');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    });

    // Order Now Button on Homepage opens WhatsApp chat
    const orderNowBtn = document.querySelector('.order-btn');
    if (orderNowBtn) {
        orderNowBtn.addEventListener('click', () => {
            const phoneNumber = '+1234567890'; // Replace with actual phone number
            const message = encodeURIComponent('Hello, I would like to place a food order.');
            const url = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(url, '_blank');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animation on scroll for sections
    const sections = document.querySelectorAll('section');
    const fadeInOnScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (scrollPos > section.offsetTop + 100) {
                section.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check
});
