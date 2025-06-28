# Análisis de visualizaciones

## Visualización 1: Diversificación de origen en la UFC (2010–2024)

**Objetivo:**  
Mostrar cómo ha evolucionado la participación de peleadores de distintas regiones del mundo en UFC a lo largo del tiempo.

**Dimensiones:**  
- Eje X: Año  
- Eje Y: Número de peleadores únicos  
- Color: Región

**Mensaje clave:**  
El gráfico evidencia un crecimiento sostenido de peleadores no estadounidenses, consolidando la internacionalización de la UFC. Si bien Estados Unidos sigue dominando en volumen, otras regiones como Brasil, Eurasia y Europa del Este han ganado espacio de forma sostenida desde 2010, lo que implica un escenario competitivo más diverso.

- **Base usada:** `union-clean.csv`  
- **Imagen:** `diversificacion_origen_retro.jpg`

---

## Visualización 2: Finalizaciones por región (2010–2021)

**Objetivo:**  
Comparar los métodos de finalización de pelea más comunes según la región de origen del peleador.

**Dimensiones:**  
- Eje X: Tipo de finalización (KO/TKO, SUB, decisiones, etc.)  
- Eje Y: Número de peleas  
- Color: Región

**Mensaje clave:**  
Brasil lidera en sumisiones, reforzando su herencia del Jiu-Jitsu. Estados Unidos domina tanto en KO como en decisiones unánimes, lo que refleja una combinación de potencia física y preparación táctica. Eurasia y Europa del Este muestran un patrón más controlado con alta proporción de decisiones, coherente con estilos formados en lucha libre o sambo. La región influye en el “cómo” se pelea y se gana.

- **Base usada:** `union-clean.csv`  
- **Imagen:** `finalizaciones_por_region_retro.jpg`

---

## Visualización 3: Duración promedio de peleas ganadas por región (2010–2024)

**Objetivo:**  
Identificar diferencias en la duración de las peleas ganadas según la región de origen del peleador.

**Dimensiones:**  
- Eje X: Duración promedio en minutos  
- Eje Y: Región

**Mensaje clave:**  
Los peleadores de Asia, Norteamérica y Eurasia tienden a ganar en peleas más largas, lo que puede sugerir una estrategia basada en el desgaste o el control. En cambio, regiones como Brasil, Sudamérica y Oceanía presentan duraciones menores, lo que podría estar vinculado a estilos más agresivos o explosivos. Esta métrica refuerza la idea de que la nacionalidad y la cultura de entrenamiento inciden no solo en el estilo de finalización, sino también en el ritmo de combate.

- **Base usada:** `union-clean.csv`  
- **Imagen:** `duracion_promedio_por_region_optimo.jpg`
