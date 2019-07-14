var initSelector = function() {

    $('body').on('click','.selector', function(e){
		if ($(window).width()>768 && !$(this).hasClass('selector_disabled')) {
			var $this = $(this);
			var set = 0;
			var list = $(this).find('.selector__list')
			if (list.css('display') == 'block'){
				set = 1;
			}
			e.stopPropagation();
			$('.selector .selector__list').fadeOut(0).removeClass('selector-picked');
			if (set){
				list.fadeOut(0);
			} else {
				list.fadeIn(0);
				var currHeight = $(window).height();
				var scrollTop = $(window).scrollTop();
				var elemTop = $this.offset().top;
				var distance = elemTop - scrollTop;
				if (distance>currHeight/1.5){
					list.css('top','initial');
					list.css('bottom','100%');
				} else {
					list.css('bottom','initial');
					list.css('top','100%');
				}
			}
		}
	})

	$('select').on('change',function(e) {
		var parent = $(this).parent();
		if (parent.hasClass('selector')) {
			if ($(this).val()) {
				parent.find('.js-selector-value').html($(this).val())
			} else {
				parent.find('.js-selector-value').html(parent.find('option[value=""]').text()+' ');
			}
		}
		if (parent.hasClass('selector_remote')) {
			$(parent.data('target')).val($(this).val()).trigger('change');
		}
		if ($(this).prop('selectedIndex')>0 && parent.hasClass("selector_designed")) {
			parent.addClass("selector_changed");
		} else {
			parent.removeClass("selector_changed");
		}
	})

	$('body').on('click','.selector__item',function(e){
		if ($(window).width()>768) {
			var parent = $(this).closest('.selector');
			parent.find('.js-selector-value').html($(this).text());
			var index = $(this).attr('data-value');
			parent.find('select').val(index).trigger('change');
			if ($(this).index()>0 && parent.hasClass("selector_designed")) {
				parent.addClass("selector_changed");
			} else {
				parent.removeClass("selector_changed");
			}
		}
	})

	$(document).click(function() {
		clear();
	})

	function clear(){
		$('.selector .selector__list').fadeOut(0);
		$('.wrapper').removeClass('container-shadow');
	}
}

export default initSelector;