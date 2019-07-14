var initSlick = function() {

	$('.slick').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4
				}
			}
		],
		prevArrow: '<div class="slick-prev"><svg class="icon icon_slider-arrow"> <use xlink:href="svg/sprite/sprite.svg#slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="slider-arrow" width="100%" height="100%"><g clip-path="url(#aclip0)"><path d="M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z"></path></g></svg></use> </svg></div>',
		nextArrow: '<div class="slick-next"><svg class="icon icon_slider-arrow"> <use xlink:href="svg/sprite/sprite.svg#slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="slider-arrow" width="100%" height="100%"><g clip-path="url(#aclip0)"><path d="M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z"></path></g></svg></use> </svg></div>'
	});

}

export default initSlick;