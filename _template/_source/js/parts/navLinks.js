var navLinks = function() {
    $('.js-nav-link').on('click',function(){
        $('html, body').animate({ scrollTop: $($(this).data('target')).offset().top }, 500);
    })
}

export default navLinks;