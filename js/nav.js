const option1 = document.querySelector(".nav-options--button-1");
const option2 = document.querySelector(".nav-options--button-2");
const option3 = document.querySelector(".nav-options--button-3");
const option4 = document.querySelector(".nav-options--button-4");

const buttonTheme = document.querySelector(".div-setux--buttom-theme");
const buttonDarkTheme = document.querySelectorAll('.div-setux--buttom-theme span')[0];
const buttonLightTheme = document.querySelectorAll('.div-setux--buttom-theme span')[1];
const buttonLanguageSpanish = document.querySelectorAll(".menu-language button")[0];
const buttonLanguageEnglish = document.querySelectorAll(".menu-language button")[1];
const personalName = document.querySelector('.wave-name');
const areaMenuTheme = document.querySelector(".menu-theme");
const areaMenuLanguage = document.querySelector(".menu-language");
// const menus = document.querySelectorAll(".setux-option--menu");
// const buttonAuto = document.querySelector(".setux-option--menu-auto");
// const buttonNormal = document.querySelector(".setux-option--menu-normal");
// const buttonDark = document.querySelector(".setux-option--menu-dark");
// const buttonEnglish = document.querySelector(".setux-option--menu-english");
// const buttonSpanish = document.querySelector(".setux-option--menu-spanish");

// ? Animation name
personalName.addEventListener('mouseenter', (e) => {
    const grettings = document.querySelector('.wave');
    grettings.classList.toggle('wave-from-name');
});
personalName.addEventListener('mouseout', (e) => {
    const grettings = document.querySelector('.wave');
    grettings.classList.toggle('wave-from-name');
});


// Click event of options buttons
// option1.addEventListener("click", (e) => {
//     if (!option1.classList.contains("nav-options--button-clicked")) {
//         cleanClickedOptions("nav-options--button-clicked");
//         option1.classList.add("nav-options--button-clicked");
//     }
// });
// option2.addEventListener("click", (e) => {
//     if (!option2.classList.contains("nav-options--button-clicked")) {
//         cleanClickedOptions("nav-options--button-clicked");
//         option2.classList.add("nav-options--button-clicked");
//     }
// });
// option3.addEventListener("click", (e) => {
//     if (!option3.classList.contains("nav-options--button-clicked")) {
//         cleanClickedOptions("nav-options--button-clicked");
//         option3.classList.add("nav-options--button-clicked");
//     }
// });
// option4.addEventListener("click", (e) => {
//     if (!option4.classList.contains("nav-options--button-clicked")) {
//         cleanClickedOptions("nav-options--button-clicked");
//         option4.classList.add("nav-options--button-clicked");
//     }
// });

// Buttons setux hover arrow-down
// buttonTheme.addEventListener("mouseover", (e) => {
//     document.querySelector(".div-setux--buttom-theme span")
//     .setAttribute("style", "color: var(--color-light-primary1)");
// });
// buttonTheme.addEventListener("mouseout", (e) => {
//     document.querySelector(".div-setux--buttom-theme span")
//     .setAttribute("style", "color: var(--color-primary1)");
// });
// buttonLanguage.addEventListener("mouseover", (e) => {
//     document.querySelector(".div-setux--buttom-language span")
//     .setAttribute("style", "color: var(--color-light-primary1)");
// });
// buttonLanguage.addEventListener("mouseout", (e) => {
//     document.querySelector(".div-setux--buttom-language span")
//     .setAttribute("style", "color: var(--color-primary1)");
// });

// Menu and buttons setux hover
// buttonTheme.addEventListener("click", (e) => {
//     let menu = document.querySelector(".menu-theme .setux-option--menu");
//     menu.setAttribute("style", "display: flex;");
// });
// buttonLanguage.addEventListener("click", (e) => {
//     let menu = document.querySelector(".menu-language .setux-option--menu");
//     menu.setAttribute("style", "display: flex;");
// });
// areaMenuTheme.addEventListener("mouseleave", (e) => {
//     let menu = document.querySelector(".menu-theme .setux-option--menu");
//     menu.setAttribute("style", "display: none;");
// });
// areaMenuLanguage.addEventListener("mouseleave", (e) => {
//     let menu = document.querySelector(".menu-language .setux-option--menu");
//     menu.setAttribute("style", "display: none;");
// });
// menus.forEach((menu) => {
//     menu.addEventListener("click", (e) => {
//         menu.setAttribute("style", "display: none;");
//     });
// });

// Click event of setux buttons
buttonTheme.addEventListener("click", (e) => {
    if (!buttonDarkTheme.classList.contains("theme-desactivated")) {
        buttonDarkTheme.classList.add("theme-desactivated");
        buttonLightTheme.classList.remove("theme-desactivated");
        funLightMode();
    }else{
        buttonDarkTheme.classList.remove("theme-desactivated");
        buttonLightTheme.classList.add("theme-desactivated");
        funDarkMode();
    }
});
// buttonNormal.addEventListener("click", (e) => {
//     if (!buttonNormal.classList.contains("setux-option--menu-theme-selected")) {
//         cleanClickedOptions("setux-option--menu-theme-selected");
//         buttonNormal.classList.add("setux-option--menu-theme-selected");

//         funLightMode();
//     }
// });
// buttonDark.addEventListener("click", (e) => {
//     if (!buttonDark.classList.contains("setux-option--menu-theme-selected")) {
//         cleanClickedOptions("setux-option--menu-theme-selected");
//         buttonDark.classList.add("setux-option--menu-theme-selected");

//         funDarkMode();

//         // if (root.style.getPropertyValue('--color-light-primary1') === 'blue') to original value
//         // if (getComputedStyle(root).getPropertyValue('--color-primary').trim() === 'blue') to exact value
//     }
// });

buttonLanguageSpanish.addEventListener("click", (e) => {
    if (!buttonLanguageSpanish.classList.contains("language-activated")) {
        buttonLanguageSpanish.classList.add("language-activated");
        buttonLanguageEnglish.classList.toggle("language-activated");
        // TO DO 
    }

});
buttonLanguageEnglish.addEventListener("click", (e) => {
    if (!buttonLanguageEnglish.classList.contains("language-activated")) {
        buttonLanguageEnglish.classList.add("language-activated");
        buttonLanguageSpanish.classList.toggle("language-activated");
        // TO DO
    }
});


// function cleanClickedOptions(selected) {
//     let button = document.querySelector("." + selected);
//     button.classList.remove(selected);
// }

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

    frameOption.addEventListener("mouseover", (e) => {
        frameOption.setAttribute("style", "display: none;");
        document.querySelector("body").setAttribute("style", "overflow-y: auto;")
        buttonCloseOptionResponsive.removeEventListener("click", e)
    });
});

// ? AUTOMATIC THEME CONFIGURATION
function funDarkMode() {
    const root = document.documentElement;
    const logo = document.querySelector(".nav-logo > img");
    const footerLogo = document.querySelector(".footer-logo > img");
    const banner = document.querySelector(".paragraph");
    // const iconThemeDarkResponsive = document.querySelector(".nav--bar-icon-theme-dark");
    // const iconThemeLightResponsive = document.querySelector(".nav--bar-icon-theme-light");
    // const logoBarOptionResponsive = document.querySelector(".nav-bar-option--logo img");

    // iconThemeDarkResponsive.setAttribute("style", "display: block;");
    // iconThemeLightResponsive.setAttribute("style", "display: none;");
    // logoBarOptionResponsive.setAttribute("src", "./img/logo/Dog-Dark.png");

    root.style.setProperty('--color-primary1', 'var(--color-dark-primary1)');
    root.style.setProperty('--color-primary2', 'var(--color-dark-primary2)');
    root.style.setProperty('--color-secundary1', 'var(--color-dark-secundary1)');
    root.style.setProperty('--color-secundary2', 'var(--color-dark-secundary2)');
    root.style.setProperty('--color-accent', 'var(--accent-dark)');
    logo.setAttribute("src", "./img/logo/Logotipo-dark.png");
    footerLogo.setAttribute("src", "./img/logo/Logotipo-dark.png");
    banner.setAttribute("style", "background-image: url('../img/logo/Fondo-Darkv2.png');");
}
function funLightMode() {
    const root = document.documentElement;
    const logo = document.querySelector(".nav-logo > img");
    const footerLogo = document.querySelector(".footer-logo > img");
    const banner = document.querySelector(".paragraph");
    // const iconThemeDarkResponsive = document.querySelector(".nav--bar-icon-theme-dark");
    // const iconThemeLightResponsive = document.querySelector(".nav--bar-icon-theme-light");
    // const logoBarOptionResponsive = document.querySelector(".nav-bar-option--logo img");

    // iconThemeDarkResponsive.setAttribute("style", "display: none;");
    // iconThemeLightResponsive.setAttribute("style", "display: block;");
    // logoBarOptionResponsive.setAttribute("src", "./img/logo/Dog-Light.png");
    root.style.setProperty('--color-primary1', 'var(--color-light-primary1)');
    root.style.setProperty('--color-primary2', 'var(--color-light-primary2)');
    root.style.setProperty('--color-secundary1', 'var(--color-light-secundary1)');
    root.style.setProperty('--color-secundary2', 'var(--color-light-secundary2)');
    root.style.setProperty('--color-accent', 'var(--accent-light)');
    logo.setAttribute("src", "./img/logo/Logotipo-light.png");
    footerLogo.setAttribute("src", "./img/logo/Logotipo-light.png");
    banner.setAttribute("style", "background-image: url('../img/logo/Fondo-Lightv2.png');");
}

var AutoModeThemeDark;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("Theme: Dark Mode detected...")
    AutoModeThemeDark = true;
    funDarkMode();
}else {
    console.log("Theme: Light Mode detected...")
    AutoModeThemeDark = false;
    buttonDarkTheme.classList.add("theme-desactivated");
    buttonLightTheme.classList.remove("theme-desactivated");
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

