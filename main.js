$(function () {
  $('#carousel').carousel({
    interval: 3000,
    keyboard: false,
    pause: 'hover',
    ride: 'carousel',
    wrap: false
  });
});


$('.navigation-wrap, .shadow-layer').hide();
$('.navbar-btn').click(function(){
    $('.navigation-wrap, .shadow-layer').show();
});

$('.navigation-block-img').on('click', function(){
  $(this).closest('.navigation-wrap').hide();
  $("div.shadow-layer").hide();
});

$('.category-block-wrap').hide();
$('.class-unit-minus-3').hide();
$('.class-unit-plus-3').click(function(){
  $('.class-unit-plus-3').hide();
   $('.class-unit-minus-3').show();
    $('.category-block-wrap').show();
    $('.filter-wrap').css('top','450px');
});

$('.class-unit-minus-3').click(function(){
  $('.category-block-wrap').hide();
  $('.filter-wrap').css('top','254px');
   $('.class-unit-minus-3').hide();
   $('.class-unit-plus-3').show();
});


$('.basket-wrap, .shadow-layer').hide();
$('.carrinho').click(function(){
  $('.basket-wrap, .shadow-layer').show();
});

$('.total-continuar').click(function(){
  $('.basket-wrap, .shadow-layer').hide();
});