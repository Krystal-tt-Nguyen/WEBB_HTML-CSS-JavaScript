
var arrayOfProducts = [
    {
        name: "Original Semla",
        image: "/Images/product-semla-original.jpg",
        alt: "Original Swedish Semla with fluffy wheat bread, almond paste, and whipped cream",
        description: "A classic Swedish semla with fluffy wheat bread, almond paste, and a generous layer of whipped cream.",
        price: 49.00,
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "almonds", "dairy"]
    },
    {
        name: "Vanilla Semla",
        image: "/Images/product-semla-vanilla.jpg",
        alt: "Vanilla Semla filled with smooth vanilla cream",
        description: "A twist on the traditional semla, filled with smooth vanilla cream instead of almond paste.",
        price: 59.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy"]
    },
    {
        name: "Almond Croissant",
        image: "/Images/product-croissant-almond.jpg",
        alt: "Almond Croissant filled with almond paste and topped with chopped almonds",
        description: "A buttery croissant filled with almond paste, topped with sweet glaze and chopped almonds.",
        price: 59.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "almonds", "dairy"]
    },
    {
        name: "Original Croissant",
        image: "/Images/product-croissant-original.jpg",
        alt: "Classic buttery croissant with a crispy exterior and flaky interior",
        description: "A classic buttery croissant with a crispy exterior and soft, flaky interior.",
        price: 39.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy"]
    },
    {
        name: "Swedish Cinnamon Bun",
        image: "/Images/product-cinnamon-bun.jpg",
        alt: "Traditional Swedish cinnamon bun with a soft, sweet dough and a cinnamon-sugar filling",
        description: "A classic Swedish cinnamon bun, known as 'Kanelbulle', with a soft, fluffy dough, cinnamon-sugar filling, and a sprinkle of pearl sugar on top.",
        price: 49.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg", "gluten"]
    },
    {
        name: "Swedish Kladdkaka",
        image: "/Images/product-kladdkaka.jpg",
        alt: "Sticky Swedish chocolate cake (Kladdkaka)",
        description: "A Swedish sticky chocolate cake that's dense, gooey, and utterly indulgent.",
        price: 42.50,
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "Blackberry Cake",
        image: "/Images/product-blackberry-cake.jpg",
        alt: "Moist blackberry cake with creamy filling",
        description: "A moist cake with fresh blackberries and a creamy filling that melts in your mouth.",
        price: 339.00,
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "Carrot Cake",
        image: "/Images/product-carrot-cake.jpg",
        alt: "Carrot cake with cream cheese frosting and walnuts",
        description: "A rich and spiced carrot cake with cream cheese frosting and a sprinkle of walnuts.",
        price: 219.00,
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg", "nuts"]
    },
    {
        name: "Chocolate Cake",
        image: "/Images/product-chocolate-cake.jpg",
        alt: "Decadent chocolate cake with layers of ganache",
        description: "A decadent, moist chocolate cake with layers of smooth chocolate ganache.",
        price: 319.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "Strawberry Cake",
        image: "/Images/product-strawberry-cake.jpg",
        alt: "Light strawberry cake with whipped cream topping",
        description: "A light and fluffy cake with fresh strawberries and a sweet whipped cream topping.",
        price: 309.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy"]
    },
    {
        name: "Blueberry Cheesecake",
        image: "/Images/product-blueberry-cheesecake.jpg",
        alt: "Blueberry Cheesecake with fresh blueberries",
        description: "A creamy and smooth cheesecake topped with fresh blueberries and a hint of lemon.",
        price: 289.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "New York Cheesecake",
        image: "/Images/product-newyork-cheesecake.jpg",
        alt: "Rich New York-style cheesecake with graham cracker crust",
        description: "A rich and creamy New York-style cheesecake with a graham cracker crust and a velvety texture.",
        price: 259.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        name: "Lemon Pie",
        image: "/Images/product-lemon-pie.jpg",
        alt: "Tangy lemon pie with buttery, flaky crust",
        description: "A tangy and refreshing lemon pie with a buttery, flaky crust and a smooth, zesty filling.",
        price: 249.00, 
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
    imageContainer.id = `image-container-${index}`;
    imageContainer.className = "image-container";

    var productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.alt || `product-image-${index}`;
    productImage.className = "product-image";
    productImage.height = 350;
    productImage.width = 300;

    var viewDetailsButton = document.createElement('button');
    viewDetailsButton.id = `view-details-button-${index}`;
    viewDetailsButton.className = "view-details-btn";
    viewDetailsButton.textContent = "View Details";

    viewDetailsButton.addEventListener("click", () => {
        ShowProductModal(product, index);
    });

    imageContainer.appendChild(productImage);
    imageContainer.appendChild(viewDetailsButton);

    var productName = document.createElement('h5');
    productName.innerText = product.name || `product-name-${index}`;

    var productPrice = document.createElement('p');
    productPrice.innerHTML = `<strong>Price</strong> ${product.price || 'N/A'} ${product.currency}`;

    productCard.appendChild(imageContainer);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);

    return productCard;
}


var modalContainer = document.getElementById('modal-container');
var modalContent = document.getElementById('modal-content');
var closeButton = document.querySelector('#modal-container .close-button');

closeButton.addEventListener('click', CloseProductModal);

function CloseProductModal() {
    modalContainer.style.display = "none";
}

modalContainer.addEventListener('click', function(event) {
    if (event.target === modalContainer) {
        CloseProductModal();
    }
});

function ShowProductModal(product, index) {
    var allergensList = product.allergens.join(", ");
    
    modalContent.innerHTML = `
        <img src="${product.image}" alt="${product.alt || 'product-image-' + index}" style="height: 200px; width: 175px;">
        <div class="model-content">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <p><strong>Price</strong>: ${product.price} ${product.currency}</p>
            <p>Allergens: ${allergensList}</p>
        </div>
    `;
    
    var purchaseOptions = CreatePurchaseOptions(product, index);
    modalContent.appendChild(purchaseOptions);

    modalContainer.style.display = "flex";
}



function CreatePurchaseOptions(product, index) {
    var purchaseOptions = document.createElement('div');
    purchaseOptions.id = `purchase-options-${index}`;
    purchaseOptions.className = 'purchase-options';

    var minusButton = document.createElement('button');
    minusButton.id = `minus-button-${index}`;
    minusButton.className = "product-button";
    minusButton.textContent = '-';   
    minusButton.setAttribute('aria-label', `Decrease quantity for product ${index}`); 

    var quantityDisplay = document.createElement('input');
    quantityDisplay.id = `quantity-display-${index}`;
    quantityDisplay.className='quantity-display';
    quantityDisplay.type ="text";
    quantityDisplay.value = product.quantity;
    quantityDisplay.setAttribute('aria-label', `Display quantity for product ${index}`);

    var plusButton = document.createElement('button');
    plusButton.id = `plus-button-${index}`;
    plusButton.className = "product-button";
    plusButton.textContent = '+';
    plusButton.setAttribute('aria-label', `Increase quantity for product ${index}`);

    var cartButton = document.createElement('button');
    cartButton.id = `cart-button-${index}`;
    cartButton.className = "product-button cart-button";
    cartButton.setAttribute('aria-label', `Add product ${index} to cart`);

    var icon = document.createElement('i');
    icon.className = "fa fa-cart-plus";
    cartButton.appendChild(icon);

    purchaseOptions.appendChild(minusButton);
    purchaseOptions.appendChild(quantityDisplay)
    purchaseOptions.appendChild(plusButton);
    purchaseOptions.appendChild(cartButton);

    minusButton.addEventListener('click', function() {
        if (product.quantity > 0)
        {
            product.quantity--;
            quantityDisplay.value = product.quantity;
        }
    });

    plusButton.addEventListener('click', function() {
        if (product.quantity < 100) 
        {
            product.quantity++;
            quantityDisplay.value = product.quantity;
        }
    });

    quantityDisplay.addEventListener('input', function() {
        var newQuantity = parseInt(quantityDisplay.value);

        if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= 100) 
        {
            product.quantity = newQuantity;
        }
        else
        {
            quantityDisplay.value = product.quantity;
        }
    })

    return purchaseOptions;
}






/* ANTECKNINGAR
    1. Product.price är ett objekt som innehåller nyckel-värdepar - ej en array => kan ej skriva product.price[0]
        - Object.values() är en inbyggd metod i JS som används för att få en array med alla värden från ett objekt.
        - Math.min(...array) används för att hitta det minsta värdet i arrayen.
        - ... är "spread syntax", som gör att värdena i arrayen blir separerade och kan skickas som individuella argument till Math.min
    2. I JS används funktionen map() för att skapa en ny array med resultaten av att anropa en given funktion på varje element i en array.

*/