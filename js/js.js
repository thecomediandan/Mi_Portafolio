  const lanSpanish = document.querySelector(".div-setux--buttom-language--spanish");
  const lanEnglish = document.querySelector(".div-setux--buttom-language--english");

  lanSpanish.addEventListener("click", function() {
    cargarTraducciones("es");
  });

  lanEnglish.addEventListener("click", function() {
    cargarTraducciones("en");
  });
  
  function cargarTraducciones(idioma) {
    // Utilizando Fetch
    fetch("./../content/config/" + idioma + ".json").then(function(response){
      response.json().then(function(traducciones){
        console.log(traducciones);
        aplicarTraducciones(traducciones);
      });
      // console.log(traducciones);
      // aplicarTraducciones(traducciones);
    }).catch(function(error) {
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
  
  // * Animacción de Proyectos y Aplicaciones
  const aplicaciones = document.querySelectorAll(".project-list-model-with-image");
  // console.log(aplicaciones[0].children[1].children[1].children[0]);

  aplicaciones.forEach((aplicacion) => {
    console.log(aplicacion.children[1].children[1].children[0]);
    aplicacion.addEventListener("mouseover", (e) => {
      aplicacion.children[1].children[1].children[0].classList.add("p-description-animation");
    });
    aplicacion.addEventListener("mouseout", (e) => {
      aplicacion.children[1].children[1].children[0].classList.remove("p-description-animation");
    });
  });