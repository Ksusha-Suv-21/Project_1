import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


function sectionTechnicInit() {
    new Swiper(".swiper-container.swiper-two", {
        modules: [Pagination],
        pagination: {
            el: ".swiper-pagination.pagination-two",
            clickable: true,
        },
        slidesPerView: 1.25,
        slidesPerView: 'auto',
    
        breakpoints: { 320: { enabled: true, }, 768: { enabled: false, } }
      
    });
    
    
    
    const technic = document.querySelector('.section-technic__list');
    const btnMore_technic = document.querySelector('.section-technic__change');
    
    btnMore_technic.addEventListener('click', function () {
        technic.classList.toggle("visible")
        if (technic.classList.contains("visible")) {
            btnMore_technic.textContent = 'Скрыть';
            btnMore_technic.classList.add("section-technic__change--open");
            technic.classList.add("logos_height");
    }
        if (!technic.classList.contains("visible")) {
            btnMore_technic.textContent = 'Показать все';
            btnMore_technic.classList.remove("section-technic__change--open");
            technic.classList.remove("logos_height");
    }
    });
    
}

export {sectionTechnicInit};