$(document).ready(function() {
  $('.btn_chat').click(function() {
    $('.wrapper_messaging_popup').toggle();
  });
});
$(document).ready(function(){
  $('.cancel_messaging').click(function(){
    $('.wrapper_messaging_popup').hide();
  });
});



