var searchAccess = function() {

	var forms = $('.js-search-access');

	function checkAccess() {
		forms.each(function(i,e){
			console.log('l')
			var input = $(e).find('.js-target');
			var submit = $(e).find("button[type='submit']");
			if (!input.val()) {
				submit.css('opacity','.4');
			} else {
				submit.css('opacity','1');
			}
		})
	}

	checkAccess();

	forms.on('input',checkAccess);
}

export default searchAccess;