$(document).ready(function(){

$('.top').click(function(){
  $('html,body').animate({scrollTop:0},1500);
})

  // concept slide start

var active_slide = 0,
    dom_slides = $('.concept ul li'),
    num_slides = dom_slides.length;

    $('.concept ul li:first-child').addClass('active');
        var start = setInterval(function(){
          ++active_slide;
            dom_slides.removeClass('active').eq(active_slide).addClass('active');
            console.log(active_slide);
          if(active_slide==4){
            active_slide=1;
              dom_slides.removeClass('active').eq(active_slide).addClass('active');
          }
        },3000)
})
