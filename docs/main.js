// Elementos base
const startButton = document.getElementById("start-button");
const pantallaInicial = document.getElementById("pantalla-inicial");
const contenido = document.getElementById("contenido");

const continueButton = document.getElementById("continue-button");
const header = document.getElementById("titulo-fijo");
const paginaReportaje = document.getElementById("pagina-reportaje");
const footer = document.getElementById("footer-retro");
const botonRestart = document.getElementById("boton-restart");

// START
startButton.addEventListener("click", () => {

  // Oculta la pantalla de inicio
  pantallaInicial.style.opacity = "0";

  // Reinicia la estructura
  setTimeout(() => {
    pantallaInicial.style.display = "none";

    // 🔄 Vuelve a mostrar la pantalla con el botón CONTINUE
    contenido.style.display = "flex";

    // 🔄 Vuelve a mostrar el bloque que contiene el botón CONTINUE
    const contenedorTitulo = document.querySelector(".contenedor-titulo");
    if (contenedorTitulo) {
      contenedorTitulo.style.display = "flex";
    }

    // 🔁 Oculta nuevamente el header, main y footer por si quedaron visibles
    header.style.display = "none";
    paginaReportaje.style.display = "none";
    footer.style.display = "none";
  }, 1000);
}); 

// CONTINUE
continueButton.addEventListener("click", () => {
  const titulo = document.querySelector(".contenedor-titulo");

  // Aplica fade out
  titulo.classList.add("fade-out");

  setTimeout(() => {
    // Oculta el contenedor de CONTINUE
    titulo.style.display = "none";

    // Muestra con efecto el contenido principal
    header.style.display = "block";
    paginaReportaje.style.display = "block";
    footer.style.display = "block";

    // Agrega fade-in al main
    paginaReportaje.classList.add("fade-in");

    // Opcional: volver al top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1000);
});

// RESTART
botonRestart.addEventListener("click", () => {
  // Oculta todo lo visible
  contenido.style.display = "none";
  paginaReportaje.style.display = "none";
  header.style.display = "none";
  footer.style.display = "none";

  // ✅ Reaparecer contenedor-titulo (botón CONTINUE)
  const contenedorTitulo = document.querySelector(".contenedor-titulo");
  contenedorTitulo.style.display = "flex";
  contenedorTitulo.classList.remove("fade-out");

  // ✅ Vuelve a mostrar pantalla START
  pantallaInicial.style.display = "flex";
  pantallaInicial.style.opacity = "1";

  // Reinicia scroll
  window.scrollTo({ top: 0, behavior: "smooth" });

  // (Opcional) limpia contenido dinámico
  const dinamico = document.getElementById("contenido-dinamico");
  if (dinamico) dinamico.innerHTML = "";
});