  const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        const locationsToggle = document.getElementById('locations-toggle');
        const locationsDropdown = document.getElementById('locations-dropdown');
        const mobilePlatformsToggle = document.getElementById('mobile-platforms-toggle');
        const mobilePlatformsDropdown = document.getElementById('mobile-platforms-dropdown');
        
        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => mobileMenu.classList.toggle('active'));
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (!link.closest('#locations-dropdown') && !link.closest('#mobile-platforms-dropdown')) {
                        mobileMenu.classList.remove('active');
                    }
                });
            });

            mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
            });
        }
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
                captionBar.style.opacity = 0; 
                setTimeout(() => {
                    captionBar.textContent = itemName;
                    captionBar.style.opacity = 1;
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
            carouselContainer.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; isSwiping = true; clearInterval(autoplayTimer); }, { passive: true });
            carouselContainer.addEventListener('touchmove', (e) => { if (isSwiping) currentX = e.touches[0].clientX; }, { passive: true });
            carouselContainer.addEventListener('touchend', () => {
                if (!isSwiping) return; isSwiping = false;
                const diffX = startX - currentX;
                if (Math.abs(diffX) > 50 && currentX !== 0) { if (diffX > 0) nextSlide(); else prevSlide(); }
                currentX = 0; resetAutoplay();
            });
        }

        function startAutoplay() { autoplayTimer = setInterval(nextSlide, 5000); }
        function resetAutoplay() { clearInterval(autoplayTimer); startAutoplay(); }
        if (track && slides.length > 0) startAutoplay();





