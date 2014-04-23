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

	$('#flag_en').hover(function(){$(this).tooltip('toggle');});
	$('#flag_ar').hover(function(){$(this).tooltip('toggle');});
});