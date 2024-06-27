
function modalFeedbackInit() {
    const btnFeedbackHeader = document.querySelector(".header__contacts-chat");
    const btnFeedbackAside = document.querySelector(".aside-menu__contacts-chat");

    const modalFeedback = document.querySelector(".modal-feedback");
    const blurArea = document.querySelector(".blur")
    const btnCloseModalFeedback = document.querySelector(".modal-feedback__close-btn");

    btnFeedbackHeader.addEventListener('click', function () {
        modalFeedback.classList.add("modal-feedback--visible")
        blurArea.classList.add("blur-work")
});

    btnFeedbackAside.addEventListener('click', function () {
        modalFeedback.classList.add("modal-feedback--visible")
        blurArea.classList.add("blur-work")
});


    btnCloseModalFeedback.addEventListener('click', function () {
        modalFeedback.classList.remove("modal-feedback--visible")
        blurArea.classList.remove("blur-work")
});

    blurArea.addEventListener('click', function () {
        modalFeedback.classList.remove("modal-feedback--visible")
        blurArea.classList.remove("blur-work")
});
}

export {modalFeedbackInit};