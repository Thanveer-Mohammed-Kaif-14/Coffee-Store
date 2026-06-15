const navbarEl = `<nav class="navbar">

        <div class="logo">
            <a href="#">
                <img src="images/Logo.png" alt="Logo">
            </a>
        </div>

        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>

        <div class="nav-icons">

            <a href="cart.html" class="cart-icon">
                <i class="fa-solid fa-bag-shopping"></i>
                <span class="cart-count">0</span>
            </a>

            <div class="hamburger" id="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

        </div>

    </nav>

    <div class="overlay" id="overlay"></div>
    <div class="mobile-menu" id="mobileMenu">
        <a href="index.html">Home</a>
        <a href="Shop.html">Shop</a>
        <a href="blog.html">Blog</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
    </div>`

    const navbarcon = document.querySelector('.navbar')
navbarcon.innerHTML = navbarEl;

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
   if(window.scrollY > 90){
    navbar.classList.add('navbg')
   }
   else{
    navbar.classList.remove('navbg')
   }
})
export default navbarEl;