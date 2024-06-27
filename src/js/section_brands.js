import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


function sectionBrandsInit() {
    new Swiper(".swiper-container.swiper-one", {
        modules: [Pagination],
        pagination: {
            el: ".swiper-pagination.pagination-one",
            clickable: true,
        },
        slidesPerView: 1.25,
        slidesPerView: 'auto',
    
        breakpoints: { 320: { enabled: true, }, 768: { enabled: false, } }
      
    });
    
    const logos = document.querySelector('.section-brands__list');
    const btnMore = document.querySelector('.section-brands__change');
    
    btnMore.addEventListener('click', function () {
        logos.classList.toggle("visible")
        if (logos.classList.contains("visible")) {
            btnMore.textContent = 'Скрыть';
            btnMore.classList.add("section-brands__change--open")
            logos.classList.add("logos_height")
    }
        if (!logos.classList.contains("visible")) {
            btnMore.textContent = 'Показать все';
            btnMore.classList.remove("section-brands__change--open")
            logos.classList.remove("logos_height")
    }
    });
}

export {sectionBrandsInit};
