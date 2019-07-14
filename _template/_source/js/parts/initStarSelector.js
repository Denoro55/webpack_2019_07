var initStarSelector = function(){
	$('body').on('click','.js-set-star',function(){
		var currIndex = $(this).index();
		var input = $(this).closest('.js-setstar').find('.setstar-input');
		var stars = $(this).closest('.js-setstar').find('.js-set-star');
		input.val(currIndex+1);
		stars.each(function(i,elem){
			if (i<=currIndex){
				$(elem).addClass('star-selector__item_active')
			} else {
				$(elem).removeClass('star-selector__item_active')
			}
		})
	})
}

export default initStarSelector;