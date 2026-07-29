// data/menu.js
const menuData = {
    salads: [
        {
            name: "Shepherd Salad (VEG, GF)",
            price: "$12.00",
            description: "Chunks of tomato, cucumber, feta cheese; tossed with sliced onion, fresh parsley, olive oil and lime.",
            image: "assets/menu/shepherd-salad.jpg",
            alt: "Shepherd salad with tomato, cucumber, feta, onion and parsley, dressed with olive oil and lime"
        },
        {
            name: "Beet Salad (VEG, GF)",
            price: "$12.00",
            description: "Diced red beets, watermelon, and feta cheese, tossed with fresh spinach, walnut, balsamic.",
            image: "assets/menu/beet-salad.jpg",
            alt: "Beet salad with diced red beets, watermelon and feta over spinach with walnuts and balsamic"
        },
        {
            name: "Arugula Quinoa Salad (VEG, V, GF)",
            price: "$12.00",
            description: "Fresh arugula mixed with quinoa, diced tomatoes, cucumbers, and onion; tossed with lemon, olive oil and vinaigrette.",
            image: "assets/menu/arugula-salad.jpg",
            alt: "Arugula and quinoa salad with diced tomatoes, cucumber and lemon vinaigrette"
        }
    ],
    smallBites: [
        {
            name: "Lentil Soup (VEG, GF)",
            price: "$9.00",
            description: "Smooth and creamy lentil soup garnished with a sprinkle of spices.",
            image: "assets/menu/lentil-soup.jpg",
            alt: "Creamy lentil soup garnished with spices"
        },
        {
            name: "Hummus (VEG, GF)",
            price: "$9.00",
            description: "A classic purée of chickpeas, yogurt, sesame tahini, garlic and extra virgin olive oil.",
            image: "assets/menu/hummus.jpg",
            alt: "Classic hummus with olive oil and paprika"
        },
        {
            name: "Grilled Eggplant Salad  (VEG, GF)",
            price: "$9.00",
            description: "A smoky purée of roasted eggplant, yogurt, sesame tahini, garlic and extra virgin olive oil.",
            image: "assets/menu/baba-ganoush.jpg",
            alt: "Smoky roasted eggplant purée (baba ganoush) with olive oil"
        },
        {
            name: "Tzatziki (Cacık) (VEG, GF)",
            price: "$9.00",
            description: "Tangy Greek yogurt, olive oil, garlic, lemon, cucumber, and mint.",
            image: "assets/menu/tzatziki.jpg",
            alt: "Tzatziki yogurt dip with cucumber, garlic and dill"
        },
        {
            name: "Spicy Ezme (VEG, V, GF)",
            price: "$10.00",
            description: "Blended minced tomatoes, cucumber, hot spices, peppers, onions, pomegranate molasses, garlic, olive oil and lemon juice.",
            image: "assets/menu/ezme.jpg",
            alt: "Spicy ezme chopped tomato and pepper salad with pomegranate molasses"
        },
        {
            name: "Turkish Feta and Olives (VEG, GF)",
            price: "$10.00",
            description: "Assorted marinated olives, chunks of feta cheese, fresh herbs and citrus.",
            image: "assets/menu/turkish-feta-olives.jpg",
            alt: "Marinated olives and Turkish feta with herbs"
        },
        {
            name: "Cigar Borek (VEG)",
            price: "$12.00",
            description: "Deep fried, flaky cigar shaped pastries stuffed with savory cheese, served with a creamy herb dip.",
            image: "assets/menu/cigar-borek.jpg",
            alt: "Crispy cigar börek pastries stuffed with savory cheese"
        },
        {
            name: "Halloumi Cheese (VEG, GF)",
            price: "$13.00",
            description: "Golden-fried halloumi resting on a bed of smoky roasted peppers and crunchy walnuts, topped with pomegranate molasses.",
            image: "assets/menu/halloumi-cheese.jpg",
            alt: "Seared halloumi cheese on roasted peppers and walnuts"
        },
        {
            name: "Stuffed Dates (GF)",
            price: "$12.00",
            description: "Dates filled with goat cheese, drizzled with yogurt, and garnished with pastrami, fresh spinach and chopped tomatoes.",
            image: "assets/menu/stuffed-dates.jpg",
            alt: "Dates stuffed with goat cheese and garnished with greens"
        },
        {
            name: "Falafel (VEG, V)",
            price: "$12.00",
            description: "Deliciously seasoned fried chickpea patties.",
            image: "assets/menu/falafel.jpg",
            alt: "Golden fried falafel patties"
        },
        {
            name: "Fried Cauliflower (VEG, GF)",
            price: "$14.00",
            description: "Deep fried cauliflower, spices served with chimichurri sauce.",
            image: "assets/menu/fried-cauliflower.jpg",
            alt: "Crispy fried cauliflower with chimichurri"
        },
        {
            name: "Shrimp Garlic (GF)",
            price: "$16.00",
            description: "Shrimp sautéed with garlic, lemon, and thyme.",
            image: "assets/menu/shrimp-garlic.jpg",
            alt: "Sautéed garlic shrimp with lemon and thyme"
        },
        {
            name: "Turkish Dolmaski (VEG)",
            price: "$12.00",
            description: "Chilled grape leaves stuffed with rice and fresh herbs.",
            image: "assets/menu/turkish-dolmaski.jpg",
            alt: "Grape leaves stuffed with rice and herbs (dolma)"
        },
        {
            name: "Shishito Peppers (VEG, GF)",
            price: "$12.00",
            description: "Charred shishito peppers drizzled with garlic yogurt sauce.",
            image: "assets/menu/shishito-peppers.jpg",
            alt: "Blistered shishito peppers with garlic yogurt drizzle"
        }
    ],
    aLittleMore: [
        {
            name: "Chicken Shish (GF)",
            price: "$21.00",
            description: "Charcoal-grilled marinated chicken cubes served with Turkish rice and bean salad.",
            image: "assets/menu/chicken-shish.jpg",
            alt: "Charcoal-grilled chicken shish skewers with rice and salad"
        },
        {
            name: "Falafel Combo (VEG)",
            price: "$20.00",
            description: "Falafel patties made in house, served with Turkish rice and bean salad.",
            image: "assets/menu/falafel-combo.jpg",
            alt: "Falafel combo served with Turkish rice and bean salad"
        },
        {
            name: "Chicken Adana (GF)",
            price: "$20.00",
            description: "Hand-minced chicken kebab, charcoal-grilled over an open flame and served with Turkish rice and bean salad.",
            image: "assets/menu/chicken-adana.jpg",
            alt: "Hand-minced chicken Adana kebab skewers on charcoal"
        },
        {
            name: "Urfa Kebab (GF)",
            price: "$21.00",
            description: "Chargrilled ground beef served with Turkish rice, bean salad.",
            image: "assets/menu/urfa-kebab.jpg",
            alt: "Chargrilled Urfa kebab with rice and bean salad"
        },
        {
            name: "Beef Shish (GF)",
            price: "$22.00",
            description: "Hand-cut beef cubes skewered and grilled over natural charcoal, served with Turkish rice and bean salad.",
            image: "assets/menu/beef-shish.jpg",
            alt: "Grilled beef shish skewers with Turkish rice"
        },
        {
            name: "Grilled Butcher Meatballs (GF)",
            price: "$20.00",
            description: "Traditional hand-pressed beef patties, charcoal-grilled over an open fire topped with tomato sauce and drizzle of garlic yogurt sauce, served with Turkish rice and bean [...",
            image: "assets/menu/butcher-meatballs.jpg",
            alt: "Charcoal-grilled butcher-style meatballs topped with tomato and garlic yogurt"
        },
        {
            name: "Beyti Special",
            price: "$22.00",
            description: "Charcoal-grilled ground beef wrapped in flatbread topped with yogurt and house-made tomato sauce, served with Turkish rice and bean salad.",
            image: "assets/menu/beyti-special.jpg",
            alt: "Beyti kebab wrapped in flatbread topped with yogurt and tomato sauce"
        },
        {
            name: "Lamb Chops (GF)",
            price: "$24.00",
            description: "Three grilled chops, served with Turkish rice and bean salad.",
            image: "assets/menu/lamb-chops.jpg",
            alt: "Three grilled lamb chops served with rice"
        },
        {
            name: "Lamb Shank (GF)",
            price: "$25.00",
            description: "Tender lamb shank topped with rich tomato sauce, served with Turkish rice and bean salad.",
            image: "assets/menu/lamb-shank.jpg",
            alt: "Slow-cooked lamb shank with rich tomato sauce"
        },
        {
            name: "Grilled Salmon (GF)",
            price: "$24.00",
            description: "Salmon filet marinated in Turkish style, served with sautéed spinach, chickpeas, and tomato sauce.",
            image: "assets/menu/grilled-salmon.jpg",
            alt: "Grilled salmon filet with sautéed spinach and chickpeas"
        },
        {
            name: "Mixed Grill<br>(2-4 Guests)",
            price: "$68.00",
            description: "Urfa Kebab, Chicken Shish, Butcher Meatballs, Beef Kebab, and Chicken Adana served with Turkish rice and bean salad.<br> Add: Lamb Shish (8), Lamb Chops (8).",
            image: "assets/menu/mixed-grill.jpg",
            alt: "Mixed grill platter with a variety of kebabs and skewers"
        },
        {
            name: "Grilled Branzino (GF)",
            price: "$30.00",
            description: "Whole branzino, served bone-in and charcoal grilled over an open fire, served with arugula quinoa salad.",
            image: "assets/menu/grilled-branzino.jpg",
            alt: "Whole grilled branzino with arugula quinoa salad"
        },
        {
            name: "Ali Nazik (GF)",
            price: "$24.00",
            description: "Flame-Grilled lamb shish served over smoked eggplant purée, and bean salad on the side.",
            image: "assets/menu/ali-nazik.jpg",
            alt: "Ali Nazik: grilled lamb over smoked eggplant purée"
        },
        {
            name: "Lamb Shish",
            price: "$27.00",
            description: "Tender, spice-marinated lamb skewers, flame-grilled. Served with onion salad and Turkish bread.",
            image: "assets/menu/lamb-shish.jpg",
            alt: "Spice-marinated lamb shish skewers"
        },
        {
            name: "Turkish Döner (GF)",
            price: "$21.00",
            description: "Thinly sliced beef doner (similar to gyro), slowly roasted on a vertical doner spit and served with Turkish rice and bean salad.",
            image: "assets/menu/turkish-doner.jpg",
            alt: "Thinly sliced Turkish döner served with rice and salad"
        },
        {
            name: "Iskender Döner",
            price: "$23.00",
            description: "Thinly sliced beef doner (similar to gyro), slowly roasted on a vertical doner spit, served on top of pita bread with house-made tomato sauce, warm butter and plated wit[...]",
            image: "assets/menu/iskender-doner.jpg",
            alt: "Iskender doner served on pita with tomato sauce, butter and yogurt"
        }
    ],
    fromTheOven: [
        {
            name: "Vegetarian Pide (VEG)",
            price: "$14.00",
            description: "Turkish style flatbread topped with vegetables.",
            image: "assets/menu/vegetarian-pide.jpg",
            alt: "Vegetarian Turkish pide flatbread topped with seasonal vegetables"
        },
        {
            name: "Cheese Pide (VEG)",
            price: "$13.00",
            description: "Turkish style flatbread topped with cheese.",
            image: "assets/menu/cheese-pide.jpg",
            alt: "Cheese pide: Turkish flatbread topped with melted cheese"
        },
        {
            name: "Meat Pide",
            price: "$14.00",
            description: "Turkish style flatbread topped with minced meat.",
            image: "assets/menu/meat-pide.jpg",
            alt: "Meat pide: Turkish flatbread topped with seasoned minced meat"
        },
        {
            name: "Spinach Feta Pide (VEG)",
            price: "$14.00",
            description: "Turkish style flatbread topped with sautéed spinach, onions and feta cheese.",
            image: "assets/menu/spinach-feta-pide.jpg",
            alt: "Spinach and feta pide flatbread"
        },
        {
            name: "Lahmacun",
            price: "$12.00",
            description: "Thin, crispy flatbread topped with seasoned minced meat, served with fresh tomatoes, onions, and herbs.",
            image: "assets/menu/lahmacun.jpg",
            alt: "Thin crispy lahmacun flatbread topped with spiced minced meat and herbs"
        }
    ],
    desserts: [
        {
            name: "Baklava (VEG)",
            price: "$10.00",
            description: "Layers of flaky pastry, walnuts and syrup; served with vanilla ice cream.",
            image: "assets/menu/baklava.jpg",
            alt: "Layers of baklava pastry with walnuts and syrup, served with vanilla ice cream"
        },
        {
            name: "Turkish Flan (VEG, GF)",
            price: "$10.00",
            description: "Baked caramelized custard sprinkled with cinnamon.",
            image: "assets/menu/turkish-flan.jpg",
            alt: "Baked caramelized custard (Turkish flan) sprinkled with cinnamon"
        },
        {
            name: "Chocolate Mousse Cake (VEG)",
            price: "$11.00",
            description: "Rich chocolate cake stacked with chocolate mousse; served with vanilla ice cream.",
            image: "assets/menu/chocolate-mousse-cake.jpg",
            alt: "Chocolate mousse cake served with vanilla ice cream"
        },
        {
            name: "Kunefe (VEG)",
            price: "$13.00 | $16.00",
            description: "Shredded pastry filled with melted cheese, baked and soaked in syrup (allow AT LEAST 20 minutes to prepare).",
            image: "assets/menu/kunefe.JPG",
            alt: "Künefe shredded pastry with melted cheese and pistachios soaked in syrup"
        }
    ]
};
