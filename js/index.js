$(document).ready(function(){

  // concept slide start

  var active_slide = 0,
      dom_slides = $('.concept ul li img'),
      num_slides = dom_slides.length;
    console.log(num_slides);
    //  slide start
  var start = setInterval(function() {

    // 슬라이드
    ++active_slide;
    dom_slides.removeClass('active').eq(active_slide).addClass('active');
    if(active_slide==4){
      active_slide=1;
        dom_slides.removeClass('active').eq(active_slide).addClass('active');
    }

})

})
