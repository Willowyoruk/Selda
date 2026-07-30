/* ==========================================
   MAIN SITE & MENU SCRIPT (ADA COMPLIANT)
   Updated: 1) add id/name to drinks category select
            2) replace static innerHTML with DOM creation
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

    // --- DESKTOP NESTED DELIVERY SUBMENU ---
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

    // --- ESCAPE KEY HANDLER ---
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

        slides.forEach((slide, idx) => {
            const isActive = idx === currentIndex;
            slide.setAttribute('aria-hidden', !isActive);

            const focusables = slide.querySelectorAll('a, button');
            focusables.forEach(item => {
                if (isActive) item.removeAttribute('tabindex');
                else item.setAttribute('tabindex', '-1');
            });
        });

        if (captionBar && slides[currentIndex]) {
            const itemName = slides[currentIndex].getAttribute('data-name');
            captionBar.style.opacity = '0';
            setTimeout(() => {
                captionBar.textContent = itemName || '';
                captionBar.style.opacity = '1';
            }, 150);
        }

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
        updateCarousel(0);
        startAutoplay();
    }

    // --- DYNAMIC MENU RENDERING (MENU PAGE - ACCESSIBLE + FOCUSABLE ITEMS) ---
    const targetContainer = document.getElementById('live-menu-target');

    if (typeof menuData !== 'undefined' && targetContainer) {
        targetContainer.innerHTML = "";

        const sectionTitles = {
            salads: "Salads",
            smallBites: "Small Bites",
            aLittleMore: "A Little More",
            fromTheOven: "From the Oven",
            desserts: "Desserts"
        };

        function stripHTML(html = "") {
            const tmp = document.createElement('div');
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        }

        function altForItem(item) {
            if (item.alt && item.alt.trim()) return item.alt;
            const nameOnly = item.name ? item.name.replace(/\(.+?\)/g, '').trim() : 'Menu item';
            const descShort = stripHTML(item.description || '').split('.').shift() || '';
            return descShort ? `${nameOnly} — ${descShort}` : `${nameOnly}`;
        }

        Object.entries(menuData).forEach(([category, items]) => {
            const sectionBlock = document.createElement('section');
            sectionBlock.className = 'menu-category-section';
            const sectionTitleText = sectionTitles[category] || category;
            sectionBlock.setAttribute('aria-label', sectionTitleText);

            const heading = document.createElement('h2');
            heading.textContent = sectionTitleText;
            sectionBlock.appendChild(heading);

            const list = document.createElement('ul');
            list.className = 'menu-items-grid';
            list.setAttribute('role', 'list');

            items.forEach((item, idx) => {
                const listItem = document.createElement('li');
                listItem.className = 'menu-item';
                listItem.setAttribute('role', 'listitem');
                listItem.tabIndex = 0;

                listItem.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const firstFocusable = listItem.querySelector('button, a, [tabindex]:not([tabindex="-1"])');
                        if (firstFocusable) firstFocusable.focus();
                    }
                });

                const baseId = `${category.replace(/\s+/g,'-')}-item-${idx}`;
                const titleId = `${baseId}-title`;
                const descId = `${baseId}-desc`;
                const priceId = `${baseId}-price`;
                const imgCaptionId = `${baseId}-imgcap`;

                if (item.image) {
                    const figure = document.createElement('figure');
                    figure.className = 'menu-item-image-wrap';

                    const img = document.createElement('img');
                    img.className = 'menu-item-img';
                    img.src = item.image;
                    img.alt = altForItem(item);

                    const figcap = document.createElement('figcaption');
                    figcap.id = imgCaptionId;
                    figcap.className = 'sr-only';
                    figcap.textContent = stripHTML(item.description || '');

                    figure.appendChild(img);
                    figure.appendChild(figcap);
                    listItem.appendChild(figure);
                }

                const content = document.createElement('div');
                content.className = 'menu-item-content';

                const header = document.createElement('div');
                header.className = 'menu-item-header';

                const titleSpan = document.createElement('span');
                titleSpan.className = 'menu-item-title';
                titleSpan.id = titleId;
                titleSpan.textContent = stripHTML(item.name || 'Menu item');

                const priceSpan = document.createElement('span');
                priceSpan.className = 'menu-item-price';
                priceSpan.id = priceId;
                const itemPriceDisplay = (item.price && item.price.includes('$')) ? item.price : (item.price ? `$${item.price}` : '');
                priceSpan.textContent = itemPriceDisplay;
                priceSpan.setAttribute('aria-label', `Price: ${itemPriceDisplay}`);

                header.appendChild(titleSpan);
                header.appendChild(priceSpan);
                content.appendChild(header);

                if (item.description) {
                    const p = document.createElement('p');
                    p.className = 'menu-item-desc';
                    p.id = descId;
                    p.textContent = stripHTML(item.description);
                    content.appendChild(p);
                }

                const describedByIds = [];
                if (item.description) describedByIds.push(descId);
                if (item.image) describedByIds.push(imgCaptionId);
                if (itemPriceDisplay) describedByIds.push(priceId);
                if (describedByIds.length > 0) {
                    listItem.setAttribute('aria-labelledby', titleId);
                    listItem.setAttribute('aria-describedby', describedByIds.join(' '));
                } else {
                    listItem.setAttribute('aria-labelledby', titleId);
                }

                listItem.appendChild(content);
                list.appendChild(listItem);
            });

            sectionBlock.appendChild(list);

            // Replace previous innerHTML approach with DOM creation (static content)
            if (category === 'salads') {
                const footDivider = document.createElement('div');
                footDivider.style.cssText = "margin-top: 35px; padding-top: 20px; border-top: 1px dashed rgba(255,255,255,0.12); text-align: center; width: 100%;";

                const h3 = document.createElement('h3');
                h3.style.cssText = "font-family: 'Montserrat', sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--pure-white); margin-bottom: 0.5rem; font-weight: 700;";
                h3.textContent = "Protein Add-Ons";

                const p = document.createElement('p');
                p.style.cssText = "font-family: 'Lato', sans-serif; font-size: 0.82rem; color: var(--subtle-gold); letter-spacing: 0.3px;";
                p.textContent = "Chicken (8) • Beef (9) • Salmon (10) • Shrimp (9)";

                footDivider.appendChild(h3);
                footDivider.appendChild(p);
                sectionBlock.appendChild(footDivider);
            }

            targetContainer.appendChild(sectionBlock);
        });
    }

    // --- DYNAMIC DRINKS RENDERING (DRINKS PAGE - ADA COMPLIANT DROPDOWN & SAFE DOM) ---
    const drinksTargetContainer = document.getElementById('live-drinks-target');

    if (typeof drinkData !== 'undefined' && drinksTargetContainer) {
        drinksTargetContainer.innerHTML = "";

        if (drinkData.quickNav) {
            const navWrapper = document.createElement('div');
            navWrapper.style.cssText = "text-align: center; margin: 0 auto 2.5rem auto; max-width: 320px; padding: 0 1rem;";

            // CREATE select with id + name to satisfy browsers and Lighthouse
            const selectDropdown = document.createElement('select');
            selectDropdown.id = 'drinks-category-jump';
            selectDropdown.name = 'drinks-category';
            selectDropdown.setAttribute('aria-label', 'Drink Menu Categories');
            selectDropdown.style.cssText = "width: 100%; padding: 0.75rem 1rem; background-color: var(--velvet-blue-surface, #0f172a); color: var(--subtle-gold); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px;";

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

            selectDropdown.addEventListener('change', (e) => {
                const targetId = e.target.value;
                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                        const heading = targetElement.querySelector('h2');
                        if (heading) heading.focus({preventScroll: true});
                    }
                    e.target.value = "";
                }
            });

            navWrapper.appendChild(selectDropdown);
            drinksTargetContainer.appendChild(navWrapper);
        }

        for (const [categoryKey, categoryObj] of Object.entries(drinkData)) {
            if (categoryKey === 'quickNav') continue;

            const sectionBlock = document.createElement('section');
            sectionBlock.className = 'menu-category-section';
            sectionBlock.setAttribute('aria-label', categoryObj.title);

            if (categoryObj.anchorId) {
                sectionBlock.id = categoryObj.anchorId;
                sectionBlock.style.scrollMarginTop = "100px";
            }

            const heading = document.createElement('h2');
            heading.innerText = categoryObj.title;
            heading.tabIndex = -1;
            sectionBlock.appendChild(heading);

            if (categoryObj.subtitle) {
                const subHeading = document.createElement('p');
                subHeading.style.cssText = "text-align: center; font-size: 0.85rem; color: var(--muted-white); margin-top: -1rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px;";
                subHeading.innerText = categoryObj.subtitle;
                sectionBlock.appendChild(subHeading);
            }

            const gridBlock = document.createElement('div');
            gridBlock.className = 'menu-items-grid';

            categoryObj.items.forEach((item) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'menu-item';
                itemElement.setAttribute('role', 'group');
                itemElement.tabIndex = 0;

                const itemPriceDisplay = (item.price && String(item.price).includes('$')) ? item.price : (item.price ? `$${item.price}` : '');

                const contentWrap = document.createElement('div');
                contentWrap.className = 'menu-item-content';
                contentWrap.style.width = '100%';

                const headerDiv = document.createElement('div');
                headerDiv.className = 'menu-item-header';

                const titleSpan = document.createElement('span');
                titleSpan.className = 'menu-item-title';
                titleSpan.textContent = item.name;

                const priceSpan = document.createElement('span');
                priceSpan.className = 'menu-item-price';
                priceSpan.setAttribute('aria-label', `Price: ${itemPriceDisplay}`);
                priceSpan.textContent = itemPriceDisplay;

                headerDiv.appendChild(titleSpan);
                headerDiv.appendChild(priceSpan);
                contentWrap.appendChild(headerDiv);

                if (item.description) {
                    const descP = document.createElement('p');
                    descP.className = 'menu-item-desc';
                    descP.textContent = item.description;
                    contentWrap.appendChild(descP);
                }

                const ariaLabelParts = [item.name];
                if (itemPriceDisplay) ariaLabelParts.push(itemPriceDisplay);
                if (item.description) ariaLabelParts.push(item.description);
                itemElement.setAttribute('aria-label', ariaLabelParts.join('. '));

                itemElement.appendChild(contentWrap);
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

    // --- Optional: Replace inline delivery-toggle behavior if present on page ---
    const deliveryToggleBtn = document.getElementById('delivery-toggle-btn');
    const deliveryOptions = document.getElementById('delivery-options');
    if (deliveryToggleBtn && deliveryOptions) {
        deliveryToggleBtn.addEventListener('click', () => {
            deliveryOptions.style.display = 'grid';
            deliveryToggleBtn.style.display = 'none';
            deliveryToggleBtn.setAttribute('aria-expanded', 'true');
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
