import navbarEl from './navbar.js'
import { fetchCoffee } from './FetchProduct.js'
import cart from './cart.js'
import { footer } from './Footer.js'

const allproducts = await fetchCoffee()

const productContainer = document.querySelector('.all-product')
const filterButtons = document.querySelectorAll('.filt-btn button')
const inputcon = document.querySelector('.input')

function display(data) {
  productContainer.innerHTML = data
    .map(
      (item) => `
    <a href="product-detail.html?id=${item.id}">   <div class="product-card">
            <img src="${item.image}" alt="" class="prod-img">
         <div class="product-con">
               <div class="prod-title">
                <h4>${item.title}</h4>
                <h4>&#8377; ${item.price}</h4>
            </div>
            <div class="btnstar">
                <button>View Detail</button>
                <img src="/images/Home-Images/review icon.png" alt="">
            </div>
         </div>
        </div>
        </a>
    `,
    )
    .join('')
}

display(allproducts)

filterButtons.forEach((btns) => {
  btns.addEventListener('click', () => {
    // Remove active from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove('active')
    })

    // Add active to clicked button
    btns.classList.add('active')

    const category = btns.dataset.category
    if (category === 'all') {
      display(allproducts)
      return
    }
    const filteredProducts = allproducts.filter((item) => {
      return item.category === category
    })
    display(filteredProducts)
  })
})

inputcon.addEventListener('keyup', (e) => {
  const word = e.currentTarget.value.toLowerCase()

  const searchword = allproducts.filter((item) =>
    item.title.toLowerCase().includes(word),
  )

  display(searchword)
})

const params = new URLSearchParams(window.location.search)
const id = Number(params.get('id'))
console.log(id)

const priceRadios = document.querySelectorAll('input[name="price"]')
priceRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    const value = radio.value

    let products = allproducts

    if (value === 'low') {
      products = allproducts.filter((item) => item.price < 200)
    }

    if (value === 'medium') {
      products = allproducts.filter(
        (item) => item.price >= 200 && item.price <= 300,
      )
    }

    if (value === 'high') {
      products = allproducts.filter((item) => item.price > 300)
    }

    display(products)
  })
})
