$(document).ready(function(){
	/*Image slider*/
	$('.carousel').carousel();

	/*news ticker*/
	$(".news-ticker").bootstrapNews({
		newsPerPage: 3,
		navigation: true,
		autoplay: true,
		direction:'up', // up or down
		animationSpeed: 'normal',
		newsTickerInterval: 1000, //1 secs
		pauseOnHover: true,
		onStop: null,
		onPause: null,
		onReset: null,
		onPrev: null,
		onNext: null,
		onToDo: null
	});

	$('#social_t').hover(function(){$(this).tooltip('toggle');});
	$('#social_f').hover(function(){$(this).tooltip('toggle');});
	$('#social_g').hover(function(){$(this).tooltip('toggle');});
	$('#social_y').hover(function(){$(this).tooltip('toggle');});
	$('#flag_en').hover(function(){$(this).tooltip('toggle');});
	$('#flag_ar').hover(function(){$(this).tooltip('toggle');});

	$('#topnav').affix({
		offset: {
            top: 110
        }
	});
});