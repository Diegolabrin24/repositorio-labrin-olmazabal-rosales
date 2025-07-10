# Análisis de diseño e historia de la webstory

## 1. Estructura narrativa y recorrido del usuario

La historia está organizada como una **webstory interactiva con estructura escalonada**, que guía al lector desde una introducción visual llamativa hasta un reportaje completo basado en datos. El recorrido incluye:

- **Pantalla de inicio estilo arcade**, con botón START y efectos visuales retro.
- Una segunda pantalla con el botón CONTINUE, que activa el ingreso a la historia.
- Un encabezado fijo con el título y logo, que refuerza el estilo narrativo.
- Una **galería de gifs animados** para presentar a peleadores icónicos, lo que contextualiza visualmente el fenómeno UFC.
- Luego, la historia se despliega en **scroll vertical**, combinando texto periodístico con visualizaciones y recursos interactivos como mapas (`iframe`).
- El lector puede avanzar de forma lineal, con visualizaciones explicadas en contexto y bloques de datos integrados.
- Al final, un botón RESTART permite volver al comienzo, evocando el estilo de los videojuegos arcade.

Esta arquitectura narrativa propone un **viaje inmersivo y temático**, utilizando una interfaz sencilla de explorar, sin fragmentar la lectura en múltiples páginas.

---

## 2. Estilo narrativo y textual

El texto adopta un **estilo periodístico de largo aliento**, basado en el género del **reportaje narrativo con datos**. El objetivo es contar una historia global: cómo la UFC pasó de ser un torneo local a un fenómeno deportivo internacional.

- La narración es cronológica y temática, combinando relato histórico, datos estadísticos y citas verificables.
- Se prioriza el **lenguaje claro, riguroso y atractivo**, con énfasis en la conexión entre regiones geográficas y estilos de combate.
- Las visualizaciones se integran en los momentos clave del relato, no como anexos, sino como parte de la evidencia argumentativa.
- La historia contiene secciones tituladas: “El origen”, “La expansión global”, “Estilos de combate”, etc., lo que facilita su navegación y refuerza la coherencia discursiva.

Este enfoque busca no solo informar, sino **sumergir al lector en un fenómeno cultural y técnico**, aportando contexto e interpretación a partir de datos.

---

## 3. Decisiones visuales y de diseño

El diseño del sitio apuesta por una **estética retro/arcade**, inspirada en videojuegos como Street Fighter o Mortal Kombat, para reflejar:

- La **cultura visual de los deportes de combate**, que mezcla agresividad, espectáculo y estética digital.
- La **diversidad cultural** representada en la UFC: un ring global donde chocan estilos, orígenes y escuelas de lucha.

### Paleta y estética:
- **Fondo oscuro** (#000e38) para contraste y lectura cómoda.
- **Color principal:** Naranja neón (#FFA500) para botones, bordes e iluminación.
- **Tipografías:**  
  - `Press Start 2P` para títulos y botones (pixelada, estilo arcade).  
  - `Roboto` para el cuerpo del texto (moderna y legible).

### Elementos visuales clave:
- **Galería de gifs** con campeones icónicos como Khabib y Chimaev.
- **Imágenes de visualizaciones** con bordes brillantes y sombreado retro.
- **Botones START / CONTINUE / RESTART** con efectos de escala y sombra para interacción visual y emocional.
- **Mapa interactivo** (`iframe`) con borde rojo y sombra amarilla que refuerza el tono de videojuego.

En conjunto, estas decisiones visuales no solo embellecen, sino que **refuerzan el sentido narrativo**: mostrar cómo la globalización de la UFC es una historia de confrontación, diversidad y espectáculo. El diseño, por tanto, no es decorativo, sino **coherente con la identidad y el mensaje** de la historia.

---
