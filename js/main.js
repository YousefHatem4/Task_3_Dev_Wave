// Navbar scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('shadow', window.scrollY > 0);

    if (window.scrollY > 0) {
        header.style.background = '#fff';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        document.querySelectorAll('.navbar a').forEach(link => {
            link.style.color = '#020307';
        });
        document.querySelector('.logo').style.color = '#020307';
        document.querySelector('.logo i').style.color = '#020307';
        document.querySelector('#menu-icon').style.color = '#020307';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
        document.querySelectorAll('.navbar a').forEach(link => {
            link.style.color = '#ff2c1f';
        });
        document.querySelector('.logo').style.color = '#fff';
        document.querySelector('.logo i').style.color = '#fff';
        document.querySelector('#menu-icon').style.color = '#fff';
    }
});

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function () {
    navbar.classList.toggle('active');
    // Change icon from bars to X
    const icon = menuIcon.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        const icon = menuIcon.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && e.target !== menuIcon && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        const icon = menuIcon.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});