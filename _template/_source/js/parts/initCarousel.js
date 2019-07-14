var initCarousel = function() {

	function initSlider() {
		$('.js-owl-slider').owlCarousel({
			loop: false,
			margin: 30,
			dots: true,
			items: 2,
			nav: true,
			autoHeight: true,
			onInitialize: beforeInit,
			onInitialized: callback,
		    onTranslate: draggedCallback,
		    onRefresh: draggedCallback,
			navText: ['<svg class="icon icon_slider-arrow"> <use xlink:href="svg/sprite/sprite.svg#slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="slider-arrow" width="100%" height="100%"><g clip-path="url(#aclip0)"><path d="M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z"></path></g></svg></use> </svg>',
			'<svg class="icon icon_slider-arrow"> <use xlink:href="svg/sprite/sprite.svg#slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="slider-arrow" width="100%" height="100%"><g clip-path="url(#aclip0)"><path d="M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z"></path></g></svg></use> </svg>'],
			responsive: {
				0:{
					items: 1,
					nav: false
				},
				600: {
					items: 2,
					nav: false
				},
				1024: {
					items: 1.5,
					nav: true
				}
			}	
		})
	}

	initSlider();

	function beforeInit(event) {
		var slider = event.target ? event.target : event;
		var main = $(slider).parent();
		if (main.hasClass('slider-filter') && main.length !== 0){
			$(slider).html('');
			var fake = main.find(".fake-slider");
			var filters = main.find(".js-filter-input");
			var fakeSlides = fake.find('.js-block-filter');
			fakeSlides.each(function(i,elem) {
				var active = true;
				filters.each(function(i,filter){
					var filterType = $(filter).data('type');
					var filterValue = $(filter).val();
					if (!$(elem).data(filterType).includes(filterValue)){
						active = false;
					}
				})
				if (active) {
					$(elem).clone().appendTo(slider);
				}
			})
		}
		main.fadeIn(500);
	}

	$('body').on('change','.js-filter-input',function(){
		var slider = $(this).closest('.slider-wrapper').find('.slider-element');
		slider.owlCarousel('destroy'); 
		slider.html('');
		if (slider.hasClass('js-owl-slider')) {
			initSlider();
		}
	})

	function callback(event) {
		var current = (event.item.index - event.relatedTarget._clones.length / 2 % event.item.count)+1;
		var size = Math.ceil(event.item.count/event.page.size);
		if (current <= 0) {
			current = event.item.count;
		}
		if (current > event.item.count) {
			current = 1;
		}
		console.log('Текущий слайд: ',current);
		console.log('Количество слайдов: ',event.item.count);
		console.log('Количество страниц: ',size);
	}

	function draggedCallback(event) {
		var current = (event.item.index - event.relatedTarget._clones.length / 2 % event.item.count)+1;
		var size = Math.ceil(event.item.count/event.page.size);
		if (current <= 0) {
			current = event.item.count;
		}
		if (current > event.item.count) {
			current = 1;
		}
		console.log('Текущий слайд: ',current);
		console.log('Количество слайдов: ',event.item.count);
		console.log('Количество страниц: ',size);
	}

}

export default initCarousel;