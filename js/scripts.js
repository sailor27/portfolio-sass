$(function() {

  $(document).ready(function(){
    const vph = window.innerHeight;
    console.log("height:", vph);
    $('.center').css({
      "height": `${vph}px` 
     })
  })

	//  $('.scroll-down').click (function() {
	// 	 console.log('🎉');
	// 	 $('html, body').animate({scrollTop: $(".featured").offset().top }, 'slow');
	// 	 return false;
  //  });
   

 });

