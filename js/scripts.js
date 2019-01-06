$(function() {
	 $('.scroll-down').click (function() {
		 console.log('🎉');
		 $('html, body').animate({scrollTop: $(".featured").offset().top }, 'slow');
		 return false;
	 });

 });

