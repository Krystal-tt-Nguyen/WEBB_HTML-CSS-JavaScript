/* TODO:
    * Skapa en kundvagnknapp högst upp på hemsidan för att gå till översikt
        * Lägga till funktion för knappen Add cart
        * Översikten ska visa antal produkter, totalpris och en knapp för att gå till kassan 
    * Alla produkter/tjänster i listan (ej kundvagnen) ska kunna expanderas för att visa mer detaljerad information. 
      Detta ska göras med hjälp av Modaler
*/

var productsContainer = document.getElementById('products-container'); 

var arrayOfProducts = [
    {
        name: "Original Semla",
        image: "/Images/product-semla-original.jpg",
        alt: "Original Swedish Semla with fluffy wheat bread, almond paste, and whipped cream",
        description: "A classic Swedish semla with fluffy wheat bread, almond paste, and a generous layer of whipped cream.",
        price: 49.90 + ' kr / piece',
        quantity: 0
    },
    {
        name: "Vanilla Semla",
        image: "/Images/product-semla-vanilla.jpg",
        alt: "Vanilla Semla filled with smooth vanilla cream",
        description: "A twist on the traditional semla, filled with smooth vanilla cream instead of almond paste.",
        price: 49.90 + ' kr / piece',
        quantity: 0
    },
    {
        name: "Almond Croissant",
        image: "/Images/product-croissant-almond.jpg",
        alt: "Almond Croissant filled with almond paste and topped with chopped almonds",
        description: "A buttery croissant filled with almond paste, topped with sweet glaze and chopped almonds.",
        price: 40.50 + ' kr / piece',
        quantity: 0
    },
    {
        name: "Original Croissant",
        image: "/Images/product-croissant-original.jpg",
        alt: "Classic buttery croissant with a crispy exterior and flaky interior",
        description: "A classic buttery croissant with a crispy exterior and soft, flaky interior.",
        price: 31.00 + ' kr / piece',
        quantity: 0
    },
    {
        name: "Blackberry Cake",
        image: "/Images/product-blackberry-cake.jpg",
        alt: "Moist blackberry cake with creamy filling",
        description: "A moist cake with fresh blackberries and a creamy filling that melts in your mouth.",
        price: 206.00 + ' kr / cake',
        quantity: 0
    },
    {
        name: "Carrot Cake",
        image: "/Images/product-carrot-cake.jpg",
        alt: "Carrot cake with cream cheese frosting and walnuts",
        description: "A rich and spiced carrot cake with cream cheese frosting and a sprinkle of walnuts.",
        price: 179.00 + ' kr / cake',
        quantity: 0
    },
    {
        name: "Chocolate Cake",
        image: "/Images/product-chocolate-cake.jpg",
        alt: "Decadent chocolate cake with layers of ganache",
        description: "A decadent, moist chocolate cake with layers of smooth chocolate ganache.",
        price: 288.50 + ' kr / cake',
        quantity: 0
    },
    {
        name: "Strawberry Cake",
        image: "/Images/product-strawberry-cake.jpg",
        alt: "Light strawberry cake with whipped cream topping",
        description: "A light and fluffy cake with fresh strawberries and a sweet whipped cream topping.",
        price: 46.90 + ' kr / cake',
        quantity: 0
    },
    {
        name: "Blueberry Cheesecake",
        image: "/Images/product-blueberry-cheesecake.jpg",
        alt: "Blueberry Cheesecake with fresh blueberries",
        description: "A creamy and smooth cheesecake topped with fresh blueberries and a hint of lemon.",
        price: 67.00 + ' kr / piece',
        quantity: 0
    },
    {
        name: "New York Cheesecake",
        image: "/Images/product-newyork-cheesecake.jpg",
        alt: "Rich New York-style cheesecake with graham cracker crust",
        description: "A rich and creamy New York-style cheesecake with a graham cracker crust and a velvety texture.",
        price: 52.50 + ' kr / piece',
        quantity: 0
    },
    {
        name: "Swedish Kladdkaka",
        image: "/Images/product-kladdkaka.jpg",
        alt: "Sticky Swedish chocolate cake (Kladdkaka)",
        description: "A Swedish sticky chocolate cake that's dense, gooey, and utterly indulgent.",
        price: 42.90 + ' kr / piece',
        quantity: 0
    },
    {
        name: "Lemon Pie",
        image: "/Images/product-lemon-pie.jpg",
        alt: "Tangy lemon pie with buttery, flaky crust",
        description: "A tangy and refreshing lemon pie with a buttery, flaky crust and a smooth, zesty filling.",
        price: 63.00 + ' kr / piece',
        quantity: 0
    }
];

arrayOfProducts.forEach(function(product, index) {
    var productToDisplay = CreateProduct(product, index);    
    productsContainer.appendChild(productToDisplay);
    AddSeparator(product, productsContainer);
});

function CreateProduct(product, index)
{
    var productContainer = document.createElement('div');
    productContainer.id = `product-container-${index}`;
    productContainer.className ="col-11 col-md-4 mx-auto mb-5 mt-3 product-info";

    var productImage = document.createElement('img');
    productImage.src = product.image; 
    productImage.alt = product.alt || `Product-picture-${index}`;
    productImage.height = 350;
    productImage.width = 300;

    var productName = document.createElement('h4');
    productName.innerText = product.name || `Product-name-${index}`;;
    productName.className = "mt-4 mb-3";

    var productDescription = document.createElement('p');
    productDescription.className="mt-2 mb-2";
    productDescription.innerText = product.description || "No description available";

    var productPrice = document.createElement('p');
    productPrice.className="mt-2 mb-2";
    productPrice.innerText = product.price || "No price information"; 

    var purchaseOptions = CreatePurchaseOptions(product, index);
    
    productContainer.appendChild(productImage);
    productContainer.appendChild(productName);
    productContainer.appendChild(productDescription);   
    productContainer.appendChild(productPrice); 
    productContainer.appendChild(purchaseOptions);

    return productContainer;
}

function CreatePurchaseOptions(product, index) {
    var purchaseOptions = document.createElement('div');
    purchaseOptions.id = `purchase-options-${index}`;
    purchaseOptions.className = 'purchase-options';

    var minusButton = document.createElement('button');
    minusButton.id = `minus-button-${index}`;
    minusButton.className = "product-button minus-button";
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
    plusButton.className = "product-button plus-button";
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

function AddSeparator(product, productContainer) 
{
    const separatorList = ['Vanilla Semla', 'Original Croissant', 'Strawberry Cake','New York Cheesecake'];

    if (separatorList.includes(product.name))
    {
        var separator = document.createElement('hr');
        separator.className = "col-10 mx-auto mb-5 separator";
        productContainer.appendChild(separator);
    }    
}

