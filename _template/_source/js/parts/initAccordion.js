var initAccordion = function() {
	$('.js-slide-accordion').on('click',function(e){
		if (!$(this).hasClass('js-slide-mobile') || $(window).width()<=768) {
			var item = $(this).closest('.js-accordion-item');
			item.find('.js-accordion-content').slideToggle(300);
			item.toggleClass('js-accordion-item-active');
		}
	})
}

export default initAccordion;