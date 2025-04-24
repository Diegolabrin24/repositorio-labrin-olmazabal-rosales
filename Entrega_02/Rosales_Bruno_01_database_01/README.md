# Documentación del Proceso de Limpieza de Datos

## 1. Descripción general

El objetivo es evaluar la hipótesis de que las peleas en la UFC se han vuelto menos atractivas visualmente debido al predominio de estilos de pelea más tácticos y menos espectaculares, como el Sambo o Jujitsu, frecuentemente asociados a peleadores del bloque oriental.

Principalmente, esta base de datos está enfocada en una comparación actual entre combatientes originarios de Europa Oriental y los Estados Unidos. Además de analizar sus respectivos estilos de pelea, se contrastan también otros factores relevantes para la investigación, como por ejemplo: porcentaje de victorias y derrotas de ambos bandos, cantidad de peleadores estadounidenses versus euroasiáticos, etc.

## 2. Herramientas utilizadas

* **Edición desde Excel (formato original del dataset)**:
    En primer lugar, eliminé a todos los combatientes que no fueran euroasiáticos (sinónimo que utilizaremos para Europa Oriental o Europa del Este) o estadounidenses.

    Luego, borré manualmente desde Excel todos los datos innecesarios mencionados con anterioridad en la ficha técnica y que especificaré a continuación.

## 3. Pasos realizados en la limpieza

### Paso 1: Encontrar y cargar el archivo original

Se importó el archivo que contenía estadísticas de peleadores de diversas nacionalidades, características físicas y técnicas. La hoja utilizada fue la orignial: `ufc_fighters_stats`. La cual, fue subida en formato "csv" a Excel.

### Paso 2: Traducción de columnas

Se tradujeron los encabezados de las columnas al español para facilitar su interpretación y análisis.

### Paso 3: Eliminación de columnas innecesarias

Se eliminaron las siguientes columnas por no aportar valor a la hipótesis investigativa del proyecto:

* `nickname` (apodo)
* `arm_reach_inch` (alcance de brazos)
* `leg_reach_inch` (alcance de piernas)

Estas variables no son relevantes para el análisis de estilos de pelea ni del origen de los peleadores. Si bien, tener extremidades más longevas o cortas puede determinar la forma en que un peleador lucha, no necesariamente determina su estilo de pelea ni tampoco es propicio para la investigación, ya que se ampliaria considerablemente más el foco del proyecto.

### Paso 4: Filtrado geográfico

Se filtró la base para conservar únicamente peleadores provenientes de:

* **Estados Unidos**
* **Europa del Este**, incluyendo países como: Rusia, Georgia, Ucrania, Polonia, Rumania, etc.

Esto permite realizar comparaciones específicas y alineadas a la hipótesis, reduciendo el foco a jugadores de nacionalidades específicas, tomando en cuenta que la empresa es estadounidense.

### Paso 5: Revisión y normalización

Se revisaron los datos para identificar errores, valores nulos y formatos incoherentes. Se estandarizaron las fechas, nombres de divisiones de peso y se revisó la consistencia del campo `estilo_pelea`.

## 4. Fuentes de datos

* **Base de datos pública** con estadísticas de UFC.
* **Sitio oficial de la UFC**: (https://www.ufc.com)
* **Wikipedia e internet en general** (en menor medida) para verificación cruzada de datos faltantes acorde a la fecha de la base de datos.

## 5. Preguntas que se pueden responder con esta base de datos

1.  **¿Qué estilos de pelea son más comunes entre los campeones de Europa del Este versus los de Estados Unidos?**
2.  **¿Hay una diferencia en la proporción de victorias por sumisión o decisión según el país de origen del peleador?**
3.  **¿Qué nacionalidad es más numerosa en la UFC?**
4.  **¿Cuál es el peso promedio, la edad o la experiencia de los peleadores con estilos más conservadores de lucha?**

Estas preguntas pueden explorarse mediante tablas dinámicas, gráficos de barras o análisis de correlación simple.

## 6. Observaciones finales

La limpieza de esta base de datos tiene como propósito principal permitir una visualización clara de las diferencias en estilo y efectividad entre luchadores de distintas regiones. Esta limpieza constituye el insumo clave para el análisis narrativo y visual que se realizará en la siguiente etapa del proyecto.

Sin embargo, aún falta pulir ciertos datos a medida que avancemos en el trabajo y el semestre, sobre todo en los combates que se vayan desarrollando durante el mismo tiempo.
