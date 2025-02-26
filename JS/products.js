// fetch('../HTML/footer.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('footer').innerHTML = data
//     })
//     .catch(error => {
//         console.error('Unable to load Footer: ', error)
// });

const productsArray = [
    {
        id: 1,
        name: "Original Semla",
        image: "../Images/product-semla-original.webp",
        alt: "Original Swedish Semla with fluffy wheat bread, almond paste, and whipped cream",
        description: "A classic Swedish semla with fluffy wheat bread, almond paste, and a generous layer of whipped cream.",
        price: 49.00,
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "almonds", "dairy"]
    },
    {
        id: 2,
        name: "Vanilla Semla",
        image: "../Images/product-semla-vanilla.jpg",
        alt: "Vanilla Semla filled with smooth vanilla cream",
        description: "A twist on the traditional semla, filled with smooth vanilla cream instead of almond paste.",
        price: 59.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy"]
    },
    {
        id: 3,
        name: "Almond Croissant",
        image: "../Images/product-croissant-almond.jpg",
        alt: "Almond Croissant filled with almond paste and topped with chopped almonds",
        description: "A buttery croissant filled with almond paste, topped with sweet glaze and chopped almonds.",
        price: 39.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "almonds", "dairy"]
    },
    {
        id: 4,
        name: "Original Croissant",
        image: "../Images/product-croissant-original.jpg",
        alt: "Classic buttery croissant with a crispy exterior and flaky interior",
        description: "A classic buttery croissant with a crispy exterior and soft, flaky interior.",
        price: 25.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy"]
    },
    {
        id: 5,
        name: "Swedish Cinnamon Bun",
        image: "../Images/product-cinnamon-bun.jpg",
        alt: "Traditional Swedish cinnamon bun with a soft, sweet dough and a cinnamon-sugar filling",
        description: "A classic Swedish cinnamon bun, known as 'Kanelbulle', with a soft, fluffy dough, cinnamon-sugar filling, and a sprinkle of pearl sugar on top.",
        price: 49.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg", "gluten"]
    },
    {
        id: 6,
        name: "Swedish Kladdkaka",
        image: "../Images/product-kladdkaka.jpg",
        alt: "Sticky Swedish chocolate cake (Kladdkaka)",
        description: "A Swedish sticky chocolate cake that's dense, gooey, and utterly indulgent.",
        price: 42.50,
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        id: 7,
        name: "Blackberry Cake",
        image: "../Images/product-blackberry-cake.jpg",
        alt: "Moist blackberry cake with creamy filling",
        description: "A moist cake with fresh blackberries and a creamy filling that melts in your mouth.",
        price: 339.00,
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        id: 8,
        name: "Carrot Cake",
        image: "../Images/product-carrot-cake.jpg",
        alt: "Carrot cake with cream cheese frosting and walnuts",
        description: "A rich and spiced carrot cake with cream cheese frosting and a sprinkle of walnuts.",
        price: 219.00,
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg", "nuts"]
    },
    {
        id: 9,
        name: "Chocolate Cake",
        image: "../Images/product-chocolate-cake.jpg",
        alt: "Decadent chocolate cake with layers of ganache",
        description: "A decadent, moist chocolate cake with layers of smooth chocolate ganache.",
        price: 319.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        id: 10,
        name: "Strawberry Cake",
        image: "../Images/product-strawberry-cake.jpg",
        alt: "Light strawberry cake with whipped cream topping",
        description: "A light and fluffy cake with fresh strawberries and a sweet whipped cream topping.",
        price: 309.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy"]
    },
    {
        id: 11,
        name: "Blueberry Cheesecake",
        image: "../Images/product-blueberry-cheesecake.jpg",
        alt: "Blueberry Cheesecake with fresh blueberries",
        description: "A creamy and smooth cheesecake topped with fresh blueberries and a hint of lemon.",
        price: 72.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        id: 12,
        name: "New York Cheesecake",
        image: "../Images/product-newyork-cheesecake.jpg",
        alt: "Rich New York-style cheesecake with graham cracker crust",
        description: "A rich and creamy New York-style cheesecake with a graham cracker crust and a velvety texture.",
        price: 63.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    },
    {
        id: 13,
        name: "Lemon Pie",
        image: "../Images/product-lemon-pie.jpg",
        alt: "Tangy lemon pie with buttery, flaky crust",
        description: "A tangy and refreshing lemon pie with a buttery, flaky crust and a smooth, zesty filling.",
        price: 249.00, 
        currency: "kr",
        quantity: 0,
        allergens: ["wheat", "dairy", "egg"]
    }
];

const productsContainer = document.getElementById('products-container'); 

productsArray.forEach(function(product, index) {
    let productElement = LoadProduct(product, index);
    productsContainer.appendChild(productElement);
});

function LoadProduct(product, index) {
    const productDiv = document.createElement('div');
    productDiv.className = "col-11 col-sm-6 col-md-4 col-lg-3 mt-3 mb-5 product-div";

    const productImageContainer = document.createElement('div');
    productImageContainer.className = "product-image-container";

    const productImage = document.createElement('img');
    productImage.loading ="lazy";
    productImage.src = product.image;
    productImage.alt = product.alt || `product-image-${index}`;
    productImage.className = "product-image";
    productImage.height = 350;
    productImage.width = 300;

    const viewDetailsButton = document.createElement('button');
    viewDetailsButton.className = 'btn btn-primary view-details-btn';
    viewDetailsButton.textContent = 'View Details';
    viewDetailsButton.setAttribute('data-bs-toggle', 'modal');
    viewDetailsButton.setAttribute('data-bs-target', '#modal-container');

    viewDetailsButton.addEventListener('click', function () {
        ShowProductModal(product, index);
    });

    productImageContainer.appendChild(productImage);
    productImageContainer.appendChild(viewDetailsButton);

    const productName = document.createElement('h5');
    productName.innerText = product.name || `product-name-${index}`;

    const productPrice = document.createElement('p');
    productPrice.innerHTML = `<strong>Price</strong> ${product.price || 'N/A'} ${product.currency}`;

    productDiv.appendChild(productImageContainer);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    return productDiv;
}

const modalHeader = document.querySelector('.modal-header');
const modalBody = document.querySelector('.modal-body');
const modalFooter = document.querySelector('.modal-footer');

function ShowProductModal(product, index) {
    let allergensList = product.allergens.join(", ");
    
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
    var options = LoadPurchaseOption(product);
    modalFooter.appendChild(options);
}

function LoadPurchaseOption(product) {
    const purchaseDiv = document.createElement('div');
    purchaseDiv.className = 'purchase-options';
    
    purchaseDiv.innerHTML = `
        <button class="cart-button" aria-label="Add to cart">
        <i class="fa fa-cart-plus"></i>
        </button>
    `;

    AddToCart(purchaseDiv, product);
    return purchaseDiv;
}

const cartBody = document.getElementById('cart-body');
const cartFooter = document.getElementById('cart-footer');
const navbarDropdown = document.getElementById('navbarDropdown');

const cartItemsArray = [];

function AddToCart(purchaseDiv, product) {
    const cartButton = purchaseDiv.querySelector('.cart-button');
    cartButton.addEventListener('click', function() {
        const existingProduct = cartItemsArray.find(item => item.id == product.id);

        if(existingProduct) {
            existingProduct.quantity++;
        }
        else{
            // Spread operator (...) möjliggör kopiering av hela eller delar av en befintlig array eller objekt till en annan
            // => ändringar som görs i kundvagnen ska ej påverkar quantity i productsArray
            const productCopy = {...product};
            productCopy.quantity = 1;
            cartItemsArray.push(productCopy);
        }
        
        UpdateShoppingCart();
    });
}

function UpdateShoppingCart() {
    cartBody.innerHTML = '';
    let totalPrice = 0;

    cartItemsArray.forEach(cartItem => {
        let cartElement = LoadCartItem(cartItem);
        cartBody.appendChild(cartElement);
        totalPrice += (cartItem.quantity * cartItem.price);
        
        console.log(`${cartItem.name} ${cartItem.quantity}`);
    });
    
    cartFooter.innerHTML = `
        <p><strong>Total price:</strong> ${totalPrice} ${productsArray[0].currency}</p>
        <button id="check-out">Check Out</button>
    `;

    if (cartItemsArray.length > 0) {
        navbarDropdown.innerHTML = `
            <i id="check-out-logo" class="fa-solid fa-cart-shopping fa-beat"></i> (${cartItemsArray.length})
        `;
    }
    else {
        navbarDropdown.innerHTML = `<i id="check-out-logo" class="fa-solid fa-cart-shopping"></i>`;
    }
}

function LoadCartItem(cartItem) {
    const shoppingCartDiv = document.createElement('div');
    shoppingCartDiv.className = "shopping-cart-div mb-3";
    let subTotal = cartItem.price * cartItem.quantity;

    if(cartItem.quantity > 0)
    {
        shoppingCartDiv.innerHTML = `
            <div id="cart-image-container">
                <img src="${cartItem.image}" alt="${cartItem.alt}" class="rounded-2" width="100", height="100">
            </div>
            <div class="cart-item-details text-start">
                <p><strong>${cartItem.name}</strong></p>
                <p><i>${cartItem.price} ${cartItem.currency}</i></p>
            </div>
            <input type="number" class="quantity-display mx-auto" min="0" max="100" aria-label="Display" value="${cartItem.quantity}">
            <p class="mx-auto"><strong>Subtotal:</strong> ${subTotal} ${cartItem.currency}</p>
        `;
    }
        
    const quantityDisplay = shoppingCartDiv.querySelector('.quantity-display');
    
    quantityDisplay.addEventListener('input', function() {
        var newQuantity = parseInt(quantityDisplay.value);

        if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= 100){
            cartItem.quantity = newQuantity;
        }
        
        // Javascript har ej array.Remove() --> för ta bort ett specifikt objekt används array.slice(start, end)
        if (newQuantity == 0){
            // findIndex() returnerar index för första elementet som matchar ett villkor. Returnerar -1 om inget matchar
            const index = cartItemsArray.findIndex(i => i.id == cartItem.id);
            if (index != -1) {
                cartItemsArray.splice(index, 1);
            }
        }
        UpdateShoppingCart();
    })

    return shoppingCartDiv;
}

