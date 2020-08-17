$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    
  });
});
$(document).ready(function(){
  $('.header-burger').click(function(event){
    $('.header-burger,.header__sidebar,.header__top').toggleClass('active');
    $('body').toggleClass('lock');
  })
});