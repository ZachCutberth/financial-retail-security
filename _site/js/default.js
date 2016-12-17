$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#fff');
          $(".navbar-default .navbar-nav>li>a").css('color', '#000');
          $(".navbar-default .navbar-header>a").css('color', '#000');
          $("#nav-contact").css('padding-right', '350px');
          $(".navbar-brand").css('padding-left', '350px');
          $(".navbar-default .navbar-nav>li>a").css('padding-top', '30px');
          $(".navbar-brand").css('padding-top', '30px');
          $(".navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-header > a:hover, .navbar-default .navbar-haeder > a:focus").css('color', 'black');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
          $(".navbar-default .navbar-nav>li>a").css('color', '#fff');
          $(".navbar-default .navbar-header>a").css('color', '#fff');
          $("#nav-contact").css('padding-right', '50px');
          $(".navbar-brand").css('padding-left', '50px');
          $(".navbar-default .navbar-nav>li>a").css('padding-top', '50px');
          $(".navbar-brand").css('padding-top', '50px');
          $(".navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus, .navbar-default .navbar-header > a:hover, .navbar-default .navbar-haeder > a:focus").css('color', 'white');
       }
   });
    }
});