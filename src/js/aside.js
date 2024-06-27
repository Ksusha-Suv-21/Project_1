function asideInit() {
    const btnBurger = document.querySelector(".header__burger-menu");
    const aside = document.querySelector(".aside-menu");
    const blurArea = document.querySelector(".blur");
    const btnCloseBurger = document.querySelector(".aside-menu__close-menu");

    btnBurger.addEventListener('click', function () {
        aside.classList.add("aside-visible")
        blurArea.classList.add("blur-work")
});

    btnCloseBurger.addEventListener('click', function () {
        aside.classList.remove("aside-visible")
        blurArea.classList.remove("blur-work")
});

    blurArea.addEventListener('click', function () {
        aside.classList.remove("aside-visible")
        blurArea.classList.remove("blur-work")
});
}

export {asideInit};