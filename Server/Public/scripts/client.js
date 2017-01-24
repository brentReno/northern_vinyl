
$(document).ready(function(){
  console.log("ready");
  var nav = $(".nav");
//check window width, and set scroll top for device width
  var scrollHeight;
  var windowSize = $(window).width();
  if (windowSize >1024){
    scrollHeight = 645;
  }
  if(windowSize <= 1024){
    scrollHeight = 590;
  }
  if(windowSize<= 375){
    scrollHeight = 227;
  }
  //nav bar will stick to top of window on scroll
  $(window).scroll(function(){
    if( $(this).scrollTop() > scrollHeight){
      nav.addClass(" nav-scrolled");
    } else{
      nav.removeClass(" nav-scrolled");
    }
  });
  //smooth scroll to section on nav click
  $(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
  //smooth scroll to top of page aka home
  $(".scroll-home").click(function(event){
    $('html,body').animate({scrollTop:$('body').offset().top}, 500);
  });
});
