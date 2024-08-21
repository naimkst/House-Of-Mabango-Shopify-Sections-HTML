(function ($) {

  "use strict";


  /*------------------------------------------
     product slider
  -------------------------------------------*/
  if ($(".product-active").length) {
      $(".product-active").owlCarousel({
          autoplay: true,
          smartSpeed: 300,
          margin: 30,
          loop: true,
          autoplayHoverPause: true,
          dots: true,
          nav: true,
          responsive: {
              0: {
                  items: 1,
              },

              350: {
                  items: 1,
              },
              500: {
                  items: 2,
              },

              768: {
                  items: 3,
              },
              992: {
                  items: 3,
              },

              1200: {
                  items: 3
              },

              1400: {
                  items: 3
              },

          }
      });
  }


  $(document).ready(function(){
    $('.tab-link').click(function(){
      var tabID = $(this).attr('data-tab');
  
      $('.tab-link').removeClass('active');
      $('.tab-content').removeClass('active');
  
      $(this).addClass('active');
      $("#" + tabID).addClass('active');
    });
  
    $('.tab-link:first').click();
  });

})(window.jQuery);

const openBtns = document.querySelectorAll('.openBtn');
const closeBtn = document.querySelector('.newsletter-close-btn');
const myElement = document.querySelector('.newsletter-popup-area-section');

openBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    myElement.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  myElement.classList.remove('active');
});

