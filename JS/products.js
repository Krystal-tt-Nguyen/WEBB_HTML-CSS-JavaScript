/* TODO:
    * Skapa en kundvagnknapp högst upp på hemsidan för att gå till översikt
        * Lägga till funktion för knappen Add cart
        * Översikten ska visa antal produkter, totalpris och en knapp för att gå till kassan 
    * Alla produkter/tjänster i listan (ej kundvagnen) ska kunna expanderas för att visa mer detaljerad information. 
      Detta ska göras med hjälp av Modaler
*/

var arrayOfProducts = [
    {
        name: "Original Semla",
        image: "/Images/product-semla-original.jpg",
        alt: "Original Swedish Semla with fluffy wheat bread, almond paste, and whipped cream",
        description: "A classic Swedish semla with fluffy wheat bread, almond paste, and a generous layer of whipped cream.",
        price: 49.90, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "almonds", "dairy"]
    },
    {
        name: "Vanilla Semla",
        image: "/Images/product-semla-vanilla.jpg",
        alt: "Vanilla Semla filled with smooth vanilla cream",
        description: "A twist on the traditional semla, filled with smooth vanilla cream instead of almond paste.",
        price: 49.90, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy"]
    },
    {
        name: "Almond Croissant",
        image: "/Images/product-croissant-almond.jpg",
        alt: "Almond Croissant filled with almond paste and topped with chopped almonds",
        description: "A buttery croissant filled with almond paste, topped with sweet glaze and chopped almonds.",
        price: 40.50, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "almonds", "dairy"]
    },
    {
        name: "Original Croissant",
        image: "/Images/product-croissant-original.jpg",
        alt: "Classic buttery croissant with a crispy exterior and flaky interior",
        description: "A classic buttery croissant with a crispy exterior and soft, flaky interior.",
        price: 31.00,
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy"]
    },
    {
        name: "Blackberry Cake",
        image: "/Images/product-blackberry-cake.jpg",
        alt: "Moist blackberry cake with creamy filling",
        description: "A moist cake with fresh blackberries and a creamy filling that melts in your mouth.",
        price: {
            "4-bitars": 206.00,
            "6-bitars": 276.00,
            "8-bitars": 366.00,
            "12-bitars": 466.00
        },
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "Carrot Cake",
        image: "/Images/product-carrot-cake.jpg",
        alt: "Carrot cake with cream cheese frosting and walnuts",
        description: "A rich and spiced carrot cake with cream cheese frosting and a sprinkle of walnuts.",
        price: {
            "4-bitars": 179.00,
            "6-bitars": 249.00,
            "8-bitars": 329.00,
            "12-bitars": 429.00
        },
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg", "nuts"]
    },
    {
        name: "Chocolate Cake",
        image: "/Images/product-chocolate-cake.jpg",
        alt: "Decadent chocolate cake with layers of ganache",
        description: "A decadent, moist chocolate cake with layers of smooth chocolate ganache.",
        price: {
            "4-bitars": 288.50,
            "6-bitars": 389.00,
            "8-bitars": 499.00,
            "12-bitars": 629.00
        },
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "Strawberry Cake",
        image: "/Images/product-strawberry-cake.jpg",
        alt: "Light strawberry cake with whipped cream topping",
        description: "A light and fluffy cake with fresh strawberries and a sweet whipped cream topping.",
        price: {
            "4-bitars": 46.90,
            "6-bitars": 64.90,
            "8-bitars": 84.90,
            "12-bitars": 109.90
        },
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy"]
    },
    {
        name: "Blueberry Cheesecake",
        image: "/Images/product-blueberry-cheesecake.jpg",
        alt: "Blueberry Cheesecake with fresh blueberries",
        description: "A creamy and smooth cheesecake topped with fresh blueberries and a hint of lemon.",
        price: 67.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "New York Cheesecake",
        image: "/Images/product-newyork-cheesecake.jpg",
        alt: "Rich New York-style cheesecake with graham cracker crust",
        description: "A rich and creamy New York-style cheesecake with a graham cracker crust and a velvety texture.",
        price: 52.50, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "Swedish Kladdkaka",
        image: "/Images/product-kladdkaka.jpg",
        alt: "Sticky Swedish chocolate cake (Kladdkaka)",
        description: "A Swedish sticky chocolate cake that's dense, gooey, and utterly indulgent.",
        price: {
            "4-bitars": 42.90,
            "6-bitars": 57.90,
            "8-bitars": 75.90,
            "12-bitars": 97.90
        },
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "Lemon Pie",
        image: "/Images/product-lemon-pie.jpg",
        alt: "Tangy lemon pie with buttery, flaky crust",
        description: "A tangy and refreshing lemon pie with a buttery, flaky crust and a smooth, zesty filling.",
        price: {
            "4-bitars": 63.00,
            "6-bitars": 85.00,
            "8-bitars": 110.00,
            "12-bitars": 140.00
        },
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    }
];

var productsContainer = document.getElementById('products-container'); 

arrayOfProducts.forEach(function(product, index) {
    var productToDisplay = LoadProduct(product, index);
    productsContainer.appendChild(productToDisplay);
});

function LoadProduct(product, index) {
    var productCard = document.createElement('div');
    productCard.className = "col-12 col-sm-6 col-md-4 col-lg-3 mt-3 mb-5 product-info";

    var imageContainer = document.createElement('div');
    imageContainer.className = "image-container";

    var productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.alt || `product-image-${index}`;
    productImage.className = "product-image";
    productImage.height = 350;
    productImage.width = 300;

    var addToCartButton = document.createElement('button');
    addToCartButton.id = `add-to-cart-button-${index}`;
    addToCartButton.className = "product-button add-to-cart-btn";
    addToCartButton.textContent = "See more details";

    imageContainer.appendChild(productImage);
    imageContainer.appendChild(addToCartButton);

    var productName = document.createElement('h5');
    productName.innerText = product.name || `product-name-${index}`;

    var productPrice = document.createElement('p');
    productPrice.innerText = product.price || `product-price-${index}`;

    productCard.appendChild(imageContainer);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);

    return productCard;
}






