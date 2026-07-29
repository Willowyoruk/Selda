document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            
            // Toggle Accessibility Attributes
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.setAttribute('aria-hidden', isExpanded);
            
            // Toggle Visual Class
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // 2. Desktop Dropdown Logic (Order button)
    const desktopDropdownBtn = document.getElementById('desktop-dropdown-btn');
    const desktopDropdownContent = document.getElementById('desktop-dropdown-content');

    if (desktopDropdownBtn && desktopDropdownContent) {
        desktopDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = desktopDropdownBtn.getAttribute('aria-expanded') === 'true';
            desktopDropdownBtn.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle display manually if CSS hover isn't handling it 
            // (Assumes CSS is display:none by default and we use JS for click accessibility)
            desktopDropdownContent.style.display = isExpanded ? 'none' : 'block';
        });
    }

    // 3. Desktop Nested Delivery Dropdown
    const desktopDeliveryToggle = document.getElementById('desktop-delivery-toggle');
    const desktopDeliveryContent = document.getElementById('desktop-delivery-content');

    if (desktopDeliveryToggle && desktopDeliveryContent) {
        desktopDeliveryToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = desktopDeliveryToggle.getAttribute('aria-expanded') === 'true';
            desktopDeliveryToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Find the icon and rotate it
            const icon = desktopDeliveryToggle.querySelector('.fa-chevron-right');
            if (icon) {
                icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(90deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
    }

    // 4. Mobile Order Dropdown Toggle
    const mobilePlatformsToggle = document.getElementById('mobile-platforms-toggle');
    const mobilePlatformsDropdown = document.getElementById('mobile-platforms-dropdown');

    if (mobilePlatformsToggle && mobilePlatformsDropdown) {
        mobilePlatformsToggle.addEventListener('click', () => {
            const isExpanded = mobilePlatformsToggle.getAttribute('aria-expanded') === 'true';
            mobilePlatformsToggle.setAttribute('aria-expanded', !isExpanded);
            mobilePlatformsDropdown.setAttribute('aria-hidden', isExpanded);
            
            // Find the icon and rotate it
            const icon = mobilePlatformsToggle.querySelector('.fa-chevron-down');
            if (icon) {
                icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
    }

    // 5. Mobile Nested Delivery Toggle
    const mobileDeliveryToggle = document.getElementById('mobile-delivery-toggle');
    const mobileDeliveryDropdown = document.getElementById('mobile-delivery-dropdown');

    if (mobileDeliveryToggle && mobileDeliveryDropdown) {
        mobileDeliveryToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = mobileDeliveryToggle.getAttribute('aria-expanded') === 'true';
            mobileDeliveryToggle.setAttribute('aria-expanded', !isExpanded);
            mobileDeliveryDropdown.setAttribute('aria-hidden', isExpanded);
            
            // Find the icon and rotate it
            const icon = mobileDeliveryToggle.querySelector('.fa-chevron-right');
            if (icon) {
                icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(90deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
    }

    // 6. ADA Compliance: Close menus when clicking outside
    document.addEventListener('click', (e) => {
        // Close Desktop Menu
        if (desktopDropdownBtn && desktopDropdownContent && !desktopDropdownBtn.contains(e.target) && !desktopDropdownContent.contains(e.target)) {
            desktopDropdownBtn.setAttribute('aria-expanded', 'false');
            desktopDropdownContent.style.display = ''; // Revert to CSS default
        }
    });

    // 7. ADA Compliance: Escape Key to close menus
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            if (hamburgerBtn && hamburgerBtn.getAttribute('aria-expanded') === 'true') {
                hamburgerBtn.click();
                hamburgerBtn.focus();
            }
            
            // Close desktop dropdown if open
            if (desktopDropdownBtn && desktopDropdownBtn.getAttribute('aria-expanded') === 'true') {
                desktopDropdownBtn.setAttribute('aria-expanded', 'false');
                desktopDropdownContent.style.display = '';
                desktopDropdownBtn.focus();
            }
        }
    });
});