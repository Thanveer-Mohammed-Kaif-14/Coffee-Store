const testimonals = `<h1>What clients say about us</h1>
      <div class="coffee-slider">
        <div class="test-card">
          <h1><i class="fa-solid fa-quote-left"></i></h1>
          <p>
            The Coffee UI Kits completely transformed my website. They are easy
            to use and helped me attract more customers online. Highly recommend
            it to anyone in the coffee business!
          </p>

          <img src="/images/Home-Images/test-img-1.png" alt="" />

          <h2>Mohammed Kaif</h2>
        </div>
        <div class="test-card">
          <h1><i class="fa-solid fa-quote-left"></i></h1>
          <p>
            The Coffee UI Kits completely transformed my website. They are easy
            to use and helped me attract more customers online. Highly recommend
            it to anyone in the coffee business!
          </p>

          <img src="/images/Home-Images/test-img-1.png" alt="" />

          <h2>Mohammed Kaif</h2>
        </div>
        <div class="test-card">
          <h1><i class="fa-solid fa-quote-left"></i></h1>
          <p>
            The Coffee UI Kits completely transformed my website. They are easy
            to use and helped me attract more customers online. Highly recommend
            it to anyone in the coffee business!
          </p>

          <img src="/images/Home-Images/test-img-1.png" alt="" />

          <h2>Mohammed Kaif</h2>
        </div>
        <div class="test-card">
          <h1><i class="fa-solid fa-quote-left"></i></h1>
          <p>
            The Coffee UI Kits completely transformed my website. They are easy
            to use and helped me attract more customers online. Highly recommend
            it to anyone in the coffee business!
          </p>

          <img src="/images/Home-Images/test-img-1.png" alt="" />

          <h2>Mohammed Kaif</h2>
        </div>
      </div>`

const testiSection = document.querySelector('.testimonals')
testiSection.innerHTML = testimonals

$('.coffee-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0px',

  responsive: [
    {
      breakpoint: 992, // Tablet
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768, // Mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 480, // Small Mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
});

export default testimonals
