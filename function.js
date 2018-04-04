$(window).scroll(function() 
	{
		var scrollTop = $(this).scrollTop();
		$('.header-bg').css('top', -(scrollTop + 4) + 'px')
	})

$(window).load(function() { $(".preload-wrapper").fadeOut("slow"); })

$(window).on('scroll', function() {
	if($(window).scrollTop()) 
		{
			$('nav').addClass('black');
		}else{
			$('nav').removeClass('black');
		}
	})