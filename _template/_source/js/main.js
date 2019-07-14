import initMask from './parts/mask';
import initMenu from './parts/initMenu';
import initPopup from './parts/initPopup';
import navLinks from './parts/navLinks';
import initCarousel from './parts/initCarousel';
import initSelector from './parts/initSelector';
import initMap from './parts/initMap';
import initToggler from './parts/initToggler';
import initStarSelector from './parts/initStarSelector';
import initTabs from './parts/initTabs';
import initSendForm from './parts/form/sendForm';
import initDropFile from './parts/form/initDropFile';
import initAccordion from './parts/initAccordion';
import searchAccess from './parts/searchAccess';
import initSlick from './parts/initSlick';

import initDatepicker from './parts/form/datepicker';

import iePolyfill from './parts/iePolyfill';

$(()=>{
	initPopup();
    initSendForm();
    initDropFile();
    initAccordion();
    searchAccess();
    initDatepicker();
    initSlick();

    iePolyfill();
    initMenu();
    initMask();
    navLinks();
    initCarousel();
    initSelector();
    initMap();
    initToggler();
    $('.js-scroll-top').on('click',function(){
        $('html, body').animate({ scrollTop: 0 }, 500);
    })
    initStarSelector();
    initTabs();
    svg4everybody();
});
