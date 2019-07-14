import {isFormValidate} from './initValidate';

/**
 * init
 */
const initSendForm = () =>
{
    $('body').on('submit', 'form', (e) => sendForm(e));
};

/**
 * Валидация перед отправкой формы
 *
 * @param {object} e event
 */
const sendForm = (e) =>
{
    let t = $(e.target);
    if (!isFormValidate(t)) {
        console.log('invalid form')
        e.preventDefault();
        e.stopPropagation();
        $('.js-form-result', t).text('Заполните все поля');
        $('.invalid-input', t).first().focus();
    } else if (t.hasClass('js-ajax-form')) {
        e.preventDefault();
        e.stopPropagation();
        t.addClass('load');
        axios.post(t.attr('action'), new FormData(t.get(0))).then(response =>
        {
            successResponse(response.data, t);
            t.removeClass('load');
        }).catch(error =>
        {
            errorResponse(error.response.data, t);
            t.removeClass('load');
        });
    } else {
        var uploadFormData = new FormData(t.get(0));
        for (var [key, value] of uploadFormData.entries()) { // не работает в IE
            console.log(key, value);
        }
        e.preventDefault();
        e.stopPropagation();
    }
};

/**
 * fail callback
 *
 * @param data
 * @param form
 */
const errorResponse = (data, form) =>
{
    if (isObject(data.errors)) {
        $('.js-form-result', form).text('');
        for (let i in data.errors) {
            $('[name="' + i + '"]', form).addClass('invalid-input');
            $('.js-form-result', form).append(data.errors[i].join('</br>'));
        }
        form.addClass('form-invalid');
    } else {
        $('.js-form-result', form).text(data.message);
        form.addClass('form-invalid');
    }
};

/**
 * callback success
 *
 * @param data
 * @param form
 */
const successResponse = (data, form) =>
{
    if (data.action === 'modal') {
        openModal(data.modal);
    } else if (data.action === 'reload') {
        location.reload();
    } else if (data.action === 'navigate') {
        location.href = data.link;
    } else if (data.action === 'send') {
        form.html('<div class="form__message form__message_success">' + data.content + '</div>');
        if (data.goal) {
            sendTarget(data.goal);
        }
    } else if (data.action === 'load') {
        openModal(data.modal);
        $('#popup-check-register button[type="reset"]').click()
        $('.section-calendar .calendar__table').html(data.content)
    }
};

export default initSendForm;