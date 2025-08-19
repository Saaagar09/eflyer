/* JavaScript to open and close the side menu */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* footer js */
window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    if (window.scrollY > 0) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});

// ======== CART FUNCTIONS ===========

// add to cart
function addToCart(name, price) {
    let dataStore = window.localStorage.getItem("mywebsite_datastore");
    if (!dataStore) {
        dataStore = { cart: [] };
    } else {
        dataStore = JSON.parse(dataStore);
    }

    dataStore.cart.push({ name: name, price: price });
    window.localStorage.setItem("mywebsite_datastore", JSON.stringify(dataStore));

    alert(`${name} added to cart!`);
}

// used on cart.html (to show cart items)
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    if (cartItemsElement) {
        cartItemsElement.innerHTML = '';
        let total = 0;

        let dataStore = JSON.parse(window.localStorage.getItem("mywebsite_datastore") || '{"cart": []}');

        dataStore.cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `<span class="item-name">${item.name}</span>: ₹${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(listItem);
            total += item.price;
        });

        totalElement.textContent = total.toFixed(2);
    }
}

// call on page load (for cart page)
updateCart();
