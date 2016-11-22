console.log("client.js working");

$(document).ready(function(){
  console.log("JS is Ready");
  // smooth-scroll
  $('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });

    return false;
});
});
