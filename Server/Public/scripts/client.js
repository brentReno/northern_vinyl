
$(document).ready(function(){
  $('a').click(function(){
    console.log(this);
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    console.log(this);
    return false;
});
});
