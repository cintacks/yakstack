$(document).ready(function() {

	//Add smooth scroll rel tag to all nav links
	$('nav a').attr('rel', 'm_PageScroll2id');

	//Add sign up button to top nav
	$('<li class="signup"><a href="/">Sign up for free</a></li>').appendTo('#menu-primary-navigation');

	//Wrap Who Uses section header with div for blue bar
	$('.who-uses-yakstack h2').each(function(){
		$(this).next('p').andSelf().wrapAll('<div class="bluebar"></div>');
	});


  (function() {
    var numSlides = $(".who-uses-yakstack .slide").length;
  
    var h = setInterval(function () {
      if ($(".who-uses-yakstack .slidebox").length  < numSlides) {
        $(".who-uses-yakstack .slide h3").each(function() {
          if(!$(this).parent().hasClass("slidebox")) {
			$(this).next('p').andSelf().wrapAll('<div class="slidebox"></div>');
          }
        });
      } else {
        clearInterval(h);
          $('<a href="/" class="btn">Get Started</div>').appendTo('.slidebox');
      }
    }, 100);
  })();

	//Wrap Benefits section header with div for grey bar
	$('.benefits h2').wrapAll('<div class="greybar"></div>');

	//Add full width functionality for embedded content rows
	$('<div class="bgbar"><div class="left column"><div id="leftcol"></div></div></div>').insertAfter('.benefits .row');
	$('.benefits .row').each(function(){
	$(this).next('.bgbar').andSelf().wrapAll('<div class="fullwidth"></div>');
	});

	//Add Benefits submenu
	$('<a href="#benefit1">4 Delivery Methods</a><a href="#benefit2">Timed Delivery</a><a href="#benefit3">Ease of Use</a><a href="#benefit4">Privacy</a>').appendTo('.benefits .greybar');
	$('.greybar a').attr('rel', 'm_PageScroll2id');


	//Move 'top' labeled block to header
	$('.top').appendTo('.page-header');

	//Makes slider img 100% of viewport width
	$slideimg = $(window).width();
	$( window ).resize(function() {
		if ($(window).width() > 1200) {
			$('.slide img').width($slideimg);
		}
		$('.who-uses-yakstack').width($slideimg);
	});

	//Makes Who Uses slider width of viewport
	$('.who-uses-yakstack').width($slideimg);


});
