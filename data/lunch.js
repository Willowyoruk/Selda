// data/lunch.js — lightweight, non-duplicating lunch-page helpers
// This file intentionally avoids adding any listeners that are already implemented
// in script.js. It only contains page-specific, non-conflicting enhancements.

(function () {
  // Guard to prevent this file running more than once
  if (window.__selda_lunch_js_loaded) return;
  window.__selda_lunch_js_loaded = true;

  document.addEventListener('DOMContentLoaded', () => {
    try {
      // 1) Make the main prix-fixe heading programmatically focusable for screen readers
      const prixHeading = document.querySelector('.menu-header h1');
      if (prixHeading && !prixHeading.hasAttribute('tabindex')) {
        prixHeading.setAttribute('tabindex', '-1'); // focusable programmatically but not in tab order
      }

      // 2) Ensure the "Full Menu" section (if present) can be focused when linked to
      const fullMenuHeading = Array.from(document.querySelectorAll('h2'))
        .find(h => /full menu/i.test(h.textContent));
      if (fullMenuHeading && !fullMenuHeading.hasAttribute('tabindex')) {
        fullMenuHeading.setAttribute('tabindex', '-1');
      }

      // 3) Optional: If the page is opened with ?focus=menu, focus the Full Menu heading
      //    Use-case: external link that should land directly on full menu content.
      try {
        const url = new URL(window.location.href);
        if (url.searchParams.get('focus') === 'menu' && fullMenuHeading) {
          fullMenuHeading.focus({ preventScroll: false });
        }
      } catch (err) {
        // ignore URL parsing errors in older browsers
      }

      // 4) Small defensive fix: if the dynamic menu target exists but is empty,
      //    add a polite status message for screen reader users (will be replaced
      //    when script.js renders menuData).
      const liveTarget = document.getElementById('live-menu-target');
      if (liveTarget && liveTarget.children.length === 0) {
        const status = document.createElement('p');
        status.className = 'sr-only';
        status.setAttribute('role', 'status');
        status.textContent = 'Menu loading';
        liveTarget.appendChild(status);
      }
    } catch (e) {
      // Do not throw; this file must be safe and non-fatal if something unexpected occurs.
      // Log to console for debugging only.
      if (window && window.console && typeof window.console.warn === 'function') {
        console.warn('lunch.js: non-fatal error', e);
      }
    }
  });
})();
