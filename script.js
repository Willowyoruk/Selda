/* ==========================================
   MAIN SITE & MENU SCRIPT (ADA COMPLIANT)
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

    // --- DESKTOP NESTED DELIVERY SUBMENU: keep aria-expanded in sync ---
    const desktopDeliveryToggle = document.getElementById('desktop-delivery-toggle');
    const desktopNestedWrap = desktopDeliveryToggle ? desktopDeliveryToggle.closest('.nested-delivery') : null;

    if (desktopDeliveryToggle && desktopNestedWrap) {
        desktopNestedWrap.addEventListener('mouseenter', () => setAriaExpanded(desktopDeliveryToggle, true));
        desktopNestedWrap.addEventListener('mouseleave', () => setAriaExpanded(desktopDeliveryToggle, false));
        desktopNestedWrap.addEventListener('focusin', () => setAriaExpanded(desktopDeliveryToggle, true));
        desktopNestedWrap.addEventListener('focusout', (e) => {
            if (!desktopNestedWrap.contains(e.relatedTarget)) {
                setAriaExpanded(desktopDeliveryToggle, false);
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

    // --- DYNAMIC MENU RENDERING (MENU PAGE - ADA COMPLIANT) ---
    const targetContainer = document.getElementById('live-menu-target');

    if (typeof menuData !== 'undefined' && targetContainer) {
        targetContainer.innerHTML = ""; // Clear out anything existing to prevent duplication
        
        const sectionTitles = {
            salads: "salads",
            smallBites: "small bites",
            aLittleMore: "a little more",
            fromTheOven: "from the oven",
            desserts: "desserts"
        };

        for (const [category, items] of Object.entries(menuData)) {
            const sectionBlock = document.createElement('section');
            sectionBlock.className = 'menu-category-section';
            
            const sectionTitleText = sectionTitles[category] || category;
            sectionBlock.setAttribute('aria-label', sectionTitleText);

            const heading = document.createElement('h2');
            heading.innerText = sectionTitleText;
            sectionBlock.appendChild(heading);

            const gridBlock = document.createElement('div');
            gridBlock.className = 'menu-items-grid';

            items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'menu-item';
                
                const itemPriceDisplay = item.price.includes('$') ? item.price : `$${item.price}`;
                
                itemElement.innerHTML = `
                    ${item.image ? `<div class="menu-item-image-wrap"><img src="${item.image}" alt="" class="menu-item-img"></div>` : ''}
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <span class="menu-item-title">${item.name}</span>
                            <span class="menu-item-price" aria-label="Price: ${itemPriceDisplay}">${itemPriceDisplay}</span>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                    </div>
                `;
                gridBlock.appendChild(itemElement);
            });

            sectionBlock.appendChild(gridBlock);

            if (category === 'salads') {
                const footDivider = document.createElement('div');
                footDivider.style.cssText = "margin-top: 35px; padding-top: 20px; border-top: 1px dashed rgba(255,255,255,0.12); text-align: center; width: 100%;";
                footDivider.innerHTML = `
                    <h3 style="font-family: 'Montserrat', sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--pure-white); margin-bottom: 0.5rem; font-weight: 600;">Salad Enhancements</h3>
                    <p style="font-family: 'Lato', sans-serif; font-size: 0.82rem; color: var(--subtle-gold); letter-spacing: 0.3px; white-space: nowrap; width: 100%; overflow: hidden;">
                        Chicken (8) &nbsp;•&nbsp; Beef (9) &nbsp;•&nbsp; Salmon (10) &nbsp;•&nbsp; Shrimp (9)
                    </p>
                `;
                sectionBlock.appendChild(footDivider);
            }

            targetContainer.appendChild(sectionBlock);
        }
    }

    // --- DYNAMIC DRINKS RENDERING (DRINKS PAGE - ADA COMPLIANT DROPDOWN) ---
    const drinksTargetContainer = document.getElementById('live-drinks-target');

    if (typeof drinkData !== 'undefined' && drinksTargetContainer) {
        drinksTargetContainer.innerHTML = ""; // Clear container

        // 1. Render Category Jump Dropdown at the top (ADA Compliant)
        if (drinkData.quickNav) {
            const navWrapper = document.createElement('div');
            navWrapper.style.cssText = "text-align: center; margin: 0 auto 2.5rem auto; max-width: 320px; padding: 0 1rem;";
            
            const selectDropdown = document.createElement('select');
            selectDropdown.setAttribute('aria-label', 'Drink Menu Categories');
            selectDropdown.style.cssText = "width: 100%; padding: 0.75rem 1rem; background-color: var(--velvet-blue-surface, #0f172a); color: var(--subtle-gold); border: 1px solid rgba(255,255,255,0.4); border-radius: 4px; font-family: 'Montserrat', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;";
            
            // Default prompt option
            const defaultOption = document.createElement('option');
            defaultOption.value = "";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            defaultOption.innerText = "— JUMP TO CATEGORY —";
            selectDropdown.appendChild(defaultOption);

            drinkData.quickNav.items.forEach(nav => {
                const option = document.createElement('option');
                option.value = nav.anchor;
                option.innerText = nav.name;
                selectDropdown.appendChild(option);
            });

            // Jump behavior on change
            selectDropdown.addEventListener('change', (e) => {
                const targetId = e.target.value;
                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                    // Reset dropdown selection back to default prompt after jumping
                    e.target.value = "";
                }
            });

            navWrapper.appendChild(selectDropdown);
            drinksTargetContainer.appendChild(navWrapper);
        }

        // 2. Loop through each drink category
        for (const [categoryKey, categoryObj] of Object.entries(drinkData)) {
            if (categoryKey === 'quickNav') continue; // Skip the quickNav metadata object

            const sectionBlock = document.createElement('section');
            sectionBlock.className = 'menu-category-section';
            sectionBlock.setAttribute('aria-label', categoryObj.title);
            
            // Assign anchor ID so the quick-jump dropdown targets smoothly
            if (categoryObj.anchorId) {
                sectionBlock.id = categoryObj.anchorId;
                sectionBlock.style.scrollMarginTop = "100px";
            }

            // Category Title
            const heading = document.createElement('h2');
            heading.innerText = categoryObj.title;
            sectionBlock.appendChild(heading);

            // Optional Subtitle
            if (categoryObj.subtitle) {
                const subHeading = document.createElement('p');
                subHeading.style.cssText = "text-align: center; font-size: 0.85rem; color: var(--muted-white); margin-top: -1rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px;";
                subHeading.innerText = categoryObj.subtitle;
                sectionBlock.appendChild(subHeading);
            }

            // Grid Block for Items
            const gridBlock = document.createElement('div');
            gridBlock.className = 'menu-items-grid';

            categoryObj.items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'menu-item';
                
                const itemPriceDisplay = item.price.includes('$') ? item.price : `$${item.price}`;
                
                itemElement.innerHTML = `
                    <div class="menu-item-content" style="width: 100%;">
                        <div class="menu-item-header">
                            <span class="menu-item-title">${item.name}</span>
                            <span class="menu-item-price" aria-label="Price: ${itemPriceDisplay}">${itemPriceDisplay}</span>
                        </div>
                        ${item.description ? `<p class="menu-item-desc">${item.description}</p>` : ''}
                    </div>
                `;
                gridBlock.appendChild(itemElement);
            });

            sectionBlock.appendChild(gridBlock);
            drinksTargetContainer.appendChild(sectionBlock);
        }
    }

    // --- MOBILE FOOTER DROP-UP MENU ---
    const orderTrigger = document.getElementById('mobile-order-trigger');
    const dropupMenu = document.getElementById('mobile-dropup-menu');
    
    if (orderTrigger && dropupMenu) {
        orderTrigger.addEventListener('click', (e) => { 
            e.preventDefault(); 
            e.stopPropagation(); 
            const isOpen = dropupMenu.classList.toggle('open'); 
            setAriaExpanded(orderTrigger, isOpen);
        });
        document.addEventListener('click', (e) => { 
            if (!dropupMenu.contains(e.target) && e.target !== orderTrigger) {
                dropupMenu.classList.remove('open'); 
                setAriaExpanded(orderTrigger, false);
            } 
        });
    }

    // --- MOBILE FOOTER NESTED DELIVERY SUBMENU ---
    const footerDeliveryToggle = document.getElementById('mobile-footer-delivery-toggle');
    const footerDeliveryDropdown = document.getElementById('mobile-footer-delivery-dropdown');

    if (footerDeliveryToggle && footerDeliveryDropdown) {
        footerDeliveryToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = footerDeliveryDropdown.classList.contains('open');
            footerDeliveryDropdown.classList.toggle('open');
            footerDeliveryToggle.classList.toggle('active');
            setAriaExpanded(footerDeliveryToggle, !isOpen);
            
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