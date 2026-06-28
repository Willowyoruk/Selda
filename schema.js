(function() {
    const menuData = {
        salads: [
            { name: "Shepherd Salad (VEG, GF)", price: "12.00", description: "Chunks of tomato, cucumber, feta cheese; tossed with sliced onion, fresh parsley, olive oil and lime." },
            { name: "Beet Salad (VEG, GF)", price: "12.00", description: "Diced red beets, watermelon, and feta cheese, tossed with fresh spinach, walnut, balsamic." },
            { name: "Arugula Quinoa Salad (VEG, V, GF)", price: "12.00", description: "Fresh arugula mixed with quinoa, diced tomatoes, cucumbers, and onion; tossed with lemon, olive oil and vinaigrette." }
        ],
        smallBites: [
            { name: "Lentil Soup (VEG, GF)", price: "9.00", description: "Smooth and creamy lentil soup garnished with a sprinkle of spices." },
            { name: "Hummus (VEG, GF)", price: "9.00", description: "A classic purée of chickpeas, yogurt, sesame tahini, garlic and extra virgin olive oil." },
            { name: "Grilled Eggplant Salad (VEG, GF)", price: "9.00", description: "A smoky purée of roasted eggplant, yogurt, sesame tahini, garlic and extra virgin olive oil." },
            { name: "Tzatziki (Cacık) (VEG, GF)", price: "9.00", description: "Tangy Greek yogurt, olive oil, garlic, lemon, cucumber, and mint." },
            { name: "Spicy Ezme (VEG, V, GF)", price: "10.00", description: "Blended minced tomatoes, cucumber, hot spices, peppers, onions, pomegranate molasses, garlic, olive oil and lemon juice." },
            { name: "Turkish Feta and Olives (VEG, GF)", price: "10.00", description: "Assorted marinated olives, chunks of feta cheese, fresh herbs and citrus." },
            { name: "Cigar Borek (VEG)", price: "12.00", description: "Deep fried, flaky cigar shaped pastries stuffed with savory cheese, served with a creamy herb dip." },
            { name: "Halloumi Cheese (VEG, GF)", price: "13.00", description: "Golden-fried halloumi resting on a bed of smoky roasted peppers and crunchy walnuts, topped with pomegranate molasses." },
            { name: "Stuffed Dates (GF)", price: "12.00", description: "Dates filled with goat cheese, drizzled with yogurt, and garnished with pastrami, fresh spinach and chopped tomatoes." },
            { name: "Falafel (VEG, V)", price: "12.00", description: "Deliciously seasoned fried chickpea patties." },
            { name: "Fried Cauliflower (VEG, GF)", price: "14.00", description: "Deep fried cauliflower, spices served with chimichurri sauce." },
            { name: "Shrimp Garlic (GF)", price: "16.00", description: "Shrimp sautéed with garlic, lemon, and thyme." },
            { name: "Turkish Dolmaski (VEG)", price: "12.00", description: "Chilled grape leaves stuffed with rice and fresh herbs." },
            { name: "Shishito Peppers (VEG, GF)", price: "12.00", description: "Charred shishito peppers drizzled with garlic yogurt sauce." }
        ],
        aLittleMore: [
            { name: "Chicken Shish (GF)", price: "21.00", description: "Charcoal-grilled marinated chicken cubes served with Turkish rice and bean salad." },
            { name: "Falafel Combo (VEG)", price: "20.00", description: "Falafel patties made in house, served with Turkish rice and bean salad." },
            { name: "Chicken Adana (GF)", price: "20.00", description: "Hand-minced chicken kebab, charcoal-grilled over an open flame and served with Turkish rice and bean salad." },
            { name: "Urfa Kebab (GF)", price: "21.00", description: "Chargrilled ground beef served with Turkish rice, bean salad." },
            { name: "Beef Shish (GF)", price: "22.00", description: "Hand-cut beef cubes skewered and grilled over natural charcoal, served with Turkish rice and bean salad." },
            { name: "Grilled Butcher Meatballs (GF)", price: "20.00", description: "Traditional hand-pressed beef patties, charcoal-grilled over an open fire topped with tomato sauce and drizzle of garlic yogurt sauce, served with Turkish rice and bean salad." },
            { name: "Beyti Special", price: "22.00", description: "Charcoal-grilled ground beef wrapped in flatbread topped with yogurt and house-made tomato sauce, served with Turkish rice and bean salad." },
            { name: "Lamb Chops (GF)", price: "24.00", description: "Three grilled chops, served with Turkish rice and bean salad." },
            { name: "Lamb Shank (GF)", price: "25.00", description: "Tender lamb shank topped with rich tomato sauce, served with Turkish rice and bean salad." },
            { name: "Grilled Salmon (GF)", price: "24.00", description: "Salmon filet marinated in Turkish style, served with sautéed spinach, chickpeas, and tomato sauce." },
            { name: "Mixed Grill (2-4 Guests)", price: "68.00", description: "Urfa Kebab, Chicken Shish, Butcher Meatballs, Beef Kebab, and Chicken Adana served with Turkish rice and bean salad." },
            { name: "Grilled Branzino (GF)", price: "30.00", description: "Whole branzino, served bone-in and charcoal grilled over an open fire, served with arugula quinoa salad." },
            { name: "Ali Nazik (GF)", price: "24.00", description: "Flame-Grilled lamb shish served over smoked eggplant purée, and bean salad on the side." },
            { name: "Lamb Shish", price: "27.00", description: "Tender, spice-marinated lamb skewers, flame-grilled. Served with onion salad and Turkish bread." },
            { name: "Turkish Döner (GF)", price: "21.00", description: "Thinly sliced beef doner (similar to gyro), slowly roasted on a vertical doner spit and served with Turkish rice and bean salad." },
            { name: "Iskender Döner", price: "23.00", description: "Thinly sliced beef doner (similar to gyro), slowly roasted on a vertical doner spit, served on top of pita bread with house-made tomato sauce, warm butter and plated with yogurt." }
        ],
        fromTheOven: [
            { name: "Vegetarian Pide (VEG)", price: "14.00", description: "Turkish style flatbread topped with vegetables." },
            { name: "Cheese Pide (VEG)", price: "13.00", description: "Turkish style flatbread topped with cheese." },
            { name: "Meat Pide", price: "14.00", description: "Turkish style flatbread topped with minced meat." },
            { name: "Spinach Feta Pide (VEG)", price: "14.00", description: "Turkish style flatbread topped with sautéed spinach, onions and feta cheese." },
            { name: "Lahmacun", price: "12.00", description: "Thin, crispy flatbread topped with seasoned minced meat, served with fresh tomatoes, onions, and herbs." }
        ],
        desserts: [
            { name: "Baklava (VEG)", price: "10.00", description: "Layers of flaky pastry, walnuts and syrup; served with vanilla ice cream." },
            { name: "Turkish Flan (VEG, GF)", price: "10.00", description: "Baked caramelized custard sprinkled with cinnamon." },
            { name: "Chocolate Mousse Cake (VEG)", price: "11.00", description: "Rich chocolate cake stacked with chocolate mousse; served with vanilla ice cream." },
            { name: "Kunefe (VEG)", price: "13.00", description: "Shredded pastry filled with melted cheese, baked and soaked in syrup." }
        ]
    };

    const menuSections = Object.entries(menuData).map(([sectionName, items]) => ({
        "@type": "MenuSection",
        "name": sectionName.charAt(0).toUpperCase() + sectionName.slice(1).replace(/([A-Z])/g, ' $1'),
        "hasMenuItem": items.map(item => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": item.price
            }
        }))
    }));

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