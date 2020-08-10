// js when click topic_favourite_item show favourite-parent

$(document).ready(function () {
	$('.list-group-item.topic_favourite_item').on('click', function (event) {
        event.stopPropagation();
        $(this).toggleClass('active');
    });

    
}); 
$(document).ready(function () {

    $('.cls-favourite-0').on('click', function (event) {
        event.stopPropagation();
        $('.favourite-0-parent').toggle();
    });

    
    $('.cls-favourite-1').on('click', function (event) {
        event.stopPropagation();
        $('.favourite-1-parent').toggle();
    });

    
    $('.cls-favourite-2').on('click', function (event) {
        event.stopPropagation();
        $('.favourite-2-parent').toggle();
    });

    
    $('.cls-favourite-3').on('click', function (event) {
        event.stopPropagation();
        $('.favourite-3-parent').toggle();
    });

    
    $('.cls-favourite-4').on('click', function (event) {
        event.stopPropagation();
        $('.favourite-4-parent').toggle();
    });

    
    $('.cls-favourite-5').on('click', function (event) {
        event.stopPropagation();
        $('.favourite-5-parent').toggle();
    });

    
    $('.cls-favourite-6').on('click', function (event) {
        event.stopPropagation();
        $('.favourite-6-parent').toggle();
    });

    
    $('.cls-favourite-7').on('click', function (event) {
        event.stopPropagation();
        $('.favourite-7-parent').toggle();
    });

    

}); 
