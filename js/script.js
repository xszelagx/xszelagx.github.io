document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Responsive Navigation Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll Effects for Navbar
    const header = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal Elements on Scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealFunction = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Trigger once on load
    revealFunction();
    // Trigger on scroll
    window.addEventListener('scroll', revealFunction);

    // Dynamic 3D effect for glass cards on mouse move (Desktop only)
    const cards = document.querySelectorAll('.glass-card');

    if (window.matchMedia("(min-width: 768px)").matches) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element.
                const y = e.clientY - rect.top;  // y position within the element.

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -5; // Max rotation 5deg
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

                // Add a subtle glow following cursor
                card.style.background = `
                    radial-gradient(
                        circle at ${x}px ${y}px, 
                        rgba(255, 255, 255, 0.08) 0%, 
                        rgba(30,32,40,0.4) 50%
                    )
                `;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
                card.style.background = 'var(--surface-color)';
                card.style.transition = 'all 0.5s ease';

                // Remove the inline transition so hover css still works
                setTimeout(() => {
                    card.style.transition = '';
                }, 500);
            });
        });
    }

    // Web3Forms Form Handling
    const form = document.getElementById('contact-form');
    const result = document.getElementById('form-result');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Proste zabezpieczenie antyspamowe (botcheck input)
            if (form.botcheck && form.botcheck.checked) {
                return;
            }

            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            result.textContent = "Wysyłanie...";
            result.className = "form-result"; // Reset classes

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
                .then(async (response) => {
                    let jsonResponse = await response.json();
                    if (response.status == 200) {
                        result.textContent = "Wiadomość została wysłana pomyślnie!";
                        result.classList.add("text-green-500");
                    } else {
                        console.log(response);
                        result.textContent = jsonResponse.message || "Wystąpił błąd podczas wysyłania.";
                        result.classList.add("text-red-500");
                    }
                })
                .catch(error => {
                    console.log(error);
                    result.textContent = "Coś poszło nie tak. Spróbuj powtórzyć operację.";
                    result.classList.add("text-red-500");
                })
                .then(function () {
                    form.reset();
                    setTimeout(() => {
                        result.textContent = "";
                        result.className = "form-result";
                    }, 5000);
                });
        });
    }

    // Google Consent Mode v2 logic
    const consentBanner = document.getElementById('cookie-consent-banner');
    const btnAccept = document.getElementById('btn-accept');
    const btnReject = document.getElementById('btn-reject');

    // Check previous consent
    const consentStatus = localStorage.getItem('cookieConsent');

    if (consentBanner) {
        if (!consentStatus) {
            // Show banner if no consent previously recorded
            setTimeout(() => {
                consentBanner.classList.add('show');
            }, 1000);
        } else if (consentStatus === 'granted') {
            // Update GTM if previous consent was granted
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
            });
        }
    }

    if (btnAccept && btnReject && consentBanner) {
        btnAccept.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'granted');
            consentBanner.classList.remove('show');

            // Update Consent Mode
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
            });
        });

        btnReject.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'denied');
            consentBanner.classList.remove('show');

            // Explicitly deny (although it's default in head)
            gtag('consent', 'update', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
            });
        });
    }

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Anti-scraping Contact Reveal
    const revealBtn = document.getElementById('reveal-contact');
    const contactRevealed = document.getElementById('contact-revealed');

    if (revealBtn && contactRevealed) {
        revealBtn.addEventListener('click', function (e) {
            e.preventDefault();

            // Prosta obfuskacja rozdzielająca kluczowe dane, by boty nie mogły ich odczytać w locie ze źródła
            const emailName = 'szelagmikolaj';
            const emailDomain = 'gmail.com';
            const phonePrefix = '+48';
            const phoneP1 = ' 505';
            const phoneP2 = ' 406';
            const phoneP3 = ' 100';

            const emailFull = emailName + '@' + emailDomain;
            const phoneFull = phonePrefix + phoneP1 + phoneP2 + phoneP3;

            contactRevealed.innerHTML = `
                <div style="margin-bottom: 10px;">
                    <a href="mailto:${emailFull}" style="color: var(--primary); text-decoration: none;">📧 ${emailFull}</a>
                </div>
                <div>
                    <a href="tel:${phoneFull.replace(/\s/g, '')}" style="color: var(--primary); text-decoration: none;">📞 ${phoneFull}</a>
                </div>
            `;

            revealBtn.style.display = 'none';
            contactRevealed.style.display = 'block';
        });
        // Blog "Load More" Pagination Logic
        const blogGrid = document.querySelector('.blog-grid');
        const loadMoreBtn = document.getElementById('load-more-btn');
        const INITIAL_VISIBLE_POSTS = 6;

        if (blogGrid && loadMoreBtn) {
            const posts = blogGrid.querySelectorAll('.blog-card');

            // Hide all posts beyond initial count
            posts.forEach((post, index) => {
                if (index >= INITIAL_VISIBLE_POSTS) {
                    post.style.display = 'none';
                }
            });

            // If total posts <= initial count, hide the button
            if (posts.length <= INITIAL_VISIBLE_POSTS) {
                loadMoreBtn.style.display = 'none';
            }

            loadMoreBtn.addEventListener('click', () => {
                posts.forEach(post => {
                    post.style.display = 'flex';
                    // Trigger reveal animation for newly shown posts
                    post.classList.add('active');
                });
                loadMoreBtn.style.display = 'none';
            });
        }
    });
