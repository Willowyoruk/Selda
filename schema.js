
    
    const restaurantSchema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Selda Mediterranean Kitchen | San Antonio",
        "priceRange":"$$",
        "url": "https://www.seldarestaurant.com/",
        "logo": "https://www.seldarestaurant.com/assets/logo.jpg",
        "image": "https://www.seldarestaurant.com/assets/front.jpeg",
        "servesCuisine": ["Mediterranean", "Turkish"],
        "telephone": "+12102365230",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "9955 I-10 W",
            "addressLocality": "San Antonio",
            "addressRegion": "TX",
            "postalCode": "78230",
            "addressCountry": "US"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "11:00",
            "closes": "23:00"
        },
        "hasMenu": {
            "@type": "Menu",
            "name": "Selda Mediterranean Kitchen Menu",
            "hasMenuSection": menuSections
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(restaurantSchema);
    document.head.appendChild(script);
})();