document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.menu');

    navbarToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    // Smooth scroll
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Close the navbar menu on mobile
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        });
    });

    // Back to top button
    const backToTopButton = document.querySelector('#back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form submission
    const contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simulate sending the form data
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Example: Log form data to console
        console.log('Form Data:', formDataObject);

        // You can add your own form submission logic here
        // For example, send the form data to a server using fetch or XMLHttpRequest
    });
});
