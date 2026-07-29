document.addEventListener('DOMContentLoaded', () => {
    // --- MOBILE MENU LOGIC ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const locationsToggle = document.getElementById('locations-toggle');
    const locationsDropdown = document.getElementById('locations-dropdown');
    const mobilePlatformsToggle = document.getElementById('mobile-platforms-toggle');
    const mobilePlatformsDropdown = document.getElementById('mobile-platforms-dropdown');
    const mobileDeliveryToggle = document.getElementById('mobile-delivery-toggle');
    const mobileDeliveryDropdown = document.getElementById('mobile-delivery-dropdown');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => mobileMenu.classList.toggle('active'));

        // Close menu when clicking navigation links (but ignore toggle buttons)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const isToggle = link.id === 'locations-toggle' || 
                                 link.id === 'mobile-platforms-toggle' || 
                                 link.id === 'mobile-delivery-toggle';
                if (!isToggle) {
                    mobileMenu.classList.remove('active');
                }
            });
        });

        // Close menu when clicking outer overlay
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    }

    // --- MOBILE SUBMENU TOGGLES ---
    if (locationsToggle && locationsDropdown) {
        locationsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            locationsToggle.classList.toggle('active');
            locationsDropdown.classList.toggle('open');
        });
    }

    if (mobilePlatformsToggle && mobilePlatformsDropdown) {
        mobilePlatformsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            mobilePlatformsToggle.classList.toggle('active');
            mobilePlatformsDropdown.classList.toggle('open');
        });
    }

    if (mobileDeliveryToggle && mobileDeliveryDropdown) {
        mobileDeliveryToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            mobileDeliveryToggle.classList.toggle('active');
            mobileDeliveryDropdown.classList.toggle('open');
            
            const icon = mobileDeliveryToggle.querySelector('i');
            if (icon) {
                const isOpen = mobileDeliveryDropdown.classList.contains('open');
                icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    }

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

    // --- DESKTOP DROPDOWN LOGIC ---
    const desktopDropdown = document.getElementById('desktop-dropdown');
    const desktopDropdownBtn = document.getElementById('desktop-dropdown-btn');

    if (desktopDropdown && desktopDropdownBtn) {
        desktopDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!desktopDropdown.contains(e.target)) {
                desktopDropdown.classList.remove('active');
            }
        });
    }

    // --- CAROUSEL LOGIC ---
    const carouselContainer = document.getElementById('about-carousel');
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const dots = document.querySelectorAll('.dot');
    const captionBar = document.getElementById('carousel-caption');

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoplayTimer;
    let startX = 0, currentX = 0, isSwiping = false;

    function updateCarousel(index) {
        if (!track || slides.length === 0) return;
        if (index >= totalSlides) currentIndex = 0;
        else if (index < 0) currentIndex = totalSlides - 1;
        else currentIndex = index;
        
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        if (captionBar && slides[currentIndex]) {
            const itemName = slides[currentIndex].getAttribute('data-name');
            captionBar.style.opacity = '0'; 
            setTimeout(() => {
                captionBar.textContent = itemName;
                captionBar.style.opacity = '1';
            }, 150);
        }
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    function nextSlide() { updateCarousel(currentIndex + 1); }
    function prevSlide() { updateCarousel(currentIndex - 1); }

    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); nextSlide(); resetAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); prevSlide(); resetAutoplay(); });
    dots.forEach((dot, idx) => dot.addEventListener('click', (e) => { e.preventDefault(); updateCarousel(idx); resetAutoplay(); }));

    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', (e) => { 
            startX = e.touches[0].clientX; 
            currentX = 0; // Fix: Reset currentX on tap
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
    }

    function startAutoplay() { autoplayTimer = setInterval(nextSlide, 5000); }
    function resetAutoplay() { clearInterval(autoplayTimer); startAutoplay(); }
    if (track && slides.length > 0) startAutoplay();
});

// --- STICKY FOOTER DRAWER TOGGLE ---
function toggleStickyOrderPopup() {
    const popup = document.getElementById('sticky-order-popup');
    if (popup) {
        popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
    }
}