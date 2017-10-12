// Function qui scroll la page
jQuery(document).ready(function ($) {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 32
				}, 1000);
				return false;
			}
		}
	});
});

// Permet de fixer la Nav-bar
jQuery(document).ready(function ($) {
	$(window).scroll(function(){
		var scrollTop = 142;
		if($(window).scrollTop() >= scrollTop){
			$('nav').css({
				position : 'fixed',
				top : '0'
			});
		}
		if($(window).scrollTop() < scrollTop){
			$('nav').removeAttr('style');
		}
	})

  // Permet d'activer la Nav-bar
  $('nav ul li a').click(function(){
         $('nav ul li a').removeClass('active');
         $(this).addClass('active');
    });

})

// permet d'ajouter un slide Slideshow
jQuery(document).ready(function ($) {

	setInterval(function(){
		$('.Slideshow ul').animate({marginLeft:-350}, 800, function(){
			$(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
		})
	}, 3500);
})



// javascript Api Citation poétique
jQuery(document).ready(function ($) {
	$.get("https://breaking-bad-quotes.herokuapp.com/v1/quotes", function(data) {
	    var citation = data.author;
	    $('body').append('div .citation' + citation + 'div .citation');
			debugger;
	})


})
