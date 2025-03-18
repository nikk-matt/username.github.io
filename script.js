document.addEventListener('DOMContentLoaded', function() {
    // HEADER NAVIGATION FUNCTIONALITY
    const logo = document.querySelector('.navbar .logo');
    const aboutLink = document.querySelector('.navbar-menu a:nth-child(1)');
    const servicesLink = document.querySelector('.navbar-menu a:nth-child(2)');
    const supportLink = document.querySelector('.navbar-menu a:nth-child(3)');
    const contactLink = document.querySelector('.navbar-menu a:nth-child(4)');
    const callUsBtn = document.querySelector('.navbar-menu .cta-button');

    // Logo - Home navigation
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        logo.style.cursor = 'pointer';
    }

    // About Us navigation
    if (aboutLink) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionTitle = Array.from(document.querySelectorAll('h2, h3')).find(
                heading => heading.textContent.includes('Transforming Ideas into Remarkable Solutions')
            );
            if (sectionTitle) {
                sectionTitle.scrollIntoView({ behavior: 'smooth' });
            } else {
                const aboutSection = document.querySelector('#about-us');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('About Us section not found!');
                }
            }
        });
    }

    // Services navigation
    if (servicesLink) {
        servicesLink.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionTitle = Array.from(document.querySelectorAll('h2, h3')).find(
                heading => heading.textContent.trim() === 'Our Exquisite Gallery'
            );
            if (sectionTitle) {
                sectionTitle.scrollIntoView({ behavior: 'smooth' });
            } else {
                const flexibleTitle = Array.from(document.querySelectorAll('h2, h3')).find(
                    heading => heading.textContent.includes('Our Exquisite Gallery')
                );
                if (flexibleTitle) {
                    flexibleTitle.scrollIntoView({ behavior: 'smooth' });
                } else {
                    const gallerySection = document.querySelector('#exquisite-gallery');
                    if (gallerySection) {
                        gallerySection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        const anyGallerySection = document.querySelector('.gallery-section') || 
                                                  document.querySelector('[id*="gallery"]') ||
                                                  document.querySelector('[class*="gallery"]');
                        if (anyGallerySection) {
                            anyGallerySection.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            console.error('Gallery section not found!');
                        }
                    }
                }
            }
        });
    }

    // Support navigation
    if (supportLink) {
        supportLink.addEventListener('click', function(e) {
            e.preventDefault();
            const findUsSection = document.querySelector('#find-us');
            if (findUsSection) {
                findUsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Find Us section not found!');
            }
        });
    }

    // Contact Us
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            const contactModal = document.getElementById('simple-modal');
            if (contactModal) {
                contactModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                console.error('Contact modal not found!');
            }
        });
    }

    // Call Us button
    if (callUsBtn) {
        callUsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const findUsSection = document.querySelector('#find-us') || 
                                  document.querySelector('.find-us') ||
                                  document.querySelector('[id*="find"]') ||
                                  document.querySelector('[class*="find"]');
            if (!findUsSection) {
                const findUsHeading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).find(
                    heading => heading.textContent.includes('Find Us')
                );
                if (findUsHeading) {
                    findUsHeading.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Find Us section not found!');
                    window.location.href = 'tel:9871723292';
                }
            } else {
                findUsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Mobile menu toggle function
    function toggleMenu() {
        const navbarMenu = document.querySelector('.navbar-menu');
        navbarMenu.classList.toggle('show');
    }

    const burgerMenuButton = document.querySelector('.burger-menu');
    if (burgerMenuButton) {
        burgerMenuButton.addEventListener('click', toggleMenu);
    }

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('.navbar-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarMenu = document.querySelector('.navbar-menu');
            if (window.innerWidth <= 768) {
                navbarMenu.classList.remove('show');
            }
        });
    });

    // Adjust burger menu visibility based on screen size
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
        burgerMenu.style.display = 'none'; // Initially hide on desktop

        function adjustMenuVisibility() {
            if (window.innerWidth <= 768) {
                burgerMenu.style.display = 'block'; // Show on mobile
                burgerMenu.style.cursor = 'pointer';
                const navbarMenu = document.querySelector('.navbar-menu');
                if (navbarMenu && !navbarMenu.classList.contains('show')) {
                    navbarMenu.style.display = 'none';
                }
            } else {
                burgerMenu.style.display = 'none'; // Hide on desktop
                const navbarMenu = document.querySelector('.navbar-menu');
                if (navbarMenu) {
                    navbarMenu.style.display = 'flex';
                }
            }
        }

        adjustMenuVisibility();
        window.addEventListener('resize', adjustMenuVisibility);

        burgerMenu.addEventListener('click', function() {
            const navbarMenu = document.querySelector('.navbar-menu');
            if (navbarMenu) {
                if (navbarMenu.classList.contains('show')) {
                    navbarMenu.classList.remove('show');
                    navbarMenu.style.display = 'none';
                } else {
                    navbarMenu.classList.add('show');
                    navbarMenu.style.display = 'block';
                }
            }
        });
    } else {
        console.error('Burger menu not found! Creating one...');
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const burgerMenuElem = document.createElement('div');
            burgerMenuElem.className = 'burger-menu';
            burgerMenuElem.innerHTML = `
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            `;
            burgerMenuElem.style.display = 'none';
            burgerMenuElem.style.cursor = 'pointer';
            navbar.insertBefore(burgerMenuElem, navbar.firstChild);
            burgerMenuElem.addEventListener('click', function() {
                const navbarMenu = document.querySelector('.navbar-menu');
                if (navbarMenu) {
                    if (navbarMenu.classList.contains('show')) {
                        navbarMenu.classList.remove('show');
                        navbarMenu.style.display = 'none';
                    } else {
                        navbarMenu.classList.add('show');
                        navbarMenu.style.display = 'block';
                    }
                }
            });
            adjustMenuVisibility();
            window.addEventListener('resize', adjustMenuVisibility);
        }
    }

    // CAPTCHA variables
    const captchaTextElement = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
    const refreshButton = document.getElementById('refreshCaptcha');
    const contactForm = document.getElementById('contactForm');
    let captchaValue = '';

    if (captchaTextElement && captchaInput && refreshButton && contactForm) {
        generateCaptcha();

        refreshButton.addEventListener('click', function() {
            generateCaptcha();
            captchaInput.value = '';
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (captchaInput.value === captchaValue) {
                alert('Form validation successful! Ready to be sent with Email.js');
                contactForm.reset();
                generateCaptcha();
            } else {
                alert('Incorrect verification code. Please try again.');
                generateCaptcha();
                captchaInput.value = '';
            }
        });
    }

    function generateCaptcha() {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        captchaValue = '';
        for (let i = 0; i < 5; i++) {
            captchaValue += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        captchaTextElement.textContent = captchaValue;
        console.log('CAPTCHA generated:', captchaValue);
    }

    // Email sending functionality
    function sendMail() {
        let params = {
            ShijilTelecom: "Shijil Telecom Contact Form",
            time: new Date().toLocaleString(),
            name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };
        emailjs.send("service_h798uiu", "template_e1i7b3p", params)
            .then(function() {
                alert("Email Sent!!");
                document.getElementById("contactForm").reset();
            })
            .catch(function(error) {
                console.log("Error sending email:", error);
                alert("Failed to send email. Please try again.");
            });
    }

    const contactFormElem = document.getElementById("contactForm");
    if (contactFormElem) {
        contactFormElem.addEventListener("submit", function(event) {
            event.preventDefault();
            sendMail();
        });
    }

    // SLIDER FUNCTIONALITY
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;
    let slideInterval = 5000; // 5 seconds
    let interval;
    let isTransitioning = false;

    const sliderImages = document.querySelector('.slider-images');
    if (sliderImages) {
        sliderImages.style.transition = 'transform 0.5s ease-in-out';
    }

    function moveSlide(step) {
        if (isTransitioning || !sliderImages) return;

        isTransitioning = true;
        currentSlide = (currentSlide + step + totalSlides) % totalSlides;
        sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;

        setTimeout(() => {
            isTransitioning = false;
        }, 500); // Match transition duration
    }

    function startAutoSlide() {
        interval = setInterval(() => {
            if (!isTransitioning) {
                moveSlide(1);
            }
        }, slideInterval);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    if (slides.length > 0 && sliderImages) {
        startAutoSlide();

        const slider = document.querySelector('.slider');
        if (slider) {
            slider.addEventListener('mouseenter', stopAutoSlide);
            slider.addEventListener('mouseleave', startAutoSlide);
        }

        document.querySelectorAll('.slider-button').forEach(button => {
            button.addEventListener('click', (e) => {
                if (isTransitioning) return;

                const step = e.target.classList.contains('next') ? 1 : -1;
                moveSlide(step);

                stopAutoSlide();
                startAutoSlide();
            });
        });
    }

    // FAQ FUNCTIONALITY
    const questions = document.querySelectorAll('.faq-unique-question');
    questions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });

    // SIMPLE MODAL FUNCTIONALITY
    var exploreButton = document.querySelector(".hero-content .cta-button");
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('simple-modal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    var closeButton = document.querySelector(".simple-close");
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            document.getElementById('simple-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('simple-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    var simpleForm = document.getElementById('simple-form');
    if (simpleForm) {
        simpleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will contact you shortly.');
            document.getElementById('simple-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
            this.reset();
        });
    }

    // CONTACT FORM FUNCTIONALITY
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form submitted:', { firstName, lastName, email, message });

            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // CAPTCHA variables
    const captchaTextElement = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
    const refreshButton = document.getElementById('refreshCaptcha');
    const contactForm = document.getElementById('contactForm');
    let captchaValue = '';

    if (captchaTextElement && captchaInput && refreshButton && contactForm) {
        generateCaptcha();

        refreshButton.addEventListener('click', function() {
            generateCaptcha();
            captchaInput.value = '';
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (captchaInput.value === captchaValue) {
                alert('Form validation successful! Ready to be sent with Email.js');
                contactForm.reset();
                generateCaptcha();
            } else {
                alert('Incorrect verification code. Please try again.');
                generateCaptcha();
                captchaInput.value = '';
            }
        });
    }

    function generateCaptcha() {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        captchaValue = '';
        for (let i = 0; i < 5; i++) {
            captchaValue += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        captchaTextElement.textContent = captchaValue;
        console.log('CAPTCHA generated:', captchaValue);
    }

    // Email sending functionality
    function sendMail() {
        let params = {
            ShijilTelecom: "Shijil Telecom Contact Form",
            time: new Date().toLocaleString(),
            name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };
        emailjs.send("service_h798uiu", "template_e1i7b3p", params)
            .then(function() {
                alert("Email Sent!!");
                document.getElementById("contactForm").reset();
            })
            .catch(function(error) {
                console.log("Error sending email:", error);
                alert("Failed to send email. Please try again.");
            });
    }

    const contactFormElem = document.getElementById("contactForm");
    if (contactFormElem) {
        contactFormElem.addEventListener("submit", function(event) {
            event.preventDefault();
            sendMail();
        });
    }
});
