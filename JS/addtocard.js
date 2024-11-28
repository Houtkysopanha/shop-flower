var addToCartButtons = document.querySelectorAll('.r-btn');

// Initialize an array to store added items
var cartItems = [];

// Add click event listeners to each 'Add to cart' button
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var productElement = button.closest('.row'); // Get the parent '.row' element
        var productId = productElement.getAttribute('data-product-id'); // Get product id

        // Get product details
        var imgSrc = productElement.querySelector('img').src;
        var title = productElement.querySelector('h3').innerText;
        var price = productElement.querySelector('h5').innerText;

        // Create an object with product details
        var product = {
            id: productId,
            image: imgSrc,
            title: title,
            price: price
        };

        // Add product to cartItems array
        cartItems.push(product);

        // Optionally, you can update UI or perform other actions here
        console.log('Product added to cart:', product);

        // Example: Update UI to reflect added item (this can be a separate function)
        updateCartUI(product);
    });
});

// Function to update the UI (e.g., display added items)
function updateCartUI(product) {
    // Example: Display the added item in a list or cart UI
    var cartList = document.getElementById('cart-list'); // Assuming there's a <ul> with id 'cart-list'

    var listItem = document.createElement('li');
    listItem.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div>
            <h4>${product.title}</h4>
            <p>${product.price}</p>
        </div>
    `;

    cartList.appendChild(listItem);
}