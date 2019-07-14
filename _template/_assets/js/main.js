/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/_template/_source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./src/_template/_source/js/main.js":
/*!******************************************!*\
  !*** ./src/_template/_source/js/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/mask */ \"./src/_template/_source/js/parts/mask.js\");\n/* harmony import */ var _parts_initMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/initMenu */ \"./src/_template/_source/js/parts/initMenu.js\");\n/* harmony import */ var _parts_initPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/initPopup */ \"./src/_template/_source/js/parts/initPopup.js\");\n/* harmony import */ var _parts_navLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/navLinks */ \"./src/_template/_source/js/parts/navLinks.js\");\n/* harmony import */ var _parts_initCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/initCarousel */ \"./src/_template/_source/js/parts/initCarousel.js\");\n/* harmony import */ var _parts_initSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/initSelector */ \"./src/_template/_source/js/parts/initSelector.js\");\n/* harmony import */ var _parts_initMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/initMap */ \"./src/_template/_source/js/parts/initMap.js\");\n/* harmony import */ var _parts_initToggler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/initToggler */ \"./src/_template/_source/js/parts/initToggler.js\");\n/* harmony import */ var _parts_initStarSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/initStarSelector */ \"./src/_template/_source/js/parts/initStarSelector.js\");\n/* harmony import */ var _parts_initTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/initTabs */ \"./src/_template/_source/js/parts/initTabs.js\");\n/* harmony import */ var _parts_form_sendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parts/form/sendForm */ \"./src/_template/_source/js/parts/form/sendForm.js\");\n/* harmony import */ var _parts_form_initDropFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parts/form/initDropFile */ \"./src/_template/_source/js/parts/form/initDropFile.js\");\n/* harmony import */ var _parts_initAccordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parts/initAccordion */ \"./src/_template/_source/js/parts/initAccordion.js\");\n/* harmony import */ var _parts_searchAccess__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parts/searchAccess */ \"./src/_template/_source/js/parts/searchAccess.js\");\n/* harmony import */ var _parts_initSlick__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parts/initSlick */ \"./src/_template/_source/js/parts/initSlick.js\");\n/* harmony import */ var _parts_form_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parts/form/datepicker */ \"./src/_template/_source/js/parts/form/datepicker.js\");\n/* harmony import */ var _parts_iePolyfill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parts/iePolyfill */ \"./src/_template/_source/js/parts/iePolyfill.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$(function () {\n  Object(_parts_initPopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_parts_form_sendForm__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n  Object(_parts_form_initDropFile__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n  Object(_parts_initAccordion__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n  Object(_parts_searchAccess__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\n  Object(_parts_form_datepicker__WEBPACK_IMPORTED_MODULE_15__[\"default\"])();\n  Object(_parts_initSlick__WEBPACK_IMPORTED_MODULE_14__[\"default\"])();\n  Object(_parts_iePolyfill__WEBPACK_IMPORTED_MODULE_16__[\"default\"])();\n  Object(_parts_initMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_parts_mask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_parts_navLinks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_parts_initCarousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  Object(_parts_initSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  Object(_parts_initMap__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  Object(_parts_initToggler__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  $('.js-scroll-top').on('click', function () {\n    $('html, body').animate({\n      scrollTop: 0\n    }, 500);\n  });\n  Object(_parts_initStarSelector__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n  Object(_parts_initTabs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  svg4everybody();\n});\n\n//# sourceURL=webpack:///./src/_template/_source/js/main.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/form/datepicker.js":
/*!***********************************************************!*\
  !*** ./src/_template/_source/js/parts/form/datepicker.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initDatepicker() {\n  (function (factory) {\n    if (typeof define === \"function\" && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n      // AMD. Register as an anonymous module.\n      define([\"../widgets/datepicker\"], factory);\n    } else {\n      // Browser globals\n      factory(jQuery.datepicker);\n    }\n  })(function (datepicker) {\n    datepicker.regional.ru = {\n      closeText: \"Закрыть\",\n      prevText: \"&#x3C;Пред\",\n      nextText: \"След&#x3E;\",\n      currentText: \"Сегодня\",\n      monthNames: [\"Январь\", \"Февраль\", \"Март\", \"Апрель\", \"Май\", \"Июнь\", \"Июль\", \"Август\", \"Сентябрь\", \"Октябрь\", \"Ноябрь\", \"Декабрь\"],\n      monthNamesShort: [\"Янв\", \"Фев\", \"Мар\", \"Апр\", \"Май\", \"Июн\", \"Июл\", \"Авг\", \"Сен\", \"Окт\", \"Ноя\", \"Дек\"],\n      dayNames: [\"воскресенье\", \"понедельник\", \"вторник\", \"среда\", \"четверг\", \"пятница\", \"суббота\"],\n      dayNamesShort: [\"вск\", \"пнд\", \"втр\", \"срд\", \"чтв\", \"птн\", \"сбт\"],\n      dayNamesMin: [\"Вс\", \"Пн\", \"Вт\", \"Ср\", \"Чт\", \"Пт\", \"Сб\"],\n      weekHeader: \"Нед\",\n      dateFormat: \"dd.mm.yy\",\n      firstDay: 1,\n      isRTL: false,\n      showMonthAfterYear: false,\n      yearSuffix: \"\"\n    };\n    datepicker.setDefaults(datepicker.regional.ru);\n    return datepicker.regional.ru;\n  });\n\n  $(\"#datepicker\").datepicker($.datepicker.regional[\"ru\"]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initDatepicker);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/form/datepicker.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/form/initDropFile.js":
/*!*************************************************************!*\
  !*** ./src/_template/_source/js/parts/form/initDropFile.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initDropFile = function initDropFile() {\n  function readURL(input) {\n    var reader = new FileReader();\n    var main = $(input).closest('.file');\n\n    reader.onload = function (e) {\n      main.find('.js-file-image').addClass('js-file-image-active').css('background-image', 'url(' + e.target.result + ')');\n    };\n\n    reader.readAsDataURL(input.files[0]);\n  }\n\n  $(\".fileload\").on('change', function (e) {\n    var maxSize = $(this).data('max-size');\n    var main = $(this).closest('.file');\n    var type_reg = /^image\\/(jpg|png|jpeg|gif)$/;\n\n    if (main.hasClass('file_result')) {\n      var parent = main.closest('.js-file-parent');\n    }\n\n    if ($(this).get(0).files.length !== 0) {\n      var fileType = $(this).get(0).files[0].type;\n\n      if (this.files[0].size > maxSize || !type_reg.test(fileType)) {\n        main.addClass('invalid-input');\n        main.find('.js-file-image').removeClass('js-file-image-active').css('background-image', 'none');\n\n        if (main.hasClass('file_result')) {\n          if (this.files[0].size > maxSize) {\n            parent.find('.js-form-result').fadeIn(0).html('Проверьте вес файла и попробуйте ещё раз');\n          } else {\n            parent.find('.js-form-result').fadeIn(0).html('Проверьте формат файла и попробуйте ещё раз');\n          }\n\n          parent.removeClass('js-file-parent_success');\n        }\n\n        this.value = '';\n      } else {\n        readURL(this);\n        $(this).closest('.file').removeClass('invalid-file');\n        parent.find('.js-form-result').fadeOut(0);\n        parent.addClass('js-file-parent_success');\n        main.removeClass('invalid-input');\n      }\n    } else {\n      this.value = '';\n      main.removeClass('invalid-input');\n      main.find('.js-file-image').removeClass('js-file-image-active').css('background-image', 'none');\n\n      if (main.hasClass('file_result')) {\n        parent.find('.js-form-result').fadeOut(0);\n      }\n    }\n  });\n  $(\".file\").bind(\"drop\", function (e) {\n    var files = e.originalEvent.dataTransfer.files;\n    processFileUpload(files, $(this));\n    return false;\n  });\n\n  function processFileUpload(droppedFiles, elem) {\n    if (droppedFiles.length > 0) {\n      for (var f = 0; f < droppedFiles.length; f++) {\n        elem.find(\"input[type='file']\").prop(\"files\", droppedFiles).trigger('change');\n      }\n    }\n  }\n\n  $(\"html\").on(\"dragover\", function (event) {\n    event.preventDefault();\n    event.stopPropagation();\n    $(this).addClass('dragging');\n  });\n  $(\"html\").on(\"dragleave\", function (event) {\n    event.preventDefault();\n    event.stopPropagation();\n    $(this).removeClass('dragging');\n  });\n  $(\"html\").on(\"drop\", function (event) {\n    event.preventDefault();\n    event.stopPropagation();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initDropFile);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/form/initDropFile.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/form/initValidate.js":
/*!*************************************************************!*\
  !*** ./src/_template/_source/js/parts/form/initValidate.js ***!
  \*************************************************************/
/*! exports provided: isFormValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFormValidate\", function() { return isFormValidate; });\nvar isFormValidate = function isFormValidate(form, error_class) {\n  var result = true;\n  var rq = $('.required', form).length;\n  var check = ['input[type=\"text\"]', 'input[type=\"login\"]', 'input[type=\"password\"]', 'input[type=\"number\"]', 'input[type=\"checkbox\"]', 'input[type=\"tel\"]', 'input[type=\"email\"]', 'input[type=\"select\"]', 'input[type=\"file\"]', 'textarea', 'select'];\n  var parent;\n  error_class = error_class || 'invalid-input';\n  $('.required, input, textarea, select').removeClass(error_class);\n\n  if (rq < 1) {\n    return result;\n  }\n\n  for (var i = 0; i < rq; i++) {\n    parent = $('.required', form).eq(i);\n    $(check.join(','), parent).each(function () {\n      if (!isFieldValidate($(this))) {\n        if ($(this).attr('type') == 'checkbox' || $(this).attr('type') == 'file') {\n          $(this).closest('label').addClass(error_class);\n          console.log('invalid label');\n        } else {\n          $(this).addClass(error_class);\n        }\n\n        result = false;\n      }\n    });\n  }\n\n  result ? form.removeClass('form-invalid') : form.addClass('form-invalid');\n  return result;\n};\n\nvar isValidEmail = function isValidEmail(email) {\n  var pattern = new RegExp(/^((\"[\\w-\\s]+\")|([\\w-]+(?:\\.[\\w-]+)*)|(\"[\\w-\\s]+\")([\\w-]+(?:\\.[\\w-]+)*))(@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$)|(@\\[?((25[0-5]\\.|2[0-4][0-9]\\.|1[0-9]{2}\\.|[0-9]{1,2}\\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\]?$)/i);\n  return pattern.test(email);\n};\n\nvar isValidFile = function isValidFile(file) {\n  var maxSize = $(file).data('max-size');\n  var type_reg = /^image\\/(jpg|png|jpeg|gif)$/;\n\n  if (file.get(0).files[0].size > maxSize || file.get(0).files[0].name === '' || !type_reg.test(file.get(0).files[0].type)) {\n    return false;\n  }\n\n  return true;\n};\n\nvar isFieldValidate = function isFieldValidate(field) {\n  var result = true;\n  var val = '';\n\n  if (field && field.attr('name')) {\n    if (!field.val()) {\n      field.val('');\n      return false;\n    }\n\n    val = (field.val() + '').trim();\n\n    if (field.hasClass('js-valid_email') && !isValidEmail(val)) {\n      result = false;\n    } else if (field.attr('name') === 'phone' && val.length !== 18) {\n      result = false;\n    } else if (field.attr('type') === 'checkbox' && !field.is(':checked')) {\n      result = false;\n    } else if (field.attr('type') === 'file' && !isValidFile(field)) {\n      result = false;\n    } else if (val === null || val === '') {\n      field.val('');\n      result = false;\n    }\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/form/initValidate.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/form/sendForm.js":
/*!*********************************************************!*\
  !*** ./src/_template/_source/js/parts/form/sendForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initValidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initValidate */ \"./src/_template/_source/js/parts/form/initValidate.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/**\r\n * init\r\n */\n\nvar initSendForm = function initSendForm() {\n  $('body').on('submit', 'form', function (e) {\n    return sendForm(e);\n  });\n};\n/**\r\n * Валидация перед отправкой формы\r\n *\r\n * @param {object} e event\r\n */\n\n\nvar sendForm = function sendForm(e) {\n  var t = $(e.target);\n\n  if (!Object(_initValidate__WEBPACK_IMPORTED_MODULE_0__[\"isFormValidate\"])(t)) {\n    console.log('invalid form');\n    e.preventDefault();\n    e.stopPropagation();\n    $('.js-form-result', t).text('Заполните все поля');\n    $('.invalid-input', t).first().focus();\n  } else if (t.hasClass('js-ajax-form')) {\n    e.preventDefault();\n    e.stopPropagation();\n    t.addClass('load');\n    axios.post(t.attr('action'), new FormData(t.get(0))).then(function (response) {\n      successResponse(response.data, t);\n      t.removeClass('load');\n    }).catch(function (error) {\n      errorResponse(error.response.data, t);\n      t.removeClass('load');\n    });\n  } else {\n    var uploadFormData = new FormData(t.get(0));\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = uploadFormData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var _step$value = _slicedToArray(_step.value, 2),\n            key = _step$value[0],\n            value = _step$value[1];\n\n        // не работает в IE\n        console.log(key, value);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    e.preventDefault();\n    e.stopPropagation();\n  }\n};\n/**\r\n * fail callback\r\n *\r\n * @param data\r\n * @param form\r\n */\n\n\nvar errorResponse = function errorResponse(data, form) {\n  if (isObject(data.errors)) {\n    $('.js-form-result', form).text('');\n\n    for (var i in data.errors) {\n      $('[name=\"' + i + '\"]', form).addClass('invalid-input');\n      $('.js-form-result', form).append(data.errors[i].join('</br>'));\n    }\n\n    form.addClass('form-invalid');\n  } else {\n    $('.js-form-result', form).text(data.message);\n    form.addClass('form-invalid');\n  }\n};\n/**\r\n * callback success\r\n *\r\n * @param data\r\n * @param form\r\n */\n\n\nvar successResponse = function successResponse(data, form) {\n  if (data.action === 'modal') {\n    openModal(data.modal);\n  } else if (data.action === 'reload') {\n    location.reload();\n  } else if (data.action === 'navigate') {\n    location.href = data.link;\n  } else if (data.action === 'send') {\n    form.html('<div class=\"form__message form__message_success\">' + data.content + '</div>');\n\n    if (data.goal) {\n      sendTarget(data.goal);\n    }\n  } else if (data.action === 'load') {\n    openModal(data.modal);\n    $('#popup-check-register button[type=\"reset\"]').click();\n    $('.section-calendar .calendar__table').html(data.content);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initSendForm);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/form/sendForm.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/iePolyfill.js":
/*!******************************************************!*\
  !*** ./src/_template/_source/js/parts/iePolyfill.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar iePolyfill = function iePolyfill() {\n  if (!String.prototype.includes) {\n    String.prototype.includes = function (search, start) {\n      'use strict';\n\n      if (typeof start !== 'number') {\n        start = 0;\n      }\n\n      if (start + search.length > this.length) {\n        return false;\n      } else {\n        return this.indexOf(search, start) !== -1;\n      }\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (iePolyfill);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/iePolyfill.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initAccordion.js":
/*!*********************************************************!*\
  !*** ./src/_template/_source/js/parts/initAccordion.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initAccordion = function initAccordion() {\n  $('.js-slide-accordion').on('click', function (e) {\n    if (!$(this).hasClass('js-slide-mobile') || $(window).width() <= 768) {\n      var item = $(this).closest('.js-accordion-item');\n      item.find('.js-accordion-content').slideToggle(300);\n      item.toggleClass('js-accordion-item-active');\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAccordion);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initAccordion.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initCarousel.js":
/*!********************************************************!*\
  !*** ./src/_template/_source/js/parts/initCarousel.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initCarousel = function initCarousel() {\n  function initSlider() {\n    $('.js-owl-slider').owlCarousel({\n      loop: false,\n      margin: 30,\n      dots: true,\n      items: 2,\n      nav: true,\n      autoHeight: true,\n      onInitialize: beforeInit,\n      onInitialized: callback,\n      onTranslate: draggedCallback,\n      onRefresh: draggedCallback,\n      navText: ['<svg class=\"icon icon_slider-arrow\"> <use xlink:href=\"svg/sprite/sprite.svg#slider-arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" id=\"slider-arrow\" width=\"100%\" height=\"100%\"><g clip-path=\"url(#aclip0)\"><path d=\"M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z\"></path></g></svg></use> </svg>', '<svg class=\"icon icon_slider-arrow\"> <use xlink:href=\"svg/sprite/sprite.svg#slider-arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" id=\"slider-arrow\" width=\"100%\" height=\"100%\"><g clip-path=\"url(#aclip0)\"><path d=\"M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z\"></path></g></svg></use> </svg>'],\n      responsive: {\n        0: {\n          items: 1,\n          nav: false\n        },\n        600: {\n          items: 2,\n          nav: false\n        },\n        1024: {\n          items: 1.5,\n          nav: true\n        }\n      }\n    });\n  }\n\n  initSlider();\n\n  function beforeInit(event) {\n    var slider = event.target ? event.target : event;\n    var main = $(slider).parent();\n\n    if (main.hasClass('slider-filter') && main.length !== 0) {\n      $(slider).html('');\n      var fake = main.find(\".fake-slider\");\n      var filters = main.find(\".js-filter-input\");\n      var fakeSlides = fake.find('.js-block-filter');\n      fakeSlides.each(function (i, elem) {\n        var active = true;\n        filters.each(function (i, filter) {\n          var filterType = $(filter).data('type');\n          var filterValue = $(filter).val();\n\n          if (!$(elem).data(filterType).includes(filterValue)) {\n            active = false;\n          }\n        });\n\n        if (active) {\n          $(elem).clone().appendTo(slider);\n        }\n      });\n    }\n\n    main.fadeIn(500);\n  }\n\n  $('body').on('change', '.js-filter-input', function () {\n    var slider = $(this).closest('.slider-wrapper').find('.slider-element');\n    slider.owlCarousel('destroy');\n    slider.html('');\n\n    if (slider.hasClass('js-owl-slider')) {\n      initSlider();\n    }\n  });\n\n  function callback(event) {\n    var current = event.item.index - event.relatedTarget._clones.length / 2 % event.item.count + 1;\n    var size = Math.ceil(event.item.count / event.page.size);\n\n    if (current <= 0) {\n      current = event.item.count;\n    }\n\n    if (current > event.item.count) {\n      current = 1;\n    }\n\n    console.log('Текущий слайд: ', current);\n    console.log('Количество слайдов: ', event.item.count);\n    console.log('Количество страниц: ', size);\n  }\n\n  function draggedCallback(event) {\n    var current = event.item.index - event.relatedTarget._clones.length / 2 % event.item.count + 1;\n    var size = Math.ceil(event.item.count / event.page.size);\n\n    if (current <= 0) {\n      current = event.item.count;\n    }\n\n    if (current > event.item.count) {\n      current = 1;\n    }\n\n    console.log('Текущий слайд: ', current);\n    console.log('Количество слайдов: ', event.item.count);\n    console.log('Количество страниц: ', size);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initCarousel);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initCarousel.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initMap.js":
/*!***************************************************!*\
  !*** ./src/_template/_source/js/parts/initMap.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initMap = function initMap() {\n  var w = $(window).width();\n  var zm = 14;\n  var coords = [51.661953505612296, 39.14955035581963];\n\n  if (w < 768) {\n    coords = [51.661953505612296, 39.14955035581963];\n  }\n\n  ymaps.ready(init);\n\n  function init() {\n    var myMap = new ymaps.Map(\"map\", {\n      // Координаты центра карты.\n      // Порядок по умолчанию: «широта, долгота».\n      // Чтобы не определять координаты центра карты вручную,\n      // воспользуйтесь инструментом Определение координат.\n      center: coords,\n      // Уровень масштабирования. Допустимые значения:\n      // от 0 (весь мир) до 19.\n      zoom: zm,\n      controls: ['zoomControl']\n    });\n    myMap.behaviors.disable('scrollZoom');\n    var myPlacemark = new ymaps.Placemark(coords, {\n      hintContent: '',\n      balloonContent: 'АВТОМИР БОГЕМИЯ ВОРОНЕЖ'\n    }, {\n      // Опции.\n      // Необходимо указать данный тип макета.\n      iconLayout: 'default#image',\n      // Своё изображение иконки метки.\n      iconImageHref: 'img/map-marker.svg',\n      // Размеры метки.\n      iconImageSize: [30, 45],\n      // Смещение левого верхнего угла иконки относительно\n      // её \"ножки\" (точки привязки).\n      iconImageOffset: [-15, -23]\n    });\n    myMap.geoObjects.add(myPlacemark);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMap);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initMap.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initMenu.js":
/*!****************************************************!*\
  !*** ./src/_template/_source/js/parts/initMenu.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initMenu = function initMenu() {\n  $('.js-slide-menu').on('click', function (e) {\n    $('.js-menu').toggleClass('js-menu-active');\n    $(this).toggleClass('hamgurber-active');\n  });\n  $('.js-close-menu').on('click', function (e) {\n    $('.js-menu').removeClass('js-menu-active');\n    $('.hamburger').removeClass('hamgurber-active');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMenu);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initMenu.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initPopup.js":
/*!*****************************************************!*\
  !*** ./src/_template/_source/js/parts/initPopup.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initPopup = function initPopup() {\n  var down = false;\n  $('.js-call-popup').on('click', function (e) {\n    e.preventDefault();\n    $('html').css('overflow', 'hidden');\n    var target = $(this).attr('data-target');\n    var popup = $('#' + target);\n    var block = popup.find('.popup');\n    popup.fadeIn(500);\n    block.addClass('popup-anim');\n  });\n  $('.js-popup-close').on('click', function () {\n    var popups = $('.popup-wrapper');\n    var popup = $(this).closest('.popup-wrapper');\n    popup.fadeOut(500);\n    $(this).closest('.popup').removeClass('popup-anim');\n    var overflow = true;\n    popups.each(function (i, e) {\n      if ($(e).css('display') == 'block' && $(e).attr('id') !== popup.attr('id')) {\n        overflow = false;\n      }\n    });\n\n    if (overflow) {\n      $('html').css('overflow', '');\n    }\n  });\n  $(document).mousedown(function (e) {\n    var div = $(\".popup\");\n\n    if (!div.is(e.target) && div.has(e.target).length != 0) {\n      down = true;\n    }\n  });\n  $(document).mouseup(function (e) {\n    var div = $(\".popup\");\n    var div2 = $('.ui-datepicker');\n    console.log(div2);\n    console.log(!$('.ui-datepicker-div').is(e.target), $('.ui-datepicker-div').has(e.target).length === 0);\n\n    if (!div.is(e.target) && div.has(e.target).length === 0 && !down && e.pageX + 18 < $(window).width() && !div2.is(e.target) && div2.has(e.target).length === 0) {\n      $('html').css('overflow', '');\n      $(div).removeClass('popup-anim');\n      var popup = $('.popup-wrapper');\n      popup.fadeOut(500);\n    }\n\n    down = false;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initPopup);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initPopup.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initSelector.js":
/*!********************************************************!*\
  !*** ./src/_template/_source/js/parts/initSelector.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initSelector = function initSelector() {\n  $('body').on('click', '.selector', function (e) {\n    if ($(window).width() > 768 && !$(this).hasClass('selector_disabled')) {\n      var $this = $(this);\n      var set = 0;\n      var list = $(this).find('.selector__list');\n\n      if (list.css('display') == 'block') {\n        set = 1;\n      }\n\n      e.stopPropagation();\n      $('.selector .selector__list').fadeOut(0).removeClass('selector-picked');\n\n      if (set) {\n        list.fadeOut(0);\n      } else {\n        list.fadeIn(0);\n        var currHeight = $(window).height();\n        var scrollTop = $(window).scrollTop();\n        var elemTop = $this.offset().top;\n        var distance = elemTop - scrollTop;\n\n        if (distance > currHeight / 1.5) {\n          list.css('top', 'initial');\n          list.css('bottom', '100%');\n        } else {\n          list.css('bottom', 'initial');\n          list.css('top', '100%');\n        }\n      }\n    }\n  });\n  $('select').on('change', function (e) {\n    var parent = $(this).parent();\n\n    if (parent.hasClass('selector')) {\n      if ($(this).val()) {\n        parent.find('.js-selector-value').html($(this).val());\n      } else {\n        parent.find('.js-selector-value').html(parent.find('option[value=\"\"]').text() + ' ');\n      }\n    }\n\n    if (parent.hasClass('selector_remote')) {\n      $(parent.data('target')).val($(this).val()).trigger('change');\n    }\n\n    if ($(this).prop('selectedIndex') > 0 && parent.hasClass(\"selector_designed\")) {\n      parent.addClass(\"selector_changed\");\n    } else {\n      parent.removeClass(\"selector_changed\");\n    }\n  });\n  $('body').on('click', '.selector__item', function (e) {\n    if ($(window).width() > 768) {\n      var parent = $(this).closest('.selector');\n      parent.find('.js-selector-value').html($(this).text());\n      var index = $(this).attr('data-value');\n      parent.find('select').val(index).trigger('change');\n\n      if ($(this).index() > 0 && parent.hasClass(\"selector_designed\")) {\n        parent.addClass(\"selector_changed\");\n      } else {\n        parent.removeClass(\"selector_changed\");\n      }\n    }\n  });\n  $(document).click(function () {\n    clear();\n  });\n\n  function clear() {\n    $('.selector .selector__list').fadeOut(0);\n    $('.wrapper').removeClass('container-shadow');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initSelector);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initSelector.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initSlick.js":
/*!*****************************************************!*\
  !*** ./src/_template/_source/js/parts/initSlick.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initSlick = function initSlick() {\n  $('.slick').slick({\n    infinite: true,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [{\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 1\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 1024,\n      settings: {\n        slidesToShow: 4\n      }\n    }],\n    prevArrow: '<div class=\"slick-prev\"><svg class=\"icon icon_slider-arrow\"> <use xlink:href=\"svg/sprite/sprite.svg#slider-arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" id=\"slider-arrow\" width=\"100%\" height=\"100%\"><g clip-path=\"url(#aclip0)\"><path d=\"M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z\"></path></g></svg></use> </svg></div>',\n    nextArrow: '<div class=\"slick-next\"><svg class=\"icon icon_slider-arrow\"> <use xlink:href=\"svg/sprite/sprite.svg#slider-arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" id=\"slider-arrow\" width=\"100%\" height=\"100%\"><g clip-path=\"url(#aclip0)\"><path d=\"M4.77 9.798a1.06 1.06 0 0 0 0 1.512 1.067 1.067 0 0 0 1.497 0l7.666-7.666v25.298c0 .59.47 1.058 1.06 1.058.589 0 1.073-.469 1.073-1.058V3.644l7.652 7.666a1.085 1.085 0 0 0 1.512 0 1.06 1.06 0 0 0 0-1.512L15.749.318a1.041 1.041 0 0 0-1.497 0L4.77 9.797z\"></path></g></svg></use> </svg></div>'\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initSlick);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initSlick.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initStarSelector.js":
/*!************************************************************!*\
  !*** ./src/_template/_source/js/parts/initStarSelector.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initStarSelector = function initStarSelector() {\n  $('body').on('click', '.js-set-star', function () {\n    var currIndex = $(this).index();\n    var input = $(this).closest('.js-setstar').find('.setstar-input');\n    var stars = $(this).closest('.js-setstar').find('.js-set-star');\n    input.val(currIndex + 1);\n    stars.each(function (i, elem) {\n      if (i <= currIndex) {\n        $(elem).addClass('star-selector__item_active');\n      } else {\n        $(elem).removeClass('star-selector__item_active');\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initStarSelector);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initStarSelector.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initTabs.js":
/*!****************************************************!*\
  !*** ./src/_template/_source/js/parts/initTabs.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initTabs = function initTabs() {\n  $('.tab-menu__item').on('click', function (e) {\n    var $this = $(this);\n    var menu = $this.closest('.tab-menu');\n    var target = $(menu.attr('data-toggle'));\n\n    if ($this.data('slide') !== undefined) {\n      var targetIndex = $this.data('item');\n    } else {\n      var targetIndex = $this.index();\n    }\n\n    menu.find('.tab-menu__item').removeClass('tab-menu__item_active');\n    $this.addClass('tab-menu__item_active');\n    target.find('.tabber__item').removeClass('tabber__item_active');\n    target.find('.tabber__item').eq(targetIndex).addClass('tabber__item_active');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initTabs);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initTabs.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/initToggler.js":
/*!*******************************************************!*\
  !*** ./src/_template/_source/js/parts/initToggler.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initToggler = function initToggler() {\n  $('.js-slide-toggle').on('click', function () {\n    $('.js-content').slideToggle(250);\n    $(this).toggleClass('arrower_active');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initToggler);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/initToggler.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/mask.js":
/*!************************************************!*\
  !*** ./src/_template/_source/js/parts/mask.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initMask() {\n  $(\".js-phone-mask\").mask(\"+7 (000) 000-00-00\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMask);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/mask.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/navLinks.js":
/*!****************************************************!*\
  !*** ./src/_template/_source/js/parts/navLinks.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar navLinks = function navLinks() {\n  $('.js-nav-link').on('click', function () {\n    $('html, body').animate({\n      scrollTop: $($(this).data('target')).offset().top\n    }, 500);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navLinks);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/navLinks.js?");

/***/ }),

/***/ "./src/_template/_source/js/parts/searchAccess.js":
/*!********************************************************!*\
  !*** ./src/_template/_source/js/parts/searchAccess.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar searchAccess = function searchAccess() {\n  var forms = $('.js-search-access');\n\n  function checkAccess() {\n    forms.each(function (i, e) {\n      console.log('l');\n      var input = $(e).find('.js-target');\n      var submit = $(e).find(\"button[type='submit']\");\n\n      if (!input.val()) {\n        submit.css('opacity', '.4');\n      } else {\n        submit.css('opacity', '1');\n      }\n    });\n  }\n\n  checkAccess();\n  forms.on('input', checkAccess);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchAccess);\n\n//# sourceURL=webpack:///./src/_template/_source/js/parts/searchAccess.js?");

/***/ })

/******/ });