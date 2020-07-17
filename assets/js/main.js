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
    rows: false,
    swipe: true,
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

const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';


const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// update dash offset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength / height);

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onscroll
window.addEventListener('scroll', () => {
  updateDashoffset();

  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});

// click
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


console.log(2232);
