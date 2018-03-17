$(function() {
	 $('.scroll-down').click (function() {
		 console.log('🎉');
		 $('html, body').animate({scrollTop: $(".footer").offset().top }, 'slow');
		 return false;
	 });

 });
