const cart = `<button class="add-cart-btn">Add To Cart</button>

<div class="overlay-cart"></div>

<div class="cart-sidebar">

    <div class="cart-header">
        <h2>Your Cart</h2>
        <button class="close-cart">✖</button>
    </div>

    <div class="cart-content">
        <p>Latte x 1</p>
        <p>Espresso x 2</p>
    </div>

    <div class="cart-footer">
        <h3>Total: ₹799</h3>
        <button>Checkout</button>
    </div>

</div>`

const sidedbar = document.querySelector('.cart-sided');
sidedbar.innerHTML = cart;

const CartBtn = document.querySelector('.cart-icon');
const cartSidebar = document.querySelector('.cart-sidebar');
const overlayCart = document.querySelector('.overlay-cart');
const closeCart = document.querySelector('.close-cart');

function openCart(){

    cartSidebar.classList.add('open');
    overlayCart.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSidebar(){

    cartSidebar.classList.remove('open');
    overlayCart.classList.remove('show');
    document.body.style.overflow = 'auto';
}

CartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeSidebar);
overlayCart.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSidebar();

});


export default cart;