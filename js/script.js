$(document).ready(function(){


  // AOS
  AOS.init();
  var ww = $(window).width();
  var hh = $(window).height();
  
  // 가로스크롤
    if(ww > 720) {
      $(window).scroll(function(){
        var my = $(window).scrollTop();
        var sec2 = $('#section-container').offset().top;
        var sec3= $('.content.store').offset().top;
  
        if(my < sec2 && ww > 720){
          skrollr.init().destroy();
        }
        
        else if(my >= sec2 && my < sec3) {
          skrollr.init();
          $('#wrap').css({
              position: 'fixed',
              top: 0,
              left: 0
          })
        }
      });
    }
  
   

  // 헤더
  





  // 모바일 헤더
  $('#trigger').click(function(){
    // var tab_id = $(this).attr('data-tab');
    
    if($('#trigger').hasClass("active")){
      $('#trigger').removeClass('active');
    }else{
      $("#trigger").addClass('active');
    }
  });




  // 스와이퍼
  

  var swiper = new Swiper(".mySwiper.tab", {
    // width: 350,
    // freeMode: true,
      // loopFillGroupWithBlank: true,
      slidesPerView: "auto",
      scrollbar : {
        el : '.swiper-scrollbar',
        draggable: true,
      }
  });

 

  var swiper = new Swiper(".mySwiper.auto", {
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    slidesPerGroup:1,
  // initialSlide:1,
    speed:1000,
    loop: true,
    loopAdditionalSlides: 1,
    loopFillGroupWithBlank: true,
     // 슬라이드 시작 부분 여백.
    breakpoints: {
      200: {
        slidesOffsetBefore : 0
      },
      720: {
        slidesOffsetBefore : 40
      }
    }
    
      
    
  });  

  // 탭
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });






 
      

}); /* end */