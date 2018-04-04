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
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


