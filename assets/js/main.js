jQuery( document ).ready(function() {
    initBurgerMenu();
  });


function initBurgerMenu() {
    jQuery('.burger').on('click', function(e){
        e.preventDefault()
        jQuery(this).toggleClass('open');
        jQuery('body').toggleClass('burger-active');
        
    });
  }

console.log(2232);
