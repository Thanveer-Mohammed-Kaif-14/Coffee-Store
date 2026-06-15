import { fetchCoffee } from "./Fetchproduct.js";

const Product = await fetchCoffee();
console.log(Product);

const relatedProducts = Product.slice(5,12);

export const relatedProduct = () => {
    return relatedProducts.map((item) => {
        return `
             <a href="product-detail.html?id=${item.id}">  <div class="related-card">
            <img src="${item.image}" alt="" class="feat-img">
         <div class="related-con">
               <div class="related-title">
                <h4>${item.title}</h4>
                <h4>&#8377; ${item.price}</h4>
            </div>
            <div class="related-btnstar">
                <button>View Details</button>
                <img src="/images/Home-Images/review icon.png" alt="">
            </div>
         </div>
        </div></a>
        `;
    }).join('');
}

document.querySelector('.related-products').innerHTML = relatedProduct()

$('.related-products').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});