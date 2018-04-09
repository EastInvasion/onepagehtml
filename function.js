


//parallax
$(window).scroll(function() 
    {
        var scrollTop = $(this).scrollTop();
        $('.header-bg').css('top', -(scrollTop + 4) + 'px')
    });

//preload
$(window).load(function() { $(".preload-wrapper").fadeOut("slow"); });


//stickynavbar
    $(window).on('scroll', function() {
        if($(window).scrollTop()) 
            {
                $('nav').addClass('black');
            }else{
                $('nav').removeClass('black');
            }
        });


    $(document).ready(function(){
        $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
         });
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
            $('nav').addClass('black');
        }else{
            $('nav').removeClass('black');
        }
    });

//smoothscroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



