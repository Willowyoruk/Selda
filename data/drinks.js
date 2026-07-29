const drinkData = {
    quickNav: {
        title: "Quick Navigation",
        items: [
            { name: "Cocktails", anchor: "#cocktails" },
            { name: "Mocktails", anchor: "#mocktails" },
            { name: "House Select Wine", anchor: "#house-select" },
            { name: "Sparkling Wine", anchor: "#sparkling" },
            { name: "White Wine", anchor: "#white-wine" },
            { name: "Rosé Wine", anchor: "#rose-wine" },
            { name: "Red Wine", anchor: "#red-wine" },
            { name: "Reserve Red Wine", anchor: "#reserve-red" },
            { name: "Beer", anchor: "#beer" },
            { name: "Soft Drinks", anchor: "#soft-drinks" },
            { name: "Mineral Waters", anchor: "#mineral-waters" },
            { name: "Beverages", anchor: "#beverages" }
        ]
    },
    cocktails: {
        title: "Cocktails",
        anchorId: "cocktails",
        items: [
            { name: "Ranch Water", price: "12", description: "Tequila, fresh lime juice, and sparkling water. Crisp, refreshing, and unmistakably Texan." },
            { name: "Caipirinha", price: "12", description: "Cachaça, fresh muddled lime, and sugar. Bright, bold, and refreshingly vibrant." },
            { name: "Gimlet", price: "12", description: "Premium gin and fresh lime juice. Clean, citrus-forward, and timeless." },
            { name: "Margarita", price: "12", description: "Top-shelf tequila, fresh lime juice, and orange liqueur. Perfectly balanced and refreshing." },
            { name: "Turkish Coffee Martini", price: "12", description: "Vodka, freshly brewed Turkish coffee, and Irish cream. Bold, velvety, and indulgent." },
            { name: "Whiskey Sour", price: "12", description: "Bourbon whiskey, fresh lemon juice, and simple syrup. Smooth, balanced, and classic." },
            { name: "Lemon Drop Martini", price: "12", description: "Vodka, fresh lemon juice, liqueur and sugar. Bright, crisp, and elegant." },
            { name: "Old Fashioned", price: "12", description: "Bourbon whiskey, Angostura bitters, sugar, and orange peel. A refined cocktail classic." },
            { name: "Moscow Mule", price: "12", description: "Vodka, fresh lime juice, and ginger beer. Refreshing with a lively citrus kick." },
            { name: "Raki", price: "10", description: "Turkey’s iconic anise-flavored spirit, served with water and ice." }
        ]
    },
    mocktails: {
        title: "Mediterranean Mocktails",
        anchorId: "mocktails",
        items: [
            { name: "Sweet Dreams", price: "7", description: "Orange juice, peach purée, and pomegranate syrup. Fruity, refreshing, and vibrant." },
            { name: "Lemon Garden", price: "7", description: "Lemonade, strawberry purée, lime juice, and passion fruit syrup. Bright, tropical, and refreshing." }
        ]
    },
    houseSelectWine: {
        title: "Selda House Select",
        anchorId: "house-select",
        items: [
            { name: "Sparkling", price: "10 | 37", description: "" },
            { name: "Chardonnay", price: "10 | 37", description: "" },
            { name: "Riesling", price: "10 | 37", description: "" },
            { name: "Cabernet", price: "10 | 37", description: "" },
            { name: "Merlot", price: "10 | 37", description: "" },
            { name: "Pinot Noir", price: "10 | 37", description: "" }
        ]
    },
    sparklingWine: {
        title: "Sparkling",
        anchorId: "sparkling",
        items: [
            { name: "Belussi | Prosecco", price: "11 | 44", description: "Italy" },
            { name: "Vinya Pau | Cava", price: "12 | 48", description: "Spain" },
            { name: "Charles de Cazanove | Champagne", price: "74", description: "France" }
        ]
    },
    whiteWine: {
        title: "White",
        anchorId: "white-wine",
        items: [
            { name: "Villa Pozzi | Pinot Grigio", price: "9 | 36", description: "Sicily, Italy — Citrus, pear, melon; fairly dry" },
            { name: "Thomas Schmitt | Riesling", price: "11 | 44", description: "Traces of apple blossom and lemon are subdued on the nose but turn riper and richer on the palate, off dry and spry" },
            { name: "Alberto Conti | Moscato d’Asti", price: "11 | 44", description: "Piemonte, Italy — Aromas of pineapple, lychee, dried apricot, honey" },
            { name: "Selection | Narince-Emir", price: "13 | 49", description: "Cappadocia, Turkey — White grape, elegant, complex wine featuring aromas of citrus, white flowers and vanilla" },
            { name: "StoryPoint | Chardonnay", price: "13 | 49", description: "California — Green apples, lemon, oaky and zesty" },
            { name: "Emmolo | Sauvignon Blanc", price: "13 | 49", description: "California — Bright citrus, crisp acidity, zesty kumquat and a mouthwatering freshness on the finish" },
            { name: "Mer Soleil | Chardonnay Reserve", price: "14 | 54", description: "California — Intense aromas such as custard and toasted almonds, rich fruit flavors and enlivening lemon/lime" },
            { name: "Conundrum | Sauvignon Blanc", price: "14 | 54", description: "California — Unique blend of Viognier, Muscat, Sauvignon Blanc" }
        ]
    },
    roseWine: {
        title: "Rosé",
        anchorId: "rose-wine",
        items: [
            { name: "Chateau Ksara ‘Sunset’", price: "10 | 40", description: "Lebanon — Blend of Syrah, Caladoc, Cinsault" },
            { name: "Mezzacorona | Pasión Rosado", price: "44", description: "Cigales, Spain — Grenache, Cinsault, Syrah blend" }
        ]
    },
    redWine: {
        title: "Red",
        anchorId: "red-wine",
        items: [
            { name: "Mezzacorona | Merlot", price: "10 | 40", description: "Italy — Raspberry, black cherry, plum, tobacco, and vanilla" },
            { name: "Aquinas | Pinot Noir", price: "11 | 44", description: "Napa Valley — Cherry, raspberry, earthy, high acidity, low tannins" },
            { name: "Cuvée Sara | Cabernet Sauvignon", price: "11 | 44", description: "France — Full-bodied with dark fruit flavors and savory tastes" },
            { name: "StoryPoint | Cabernet Sauvignon", price: "13 | 49", description: "California — Chocolate, vanilla, black currant, cedar, pepper" },
            { name: "Bonanza | Cabernet", price: "13 | 49", description: "California — Flavors of dark berry, cassis and toast" },
            { name: "Predator (Lodi) | Zinfandel", price: "13 | 49", description: "California — Smooth, spicy and a delicious dusting of cocoa on the finish" }
        ]
    },
    reserveRedWine: {
        title: "Reserve Red",
        anchorId: "reserve-red",
        items: [
            { name: "Chateau Ksara ‘Prieure’", price: "10 | 40", description: "Lebanon — Medium bodied, sweet, smoky; chocolate on the nose" },
            { name: "Lagarde ‘Guarda’ Malbec", price: "11 | 44", description: "Argentina — Black pepper, plum, dark chocolate, full color and tannins" },
            { name: "Kavaklidere “Yakut” | Okuzgozu/Bogazkere", price: "15 | 59", description: "Turkey — Rich red fruit aromas; balanced, ripe tannins" },
            { name: "Kavaklidere “Angora” | Okuzgozu/Cabernet", price: "15 | 59", description: "Turkey — Rich red fruit aromas; balanced, ripe tannins" },
            { name: "Palivou Nemea | Ancient Nemea | Organic", price: "66", description: "Greece — Aromas of black cherries, vanilla and chocolate notes." },
            { name: "Marco Bonfante | Albarone", price: "74", description: "Piemonte, Italy — Cherry, plum, berries and spices, with a balsamic note" },
            { name: "Chateau D’Issan “Blasson” | Cab/Merlot Blend", price: "84", description: "France — Black currant, cedar, plum, graphite, and violet" },
            { name: "Belpoggio Brunello Di Montalcino", price: "94", description: "Italy (2012) — Deep red fruits on the nose, chocolate, nice long legs" },
            { name: "Calarossa | Syrah/Cab Franc/Cab Sauv", price: "124", description: "Tuscany (2007) — Abundant fruit, pepper and spice with earthy cherry finish" },
            { name: "Caymus Vineyards | Napa Valley Cab Sauvignon", price: "184", description: "Featuring decadent ripe blackberry flavors with undertones of vanilla and toasted oak" }
        ]
    },
    beer: {
        title: "Beer",
        anchorId: "beer",
        items: [
            { name: "Heineken", price: "6", description: "Netherlands" },
            { name: "Corona", price: "6", description: "Mexico" },
            { name: "Dos Equis", price: "6", description: "Mexico" },
            { name: "Modelo", price: "6", description: "Mexico" },
            { name: "Peroni", price: "6", description: "Italy" },
            { name: "Michelob Ultra", price: "6", description: "USA" },
            { name: "Bud Light", price: "6", description: "USA" },
            { name: "Bomonti", price: "8.50", description: "Turkey" }
        ]
    },
    softDrinks: {
        title: "Soft Drinks",
        subtitle: "Individually served",
        anchorId: "soft-drinks",
        items: [
            { name: "Coca-Cola", price: "4", description: "" },
            { name: "Coke Zero", price: "4", description: "" },
            { name: "Diet Coke", price: "4", description: "" },
            { name: "Dr Pepper", price: "4", description: "" },
            { name: "Sprite", price: "4", description: "" }
        ]
    },
    mineralWaters: {
        title: "Mineral Waters",
        anchorId: "mineral-waters",
        items: [
            { name: "San Pellegrino Sparkling (Small)", price: "4", description: "" },
            { name: "San Pellegrino Sparkling (Large)", price: "6", description: "" },
            { name: "Acqua Panna Still (Large)", price: "6", description: "" }
        ]
    },
    beverages: {
        title: "Beverages",
        anchorId: "beverages",
        items: [
            { name: "Lemonade", price: "4", description: "" },
            { name: "Orange Juice", price: "4", description: "" },
            { name: "Iced Tea (Brewed)", price: "4", description: "" },
            { name: "Ayran (Yogurt Drink)", price: "5", description: "" }
        ]
    }
};