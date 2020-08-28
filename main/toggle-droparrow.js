$('.icon_down').on('click', function() {
    
    $(this).toggleClass('icon-up-arrow-1');
   
    $(this).closest('.title_menu_eat').siblings('.list_menu_eat').slideToggle('fast', function() {
        $(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
    });
    
    
});
$('.btn_watch_food').on('click', function() {
    
    $('.row_watch_food').toggleClass('is-hidden');
   
    
    
    
});
