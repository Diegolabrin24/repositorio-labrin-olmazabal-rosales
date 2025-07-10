// Elementos base
const startButton = document.getElementById("start-button");
const pantallaInicial = document.getElementById("pantalla-inicial");
const contenido = document.getElementById("contenido");

const continueButton = document.getElementById("continue-button");
const header = document.getElementById("titulo-fijo");
const paginaReportaje = document.getElementById("pagina-reportaje");
const footer = document.getElementById("footer-retro");
const botonRestart = document.getElementById("boton-restart");
const pantallaMenu = document.getElementById("pantalla-menu");
const botonBack = document.getElementById("boton-back");

// START → CONTINUE
startButton.addEventListener("click", () => {
  pantallaInicial.classList.add("fade-out");

  setTimeout(() => {
    pantallaInicial.style.display = "none";
    pantallaInicial.classList.remove("fade-out");

    contenido.style.display = "flex";

    const contenedorTitulo = document.querySelector(".contenedor-titulo");
    if (contenedorTitulo) contenedorTitulo.style.display = "flex";

    header.style.display = "none";
    paginaReportaje.style.display = "none";
    footer.style.display = "none";
    pantallaMenu.style.display = "none";
  }, 700);
});

// CONTINUE → MENÚ
continueButton.addEventListener("click", () => {
  const titulo = document.querySelector(".contenedor-titulo");
  titulo.classList.add("fade-out");

  setTimeout(() => {
    titulo.style.display = "none";
    titulo.classList.remove("fade-out");

    contenido.style.display = "none";
    pantallaMenu.style.display = "flex";
    pantallaMenu.classList.add("fade-in");

    setTimeout(() => {
      pantallaMenu.classList.remove("fade-in");
    }, 700);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 700);
});

// RESTART → volver al inicio
botonRestart.addEventListener("click", () => {
  contenido.style.display = "none";
  paginaReportaje.style.display = "none";
  header.style.display = "none";
  footer.style.display = "none";
  pantallaMenu.style.display = "none";

  const contenedorTitulo = document.querySelector(".contenedor-titulo");
  contenedorTitulo.style.display = "flex";
  contenedorTitulo.classList.remove("fade-out");

  pantallaInicial.style.display = "flex";
  pantallaInicial.style.opacity = "1";

  window.scrollTo({ top: 0, behavior: "smooth" });

  const dinamico = document.getElementById("contenido-dinamico");
  if (dinamico) dinamico.innerHTML = "";
});

// MENÚ → REPORTAJE con scroll suave tras fade-in
function irASeccion(id) {
  // Desvanece el menú
  pantallaMenu.classList.add("fade-out");

  setTimeout(() => {
    pantallaMenu.style.display = "none";
    pantallaMenu.classList.remove("fade-out");

    // Muestra el reportaje con fade-in
    header.style.display = "block";
    paginaReportaje.style.display = "block";
    footer.style.display = "block";

    header.classList.add("fade-in");
    paginaReportaje.classList.add("fade-in");
    footer.classList.add("fade-in");

    // Esperar que termine el fade-in antes del scroll
    setTimeout(() => {
      header.classList.remove("fade-in");
      paginaReportaje.classList.remove("fade-in");
      footer.classList.remove("fade-in");

      const seccion = document.getElementById(id);
      if (seccion) {
        seccion.scrollIntoView({ behavior: "smooth" });
      }
    }, 700);
  }, 700);
}

// BOTÓN BACK → vuelve a MENÚ
botonBack.addEventListener("click", () => {
  header.classList.add("fade-out");
  paginaReportaje.classList.add("fade-out");
  footer.classList.add("fade-out");

  setTimeout(() => {
    header.style.display = "none";
    paginaReportaje.style.display = "none";
    footer.style.display = "none";

    header.classList.remove("fade-out");
    paginaReportaje.classList.remove("fade-out");
    footer.classList.remove("fade-out");

    pantallaMenu.style.display = "flex";
    pantallaMenu.classList.add("fade-in");

    setTimeout(() => {
      pantallaMenu.classList.remove("fade-in");
    }, 700);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 700);
});
