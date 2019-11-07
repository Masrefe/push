(function ($) {
	"use strict";
    
		var owl = $('.slide-wrapper');
		owl.owlCarousel({
			items:1,
			loop:true,
			dots:true
		});

	  $.stellar({
			horizontalScrolling: false,
			verticalOffset: 40
		});

	  $('.zoom').elevateZoom({
	  	zoomType:"inner",
	  	cursor:"crosshair"
	  });
	  $('select').niceSelect();
	  
}(jQuery));	

 

