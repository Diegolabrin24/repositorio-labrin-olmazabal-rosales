# Ficha Técnica de la Base de Datos

## 1. Fuente de los datos

Los datos fueron obtenidos de una base de datos pública sobre peleadores de la UFC, complementada con información disponible en la página oficial de la UFC ([https://www.ufc.com/](https://www.ufc.com/)) y otras fuentes abiertas especializadas en estadísticas de MMA.

## 2. Metodología de construcción de la base

La base original contenía datos de peleadores de múltiples nacionalidades y con una variedad de atributos físicos y técnicos. Para construir esta base de datos limpia se realizó el siguiente proceso:

- Traducción de los encabezados y categorías al español para facilitar su análisis por parte de hablantes hispanos.
- Eliminación de columnas irrelevantes para el objetivo de investigación, como apodos y medidas de alcance de brazos y piernas.
- Filtrado de los datos para conservar solamente a peleadores originarios de **Estados Unidos** y **Europa del Este** (incluyendo Rusia).
- Conservación de variables relevantes para analizar: estilos de pelea, origen, desempeño y categoría de peso.
- Revisión de errores y normalización de formatos (fechas, nombres de divisiones, etc.).

## 3. Alcance de los datos

- **Cobertura temporal:** Datos hasta 2024.
- **Cobertura geográfica:** Solo peleadores de Estados Unidos y países de Europa del Este.
- **Unidad de análisis:** Cada fila representa un peleador profesional, que se encuentre combatiendo en la UFC, diferenciados por pesos.

## 4. Características de los datos

Los datos se centran en las estadísticas básicas y el estilo de pelea de los luchadores, con el objetivo de identificar patrones por región geográfica y técnica dominante. Esta información permitirá analizar si ciertos estilos (como el Sambo o Jiu-Jitsu, etc.) están correlacionados con formas de victoria menos “atractivas” para el público, en línea con la hipótesis del proyecto. Además, se busca contrastar el perfil técnico de los peleadores provenientes de Europa del Este versus Estados Unidos.

## 5. Variables incorporadas

| Variable              | Descripción                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| nombre                | Nombre de pila del peleador                                            |
| apellido              | Apellido del peleador                                                  |
| ciudad                | Ciudad de origen o residencia declarada                                |
| pais                  | País de origen                                                         |
| edad                  | Edad del peleador                                                      |
| victorias             | Número total de combates ganados                                       |
| derrotas              | Número total de combates perdidos                                      |
| empates               | Número total de empates                                                |
| porcentaje_victorias | Porcentaje de victorias sobre el total de combates (en formato decimal) |
| porcentaje_derrotas  | Porcentaje de derrotas sobre el total de combates (en formato decimal)  |
| numero_pelea         | Total de combates registrados                                          |
| division_peso        | División de peso en la que compite                                     |
| altura_pies          | Altura del peleador en pies (formato decimal automatizado)             |
| peso_libras          | Peso del peleador en libras                                            |
| estilo_pelea         | Estilo o técnica principal de pelea declarada (ej: Sambo, Boxeo, etc.) |
| debut                | Fecha del debut profesional en UFC                                     |

## 6. Observaciones

- Algunas filas pueden tener valores nulos en los estilos de pelea (NA), ya que estos peleadores combinan varios estilos.
- La altura está expresada en un formato decimal automatizado derivado del sistema interno de registro original del dataset.
- Se conservan únicamente atributos considerados directamente relevantes para probar la hipótesis del proyecto o similar.
- La base está diseñada para facilitar visualizaciones comparativas y análisis exploratorios.
- Algunos datos no están actualizados al 2025. Sin embargo, las cifras varían entre una o dos peleas con respecto a los combates recientes.
