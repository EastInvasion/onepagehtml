//parallax
$(window).scroll(function() 
	{
		var scrollTop = $(this).scrollTop();
		$('.header-bg').css('top', -(scrollTop + 4) + 'px')
	})

//preload
$(window).load(function() { $(".preload-wrapper").fadeOut("slow"); })


//stickynavbar
$(window).on('scroll', function() {
	if($(window).scrollTop()) 
		{
			$('nav').addClass('black');
		}else{
			$('nav').removeClass('black');
		}
	})


// Menu-toggle button

      $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })
