$(function(){
	$(function() {
	    $(window).on('scroll', function() {
	        if($(window).scrollTop() > 150) {
	            // $(".menu_top").addClass("background_header");
	        } else {
	            //remove the background property so it comes transparent again (defined in your css)
	           // $(".menu_top").removeClass("background_header");
	        }
	    });
	});
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > 250) {				
			$('.btn_ontop').addClass('display');
		}else if (scroll <=100){
			$('.btn_ontop').removeClass('display');
		}
		
	})
	
 	$('.btn_ontop').click(function(){
 		$('html,body').animate({'scrollTop': 0}, 1500);
 		return false;

 	});
 	
}) 
