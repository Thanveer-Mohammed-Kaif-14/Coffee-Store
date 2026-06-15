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

       