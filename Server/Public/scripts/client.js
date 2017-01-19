
$(document).ready(function(){
  console.log("ready");
  var nav = $(".nav");
  $(window).scroll(function(){
    if( $(this).scrollTop() > 650){
      console.log(650);
      nav.addClass(" nav-scrolled");
    } else{
      nav.removeClass(" nav-scrolled");
    }
  });
});
