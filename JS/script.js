// FETCH HEADER, NAV OR FOOTER
fetch('/HTML/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
        console.error('Unable to load Header: ', error)
});

fetch('/HTML/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data
    })
    .catch(error => {
        console.error('Unable to load Navbar: ', error)
});

fetch('/HTML/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data
    })
    .catch(error => {
        console.error('Unable to load Footer: ', error)
});


// LOAD PRODUCT-ARRAY 
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

arrayOfProducts.forEach(function(product){
    //PRODUCTINFO
    var productInfo = document.createElement('div');
    productInfo.id = 'product-info';
    productInfo.className ="col-11 col-md-4 mx-auto mb-5";

    var image = document.createElement('img');
    image.src = product.image; 
    image.alt = product.alt;
    image.height = 400;
    image.width = 350;

    var name = document.createElement('h5');
    name.innerHTML = product.name;
    name.className = "mt-4 mb-3";

    var description = document.createElement('p');
    description.innerHTML = product.description;

    var price = document.createElement('p');
    price.innerHTML = product.price; 

    //BUYING OPTIONS
    var counter = document.createElement('div');
    counter.className = 'counter';

    var decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';

    //-->skapa en siplay i mitten !!!!

    var increaseButton = document.createElement('button');
    increaseButton.textContent = '+';

    // if (name.title == 'Vanilla Semla' || name.title == 'Original Croissant') {
    //     var separator = document.createElement('hr');
    //     separator.className = "separator";
    //     productInfo.appendChild(separator);
    // }

    //ADD TO HTML
    productInfo.appendChild(image);
    productInfo.appendChild(name);
    productInfo.appendChild(description);   
    productInfo.appendChild(price); 

    counter.appendChild(decreaseButton);
    counter.appendChild(increaseButton);

    productInfo.appendChild(counter);
    productContainer.appendChild(productInfo);
});
