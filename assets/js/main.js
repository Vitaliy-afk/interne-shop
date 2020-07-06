jQuery( document ).ready(function() {
    initBurgerMenu();
    initSlickSlider();
});


function initBurgerMenu() {
    jQuery('.burger').on('click', function(e){
        e.preventDefault()
        jQuery(this).toggleClass('open');
        jQuery('body').toggleClass('burger-active');
        
    });
  }


function initSlickSlider() {
  jQuery('.slider-block').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: 'ease',
    infinity: true,
      // vertical: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    rows: false
});

jQuery('.slider-assistant').slick({
  arrows: true,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  easing: 'ease',
  infinity: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  rows: false
})};



console.log(2232);
