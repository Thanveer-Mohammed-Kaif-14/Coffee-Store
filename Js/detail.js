import navbarEl from "./navbar.js";
import { fetchCoffee } from "./Fetchproduct.js";
import cart from "./cart.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = await fetchCoffee();

const Selproduct = product.find(
    item => item.id === id
);

const detailContainer = document.querySelector('.product-details');

detailContainer.innerHTML = `  <div class="details">
         <div class="img-container-detail">
         <img src="${Selproduct.image}" alt="">
         </div>
        <div class="prod-detail">
            <h1>${Selproduct.title}</h1>
        <h3>&#8377; ${Selproduct.price}</h3>
                <p class="ingri">Ingredients: ${Selproduct.ingredients}</p>
            <p>${Selproduct.description}</p>
             <button class="AddCart">Add to cart</button>
        </div>
       </div>`

const addCartBtn = document.querySelector('.cart-icon');
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

addCartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeSidebar);
overlayCart.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSidebar();

});

       