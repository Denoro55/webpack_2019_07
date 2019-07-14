var initTabs = function(){
	$('.tab-menu__item').on('click',function(e){
		var $this = $(this);
		var menu = $this.closest('.tab-menu');
		var target = $(menu.attr('data-toggle'));
		if ($this.data('slide') !== undefined) {
			var targetIndex = $this.data('item');
		} else {
			var targetIndex = $this.index();
		}
		menu.find('.tab-menu__item').removeClass('tab-menu__item_active');
		$this.addClass('tab-menu__item_active');
		target.find('.tabber__item').removeClass('tabber__item_active')
		target.find('.tabber__item').eq(targetIndex).addClass('tabber__item_active')
	})
}

export default initTabs;