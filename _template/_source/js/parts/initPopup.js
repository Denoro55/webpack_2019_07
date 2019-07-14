var initPopup = function() {

    var down = false;

    $('.js-call-popup').on('click',function(e){
        e.preventDefault();
        $('html').css('overflow','hidden');
        var target = $(this).attr('data-target');
        var popup = $('#'+target);
        var block = popup.find('.popup');
        popup.fadeIn(500);
        block.addClass('popup-anim');
    });

    $('.js-popup-close').on('click',function(){
        var popups = $('.popup-wrapper');
        var popup = $(this).closest('.popup-wrapper');
        popup.fadeOut(500);
        $(this).closest('.popup').removeClass('popup-anim');
        var overflow = true;
        popups.each(function(i,e){
            if ($(e).css('display')=='block' && $(e).attr('id') !== popup.attr('id')) {
                overflow = false;
            }
        })
        if (overflow) {
            $('html').css('overflow','');
        }
    });

    $(document).mousedown(function (e){
       var div = $(".popup");
        if (!div.is(e.target) && div.has(e.target).length != 0) {
            down = true;
        }
    });

    $(document).mouseup(function (e){
        var div = $(".popup");
        var div2 = $('.ui-datepicker');
        console.log(div2)
        console.log(!$('.ui-datepicker-div').is(e.target),$('.ui-datepicker-div').has(e.target).length === 0)
        if (!div.is(e.target) && div.has(e.target).length === 0 && !down && e.pageX+18 < $(window).width() 
            && !div2.is(e.target) && div2.has(e.target).length === 0) {
            $('html').css('overflow','');
            $(div).removeClass('popup-anim');
            var popup = $('.popup-wrapper');
            popup.fadeOut(500);
        }
        down = false;
    });

};

export default initPopup;