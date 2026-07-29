/* ==========================================
   MAIN SITE & MENU SCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- HELPER FUNCTION: Sync ARIA Expanded State ---
    function setAriaExpanded(element, isOpen) {
        if (element) {
            element.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
    }

    // --- MOBILE MENU LOGIC ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('active');
            setAriaExpanded(hamburger, isOpen);
        });

        // Close menu when clicking navigation links (ignoring toggle buttons)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                const isToggle = link.id === 'locations-toggle' || 
                                 link.id === 'mobile-platforms-toggle' || 
                                 link.id === 'mobile-delivery-toggle';
                if (!isToggle) {
                    mobileMenu.classList.remove('active');
                    setAriaExpanded(hamburger, false);
                }
            });
        });

        // Close menu when clicking outer overlay
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                setAriaExpanded(hamburger, false);
            }
        });
    }

    // --- MOBILE SUBMENU TOGGLES ---
    const locationsToggle = document.getElementById('locations-toggle');
    const locationsDropdown = document.getElementById('locations-dropdown');
    const mobilePlatformsToggle = document.getElementById('mobile-platforms-toggle');
    const mobilePlatformsDropdown = document.getElementById('mobile-platforms-dropdown');
    const mobileDeliveryToggle = document.getElementById('mobile-delivery-toggle');
    const mobileDeliveryDropdown = document.getElementById('mobile-delivery-dropdown');

    if (locationsToggle && locationsDropdown) {
        locationsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            locationsToggle.classList.toggle('active');
            const isOpen = locationsDropdown.classList.toggle('open');
            setAriaExpanded(locationsToggle, isOpen);
        });
    }

    if (mobilePlatformsToggle && mobilePlatformsDropdown) {
        mobilePlatformsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            mobilePlatformsToggle.classList.toggle('active');
            const isOpen = mobilePlatformsDropdown.classList.toggle('open');
            setAriaExpanded(mobilePlatformsToggle, isOpen);
        });
    }

    if (mobileDeliveryToggle && mobileDeliveryDropdown) {
        mobileDeliveryToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            mobileDeliveryToggle.classList.toggle('active');
            const isOpen = mobileDeliveryDropdown.classList.toggle('open');
            setAriaExpanded(mobileDeliveryToggle, isOpen);
            
            const icon = mobileDeliveryToggle.querySelector('i');
            if (icon) {
                icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    }

    // --- DESKTOP DROPDOWN LOGIC ---
    const desktopDropdown = document.getElementById('desktop-dropdown');
    const desktopDropdownBtn = document.getElementById('desktop-dropdown-btn');

    if (desktopDropdown && desktopDropdownBtn) {
        desktopDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = desktopDropdown.classList.toggle('active');
            setAriaExpanded(desktopDropdownBtn, isOpen);
        });

        document.addEventListener('click', (e) => {
            if (!desktopDropdown.contains(e.target)) {
                desktopDropdown.classList.remove('active');
                setAriaExpanded(desktopDropdownBtn, false);
            }
        });
    }

    // --- ESCAPE KEY HANDLER (Closes Open Menus/Dropdowns) ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                setAriaExpanded(hamburger, false);
                if (hamburger) hamburger.focus();
            }
            if (desktopDropdown && desktopDropdown.classList.contains('active')) {
                desktopDropdown.classList.remove('active');
                setAriaExpanded(desktopDropdownBtn, false);
                if (desktopDropdownBtn) desktopDropdownBtn.focus();
            }
        }
    });

    // --- SCROLL TRANSLUCENCY EFFECT ---
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.add('translucent');
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                mobileMenu.classList.remove('translucent');
            }, 250);
        }
    }, { passive: true });

    // --- CAROUSEL LOGIC (ACCESSIBLE) ---
    const carouselContainer = document.getElementById('about-carousel');
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const dots = document.querySelectorAll('.dot');
    const captionBar = document.getElementById('carousel-caption');

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoplayTimer = null;
    let startX = 0, currentX = 0, isSwiping = false;

    function updateCarousel(index) {
        if (!track || slides.length === 0) return;

        if (index >= totalSlides) currentIndex = 0;
        else if (index < 0) currentIndex = totalSlides - 1;
        else currentIndex = index;

        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Manage accessibility for active vs hidden slides
        slides.forEach((slide, idx) => {
            const isActive = idx === currentIndex;
            slide.setAttribute('aria-hidden', !isActive);
            
            // Disable focusable elements in inactive slides
            const focusables = slide.querySelectorAll('a, button');
            focusables.forEach(item => {
                if (isActive) item.removeAttribute('tabindex');
                else item.setAttribute('tabindex', '-1');
            });
        });

        // Update Caption
        if (captionBar && slides[currentIndex]) {
            const itemName = slides[currentIndex].getAttribute('data-name');
            captionBar.style.opacity = '0';
            setTimeout(() => {
                captionBar.textContent = itemName || '';
                captionBar.style.opacity = '1';
            }, 150);
        }

        // Update Navigation Dots
        dots.forEach((dot, idx) => {
            const isActive = idx === currentIndex;
            dot.classList.toggle('active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    }

    function nextSlide() { updateCarousel(currentIndex + 1); }
    function prevSlide() { updateCarousel(currentIndex - 1); }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            resetAutoplay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            resetAutoplay();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            updateCarousel(idx);
            resetAutoplay();
        });
    });

    // Touch Support
    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            currentX = 0;
            isSwiping = true;
            clearInterval(autoplayTimer);
        }, { passive: true });

        carouselContainer.addEventListener('touchmove', (e) => {
            if (isSwiping) currentX = e.touches[0].clientX;
        }, { passive: true });

        carouselContainer.addEventListener('touchend', () => {
            if (!isSwiping) return;
            isSwiping = false;
            const diffX = startX - currentX;
            if (Math.abs(diffX) > 50 && currentX !== 0) {
                if (diffX > 0) nextSlide();
                else prevSlide();
            }
            currentX = 0;
            resetAutoplay();
        });

        // ADA WCAG 2.2.2: Pause Autoplay on Hover or Keyboard Focus
        carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
        carouselContainer.addEventListener('mouseleave', () => startAutoplay());
        carouselContainer.addEventListener('focusin', () => clearInterval(autoplayTimer));
        carouselContainer.addEventListener('focusout', () => startAutoplay());
    }

    function startAutoplay() {
        if (!autoplayTimer) {
            autoplayTimer = setInterval(nextSlide, 5000);
        }
    }

    function resetAutoplay() {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
        startAutoplay();
    }

    if (track && slides.length > 0) {
        updateCarousel(0); // Initialize state
        startAutoplay();
    }

    // --- DYNAMIC MENU RENDERING (MENU PAGE) ---
    const sectionTitles = {
        salads: "salads",
        smallBites: "small bites...",
        aLittleMore: "a little more...",
        fromTheOven: "from the oven",
        desserts: "desserts"
    };

    const targetContainer = document.getElementById('live-menu-target');

    if (typeof menuData !== 'undefined' && targetContainer) {
        for (const category in menuData) {
            if (menuData.hasOwnProperty(category)) {
                const sectionBlock = document.createElement('section');
                sectionBlock.className = 'menu-section';

                const heading = document.createElement('h2');
                heading.className = 'section-title';
                heading.innerText = sectionTitles[category] || category;
                sectionBlock.appendChild(heading);

                const gridBlock = document.createElement('div');
                gridBlock.className = 'menu-grid';

                menuData[category].forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'menu-item';
                    const itemPriceDisplay = item.price.includes('$') ? item.price : `$${item.price}`;
                    itemElement.innerHTML = `
                        <div class="item-image-wrapper">
                            <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy" onerror="this.parentNode.style.display='none';">
                        </div>
                        <div class="item-details">
                            <div class="item-top-row">
                                <h3 class="item-name">${item.name}</h3>
                                <p class="item-price">${itemPriceDisplay}</p>
                            </div>
                            <p class="item-description">${item.description}</p>
                        </div>
                    `;
                    gridBlock.appendChild(itemElement);
                });

                sectionBlock.appendChild(gridBlock);

                if (category === 'salads') {
                    const footDivider = document.createElement('div');
                    footDivider.style.cssText = "margin-top: 35px; padding-top: 20px; border-top: 1px dashed rgba(255,255,255,0.12); text-align: center; width: 100%;";
                    footDivider.innerHTML = `
                        <h4 style="font-family: 'Montserrat', sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--pure-white); margin-bottom: 0.5rem; font-weight: 600;">Salad Enhancements</h4>
                        <p style="font-family: 'Lato', sans-serif; font-size: 0.82rem; color: var(--subtle-gold); letter-spacing: 0.3px; white-space: nowrap; width: 100%; overflow: hidden;">
                            Chicken (8) &nbsp;•&nbsp; Beef (9) &nbsp;•&nbsp; Salmon (10) &nbsp;•&nbsp; Shrimp (9)
                        </p>
                    `;
                    sectionBlock.appendChild(footDivider);
                }

                targetContainer.appendChild(sectionBlock);
            }
        }
    }

    // --- MOBILE FOOTER DROP-UP MENU ---
    const orderTrigger = document.getElementById('mobile-order-trigger');
    const dropupMenu = document.getElementById('mobile-dropup-menu');
    
    if (orderTrigger && dropupMenu) {
        orderTrigger.addEventListener('click', (e) => { 
            e.preventDefault(); 
            e.stopPropagation(); 
            dropupMenu.classList.toggle('active'); 
        });
        document.addEventListener('click', (e) => { 
            if (!dropupMenu.contains(e.target) && e.target !== orderTrigger) {
                dropupMenu.classList.remove('active'); 
            } 
        });
    }

    // --- MOBILE FOOTER NESTED DELIVERY SUBMENU ---
    const footerDeliveryToggle = document.getElementById('mobile-footer-delivery-toggle');
    const footerDeliveryDropdown = document.getElementById('mobile-footer-delivery-dropdown');

    if (footerDeliveryToggle && footerDeliveryDropdown) {
        footerDeliveryToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = footerDeliveryDropdown.classList.contains('open');
            footerDeliveryDropdown.classList.toggle('open');
            
            const icon = footerDeliveryToggle.querySelector('i');
            if (icon) {
                icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });
    }
});

// --- STICKY FOOTER DRAWER TOGGLE (Global scope for inline onclick handlers) ---
function toggleStickyOrderPopup() {
    const popup = document.getElementById('sticky-order-popup');
    const button = document.querySelector('[onclick="toggleStickyOrderPopup()"]');
    if (popup) {
        const isHidden = popup.style.display === 'none' || popup.style.display === '';
        popup.style.display = isHidden ? 'block' : 'none';
        
        if (button) {
            button.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        }
    }
}