var initDropFile = function(){

    function readURL(input) {
        var reader = new FileReader();
        var main = $(input).closest('.file');
        reader.onload = function (e) {
            main.find('.js-file-image').addClass('js-file-image-active').css('background-image', 'url('+e.target.result+')');
        }
        reader.readAsDataURL(input.files[0]);
    }

    $(".fileload").on('change',function(e){
        var maxSize = $(this).data('max-size');
        var main = $(this).closest('.file');
        var type_reg = /^image\/(jpg|png|jpeg|gif)$/;
        if (main.hasClass('file_result')) {
            var parent = main.closest('.js-file-parent');
        }
        if ($(this).get(0).files.length !== 0) {
            var fileType = $(this).get(0).files[0].type;
            if (this.files[0].size > maxSize || !type_reg.test(fileType)) {
                main.addClass('invalid-input');
                main.find('.js-file-image').removeClass('js-file-image-active').css('background-image', 'none');
                if (main.hasClass('file_result')) {
                    if (this.files[0].size > maxSize) {
                        parent.find('.js-form-result').fadeIn(0).html('Проверьте вес файла и попробуйте ещё раз');
                    } else {
                        parent.find('.js-form-result').fadeIn(0).html('Проверьте формат файла и попробуйте ещё раз');
                    }
                    parent.removeClass('js-file-parent_success');
                }
                this.value = '';
            } else {
                readURL(this);
                $(this).closest('.file').removeClass('invalid-file');
                parent.find('.js-form-result').fadeOut(0);
                parent.addClass('js-file-parent_success');
                main.removeClass('invalid-input');
            }
        } else {
            this.value = '';
            main.removeClass('invalid-input');
            main.find('.js-file-image').removeClass('js-file-image-active').css('background-image', 'none');
            if (main.hasClass('file_result')) {
                parent.find('.js-form-result').fadeOut(0);
            }
        }
    });

    $(".file").bind("drop", function(e) {
        var files = e.originalEvent.dataTransfer.files;
        processFileUpload(files,$(this)); 
        return false;
    });

    function processFileUpload(droppedFiles,elem) {
        if(droppedFiles.length > 0) {
            for(var f = 0; f < droppedFiles.length; f++) {
                elem.find("input[type='file']").prop("files", droppedFiles).trigger('change');
            }
        }
    }

    $("html").on("dragover", function(event) {
        event.preventDefault();  
        event.stopPropagation();
        $(this).addClass('dragging');
    });

    $("html").on("dragleave", function(event) {
        event.preventDefault();  
        event.stopPropagation();
        $(this).removeClass('dragging');
    });

    $("html").on("drop", function(event) {
        event.preventDefault();  
        event.stopPropagation();
    });
}

export default initDropFile;