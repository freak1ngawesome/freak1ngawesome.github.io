$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 800,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive:[
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },{
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
$(document).ready(function(){
  $('.header-burger').click(function(event){
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});