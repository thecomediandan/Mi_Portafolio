const option1 = document.querySelector(".nav-options--button-1");
const option2 = document.querySelector(".nav-options--button-2");
const option3 = document.querySelector(".nav-options--button-3");
const option4 = document.querySelector(".nav-options--button-4");

const buttonTheme = document.querySelector(".div-setux--buttom-theme");
const buttonLanguage = document.querySelector(".div-setux--buttom-language");
const areaMenuTheme = document.querySelector(".menu-theme");
const areaMenuLanguage = document.querySelector(".menu-language");
const menus = document.querySelectorAll(".setux-option--menu");

option1.addEventListener("click", (e) => {
    if (!option1.classList.contains("nav-options--button-clicked")) {
        cleanClickedOptions("nav-options--button-clicked");
        option1.classList.add("nav-options--button-clicked");
    }
});
option2.addEventListener("click", (e) => {
    if (!option2.classList.contains("nav-options--button-clicked")) {
        cleanClickedOptions("nav-options--button-clicked");
        option2.classList.add("nav-options--button-clicked");
    }
});
option3.addEventListener("click", (e) => {
    if (!option3.classList.contains("nav-options--button-clicked")) {
        cleanClickedOptions("nav-options--button-clicked");
        option3.classList.add("nav-options--button-clicked");
    }
});
option4.addEventListener("click", (e) => {
    if (!option4.classList.contains("nav-options--button-clicked")) {
        cleanClickedOptions("nav-options--button-clicked");
        option4.classList.add("nav-options--button-clicked");
    }
});

buttonTheme.addEventListener("click", (e) => {
    let menu = document.querySelector(".menu-theme .setux-option--menu");
    menu.setAttribute("style", "display: block;");
});
buttonLanguage.addEventListener("click", (e) => {
    let menu = document.querySelector(".menu-language .setux-option--menu");
    menu.setAttribute("style", "display: block;");
});
areaMenuTheme.addEventListener("mouseleave", (e) => {
    let menu = document.querySelector(".menu-theme .setux-option--menu");
    menu.setAttribute("style", "display: none;");
});
areaMenuLanguage.addEventListener("mouseleave", (e) => {
    let menu = document.querySelector(".menu-language .setux-option--menu");
    menu.setAttribute("style", "display: none;");
});
menus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
        menu.setAttribute("style", "display: none;");
    });
});

function hoverArrow() {
    let buttons = document.querySelectorAll(".nav-setux button");
    buttons.forEach(buttonElement => {
        buttonElement.addEventListener("mouseover", (e) => {
            buttonElement.getElementsByTagName("span")[0].setAttribute("style", "color: var(--color-light-secundary2)");
        });
        buttonElement.addEventListener("mouseout", (e) => {
            buttonElement.getElementsByTagName("span")[0].setAttribute("style", "color: var(--color-light-primary1)");
        });
    });
}

hoverArrow();
function cleanClickedOptions(selected) {
    let button = document.querySelector("." + selected);
    button.classList.remove(selected);
}