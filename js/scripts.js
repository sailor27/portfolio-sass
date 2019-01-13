$(function() {

  $(document).ready(function(){
    const vph = window.innerHeight;
    console.log("height:", vph);
    $('.center').css({
      "height": `${vph}px` 
     })
  })

	 $('.scroll-down').click (function() {
     console.log('🎉');
    //  $('.featured').css({
    //    "display": "flex"
    //  });
     $('html, body').animate({ scrollTop: $(".featured").offset().top.innerHeight}, 'slow');
     console.log(top.innerHeight)
		 return false;
   });
   

 });

