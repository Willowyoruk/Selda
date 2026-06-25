// data/menu.js
const menuData = {
    salads: [
        {
            name: "Shepherd Salad (VEG, GF)",
            price: "$12.00",
            description: "Chunks of tomato, cucumber, feta cheese; tossed with sliced onion, fresh parsley, olive oil and lime.",
            image: "assets/menu/shepherd-salad.jpg"
        },
        {
            name: "Beet Salad (VEG, GF)",
            price: "$12.00",
            description: "Diced red beets, watermelon, and feta cheese, tossed with fresh spinach, walnut, balsamic.",
            image: "assets/menu/beet-salad.jpg"
        },
        {
            name: "Arugula Quinoa Salad (VEG, V, GF)",
            price: "$12.00",
            description: "Fresh arugula mixed with quinoa, diced tomatoes, cucumbers, and onion; tossed with lemon, olive oil and vinaigrette. Add Protein: Chicken (8), Beef (9), Salmon (10), Shrimp (9).",
            image: "assets/menu/arugula-salad.jpg"
        }
    ],
    smallBites: [
        {
            name: "Lentil Soup (VEG, GF)",
            price: "$9.00",
            description: "Smooth and creamy lentil soup garnished with a sprinkle of spices.",
            image: "assets/menu/lentil-soup.jpg"
        },
        {
            name: "Hummus (VEG, GF)",
            price: "$9.00",
            description: "A classic purée of chickpeas, yogurt, sesame tahini, garlic and extra virgin olive oil.",
            image: "assets/menu/hummus.jpg"
        },
        {
            name: "Grilled Eggplant Salad  (VEG, GF)",
            price: "$9.00",
            description: "A smoky purée of roasted eggplant, yogurt, sesame tahini, garlic and extra virgin olive oil.",
            image: "assets/menu/baba-ganoush.jpg"
        },
        {
            name: "Tzatziki (Cacık) (VEG, GF)",
            price: "$9.00",
            description: "Tangy Greek yogurt, olive oil, garlic, lemon, cucumber, and mint.",
            image: "assets/menu/tzatziki.jpg"
        },
        {
            name: "Spicy Ezme (VEG, V, GF)",
            price: "$10.00",
            description: "Blended minced tomatoes, cucumber, hot spices, peppers, onions, pomegranate molasses, garlic, olive oil and lemon juice.",
            image: "assets/menu/ezme.jpg"
        },
        {
            name: "Turkish Feta and Olives (VEG, GF)",
            price: "$10.00",
            description: "Assorted marinated olives, chunks of feta cheese, fresh herbs and citrus.",
            image: "assets/menu/turkish-feta-olives.jpg"
        },
        {
            name: "Cigar Borek (VEG)",
            price: "$12.00",
            description: "Deep fried, flaky cigar shaped pastries stuffed with savory cheese, served with a creamy herb dip.",
            image: "assets/menu/cigar-borek.jpg"
        },
        {
            name: "Halloumi Cheese (VEG, GF)",
            price: "$13.00",
            description: "Golden-fried halloumi resting on a bed of smoky roasted peppers and crunchy walnuts, topped with pomegranate molasses.",
            image: "assets/menu/halloumi-cheese.jpg"
        },
        {
            name: "Stuffed Dates (GF)",
            price: "$12.00",
            description: "Dates filled with goat cheese, drizzled with yogurt, and garnished with pastrami, fresh spinach and chopped tomatoes.",
            image: "assets/menu/stuffed-dates.jpg"
        },
        {
            name: "Falafel (VEG, V)",
            price: "$12.00",
            description: "Deliciously seasoned fried chickpea patties.",
            image: "assets/menu/falafel.jpg"
        },
        {
            name: "Fried Cauliflower (VEG, GF)",
            price: "$14.00",
            description: "Deep fried cauliflower, spices served with chimichurri sauce.",
            image: "assets/menu/fried-cauliflower.jpg"
        },
        {
            name: "Shrimp Garlic (GF)",
            price: "$16.00",
            description: "Shrimp sautéed with garlic, lemon, and thyme.",
            image: "assets/menu/shrimp-garlic.jpg"
        },
        {
            name: "Turkish Dolmaski (VEG)",
            price: "$12.00",
            description: "Chilled grape leaves stuffed with rice and fresh herbs.",
            image: "assets/menu/turkish-dolmaski.jpg"
        },
        {
            name: "Shishito Peppers (VEG, GF)",
            price: "$12.00",
            description: "Charred shishito peppers drizzled with garlic yogurt sauce.",
            image: "assets/menu/shishito-peppers.jpg"
        }
    ],
    aLittleMore: [
        {
            name: "Chicken Shish (GF)",
            price: "$21.00",
            description: "Charcoal-grilled marinated chicken cubes served with Turkish rice and bean salad.",
            image: "assets/menu/chicken-shish.jpg"
        },
        {
            name: "Falafel Combo (VEG)",
            price: "$20.00",
            description: "Falafel patties made in house, served with Turkish rice and bean salad.",
            image: "assets/menu/falafel-combo.jpg"
        },
        {
            name: "Chicken Adana (GF)",
            price: "$20.00",
            description: "Hand-minced chicken kebab, charcoal-grilled over an open flame and served with Turkish rice and bean salad.",
            image: "assets/menu/chicken-adana.jpg"
        },
        {
            name: "Urfa Kebab (GF)",
            price: "$21.00",
            description: "Chargrilled ground beef served with Turkish rice, bean salad.",
            image: "assets/menu/urfa-kebab.jpg"
        },
        {
            name: "Beef Shish (GF)",
            price: "$22.00",
            description: "Hand-cut beef cubes skewered and grilled over natural charcoal, served with Turkish rice and bean salad.",
            image: "assets/menu/beef-shish.jpg"
        },
        {
            name: "Grilled Butcher Meatballs (GF)",
            price: "$20.00",
            description: "Traditional hand-pressed beef patties, charcoal-grilled over an open fire topped with tomato sauce and drizzle of garlic yogurt sauce, served with Turkish rice and bean salad.",
            image: "assets/menu/butcher-meatballs.jpg"
        },
        {
            name: "Beyti Special",
            price: "$22.00",
            description: "Charcoal-grilled ground beef wrapped in flatbread topped with yogurt and house-made tomato sauce, served with Turkish rice and bean salad.",
            image: "assets/menu/beyti-special.jpg"
        },
        {
            name: "Lamb Chops (GF)",
            price: "$24.00",
            description: "Three grilled chops, served with Turkish rice and bean salad.",
            image: "assets/menu/lamb-chops.jpg"
        },
        {
            name: "Lamb Shank (GF)",
            price: "$25.00",
            description: "Tender lamb shank topped with rich tomato sauce, served with Turkish rice and bean salad.",
            image: "assets/menu/lamb-shank.jpg"
        },
        {
            name: "Grilled Salmon (GF)",
            price: "$24.00",
            description: "Salmon filet marinated in Turkish style, served with sautéed spinach, chickpeas, and tomato sauce.",
            image: "assets/menu/grilled-salmon.jpg"
        },
        {
            name: "Mixed Grill<br>(2-4 Guests)",
            price: "$68.00",
            description: "Urfa Kebab, Chicken Shish, Butcher Meatballs, Beef Kebab, and Chicken Adana served with Turkish rice and bean salad.<br> Add: Lamb Shish (8), Lamb Chops (8).",
            image: "assets/menu/mixed-grill.jpg"
        },
        {
            name: "Grilled Branzino (GF)",
            price: "$30.00",
            description: "Whole branzino, served bone-in and charcoal grilled over an open fire, served with arugula quinoa salad.",
            image: "assets/menu/grilled-branzino.jpg"
        },
        {
            name: "Ali Nazik (GF)",
            price: "$24.00",
            description: "Flame-Grilled lamb shish served over smoked eggplant purée, and bean salad on the side.",
            image: "assets/menu/ali-nazik.jpg"
        },
        {
            name: "Lamb Shish",
            price: "$27.00",
            description: "Tender, spice-marinated lamb skewers, flame-grilled. Served with onion salad and Turkish bread.",
            image: "assets/menu/lamb-shish.jpg"
        },
        {
            name: "Turkish Döner (GF)",
            price: "$21.00",
            description: "Thinly sliced beef doner (similar to gyro), slowly roasted on a vertical doner spit and served with Turkish rice and bean salad.",
            image: "assets/menu/turkish-doner.jpg"
        },
        {
            name: "Iskender Döner",
            price: "$23.00",
            description: "Thinly sliced beef doner (similar to gyro), slowly roasted on a vertical doner spit, served on top of pita bread with house-made tomato sauce, warm butter and plated with yogurt.",
            image: "assets/menu/iskender-doner.jpg"
        }
    ],
    fromTheOven: [
        {
            name: "Vegetarian Pide (VEG)",
            price: "$14.00",
            description: "Turkish style flatbread topped with vegetables.",
            image: "assets/menu/vegetarian-pide.jpg"
        },
        {
            name: "Cheese Pide (VEG)",
            price: "$13.00",
            description: "Turkish style flatbread topped with cheese.",
            image: "assets/menu/cheese-pide.jpg"
        },
        {
            name: "Meat Pide",
            price: "$14.00",
            description: "Turkish style flatbread topped with minced meat.",
            image: "assets/menu/meat-pide.jpg"
        },
        {
            name: "Spinach Feta Pide (VEG)",
            price: "$14.00",
            description: "Turkish style flatbread topped with sautéed spinach, onions and feta cheese.",
            image: "assets/menu/spinach-feta-pide.jpg"
        },
        {
            name: "Lahmacun",
            price: "$12.00",
            description: "Thin, crispy flatbread topped with seasoned minced meat, served with fresh tomatoes, onions, and herbs.",
            image: "assets/menu/lahmacun.jpg"
        }
    ],
    desserts: [
        {
            name: "Baklava (VEG)",
            price: "$10.00",
            description: "Layers of flaky pastry, walnuts and syrup; served with vanilla ice cream.",
            image: "assets/menu/baklava.jpg"
        },
        {
            name: "Turkish Flan (VEG, GF)",
            price: "$10.00",
            description: "Baked caramelized custard sprinkled with cinnamon.",
            image: "assets/menu/turkish-flan.jpg"
        },
        {
            name: "Chocolate Mousse Cake (VEG)",
            price: "$11.00",
            description: "Rich chocolate cake stacked with chocolate mousse; served with vanilla ice cream.",
            image: "assets/menu/chocolate-mousse-cake.jpg"
        },
        {
            name: "Kunefe (VEG)",
            price: "$13.00 | $16.00",
            description: "Shredded pastry filled with melted cheese, baked and soaked in syrup (allow AT LEAST 20 minutes to prepare). Small: $13.00 | Large: $16.00.",
            image: "assets/menu/kunefe.jpg"
        }
    ]
};

