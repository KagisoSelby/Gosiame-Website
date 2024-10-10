// Welcome Popup
window.onload = function() {
    alert('Welcome to Gosiame Payrolls! We help streamline your payroll process.');
};

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
window.onscroll = function() { showScrollButton(); };

function showScrollButton() {
    var scrollBtn = document.getElementById('scrollBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Form Validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (name == "") {
        alert("Please enter your name.");
        return false;
    }
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }
    if (message == "") {
        alert("Please enter your message.");
        return false;
    }
    alert("Your message has been submitted successfully!");
    return true;
}

// Mobile Menu Toggle
function toggleMenu() {
    var menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


// IntersectionObserver to handle fade-in and pop-up effects
document.addEventListener('DOMContentLoaded', function () {
    const options = {
        threshold: 0.5 // Trigger animation when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    // Target elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    const popUpButton = document.querySelector('.pop-up');

    // Observe each fade-in element
    fadeInElements.forEach(el => observer.observe(el));
    observer.observe(popUpButton);
});


// JavaScript for Scroll Animation of the "Get a Free Quote" Button
window.addEventListener('scroll', function() {
    var quoteButton = document.querySelector('.quote-button');
    var buttonPosition = quoteButton.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2; // Slightly earlier than bottom of the viewport

    if (buttonPosition < screenPosition) {
        quoteButton.classList.add('visible'); // Add the visible class to trigger animation
    }
});

