var initMenu = function() {
    $('.js-slide-menu').on('click',function(e){
        $('.js-menu').toggleClass('js-menu-active');
        $(this).toggleClass('hamgurber-active');
    })
    $('.js-close-menu').on('click',function(e){
        $('.js-menu').removeClass('js-menu-active');
        $('.hamburger').removeClass('hamgurber-active');
    })
};

export default initMenu;