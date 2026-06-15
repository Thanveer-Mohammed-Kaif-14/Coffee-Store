import navbarEl from "./navbar.js";
import { fetchCoffee } from "./Fetchproduct.js";

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
<div class="quantity">
    <button class="minus">-</button>
    <input type="number" value="1" min="1" class="inputvount">
    <button class="plus">+</button>
</div>

             <button class="AddCart">Add to cart</button>
        </div>
       </div>`

       let inputCount = document.querySelector('.inputvount');
    let count = Number(inputCount.value);
       
       let minus = document.querySelector('.minus')
       let add = document.querySelector('.plus');


       

       add.addEventListener('click',()=>{
      
    let count = Number(inputCount.value);

    count++;

    inputCount.value = count;
       })

        minus.addEventListener('click',()=>{
        let count = Number(inputCount.value);

    if(count > 0){
        count--;
    }

    inputCount.value = count;

        
       })
       

       