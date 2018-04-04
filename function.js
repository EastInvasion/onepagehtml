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
    })


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


