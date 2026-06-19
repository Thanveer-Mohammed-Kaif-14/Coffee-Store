export const footer = `    <div class="footer-con">
        <div class="list-1">
          <img src="/images/Logo.png" alt="" />
          <p>123, Pall Mall, USA california</p>
          <p>Email:hello@coffee.com</p>
          <p>Phone: 012 34 78940</p>
        </div>
        <div class="list-2">
          <h2>Quick Links</h2>
          <p>Privacy policy</p>
          <p>Disclaimer</p>
          <p>Food Menu</p>
          <p>Gallery</p>
          <p>About us</p>
        </div>
        <div class="list-3">
          <h2>Follow Us</h2>
          <p>Facebook</p>
          <p>twitter</p>
          <p>instagram</p>
          <p>youtube</p>
        </div>
        <div class="list-4">
          <h2>Join our News letter</h2>
          <input type="email" name="" id="" placeholder="email" />
          <button>Subscribe</button>
        </div>
      </div>`

const footerEl = document.querySelector('.footer')
footerEl.innerHTML = footer
