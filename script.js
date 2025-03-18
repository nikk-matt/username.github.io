document.addEventListener('DOMContentLoaded', function () {
    // ==========================================
    // HEADER NAVIGATION FUNCTIONALITY
    // ==========================================

    // Mobile Menu Toggle
    function toggleMenu() {
        const navbarMenu = document.querySelector('.navbar-menu');
        navbarMenu.classList.toggle('show');
    }

    // Attach Event Listener to Burger Menu
    const burgerMenuButton = document.querySelector('.burger-menu');
    if (burgerMenuButton) {
        burgerMenuButton.addEventListener('click', toggleMenu);
    }

    // Close Mobile Menu When a Link is Clicked
    const mobileMenuLinks = document.querySelectorAll('.navbar-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            const navbarMenu = document.querySelector('.navbar-menu');
            if (window.innerWidth <= 768) {
                navbarMenu.classList.remove('show');
            }
        });
    });

    // ==========================================
    // SLIDER FUNCTIONALITY
    // ==========================================

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;
    const sliderImages = document.querySelector('.slider-images');

    // Move to a Specific Slide
    function moveSlide(step) {
        currentSlide = (currentSlide + step + totalSlides) % totalSlides;
        sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Attach Event Listeners to Slider Buttons
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => moveSlide(-1));
        nextButton.addEventListener('click', () => moveSlide(1));
    }

    // ==========================================
    // GALLERY MODAL FUNCTIONALITY
    // ==========================================

    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeModalButton = document.querySelector('.close-modal');

    // Open Modal When Gallery Item is Clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const itemId = parseInt(this.getAttribute('data-id'));
            const itemData = galleryData.find(data => data.id === itemId);

            if (itemData) {
                modalImage.src = itemData.modalImage;
                modalDescription.textContent = itemData.description;
                modal.classList.add('show');
                document.body.classList.add('modal-open');
            }
        });
    });

    // Close Modal When Close Button is Clicked
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function () {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        });
    }

    // Close Modal When Clicking Outside
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });

    // Close Modal with ESC Key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });

    // Gallery Data
    const galleryData = [
        {
            id: 1,
            title: "Premier Solutions Awaits",
            description: "Discover innovative sales, service, and repair solutions to enhance your communication and security needs.",
            modalImage: "https://cdn.midjourney.com/c368d5a1-110c-460e-9754-7af4179a2009/0_2.png"
        },
        {
            id: 2,
            title: "A Blend of Connectivity",
            description: "Explore EPABX systems that ensure seamless interoperability for your business.",
            modalImage: "https://cdn.midjourney.com/928b4d7b-e392-44fa-9adc-44bf187958f5/0_0.png"
        },
        {
            id: 3,
            title: "High-Performance Installations",
            description: "Enhance efficiency with expert network cabling and mobile booster installations.",
            modalImage: "https://cdn.midjourney.com/d4ce503d-00a3-4dff-af54-17c224bc4f6a/0_0.png"
        },
        {
            id: 4,
            title: "Comprehensive Solutions",
            description: "Reliable CCTV installations for enhanced security.",
            modalImage: "https://cdn.midjourney.com/09e9b00d-ef29-478f-a87c-c711338e6262/0_0.png"
        },
        {
            id: 5,
            title: "State-of-the-Art Audio & Video",
            description: "Transform spaces with advanced audio and video systems.",
            modalImage: "https://images.pexels.com/photos/13007861/pexels-photo-13007861.jpeg"
        },
        {
            id: 6,
            title: "Modern Security Systems",
            description: "Reliable alarm, door phone, and biometric systems for safety.",
            modalImage: "https://cdn.midjourney.com/997797d9-bd4e-493d-98e9-dc23dd202cb6/0_0.png"
        },
        {
            id: 7,
            title: "Convenient Service Accessibility",
            description: "Online and offline support for all your service needs.",
            modalImage: "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg"
        },
        {
            id: 8,
            title: "Dedicated Customer Support",
            description: "Available 9 AM - 5 PM, Monday through Friday.",
            modalImage: "https://cdn.midjourney.com/7deb1e9c-8e54-4880-b18a-02b1b511c1e4/0_2.png"
        }
    ];

    // ==========================================
    // FAQ FUNCTIONALITY
    // ==========================================

    const faqQuestions = document.querySelectorAll('.faq-unique-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });

    // ==========================================
    // CONTACT FORM FUNCTIONALITY
    // ==========================================

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Normally, you would send this data to a server
            console.log('Form submitted:', { firstName, lastName, email, message });

            // Show success message
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // ==========================================
    // CAPTCHA FUNCTIONALITY
    // ==========================================

    const captchaTextElement = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
    const refreshButton = document.getElementById('refreshCaptcha');

    // Generate Initial CAPTCHA
    generateCaptcha();

    // Refresh CAPTCHA Button Handler
    refreshButton.addEventListener('click', function () {
        generateCaptcha();
        captchaInput.value = '';
    });

    // Generate Simple CAPTCHA
    function generateCaptcha() {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        let captchaValue = '';
        for (let i = 0; i < 5; i++) {
            captchaValue += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        captchaTextElement.textContent = captchaValue;
    }
});
