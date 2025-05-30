import sendMessage from "./sendMessage.js";

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


// ? Animacion del Mensaje de alerta personalizado
const alertMessage = document.querySelector(".alert-message");
const alertMessageSpan = document.querySelector(".alert-message span");
const alertMessageImg = document.querySelector(".alert-message img");

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
  event.preventDefault();
  await sendMessage(formEmail.value, formName.value, formMessage.value).then(() => {
    console.log("Mensaje enviado exitosamente!");
    alertMessageShow("Mensaje enviado exitosamente!", "success-alert");
    setTimeout(() => {
      alertMessageHide();
    }, 3000);
  }
  ).catch((error) => {
    console.log(`Fallo el envio del mensaje: ${error}`);
    alertMessageShow("Fallo el envio del mensaje", "fail-alert");
    setTimeout(() => {
      alertMessageHide();
    }, 3000);
  });
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
