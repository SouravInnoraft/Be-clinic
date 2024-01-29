$(document).ready(function () {
     $(".fa-magnifying-glass").click(function(){
        $(".search").slideToggle();
     })
     $(".nav-items li").mouseover(function () { 
          $(".services").slideDown(1000);
     });
     $(".banner").mouseover(function () { 
          $(".services").slideUp(1000);
     });
     var aTop = $('.header').height();
     $(window).scroll(function () {
        if ($(this).scrollTop() >= aTop) {
            $(".nav").css({
                "backgroundColor": "#2a93c9",
                "position":"fixed",
                "top":"0"
            })
        } else if ($(window).scrollTop() <= aTop) {
            $(".nav").css({
                "backgroundColor": "rgba(102, 102, 102, 0.285)",
                "position":"absolute",
                "top":"45px"
            })
        }
    });
    
     
});
