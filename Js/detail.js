import navbarEl from './navbar.js'
import { fetchCoffee } from './Fetchproduct.js'
import cart from './cart.js'
import { footer } from './Footer.js'

const params = new URLSearchParams(window.location.search)
const id = Number(params.get('id'))

const product = await fetchCoffee()

const Selproduct = product.find((item) => item.id === id)

const detailContainer = document.querySelector('.product-details')

detailContainer.innerHTML = `  <div class="details">
         <div class="img-container-detail" data-aos="fade-right">
         <img src="${Selproduct.image}" alt="">
         </div>
        <div class="prod-detail" data-aos="fade-left">
            <h1>${Selproduct.title}</h1>
        <h3>&#8377; ${Selproduct.price}</h3>
                <p class="ingri">Ingredients: ${Selproduct.ingredients}</p>
            <p>${Selproduct.description}</p>
             <button class="AddCart">Add to cart</button>
        </div>
       </div>`

const addToCartBtn = document.querySelector('.AddCart')

addToCartBtn.addEventListener('click', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []

  const existing = cart.find((item) => item.id === Selproduct.id)

  if (existing) {
    existing.quantity++
  } else {
    cart.push({
      id: Selproduct.id,
      title: Selproduct.title,
      image: Selproduct.image,
      price: Selproduct.price,
      quantity: 1,
    })
  }

  localStorage.setItem('cart', JSON.stringify(cart))

  location.reload()
})
