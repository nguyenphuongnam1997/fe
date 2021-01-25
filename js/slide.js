$(document).ready(function(){
    $('.slide-auto').slick({
        speed : 7000,
        arrows: true,
        dots: false,
        // autoplay:true,
        // autoplaySpeed: 4000,
        prevArrow: $('.prev-arrow2'),
        nextArrow: $('.next-arrow2'),
    });
    var slider = $('.slide-auto');
      $('.pixoff-slider-navigation-anchor .slick-prev').on('click', function() {
        $(slider).slick('slickPrev');
      });
      $('.pixoff-slider-navigation-anchor .slick-next').on('click', function() {
        $(slider).slick('slickNext');
      });
});