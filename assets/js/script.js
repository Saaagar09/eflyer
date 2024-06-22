
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
        footer.style.display = 'block'; // Display the footer when scrolled down
    } else {
        footer.style.display = 'none'; // Hide the footer when scrolled to the top
    }
});

 // JavaScript for managing the cart

 function addToCart(name, price) {
    const dataStore = window.localStorage.getItem("mywebsite_datastore");
    /** 
     * Returns valid json data saved on users browser
     * 
    */
    const data = JSON.parse(dataStore);

    // init cart
    if(!data?.cart){     
        data.cart = [];
    }

    data.cart.push({ name: name, price: price });

    // setting localstorage
    window.localStorage.setItem("mywebsite_datastore" , JSON.stringify(data));

    // for frontend changes 
     updateCart();
 }

 
 function updateCart() {
     const cartItemsElement = document.getElementById('cart-items');
     const totalElement = document.getElementById('total');

     // check if cartitems element is present in html or not 
     if(cartItemsElement){
     cartItemsElement.innerHTML = '';

     
     let total = 0;

     let dataStore = window.localStorage.getItem("mywebsite_datastore");

     if(dataStore){
        dataStore = JSON.parse(dataStore);
     }else{
        // re init datastore
        initStore();
     }
     
     Array.from(dataStore.cart)?.forEach(item => {
         const listItem = document.createElement('li');
         listItem.classList.add('cart-item');
         listItem.innerHTML = `<span class="item-name">${item.name}</span>: <span class="item-price">$${item.price.toFixed(2)}</span>`;
         cartItemsElement.appendChild(listItem);
         total += item.price;
     });

     totalElement.textContent = total.toFixed(2);
    }
 }


 const initStore = ()=>{
    window.localStorage.setItem("mywebsite_datastore" , JSON.stringify({
        cart:[]
    }));
 }

 const main  = ()=>{
    // Data saved on browser
    const dataStore = window.localStorage.getItem("mywebsite_datastore");
    if(!dataStore){
        // initailze storage
        initStore();
    }
 }

 main();



 