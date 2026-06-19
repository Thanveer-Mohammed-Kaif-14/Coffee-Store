const cart = `
<div class="overlay-cart"></div>

<div class="cart-sidebar">

    <div class="cart-header">
        <h2>Your Cart</h2>
        <button class="close-cart">✖</button>
    </div>

    <div class="cartContent">
     
    </div>

    <div class="cart-footer">
        <h3>Total: </h3>
        <button>Checkout</button>
    </div>

</div>`

const sidedbar = document.querySelector('.cart-sided')
sidedbar.innerHTML = cart

const CartBtn = document.querySelector('.cart-icon')
const cartSidebar = document.querySelector('.cart-sidebar')
const overlayCart = document.querySelector('.overlay-cart')
const closeCart = document.querySelector('.close-cart')

function openCart() {
  cartSidebar.classList.add('open')
  overlayCart.classList.add('show')
  document.body.style.overflow = 'hidden'
}

function closeSidebar() {
  cartSidebar.classList.remove('open')
  overlayCart.classList.remove('show')
  document.body.style.overflow = 'auto'
}

CartBtn.addEventListener('click', openCart)
closeCart.addEventListener('click', closeSidebar)
overlayCart.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()
  closeSidebar()
})

const cartContent = document.querySelector('.cartContent')
const totalEl = document.querySelector('.cart-footer h3')

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []

  cartContent.innerHTML = cart
    .map((item) => {
      return `
      <div class="cart-item">

        <img src="${item.image}" width="80">

        <h4>${item.title}</h4>

        <p>₹${item.price}</p>

        <div class="quantity-box">

          <button
            class="minus"
            data-id="${item.id}">
            -
          </button>

          <span>${item.quantity}</span>

          <button
            class="plus"
            data-id="${item.id}">
            +
          </button>

        </div>

        <button
          class="remove"
          data-id="${item.id}">
          Remove
        </button>

      </div>
    `
    })
    .join('')

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  totalEl.textContent = `Total : ₹${total}`
}

displayCart()
updateCartCount()

document.addEventListener('click', (e) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []

  if (e.target.classList.contains('plus')) {
    const id = Number(e.target.dataset.id)

    const item = cart.find((product) => product.id === id)

    item.quantity++

    localStorage.setItem('cart', JSON.stringify(cart))

    displayCart()
    updateCartCount()
  }

  if (e.target.classList.contains('minus')) {
    const id = Number(e.target.dataset.id)

    const item = cart.find((product) => product.id === id)

    if (item.quantity > 1) {
      item.quantity--
    }

    localStorage.setItem('cart', JSON.stringify(cart))

    displayCart()
    updateCartCount()
  }

  if (e.target.classList.contains('remove')) {
    const id = Number(e.target.dataset.id)

    let cart = JSON.parse(localStorage.getItem('cart')) || []

    cart = cart.filter((item) => item.id !== id)

    localStorage.setItem('cart', JSON.stringify(cart))

    displayCart()
    updateCartCount()
  }
})

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || []

  let totalCount = 0

  cart.forEach((item) => {
    totalCount += item.quantity
  })

  const cartCount = document.querySelector('.cart-count')

  if (totalCount > 0) {
    cartCount.style.display = 'block'
    cartCount.textContent = totalCount
  } else {
    cartCount.style.display = 'none'
  }
}

export default cart
