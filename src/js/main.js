import modals from './modules/modals';
import sliders from './modules/sliders';
import showMore from './modules/showMore';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    showMore('.button-styles', '#styles .row');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
});