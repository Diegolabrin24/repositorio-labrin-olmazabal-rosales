# Documentación de la Visualización - Entrega 03

## Selección y carga de la base de datos
Archivo utilizado: Base_de_datos_limpia.csv, un archivo en formato CSV con información detallada sobre combates de MMA.

Motivo de la selección: Esta base contiene una variable clave (Finish) que permite conocer cómo terminaron los combates, lo cual es perfecto para analizar patrones y tendencias en los resultados de las peleas.

Relevancia: Incluye suficientes variables descriptivas para contextualizar cada pelea (fecha, peleadores, categoría de peso, método de victoria), permitiendo distintos tipos de análisis deportivos y estadísticos.

## Procesamiento de la base de datos

Lectura del archivo CSV: Usamos pandas en Python para cargar los datos en un DataFrame.

Exploración inicial: Revisamos las primeras filas y nombres de columnas para entender la estructura del dataset.

Limpieza ligera: No fue necesario un proceso profundo de limpieza. Solo se trató con valores nulos en FinishDetails que no afectaban nuestro objetivo visual.

Agrupación: Se utilizó la función value_counts() para contar cuántas veces aparece cada tipo de finalización en la columna Finish.

## Visualización de los datos

Herramienta utilizada: Altair.

Proceso de creación del gráfico:

Se generó un gráfico de barras para representar las cantidades de cada tipo de finalización.

Se tradujeron las siglas (SUB, KO/TKO, etc.) a nombres completos para mejorar la comprensión.

Se incorporaron tooltips con explicaciones para que el usuario entienda cada categoría al pasar el cursor.

Se definieron el eje X (tipo de finalización), eje Y (cantidad) y color para mejorar la claridad visual.

Se personalizó el gráfico con título, tamaño y etiquetas descriptivas.

## Ejemplos de preguntas que esta visualización puede responder

¿Cuál es la forma más frecuente en que terminan las peleas en MMA?

¿Qué tan común es una sumisión en comparación con un nocaut?

¿Se gana más por decisión o por finalización directa?

¿Qué métodos son los menos frecuentes, y podrían considerarse inusuales?

¿Es la decisión dividida tan rara como parece frente a otras formas de terminar?