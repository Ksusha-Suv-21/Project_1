import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

function sectionServicesInit() {
    new Swiper(".swiper-container", {
        modules: [Pagination],
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1.25,
        slidesPerView: 'auto',
    
        breakpoints: { 320: { enabled: true, }, 768: { enabled: false, } }
      
    });
}

export {sectionServicesInit};