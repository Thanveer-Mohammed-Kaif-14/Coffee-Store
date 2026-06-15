import { fetchCoffee } from "./Fetchproduct.js";

const Product = await fetchCoffee();

const featuredProducts = Product.slice(0,3);

export const featuredProductDisplay = () => {
  return featuredProducts
    .map((item) =>{
        return `
           <a href="product-detail.html?id=${item.id}">  <div class="feautred-card">
            <img src="${item.image}" alt="" class="feat-img">
         <div class="featured-con">
               <div class="featured-title">
                <h4>${item.title}</h4>
                <h4>&#8377; ${item.price}</h4>
            </div>
            <div class="btnstar">
                <button>View Details</button>
                <img src="/images/Home-Images/review icon.png" alt="">
            </div>
         </div>
        </div></a>
    `})
    .join("");
};

