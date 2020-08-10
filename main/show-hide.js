
var $vp = $('.vp');
$vp.on('click', function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var $target = $(this).siblings('input[name*="password"]');
  if ($target.attr('type') == "password") {$target.attr('type','text');}
  else {$target.attr('type','password');}
});