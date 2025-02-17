var productContainer = document.getElementById('product-container'); 

var arrayOfProducts = [
    {
        name: "Original Semla",
        image: "/Images/product-semla-original.jpg",
        alt: "Original Swedish Semla with fluffy wheat bread, almond paste, and whipped cream",
        description: "A classic Swedish semla with fluffy wheat bread, almond paste, and a generous layer of whipped cream.",
        price: 49.90 + ' kr / piece'
    },
    {
        name: "Vanilla Semla",
        image: "/Images/product-semla-vanilla.jpg",
        alt: "Vanilla Semla filled with smooth vanilla cream",
        description: "A twist on the traditional semla, filled with smooth vanilla cream instead of almond paste.",
        price: 49.90 + ' kr / piece'
    },
    {
        name: "Almond Croissant",
        image: "/Images/product-croissant-almond.jpg",
        alt: "Almond Croissant filled with almond paste and topped with chopped almonds",
        description: "A buttery croissant filled with almond paste, topped with sweet glaze and chopped almonds.",
        price: 40.50 + ' kr / piece'
    },
    {
        name: "Original Croissant",
        image: "/Images/product-croissant-original.jpg",
        alt: "Classic buttery croissant with a crispy exterior and flaky interior",
        description: "A classic buttery croissant with a crispy exterior and soft, flaky interior.",
        price: 31.00 + ' kr / piece'
    },
    {
        name: "Blackberry Cake",
        image: "/Images/product-blackberry-cake.jpg",
        alt: "Moist blackberry cake with creamy filling",
        description: "A moist cake with fresh blackberries and a creamy filling that melts in your mouth.",
        price: 206.00 + ' kr / cake'
    },
    {
        name: "Carrot Cake",
        image: "/Images/product-carrot-cake.jpg",
        alt: "Carrot cake with cream cheese frosting and walnuts",
        description: "A rich and spiced carrot cake with cream cheese frosting and a sprinkle of walnuts.",
        price: 179.00 + ' kr / cake'
    },
    {
        name: "Chocolate Cake",
        image: "/Images/product-chocolate-cake.jpg",
        alt: "Decadent chocolate cake with layers of ganache",
        description: "A decadent, moist chocolate cake with layers of smooth chocolate ganache.",
        price: 288.50 + ' kr / cake'
    },
    {
        name: "Strawberry Cake",
        image: "/Images/product-strawberry-cake.jpg",
        alt: "Light strawberry cake with whipped cream topping",
        description: "A light and fluffy cake with fresh strawberries and a sweet whipped cream topping.",
        price: 46.90 + ' kr / cake'
    },
    {
        name: "Blueberry Cheesecake",
        image: "/Images/product-blueberry-cheesecake.jpg",
        alt: "Blueberry Cheesecake with fresh blueberries",
        description: "A creamy and smooth cheesecake topped with fresh blueberries and a hint of lemon.",
        price: 67.00 + ' kr / piece'
    },
    {
        name: "New York Cheesecake",
        image: "/Images/product-newyork-cheesecake.jpg",
        alt: "Rich New York-style cheesecake with graham cracker crust",
        description: "A rich and creamy New York-style cheesecake with a graham cracker crust and a velvety texture.",
        price: 52.50 + ' kr / piece'
    },
    {
        name: "Swedish Kladdkaka",
        image: "/Images/product-kladdkaka.jpg",
        alt: "Sticky Swedish chocolate cake (Kladdkaka)",
        description: "A Swedish sticky chocolate cake that's dense, gooey, and utterly indulgent.",
        price: 42.90 + ' kr / piece'
    },
    {
        name: "Lemon Pie",
        image: "/Images/product-lemon-pie.jpg",
        alt: "Tangy lemon pie with buttery, flaky crust",
        description: "A tangy and refreshing lemon pie with a buttery, flaky crust and a smooth, zesty filling.",
        price: 63.00 + ' kr / piece'
    }
];

arrayOfProducts.forEach(function(product) {
    var productToDisplay = CreateProduct(product);    
    productContainer.appendChild(productToDisplay);
    AddSeparator(product, productContainer);
});

function CreateProduct(product)
{
    var productInfo = document.createElement('div');
    productInfo.id = 'product-info';
    productInfo.className ="col-11 col-md-4 mx-auto mb-5 mt-3";

    var productImage = document.createElement('img');
    productImage.src = product.image; 
    productImage.alt = product.alt;
    productImage.height = 350;
    productImage.width = 300;

    var productName = document.createElement('h5');
    productName.innerText = product.name;
    productName.className = "mt-4 mb-3";

    var productDescription = document.createElement('p');
    productDescription.className="mt-2 mb-2";
    productDescription.innerText = product.description;

    var productPrice = document.createElement('p');
    productPrice.className="mt-2 mb-2";
    productPrice.innerHTML = product.price; 

    var counter = CreatePurchaseOptions();
    
    productInfo.appendChild(productImage);
    productInfo.appendChild(productName);
    productInfo.appendChild(productDescription);   
    productInfo.appendChild(productPrice); 
    productInfo.appendChild(counter);

    return productInfo;
}

function CreatePurchaseOptions() {
    var purchaseOptions = document.createElement('div');
    purchaseOptions.className = 'purchase-options';

    var minusButton = document.createElement('button');
    minusButton.className = "product-button";
    minusButton.id = "minus-button";
    minusButton.textContent = '-';    

    var cakeQuantity  = document.createElement('input');
    cakeQuantity.id='cake-quantity';
    cakeQuantity.type ="text"
    cakeQuantity.value = 0;

    var plusButton = document.createElement('button');
    plusButton.className = "product-button";
    minusButton.id = "plus-button";
    plusButton.textContent = '+';

    var addButton = document.createElement('button');
    addButton.id = "add-button";
    addButton.className = "product-button";

    var icon = document.createElement('i');
    icon.className = "fa fa-cart-plus";
    addButton.appendChild(icon);

    purchaseOptions.appendChild(minusButton);
    purchaseOptions.appendChild(cakeQuantity)
    purchaseOptions.appendChild(plusButton);
    purchaseOptions.appendChild(addButton);

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




/* TODO:
    * Lägga Eventlistener på +, - och Add button
        * Räkna och visa quantity i input fönstret
    * Skapa en kundvagnknapp högst upp på hemsidan för att gå till översikt
        * Översikten ska innehålla sammanfattning med t.ex. antal produkter, 
          totalpris och en knapp för att gå till kassan eller slutföra beställningen 
    * Alla produkter/tjänster i listan (ej kundvagnen) ska kunna expanderas för att visa mer detaljerad information. 
      Detta ska göras med hjälp av Modaler
*/