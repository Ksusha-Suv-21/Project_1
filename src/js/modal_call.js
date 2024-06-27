
function modalCallInit() {
    const btnCallHeader = document.querySelector(".header__contacts-call");
    const btnCallAside = document.querySelector(".aside-menu__contacts-call");
    const modalCall = document.querySelector(".modal-call");
    const blurArea = document.querySelector(".blur")
    const btnCloseModalCall = document.querySelector(".modal-call__close-btn");
    
    btnCallHeader.addEventListener('click', function () {
        modalCall.classList.add("modal-call--visible")
        blurArea.classList.add("blur-work")
    });
    
    btnCallAside.addEventListener('click', function () {
        modalCall.classList.add("modal-call--visible")
        blurArea.classList.add("blur-work")
    });
    
    
    btnCloseModalCall.addEventListener('click', function () {
        modalCall.classList.remove("modal-call--visible")
        blurArea.classList.remove("blur-work")
    });
    
    blurArea.addEventListener('click', function () {
        modalCall.classList.remove("modal-call--visible")
        blurArea.classList.remove("blur-work")
    });}

export {modalCallInit};