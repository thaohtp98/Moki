$(document).ready(function(){
    $('.count').prop('disabled', true);
    	$(document).on('click','.qty .icon-plus',function(){
    	$('.count').val(parseInt($('.count').val()) + 1 );
    });
$(document).on('click','.qty .icon-minus',function(){
	$('.count').val(parseInt($('.count').val()) - 1 );
		if ($('.count').val() == 0) {
			$('.count').val(1);
		}
	});
});