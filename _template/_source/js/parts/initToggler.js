var initToggler = function() {
    $('.js-slide-toggle').on('click',function(){
        $('.js-content').slideToggle(250);
        $(this).toggleClass('arrower_active');
    })
}

export default initToggler;