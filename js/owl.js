$(document).ready(function(){
$('.pixoff-slider-container').slick({
  dots: false,
  infinite: false,
  speed: 300,
  // autoplay:true,
  // autoplaySpeed: 4000,
  slidesToShow: 4,
  slidesToScroll: 4,
  // arrows: true,
  // prevArrow: $('.prev-arrow'),
  // nextArrow: $('.next-arrow'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  var slider = $('.pixoff-slider-container');
    $('.pixoff-slider-navigation-anchor .slick-prev').on('click', function() {
      $(slider).slick('slickPrev');
    });
    $('.pixoff-slider-navigation-anchor .slick-next').on('click', function() {
      $(slider).slick('slickNext');
    });
    $('.pixoff-slider-container2').slick({
      dots: false,
      infinite: false,
      speed: 300,
      autoplay:true,
      autoplaySpeed: 4000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      // prevArrow: $('.prev-arrow'),
      // nextArrow: $('.next-arrow'),
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 380,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
      var slider = $('.pixoff-slider-container');
        $('.pixoff-slider-navigation-anchor .slick-prev').on('click', function() {
          $(slider).slick('slickPrev');
        });
        $('.pixoff-slider-navigation-anchor .slick-next').on('click', function() {
          $(slider).slick('slickNext');
        });
})
