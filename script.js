document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');

    // ======================
    // Header Navigation
    // ======================

    // Logo - Scroll to top
    const logo = document.querySelector('.navbar .logo');
    if (logo) {
        logo.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        logo.style.cursor = 'pointer';
    }

    // About Us navigation
    const aboutLink = document.querySelector('.navbar-menu a:nth-child(1)');
    if (aboutLink) {
        aboutLink.addEventListener('click', function (e) {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('About Us section not found!');
            }
        });
    }

    // Services navigation
    const servicesLink = document.querySelector('.navbar-menu a:nth-child(2)');
    if (servicesLink) {
        servicesLink.addEventListener('click', function (e) {
            e.preventDefault();
            const servicesSection = document.querySelector('#services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Services section not found!');
            }
        });
    }

    // Support navigation
    const supportLink = document.querySelector('.navbar-menu a:nth-child(3)');
    if (supportLink) {
        supportLink.addEventListener('click', function (e) {
            e.preventDefault();
            const supportSection = document.querySelector('#support');
            if (supportSection) {
                supportSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Support section not found!');
            }
        });
    }

    // Contact Us - Show modal
    const contactLink = document.querySelector('.navbar-menu a:nth-child(4)');
    if (contactLink) {
        contactLink.addEventListener('click', function (e) {
            e.preventDefault();
            const contactFormSection = document.querySelector('#contact-form-section');
            if (contactFormSection) {
                contactFormSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Contact form section not found!');
            }
        });
    }

    // Call Us button
    const callUsBtn = document.querySelector('.navbar-menu .cta-button');
    if (callUsBtn) {
        callUsBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const findUsSection = document.querySelector('#find-us');
            if (findUsSection) {
                findUsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Find Us section not found!');
            }
        });
    }

    // ======================
    // Mobile Menu
    // ======================

    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function () {
            const navbarMenu = document.querySelector('.navbar-menu');
            if (navbarMenu) {
                navbarMenu.classList.toggle('show');
            }
        });
    }

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('.navbar-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            const navbarMenu = document.querySelector('.navbar-menu');
            if (window.innerWidth <= 768 && navbarMenu) {
                navbarMenu.classList.remove('show');
            }
        });
    });

    // ======================
    // Slider Functionality
    // ======================

    const slider = document.querySelector('.slider');
    const sliderImages = document.querySelector('.slider-images');
    const slides = document.querySelectorAll('.slider-image');

    if (slider && sliderImages && slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;
        let interval;

        function moveSlide(step) {
            currentSlide = (currentSlide + step + totalSlides) % totalSlides;
            sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function startAutoSlide() {
            interval = setInterval(() => moveSlide(1), 5000);
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        startAutoSlide();

        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);

        document.querySelectorAll('.slider-button').forEach(button => {
            button.addEventListener('click', function (e) {
                const step = e.target.classList.contains('next') ? 1 : -1;
                moveSlide(step);
            });
        });
    }

    // ======================
    // FAQ Functionality
    // ======================

    const questions = document.querySelectorAll('.faq-unique-question');
    questions.forEach(question => {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });

    // ======================
    // Modal Functionality
    // ======================

    const modal = document.getElementById('gallery-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    if (modal && closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    console.log('CAPTCHA script loaded');

    const captchaTextElement = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
    const refreshButton = document.getElementById('refreshCaptcha');
    const contactForm = document.getElementById('contactForm');
    let captchaValue = '';

    // Generate CAPTCHA
    function generateCaptcha() {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        captchaValue = '';
        for (let i = 0; i < 5; i++) {
            captchaValue += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        captchaTextElement.textContent = captchaValue;
    }

    // Refresh CAPTCHA
    if (refreshButton) {
        refreshButton.addEventListener('click', generateCaptcha);
    }

    // Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (captchaInput.value === captchaValue) {
                alert('CAPTCHA verified! Form submitted successfully.');
                contactForm.reset();
                generateCaptcha();
            } else {
                alert('Invalid CAPTCHA. Please try again.');
                generateCaptcha();
                captchaInput.value = '';
            }
        });
    }

    // Generate initial CAPTCHA
    generateCaptcha();
});
document.addEventListener('DOMContentLoaded', function () {
    console.log('FAQ script loaded');

    const questions = document.querySelectorAll('.faq-unique-question');
    questions.forEach(question => {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
});
