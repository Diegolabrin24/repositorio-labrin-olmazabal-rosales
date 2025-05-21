# Documentación de la Visualización - Entrega 03

## 1. ¿Cómo se realizó el proceso de visualización?

La visualización fue creada utilizando la librería **Altair** en **Python**, a través del entorno Google Colaboratory. El proceso se dividió en los siguientes pasos:

1. **Carga de la base de datos limpia**: se subió el archivo `Base_de_datos_limpia_UFC_NA.csv` a Colab y se leyó con `pandas`.
2. **Clasificación regional**: se creó una nueva columna llamada `region`, donde se agruparon los países en dos bloques: *Estados Unidos* y *Europa del Este*. Esta clasificación se hizo manualmente a partir de una lista de países definidos como parte de Europa del Este.
3. **Filtrado**: se eliminaron las filas que no tenían información sobre el estilo de pelea (`NaN`) para enfocarse en aquellos peleadores que sí declaran una disciplina dominante.
4. **Agrupación**: se agruparon los datos por `region` y `estilo_pelea` para contar cuántos peleadores de cada región utilizan cada estilo.
5. **Visualización con Altair**: se construyó un gráfico de barras horizontales que compara visualmente los estilos de pelea más comunes entre Estados Unidos y Europa del Este, destacando los estilos más dominantes por región.
6. **Exportación**: la visualización se exportó en dos formatos: `.html` (versión interactiva) y `.jpg` (imagen estática derivada de `.png`).

## 2. Base de datos utilizada y procesamiento

La base de datos utilizada fue `Base_de_datos_limpia_UFC_NA.csv`, elaborada previamente en la Entrega 02 a partir de una base original con información general de peleadores de UFC. Esta base fue seleccionada porque contiene las variables necesarias para analizar el estilo de pelea, la nacionalidad de los peleadores y otras métricas relevantes para la hipótesis del proyecto.

Procesamiento adicional realizado:

- Traducción de encabezados al español.
- Eliminación de columnas irrelevantes como apodos y alcances físicos.
- Filtrado geográfico por países específicos.
- Normalización de valores numéricos que estaban en notación científica o tenían separadores incorrectos.
- Conservación del valor `"NA"` en la columna `estilo_pelea` cuando no aplica, sin eliminar la fila en la base limpia general (aunque se excluyó para esta visualización puntual).

Esta base permite realizar comparaciones cuantitativas y cualitativas entre regiones de origen y las disciplinas más utilizadas dentro del octágono.

## 3. Preguntas que responde esta visualización

- **¿Qué estilos de pelea son más comunes entre los peleadores de Europa del Este y los de Estados Unidos?**
- **¿Qué disciplinas aparecen exclusivamente en una de las dos regiones?**
- **¿Qué tan dominante es la MMA como disciplina base en ambos bloques geográficos?**
- **¿Hay presencia del Sambo en Estados Unidos?**
- **¿Se nota una tendencia hacia estilos más estratégicos o de control en alguna región?**

Esta visualización entrega un punto de partida para reflexionar sobre la evolución técnica de la UFC, vinculando directamente los datos con el relato central del proyecto: la transformación del espectáculo en eficiencia táctica.
