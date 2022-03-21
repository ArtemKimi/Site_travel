//----------------------------------------------------------------------------------------
//<Burger-menu>
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});
//----------------------------------------------------------------------------------------
//<ibg>
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();
//----------------------------------------------------------------------------------------
//SLIDERS
if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpiont: 768,
			settings: {}
		}]
	});
}
//----------------------------------------------------------------------------------------