# Más allá de fronteras: cómo la diversidad de orígenes transforma estilos de pelea y finalizaciones en la UFC

---

## Síntesis del proyecto

Este reportaje web investiga cómo la internacionalización y diversificación geográfica de la UFC ha transformado los estilos de combate y los métodos de finalización de las peleas en la última década y media.  
A partir de bases de datos públicas, visualizaciones estadísticas y una narrativa digital periodística, identificamos patrones que relacionan el origen de los peleadores con las formas en que se compite y se gana en el octágono.  
El resultado es una webstory de inspiración arcade, combinando gráficos interactivos, gifs y análisis crítico con una experiencia visual lúdica y accesible para cualquier usuario.

---

## Hipótesis trabajada

> La diversificación del origen de los peleadores en la UFC, ha modificado profundamente los estilos de combate, los métodos de finalización y la propia narrativa del deporte, desplazando la hegemonía tradicional de estadounidenses y brasileños.

---

## ¿Qué pasó con la hipótesis inicial?

El grupo partió preguntándose si el dominio de estilos como el sambo, mayoritariamente provenientes de Eurasia, había hecho las peleas de campeonato menos “vistosas”. Sin embargo, la exploración de los datos reveló limitaciones para aislar sólo combates por cinturón.  
Por ello, reformulamos el foco hacia un análisis más general de la diversificación del origen, observando cómo la globalización de la UFC influye en el estilo de pelea y las formas de finalización.  
La hipótesis se ajustó para responder no solo al efecto de Eurasia, sino a la evolución global y regional en la UFC.

---

## Metodología detallada

El proyecto trabajó con tres bases principales:
- Una base de Kaggle con información estructurada de peleas y peleadores.
- Un set curado y extendido, con datos adicionales recolectados por el grupo.
- Una base unificada (`union-clean.csv`), consolidada tras limpieza, filtrado y cruce de múltiples columnas de interés.

En total se analizaron más de 8.000 registros de peleas (2010–2024), incluyendo:  
- Nombre, fecha, región de origen, método de finalización, duración, ganador, etc.  
Se unificaron regiones (por ejemplo, “Eastern Europe”, “Russia”, “Dagestan” → “Eurasia”), se generaron nuevas columnas derivadas (ej: minutos de combate), y se validó toda la información numérica y categórica.

**Herramientas principales:**  
- Python (pandas, matplotlib, seaborn, folium)
- Google Colab
- Visual Studio Code, GitHub
- HTML, CSS y JavaScript para el desarrollo web  
El proceso y todos los scripts/notebooks están documentados en el repositorio público.

---

## Evolución de la narrativa y el contenido

Inicialmente, la hipótesis era que el dominio de peleadores de Europa del Este volvía la UFC menos espectacular, privilegiando sumisiones y decisiones técnicas. Pero al analizar los datos, el grupo comprobó que la diversificación geográfica afecta no solo el espectáculo, sino la variedad de estilos, duración y métodos de finalización en todas las regiones.

El texto final fue escrito con estilo de reportaje digital, y cada bloque narra la expansión global de la UFC, las diferencias regionales de estilos y el impacto en la dinámica de las peleas. El ejemplo de Israel Adesanya en UFC 243, la galería de campeones y las visualizaciones refuerzan esta narrativa.

Las fuentes usadas fueron: bases de datos públicas, Wikipedia, ESPN, artículos académicos y datos oficiales UFC.

---

## Tabla de autoría

| Nombre              | Rol principal                        | Aportes clave                                           |
|---------------------|--------------------------------------|---------------------------------------------------------|
| Bruno Rosales       | Visualizaciones y limpieza de datos  | Generación de visualizaciones, análisis gráfico, depuración de datos |
| Osvaldo Olmazabal   | Narrativa y análisis periodístico    | Redacción de reportaje, análisis de datos, interpretación de visuales |
| Diego Labrin        | Desarrollo web y edición visual      | Programación web, edición visual, curaduría de gifs y recursos gráficos |

---

## Análisis de visualizaciones (principales)

### 1. Métodos de Finalización por Región (2010–2021)
Gráfica de barras arcade que muestra qué métodos de finalización predominan según la región del peleador (KO/TKO, sumisión, decisión).  
Revela que Brasil domina en sumisiones, Eurasia en decisiones unánimes, y EE.UU. en KO y decisiones, lo que refleja la influencia cultural y técnica de cada región.  
**Ver imagen:** `finalizaciones_por_region.jpg`

### 2. Evolución de los Métodos de Finalización en UFC (2010–2024)
Gráfico de líneas estilo retro que expone cómo la decisión unánime ha superado al KO como principal forma de victoria desde 2016, y cómo las sumisiones se mantienen estables pero sin recuperar el dominio inicial.  
Demuestra el aumento de la táctica y el control en el octágono a medida que la UFC se globaliza.  
**Ver imagen:** `evolucion_finalizaciones.jpg`

### 3. Duración promedio de peleas ganadas por región (2010–2024)
Barra horizontal comparativa con estética arcade. Eurasia y Asia lideran en peleas largas (más de 11 minutos), lo que coincide con estilos enfocados en el desgaste, la táctica y el control posicional.  
Estados Unidos y Brasil mantienen duraciones menores por estilos más explosivos y de finalización rápida.  
**Ver imagen:** `duracion_promedio_por_region.jpg`

### 4. Mapa interactivo de orígenes UFC
Mapa generado con Folium/Jupyter, integrado como iframe en la web. Muestra la distribución global de peleadores, destacando la explosión de países representados y el auge de regiones como Eurasia, África y Asia.

---

## Diseño visual, experiencia e interacción

El sitio adopta una **estética retro arcade**, inspirada en videojuegos de combate clásicos (Street Fighter, Mortal Kombat), con tipografía pixelada (“Press Start 2P”), paleta de azul marino y acentos naranjo, botones consola y efectos sonoros para simular la experiencia de una máquina recreativa.

La navegación es tipo “niveles”: un menú central da acceso a cada bloque temático, y el usuario avanza por la historia como si superara etapas de un juego.  
Las transiciones suaves (fade in/out), menús fijos, galería de gifs y tarjetas de campeones refuerzan la lógica interactiva y lúdica, sin perder claridad ni rigor.

Cada visualización está integrada en el flujo narrativo y acompañada de bajadas interpretativas, siguiendo los principios del periodismo de datos vistos en clase: contexto, mensaje y conexión con la hipótesis.

---

## Recursos y créditos visuales

- Visualizaciones en Python (matplotlib, seaborn), diseño y retoque gráfico propio
- Gifs animados de peleas icónicas y campeones actuales
- Mapas interactivos (Folium)
- Tipografía: Press Start 2P (Google Fonts), Roboto para textos corridos
- Paleta de colores: #000e38 (fondo), #FFA500 (acentos), #1A1A1A (paneles)
- Inspiración visual: Street Fighter, Mortal Kombat, cultura arcade/retro
- Logo, personajes y recursos visuales originales, editados por el equipo

---

## Enlaces

- [Repositorio en GitHub](https://github.com/Diegolabrin24/repositorio-labrin-olmazabal-rosales)

---

## Información adicional

- **Curso:** COM-208, Pontificia Universidad Católica de Chile
- **Semestre:** Primer semestre 2025
