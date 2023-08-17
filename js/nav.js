const option1 = document.querySelector(".nav-options--button-1");
const option2 = document.querySelector(".nav-options--button-2");
const option3 = document.querySelector(".nav-options--button-3");
const option4 = document.querySelector(".nav-options--button-4");

const buttonTheme = document.querySelector(".div-setux--buttom-theme");
const buttonLanguage = document.querySelector(".div-setux--buttom-language");
const areaMenuTheme = document.querySelector(".menu-theme");
const areaMenuLanguage = document.querySelector(".menu-language");
const menus = document.querySelectorAll(".setux-option--menu");
const buttonAuto = document.querySelector(".setux-option--menu-auto");
const buttonNormal = document.querySelector(".setux-option--menu-normal");
const buttonDark = document.querySelector(".setux-option--menu-dark");
const buttonEnglish = document.querySelector(".setux-option--menu-english");
const buttonSpanish = document.querySelector(".setux-option--menu-spanish");


// Click event of options buttons
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

// Buttons setux hover arrow-down
buttonTheme.addEventListener("mouseover", (e) => {
    document.querySelector(".div-setux--buttom-theme span")
    .setAttribute("style", "color: var(--color-secundary2)");
});
buttonTheme.addEventListener("mouseout", (e) => {
    document.querySelector(".div-setux--buttom-theme span")
    .setAttribute("style", "color: var(--color-primary1)");
});
buttonLanguage.addEventListener("mouseover", (e) => {
    document.querySelector(".div-setux--buttom-language span")
    .setAttribute("style", "color: var(--color-secundary2)");
});
buttonLanguage.addEventListener("mouseout", (e) => {
    document.querySelector(".div-setux--buttom-language span")
    .setAttribute("style", "color: var(--color-primary1)");
});

// Menu and buttons setux hover
buttonTheme.addEventListener("click", (e) => {
    let menu = document.querySelector(".menu-theme .setux-option--menu");
    menu.setAttribute("style", "display: flex;");
});
buttonLanguage.addEventListener("click", (e) => {
    let menu = document.querySelector(".menu-language .setux-option--menu");
    menu.setAttribute("style", "display: flex;");
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

// Click event of setux buttons
buttonNormal.addEventListener("click", (e) => {
    if (!buttonNormal.classList.contains("setux-option--menu-theme-selected")) {
        cleanClickedOptions("setux-option--menu-theme-selected");
        buttonNormal.classList.add("setux-option--menu-theme-selected");

        funLightMode();
    }
});
buttonDark.addEventListener("click", (e) => {
    if (!buttonDark.classList.contains("setux-option--menu-theme-selected")) {
        cleanClickedOptions("setux-option--menu-theme-selected");
        buttonDark.classList.add("setux-option--menu-theme-selected");

        funDarkMode();

        // if (root.style.getPropertyValue('--color-light-primary1') === 'blue') to original value
        // if (getComputedStyle(root).getPropertyValue('--color-primary').trim() === 'blue') to exact value
    }
});

buttonEnglish.addEventListener("click", (e) => {
    if (!buttonEnglish.classList.contains("setux-option--menu-language-selected")) {
        cleanClickedOptions("setux-option--menu-language-selected");
        buttonEnglish.classList.add("setux-option--menu-language-selected");
    }
});
buttonSpanish.addEventListener("click", (e) => {
    if (!buttonSpanish.classList.contains("setux-option--menu-language-selected")) {
        cleanClickedOptions("setux-option--menu-language-selected");
        buttonSpanish.classList.add("setux-option--menu-language-selected");
    }
});


function cleanClickedOptions(selected) {
    let button = document.querySelector("." + selected);
    button.classList.remove(selected);
}

// * RESPONSIVE NAV CONFIGURATION

const buttonOptionResponsive = document.querySelector(".nav--bar-button-option");
buttonOptionResponsive.addEventListener("click", (e) => {
    let frameOption = document.querySelector(".nav-bar-option--frame");
    frameOption.setAttribute("style", "display: flex;");
    document.querySelector("body").setAttribute("style", "overflow-y: hidden;")

    const buttonCloseOptionResponsive = document.querySelector(".nav--bar-button-close");
    buttonCloseOptionResponsive.addEventListener("click", (e) => {
        frameOption.setAttribute("style", "display: none;");
        document.querySelector("body").setAttribute("style", "overflow-y: auto;")
        buttonCloseOptionResponsive.removeEventListener("click", e)
    });

    frameOption.addEventListener("mouseout", (e) => {
        frameOption.setAttribute("style", "display: none;");
        document.querySelector("body").setAttribute("style", "overflow-y: auto;")
        buttonCloseOptionResponsive.removeEventListener("click", e)
    });
});

// ? AUTOMATIC THEME CONFIGURATION
function funDarkMode() {
    const root = document.documentElement;
    const logo = document.querySelector(".nav-logo > img");
    const banner = document.querySelector(".div-background");
    const iconThemeDarkResponsive = document.querySelector(".nav--bar-icon-theme-dark");
    const iconThemeLightResponsive = document.querySelector(".nav--bar-icon-theme-light");
    const logoBarOptionResponsive = document.querySelector(".nav-bar-option--logo img");

    iconThemeDarkResponsive.setAttribute("style", "display: block;");
    iconThemeLightResponsive.setAttribute("style", "display: none;");
    logoBarOptionResponsive.setAttribute("src", "./img/logo/Dog-Dark.png");

    root.style.setProperty('--color-primary1', 'var(--color-dark-primary1)');
    root.style.setProperty('--color-primary2', 'var(--color-dark-primary2)');
    root.style.setProperty('--color-secundary1', 'var(--color-dark-secundary1)');
    root.style.setProperty('--color-secundary2', 'var(--color-dark-secundary2)');
    root.style.setProperty('--color-accent', 'var(--accent-dark)');
    logo.setAttribute("src", "./img/logo/Logotipo-dark.png");
    banner.setAttribute("src", "./img/logo/Fondo-Dark.png");
}
function funLightMode() {
    const root = document.documentElement;
    const logo = document.querySelector(".nav-logo > img");
    const banner = document.querySelector(".div-background");
    const iconThemeDarkResponsive = document.querySelector(".nav--bar-icon-theme-dark");
    const iconThemeLightResponsive = document.querySelector(".nav--bar-icon-theme-light");
    const logoBarOptionResponsive = document.querySelector(".nav-bar-option--logo img");

    iconThemeDarkResponsive.setAttribute("style", "display: none;");
    iconThemeLightResponsive.setAttribute("style", "display: block;");
    logoBarOptionResponsive.setAttribute("src", "./img/logo/Dog-Light.png");
    root.style.setProperty('--color-primary1', 'var(--color-light-primary1)');
    root.style.setProperty('--color-primary2', 'var(--color-light-primary2)');
    root.style.setProperty('--color-secundary1', 'var(--color-light-secundary1)');
    root.style.setProperty('--color-secundary2', 'var(--color-light-secundary2)');
    root.style.setProperty('--color-accent', 'var(--accent-light)');
    logo.setAttribute("src", "./img/logo/Logotipo-light.png");
    banner.setAttribute("src", "./img/logo/Fondo-Light.png");
}

var AutoModeThemeDark;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("Dark Mode detected...")
    buttonDark.classList.add("setux-option--menu-theme-selected");
    AutoModeThemeDark = true;
    funDarkMode();
}else {
    console.log("Light Mode detected...")
    buttonNormal.classList.add("setux-option--menu-theme-selected");
    AutoModeThemeDark = false;
    funLightMode();
}

const buttonOptionThemeResponsive = document.querySelector(".nav--bar-button-theme");
buttonOptionThemeResponsive.addEventListener("click", (e) => {
    if (AutoModeThemeDark) {
        funLightMode();
        AutoModeThemeDark = false;
    }else {
        funDarkMode();
        AutoModeThemeDark = true;
    }
});

