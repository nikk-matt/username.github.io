document.addEventListener('DOMContentLoaded', function() {
    // HEADER NAVIGATION FUNCTIONALITY
    // Get all navigation elements
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
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        // Make logo clickable
        logo.style.cursor = 'pointer';
    }
    
    // About Us navigation - Fixed to go to "Transforming Ideas into Remarkable Solutions" section
    if (aboutLink) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Find the "Transforming Ideas into Remarkable Solutions" section
            const sectionTitle = Array.from(document.querySelectorAll('h2, h3')).find(
                heading => heading.textContent.includes('Transforming Ideas into Remarkable Solutions')
            );
            
            if (sectionTitle) {
                // Scroll to the section containing this title
                sectionTitle.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Fallback to the general about-us section if specific heading not found
                const aboutSection = document.querySelector('#about-us');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('About Us section not found!');
                }
            }
        });
    }
    
    // Services navigation - Fixed to go to "Our Exquisite Gallery" section
    if (servicesLink) {
        servicesLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // First, try to find the exact section with the heading "Our Exquisite Gallery"
            const sectionTitle = Array.from(document.querySelectorAll('h2, h3')).find(
                heading => heading.textContent.trim() === 'Our Exquisite Gallery'
            );
            
            if (sectionTitle) {
                // Scroll to the section containing this exact title
                sectionTitle.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Second, try a more flexible search that includes the text
                const flexibleTitle = Array.from(document.querySelectorAll('h2, h3')).find(
                    heading => heading.textContent.includes('Our Exquisite Gallery')
                );
                
                if (flexibleTitle) {
                    // Scroll to the section containing this title
                    flexibleTitle.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Third, try to find the gallery section by ID
                    const gallerySection = document.querySelector('#exquisite-gallery');
                    if (gallerySection) {
                        gallerySection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        // Fourth, try to find any gallery section
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
    
    // Support navigation (Find Us section)
    if (supportLink) {
        supportLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Get the Find Us section
            const findUsSection = document.querySelector('#find-us');
            if (findUsSection) {
                findUsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Find Us section not found!');
            }
        });
    }
    
    // Contact Us - show contact form modal
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Open contact form modal
            const contactModal = document.getElementById('simple-modal');
            if (contactModal) {
                contactModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                console.error('Contact modal not found!');
            }
        });
    }
    
   // Call Us button - scroll to Find Us section 
    if (callUsBtn) {
        callUsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Try multiple selectors to find the Find Us section
            const findUsSection = document.querySelector('#find-us') || 
                                document.querySelector('.find-us') ||
                                document.querySelector('[id*="find"]') ||
                                document.querySelector('[class*="find"]');
                                
            // If direct ID/class not found, try looking for a heading with "Find Us" text
            if (!findUsSection) {
                const findUsHeading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).find(
                    heading => heading.textContent.includes('Find Us')
                );
                
                if (findUsHeading) {
                    // Scroll to the heading
                    findUsHeading.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Find Us section not found!');
                    // Fallback to the original behavior
                    window.location.href = 'tel:9871723292';
                }
            } else {
                findUsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // MOBILE MENU FUNCTIONALITY
    // Toggle menu function
    function toggleMenu() {
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
    }
    
    // Make toggleMenu available globally
    window.toggleMenu = toggleMenu;
    
    // Add event listener to burger menu
    const burgerMenuButton = document.querySelector('.burger-menu');
    if (burgerMenuButton) {
        burgerMenuButton.addEventListener('click', toggleMenu);
    }
    
    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('.navbar-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarMenu = document.querySelector('.navbar-menu');
            if (window.innerWidth <= 768 && navbarMenu) {
                navbarMenu.classList.remove('show');
                navbarMenu.style.display = 'none';
            }
        });
    });

    // ENSURE BURGER MENU IS VISIBLE - FIX
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
        // Make sure the burger menu is visible on mobile
        burgerMenu.style.display = 'none'; // Initially hide on desktop
        
        // Show/hide based on screen size
        function adjustMenuVisibility() {
            if (window.innerWidth <= 768) {
                burgerMenu.style.display = 'block'; // Show on mobile
                burgerMenu.style.cursor = 'pointer'; // Make it look clickable
                
                // Ensure navbar-menu is hidden by default on mobile
                const navbarMenu = document.querySelector('.navbar-menu');
                if (navbarMenu && !navbarMenu.classList.contains('show')) {
                    navbarMenu.style.display = 'none';
                }
            } else {
                burgerMenu.style.display = 'none'; // Hide on desktop
                
                // Ensure navbar-menu is visible on desktop
                const navbarMenu = document.querySelector('.navbar-menu');
                if (navbarMenu) {
                    navbarMenu.style.display = 'flex';
                }
            }
        }
        
        // Call initially and on window resize
        adjustMenuVisibility();
        window.addEventListener('resize', adjustMenuVisibility);
    } else {
        console.error('Burger menu not found! Creating one...');
        
        // Create burger menu if it doesn't exist
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const burgerMenuElem = document.createElement('div');
            burgerMenuElem.className = 'burger-menu';
            burgerMenuElem.innerHTML = `
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            `;
            burgerMenuElem.style.display = 'none'; // Initially hidden
            burgerMenuElem.style.cursor = 'pointer';
            
            // Insert at the beginning of navbar
            navbar.insertBefore(burgerMenuElem, navbar.firstChild);
            
            // Add event listener to toggle menu
            burgerMenuElem.addEventListener('click', toggleMenu);
            
            // Show/hide based on screen size
            function adjustMenuVisibility() {
                if (window.innerWidth <= 768) {
                    burgerMenuElem.style.display = 'block';
                } else {
                    burgerMenuElem.style.display = 'none';
                    
                    // Ensure navbar-menu is visible on desktop
                    const navbarMenu = document.querySelector('.navbar-menu');
                    if (navbarMenu) {
                        navbarMenu.style.display = 'flex';
                        navbarMenu.classList.remove('show');
                    }
                }
            }
            
            // Call initially and on window resize
            adjustMenuVisibility();
            window.addEventListener('resize', adjustMenuVisibility);
        }
    }

    // MAKE SURE NAVBAR MENU IS PROPERLY STYLED FOR MOBILE
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarMenu) {
        // Add these styles for mobile view when menu is shown
        const styleForMobileMenu = `
            @media (max-width: 768px) {
                .navbar-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background-color: #fff;
                    flex-direction: column;
                    padding: 20px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    z-index: 100;
                }
                
                .navbar-menu.show {
                    display: block !important;
                }
                
                .navbar-menu a {
                    margin: 10px 0;
                    padding: 10px;
                    display: block;
                    text-align: center;
                }
            }
        `;
        
        // Add the styles to the document
        const styleElem = document.createElement('style');
        styleElem.textContent = styleForMobileMenu;
        document.head.appendChild(styleElem);
    }

    // Close the burger menu when clicking outside
    document.addEventListener('click', function(event) {
        const navbarMenu = document.querySelector('.navbar-menu');
        const burgerMenuBtn = document.querySelector('.burger-menu');
        
        // Check if the menu is open and if the click is outside both the menu and burger button
        if (navbarMenu && 
            navbarMenu.classList.contains('show') && 
            !navbarMenu.contains(event.target) && 
            burgerMenuBtn && 
            !burgerMenuBtn.contains(event.target)) {
            
            // Close the menu
            navbarMenu.classList.remove('show');
            navbarMenu.style.display = 'none';
        }
    });

    // SLIDER FUNCTIONALITY
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;
    let slideInterval = 5000; // 5 seconds
    let interval;
    let isTransitioning = false;

    // Add CSS transition through JavaScript only
    const sliderImages = document.querySelector('.slider-images');
    if (sliderImages) {
        sliderImages.style.transition = 'transform 0.5s ease-in-out';
    }

    // Move to a specific slide
    function moveSlide(step) {
        if (isTransitioning || !sliderImages) return;

        isTransitioning = true;
        currentSlide = (currentSlide + step + totalSlides) % totalSlides;
        sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;

        setTimeout(() => {
            isTransitioning = false;
        }, 500); // Match transition duration
    }

    // Start automatic sliding
    function startAutoSlide() {
        interval = setInterval(() => {
            if (!isTransitioning) {
                moveSlide(1);
            }
        }, slideInterval);
    }

    // Stop automatic sliding
    function stopAutoSlide() {
        clearInterval(interval);
    }

    // Initialize automatic sliding if slider exists
    if (slides.length > 0 && sliderImages) {
        startAutoSlide();

        // Hover controls
        const slider = document.querySelector('.slider');
        if (slider) {
            slider.addEventListener('mouseenter', stopAutoSlide);
            slider.addEventListener('mouseleave', startAutoSlide);
        }

        // Button click handlers
        document.querySelectorAll('.slider-button').forEach(button => {
            button.addEventListener('click', (e) => {
                if (isTransitioning) return;

                const step = e.target.classList.contains('next') ? 1 : -1;
                moveSlide(step);

                // Restart auto-slide after manual interaction
                stopAutoSlide();
                startAutoSlide();
            });
        });
    }

    // FAQ FUNCTIONALITY
    const faqQuestions = document.querySelectorAll('.faq-unique-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle active class on clicked question
                this.classList.toggle('active');
                
                // Get corresponding answer
                const answer = this.nextElementSibling;
                
                // Toggle active class on answer
                if (answer) {
                    answer.classList.toggle('active');
                    
                    // Toggle display
                    if (answer.classList.contains('active')) {
                        answer.style.display = 'block';
                    } else {
                        answer.style.display = 'none';
                    }
                }
            });
        });
    }

    // SIMPLE MODAL FUNCTIONALITY
    // Add click event to the "Explore Our Services" button
    const exploreButton = document.querySelector(".hero-content .cta-button");
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            e.preventDefault();
            // First try to scroll to contact form
            const contactFormSection = document.getElementById('contact-form-section');
            if (contactFormSection) {
                contactFormSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Fallback to modal if contact form not found
                const modal = document.getElementById('simple-modal');
                if (modal) {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                }
            }
        });
    }
    
    // Close modal when clicking on X
    const closeButton = document.querySelector(".simple-close");
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const modal = document.getElementById('simple-modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('simple-modal');
        if (modal && event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });
    
    // Form submission
    const simpleForm = document.getElementById('simple-form');
    if (simpleForm) {
        simpleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will contact you shortly.');
            const modal = document.getElementById('simple-modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Enable scrolling
            }
            this.reset();
        });
    }

    // GALLERY FUNCTIONALITY
    // Gallery item data with extended descriptions and different modal images
    const galleryData = [
        {
            id: 1,
            title: "Premier Solutions Awaits",
            description: "Discover innovative sales, service, and repair solutions to enhance your communication and security needs. Our Premier Solutions package offers comprehensive coverage for businesses of all sizes. With cutting-edge technology and expert implementation, we ensure that your systems are not only functional but also future-proof. Our team of specialists works closely with clients to understand specific requirements and deliver personalized solutions that address unique challenges.",
            modalImage: "https://cdn.midjourney.com/c368d5a1-110c-460e-9754-7af4179a2009/0_2.png"
        },
        {
            id: 2,
            title: "A Blend of Connectivity",
            description: "Explore EPABX systems that ensure seamless interoperability for your business. Our advanced solutions integrate with existing infrastructure, creating a unified communication ecosystem. These systems support voice, video, and data, enabling efficient collaboration across locations. Features include call routing, automated attendants, voicemail, conference calling, and call analytics. We optimize each system for scalability, ensuring your infrastructure grows with your business.",
            modalImage: "https://cdn.midjourney.com/928b4d7b-e392-44fa-9adc-44bf187958f5/0_0.png"
        },
        {
            id: 3,
            title: "High-Performance Installations",
            description: "Enhance efficiency with expert network cabling and mobile booster installations. Our certified technicians use industry-best practices and high-quality materials to create reliable, high-speed networks that minimize downtime. Mobile boosters ensure consistent coverage, solving connectivity issues in buildings with poor signal reception.",
            modalImage: "https://cdn.midjourney.com/d4ce503d-00a3-4dff-af54-17c224bc4f6a/0_0.png"
        },
        {
            id: 4,
            title: "Comprehensive Solutions",
            description: "Reliable CCTV installations for enhanced security. Our solutions include high-definition cameras, motion detection, night vision, and secure storage. We assess sites to ensure optimal camera placement, maximizing coverage and minimizing blind spots. Our systems integrate with existing security infrastructure and offer remote access through secure mobile apps. Features include facial recognition, license plate reading, and automated alerts for enhanced safety.",
            modalImage: "https://cdn.midjourney.com/09e9b00d-ef29-478f-a87c-c711338e6262/0_0.png"
        },
        {
            id: 5,
            title: "State-of-the-Art Audio & Video",
            description: "Transform spaces with advanced audio and video systems for presentations, conferences, and collaboration. We integrate high-definition displays, surround sound, wireless capabilities, and intuitive controls. Our technicians ensure perfect acoustics and visual clarity in spaces of all sizes. Solutions range from boardrooms to large auditoriums, all custom-designed to meet needs. We focus on user-friendly operation with reliable, high-performance technology.",
            modalImage: "https://images.pexels.com/photos/13007861/pexels-photo-13007861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 6,
            title: "Modern Security Systems",
            description: "Reliable alarm, door phone, and biometric systems ensure comprehensive safety. Our security solutions combine multiple protection layers for your premises, assets, and personnel. Alarm systems feature motion sensors, glass break detectors, and notifications. Door phone systems offer visual verification, while biometric systems ensure only authorized access to restricted areas. We prioritize safeguarding your environment with advanced technology and seamless integration.",
            modalImage: "https://cdn.midjourney.com/997797d9-bd4e-493d-98e9-dc23dd202cb6/0_0.png"
        },
        {
            id: 7,
            title: "Convenient Service Accessibility",
            description: "Online and offline support for all your service needs, available through multiple channels. Our options include 24/7 online ticketing, dedicated phone lines, email support, and on-site assistance. Clients can access documentation and troubleshooting guides via our secure portal, with system updates and maintenance schedules. Our tiered support structure ensures skilled technicians address issues, with clear escalation pathways for complex problems.",
            modalImage: "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 8,
            title: "Dedicated Customer Support",
            description: "Available 9 AM - 5 PM, Monday through Friday, our customer support team provides prompt, knowledgeable assistance. Our specialists are trained on all products and services, addressing a wide range of technical questions. We prioritize first-call resolution, solving most issues during the initial contact. For complex matters, our follow-up process keeps clients informed at each stage of resolution.",
            modalImage: "https://cdn.midjourney.com/7deb1e9c-8e54-4880-b18a-02b1b511c1e4/0_2.png"
        }
    ];
    
    // DOM elements for gallery modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    
    if (galleryItems.length > 0 && modal) {
        const modalTitle = document.getElementById('modal-title');
        const modalImage = document.getElementById('modal-image');
        const modalDescription = document.getElementById('modal-description');
        const closeModal = document.querySelector('.close-modal');
        
        // Create mobile close button if it doesn't exist
        let mobileCloseButton = modal.querySelector('.mobile-close-modal');
        if (!mobileCloseButton) {
            mobileCloseButton = document.createElement('span');
            mobileCloseButton.className = 'mobile-close-modal';
            mobileCloseButton.innerHTML = '&times;';
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.appendChild(mobileCloseButton);
            }
        }
        
        // Add click event to each gallery item
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                const itemData = galleryData.find(data => data.id === itemId);
                
                if (itemData) {
                    // Set the title if modalTitle exists
                    if (modalTitle) {
                        modalTitle.textContent = itemData.title;
                    }
                    
                    // Set the image if modalImage exists
                    if (modalImage) {
                        modalImage.src = itemData.modalImage;
                        modalImage.alt = itemData.title;
                    }
                    
                    // Set the description if modalDescription exists
                    if (modalDescription) {
                        modalDescription.textContent = itemData.description;
                    }
                    
                    // Display modal
                    modal.classList.add('show');
                    document.body.classList.add('modal-open');
                    
                    // Focus on modal for accessibility
                    modal.focus();
                }
            });
        });
        
        // Function to close modal
        function closeModalFunction() {
            modal.classList.remove('show');
            setTimeout(() => {
                document.body.classList.remove('modal-open');
            }, 300); // Matches the transition time
        }
        
        // Close modal when clicking the close button
        if (closeModal) {
            closeModal.addEventListener('click', closeModalFunction);
        }
        
        // Close modal when clicking the mobile close button
        if (mobileCloseButton) {
            mobileCloseButton.addEventListener('click', closeModalFunction);
        }
        
        // Close modal when clicking outside the modal content
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModalFunction();
            }
        });
        
        // Close modal with ESC key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.classList.contains('show')) {
                closeModalFunction();
            }
        });
    }

    // CONTACT FORM & CAPTCHA FUNCTIONALITY
    const contactForm = document.getElementById('contactForm');
    const captchaTextElement = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
    const refreshButton = document.getElementById('refreshCaptcha');
    let captchaValue = '';
    
    // Generate CAPTCHA function
    function generateCaptcha() {
        if (!captchaTextElement) return;
        
        // Generate random string (5 characters)
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        captchaValue = '';
        
        for (let i = 0; i < 5; i++) {
            captchaValue += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        // Display in HTML
        captchaTextElement.textContent = captchaValue;
    }
    
    // Generate initial CAPTCHA if elements exist
    if (captchaTextElement && captchaInput) {
        generateCaptcha();
        
        // Refresh CAPTCHA button handler
        if (refreshButton) {
            refreshButton.addEventListener('click', function() {
                generateCaptcha();
                if (captchaInput) captchaInput.value = '';
            });
        }
    }
    
    // Function to send email
    function sendMail() {
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS not loaded');
            return false;
        }
        
        try {
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
                    if (contactForm) contactForm.reset();
                    if (captchaTextElement) generateCaptcha();
                })
                .catch(function(error) {
                    console.log("Error sending email:", error);
                    alert("Failed to send email. Please try again.");
                });
                
            return true;
        } catch (e) {
            console.error("Error in sendMail function:", e);
            return false;
        }
    }
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // If CAPTCHA is enabled, validate it
            if (captchaInput && captchaValue) {
                if (captchaInput.value !== captchaValue) {
                    alert('Incorrect verification code. Please try again.');
                    generateCaptcha();
                    captchaInput.value = '';
                    return;
                }
            }
            
            // Try to send email
            const emailSent = sendMail();
            
            // If email sending failed or EmailJS is not available, show fallback message
            if (!emailSent) {
                alert('Thank you for your message. We will get back to you soon!');
                contactForm.reset();
                if (captchaTextElement) generateCaptcha();
            }
        });
    }
    
    // Get all Learn More / Enquiry buttons
    const learnMoreButton = document.querySelector('.about-content .cta-button');
    const enquiryLinks = Array.from(document.querySelectorAll('.navbar-menu a')).filter(
        link => link.textContent.trim() === 'Enquiry'
    );
    
    // Add click event listeners to scroll to contact form
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function(e) {
            e.preventDefault();
            const contactFormSection = document.getElementById('contact-form-section');
            if (contactFormSection) {
                contactFormSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    if (enquiryLinks.length > 0) {
        enquiryLinks[0].addEventListener('click', function(e) {
            e.preventDefault();
            const contactFormSection = document.getElementById('contact-form-section');
            if (contactFormSection) {
                contactFormSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Contact form section not found!');
            }
        });
    }
});
