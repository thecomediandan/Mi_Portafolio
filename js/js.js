import sendMessage from "./sendMessage.js";
import validateEntryForm from "./validateEntryForm.js";

// Animacion de los botones de EN | ES
const lanSpanish = document.querySelector(
  ".div-setux--buttom-language--spanish",
);
const lanEnglish = document.querySelector(
  ".div-setux--buttom-language--english",
);

// ? Variables del formulario
const form = document.querySelector(".contact-form form");
// const formName = form.children[2];
// const formEmail = form.children[3];
// const formMessage = form.children[4];
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formMessage = document.querySelector("#message");

const formLabelName = document.querySelector("#label-name");
const formLabelEmail = document.querySelector("#label-email");
const formLabelMessage = document.querySelector("#label-message");

const formButtonSubmit = document.querySelector(".contact-form form button");

const formNotifySendEmail = document.querySelector(".notify-send-email");
const formNotifyTimeElapsed = document.querySelector(".notify-time-elapsed");

const TIME_INTERVAL_SEND_MESSAGE = 59000;


// ? Botones de Idioma
lanSpanish.addEventListener("click", function () {
  if (!lanSpanish.classList.contains("language-activated")) {
    cargarTraducciones("es");
    lanSpanish.classList.add("language-activated");
    lanEnglish.classList.toggle("language-activated");
    formInputsSpanish();
  }
});

lanEnglish.addEventListener("click", function () {
  if (!lanEnglish.classList.contains("language-activated")) {
    cargarTraducciones("en");
    lanEnglish.classList.add("language-activated");
    lanSpanish.classList.toggle("language-activated");
    formInputsEnglish();
  }
});

// Carga del archivo traducciones
function cargarTraducciones(idioma) {
  // Utilizando Fetch
  fetch("./../content/config/" + idioma + ".json")
    .then(function (response) {
      response.json().then(function (traducciones) {
        console.log(traducciones);
        aplicarTraducciones(traducciones);
      });
      // console.log(traducciones);
      // aplicarTraducciones(traducciones);
    })
    .catch(function (error) {
      console.log(error);
    });

  // Realiza una solicitud AJAX para cargar el archivo de idioma correspondiente
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", "./../content/config/" + idioma + ".json", true);
  // xhr.onload = function() {
  //   if (xhr.status == 200) {
  //     var traducciones = JSON.parse(xhr.responseText);
  //     aplicarTraducciones(traducciones);
  //   }
  // };
  // xhr.send();
}

function aplicarTraducciones(traducciones) {
  // Itera sobre las traducciones y reemplaza el contenido en la página
  for (var clave in traducciones) {
    var elemento = document.querySelector("[data-traduction='" + clave + "']");
    if (elemento) {
      elemento.textContent = traducciones[clave];
    }
    // if (traducciones.hasOwnProperty(clave)) {
    //   console.log(clave)
    //   var elemento = document.querySelector("[data-traduction='" + clave + "']");
    //   console.log(elemento)
    //   if (elemento) {
    //     elemento.textContent = traducciones[clave];
    //   }
    // }
  }
}

// * Detectar el idioma del sistema
var systemLanguage = navigator.language || navigator.userLanguage;

console.log(systemLanguage);

if (systemLanguage.startsWith("es")) {
  cargarTraducciones("es");
  lanSpanish.classList.add("language-activated");
  lanEnglish.classList.toggle("language-activated");
  formInputsSpanish();
} else {
  cargarTraducciones("en");
  lanEnglish.classList.add("language-activated");
  lanSpanish.classList.toggle("language-activated");
  formInputsEnglish();
}

// ? Cambio de idiomas para el formulario
function formInputsSpanish() {
  formMessage.setAttribute.apply(formMessage, ["placeholder", "Mi mensaje"]);

  formLabelEmail.textContent = "Correo";
  formLabelName.textContent = "Nombre";
  formLabelMessage.textContent = "Mensaje";
}
function formInputsEnglish() {
  formMessage.setAttribute.apply(formMessage, ["placeholder", "My message"]);

  formLabelEmail.textContent = "Email";
  formLabelName.textContent = "Name";
  formLabelMessage.textContent = "Message";
}


// ? Animacion del Mensaje de alerta personalizado para el envio del correo
const alertMessage = document.querySelector(".alert-message");
const alertMessageSpan = document.querySelector(".alert-message span");
const alertMessageImg = document.querySelector(".alert-message img");

const loadingSendEmail = document.querySelector(".loading-send-email");
const labelButtonSendEmail = document.querySelector(".label-button-send-email");

function alertMessageShow(msg, icon) {
  alertMessageSpan.textContent = msg;
  alertMessageImg.src = "./img/icons/" + icon + ".svg";
  alertMessage.classList.add("alert-message-active");
};

function alertMessageHide() {
  alertMessageSpan.textContent = "[Este es un mensaje de alerta]";
  alertMessageImg.src = "./img/icons/info-circle.svg";
  alertMessage.classList.remove("alert-message-active");
};

// ? Evento de envio de mensaje del formulario al correo electronico
// mediante el servicio de EmailJS
// const buttonSubmitForm = document.querySelector("form > button[type='submit']");

form.addEventListener("submit", async function (event) {
  loadingSendEmail.classList.add("active");
  labelButtonSendEmail.classList.remove("active");
  event.preventDefault();
  formButtonSubmit.setAttribute("disabled", "");
  if (!validateEntryForm(formName.value, formEmail.value, formMessage.value)) {
    console.log("Campos del fomulario vacios o incorrectos!");
    alertMessageShow("Campos del fomulario vacios", "info-circle");
    loadingSendEmail.classList.remove("active");
    labelButtonSendEmail.classList.add("active");
    formButtonSubmit.removeAttribute("disabled");
    setTimeout(() => {
      alertMessageHide();
    }, 5000);
  } else {
    disableButtomSubmit(Math.floor(TIME_INTERVAL_SEND_MESSAGE / 1000));
    await sendMessage(formEmail.value, formName.value, formMessage.value)
      .then(() => {
        console.log("Mensaje enviado exitosamente!");
        alertMessageShow("Mensaje enviado exitosamente!", "success-alert");
        formName.value = "";
        formEmail.value = "";
        formMessage.value = "";
      })
      .catch((error) => {
        console.log(`Fallo el envio del mensaje: ${error}`);
        alertMessageShow("Falló el envio del mensaje", "fail-alert");
      })
      .finally(() => {
        loadingSendEmail.classList.remove("active");
        labelButtonSendEmail.classList.add("active");
        //formButtonSubmit.removeAttribute("disabled");
        setTimeout(() => {
          alertMessageHide();
        }, 5000);
      });
  }
});

// Logica de reactivado del boton pasado 59 segundos

function disableButtomSubmit(interval) {
  var timeElapsed = interval
  localStorage.setItem("buttonTimestamp", Date.now());
  formButtonSubmit.disabled = true
  formNotifySendEmail.classList.add("active");
  var timer = setInterval(() => {
      console.log(`Pasaron ${timeElapsed} segundo(s)`);
      formNotifyTimeElapsed.textContent = timeElapsed;
      timeElapsed--;
      if (timeElapsed === 0) {
        clearInterval(timer);
        localStorage.setItem("buttonTimestamp", null);
        formButtonSubmit.disabled = false
        formNotifySendEmail.classList.remove("active");
      }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const storedTime = localStorage.getItem("buttonTimestamp");

    if (storedTime) {
        const elapsedTime = Math.floor((Date.now() - storedTime) / 1000);
        if (elapsedTime < TIME_INTERVAL_SEND_MESSAGE) {
            disableButtomSubmit(elapsedTime)
        }
    }
});

// * Animacción de Proyectos y Aplicaciones
const aplicaciones = document.querySelectorAll(
  ".project-list-model-with-image",
);
// console.log(aplicaciones[0].children[1].children[1].children[0]);

aplicaciones.forEach((aplicacion) => {
  console.log(aplicacion.children[1].children[1].children[0]);
  aplicacion.addEventListener("mouseover", (e) => {
    aplicacion.children[1].children[1].children[0].classList.add(
      "p-description-animation",
    );
  });
  aplicacion.addEventListener("mouseout", (e) => {
    aplicacion.children[1].children[1].children[0].classList.remove(
      "p-description-animation",
    );
  });
});

// * Animacion para el boton backtohome
const buttonBackToHome = document.querySelector(".button-home-main");

// Capturando movimiento del scroll
window.addEventListener("scroll", () => {
  console.log("Este es el evento Scroll");
  let position = window.scrollY;
  // Altura maxima de la ventana del navegador de la parte interna (contenido)
  let maxInnerHeight = window.innerHeight;
  // console.log("La altura maxima es: " + maxHeight);
  if (position > maxInnerHeight / 2) {
    buttonBackToHome.setAttribute("style", "display: block");
  } else {
    buttonBackToHome.setAttribute("style", "display: none");
  }
});
