// smooth scrolling
(function($) {
    $("a.nav-link").click(function(){
            $("a.nav-link").css("background-color", "");
            $(this).css("background-color", "#222d5a");
        });
})(jQuery);

// sticky header
(function($) {
    $(window).scroll(function() {
           if ($(this).scrollTop() > 100){  
              $('.main-menu').addClass("sticky-top");
            }
            else{
              $('.main-menu').removeClass("sticky-top");
            }
          });
})(jQuery);

// image filter button
(function($) {
    $("li.filter-button-onclick").click(function(){
            $("li.filter-button-onclick").css("background-color", "");
            $(this).css("background-color", "#0a184c");
        });
})(jQuery);

//isotpoe
(function($){
var $grid = $('.grid').isotope({
});
// filter items on button click
$('.image-filter').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

})(jQuery);


//owl carousel
(function($) {
    $('.testimonial-carousel').owlCarousel({
            autoplay: true,
            loop:true,
            margin:10,
            nav:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:2,
                }
            }
        })
})(jQuery);

