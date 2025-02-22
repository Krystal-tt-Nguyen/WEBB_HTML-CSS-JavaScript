var productsArray = [
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

/* ----- Products.html ----- */
var productsContainer = document.getElementById('products-container'); 

productsArray.forEach(function(product, index) {
    var productElement = LoadProduct(product, index);
    productsContainer.appendChild(productElement);
});

function LoadProduct(product, index) {
    var productDiv = document.createElement('div');
    productDiv.className = "col-11 col-sm-6 col-md-4 col-lg-3 mt-3 mb-5 product-div";

    var productImageContainer = document.createElement('div');
    productImageContainer.className = "product-image-container";

    var productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.alt || `product-image-${index}`;
    productImage.className = "product-image";
    productImage.height = 350;
    productImage.width = 300;

    var viewDetailsButton = document.createElement('button');
    viewDetailsButton.className = 'btn btn-primary view-details-btn';
    viewDetailsButton.textContent = 'View Details';
    viewDetailsButton.setAttribute('data-bs-toggle', 'modal');
    viewDetailsButton.setAttribute('data-bs-target', '#modal-container');

    viewDetailsButton.addEventListener('click', function () {
        ShowProductModal(product, index);
    });

    productImageContainer.appendChild(productImage);
    productImageContainer.appendChild(viewDetailsButton);

    var productName = document.createElement('h5');
    productName.innerText = product.name || `product-name-${index}`;

    var productPrice = document.createElement('p');
    productPrice.innerHTML = `<strong>Price</strong> ${product.price || 'N/A'} ${product.currency}`;

    productDiv.appendChild(productImageContainer);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    return productDiv;
}


/* ----- Products Modal ----- */
var modalHeader = document.querySelector('.modal-header');
var modalBody = document.querySelector('.modal-body');
var modalFooter = document.querySelector('.modal-footer');

function ShowProductModal(product, index) {
    var allergensList = product.allergens.join(", ");
    
    modalHeader.innerHTML = `
        <h5 class="mt-3">${product.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `;

    modalBody.innerHTML = `
        <div class="modal-img mb-4">
            <img src="${product.image}" alt="${product.alt || 'product-image-' + index}" 
            class="rounded-2 img-fluid" style="height: 200px; width: auto;">
        </div>
        
        <div>
            <p class="modal-product-details">${product.description}</p>
            <p class="modal-product-details"><strong>Price</strong>: ${product.price} ${product.currency}</p>
            <p class="modal-product-details"><strong>Allergens: </strong>${allergensList}</p>
        </div>
    `;

    modalFooter.innerHTML = "";
    var options = LoadPurchaseOptions(product);
    modalFooter.appendChild(options);
}


/* ----- Products Purchase Options ----- */
function LoadPurchaseOptions(product) {
    var purchaseDiv = document.createElement('div');
    purchaseDiv.className = 'purchase-options';

    purchaseDiv.innerHTML = `
        <button class="product-button-style cart-button" aria-label="Add to cart">
            <i class="fa fa-cart-plus"></i>
        </button>
    `;

    var cartButton = purchaseDiv.querySelector('.cart-button');

    cartButton.addEventListener('click', function() {
        // Skriva kod för att lägga till produkten i kundvagnen
    });

    return purchaseDiv;
}




// purchaseDiv.innerHTML = `
//         <button class="product-button-style minus-button" aria-label="Decrease product quantity">-</button>

//         <input type="number" class="quantity-display" aria-label="Display" value="${product.quantity}">

//         <button class="product-button-style plus-button" aria-label="Increase product quantity">+</button>
//     `;

//     var minusButton = purchaseDiv.querySelector('.minus-button');
//     var quantityDisplay = purchaseDiv.querySelector('.quantity-display');
//     var plusButton = purchaseDiv.querySelector('.plus-button');
   
//     minusButton.addEventListener('click', function() {
//         if (product.quantity > 0)
//         {
//             product.quantity--;
//             quantityDisplay.value = product.quantity;
//         }
//     });

//     quantityDisplay.addEventListener('input', function() {
//         var newQuantity = parseInt(quantityDisplay.value);

//         if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= 100) 
//         {
//             product.quantity = newQuantity;
//         }
//         else
//         {
//             quantityDisplay.value = product.quantity;
//         }
//     })

//     plusButton.addEventListener('click', function() {
//         if (product.quantity < 100) 
//         {
//             product.quantity++;
//             quantityDisplay.value = product.quantity;
//         }
//     });