# Documentación del proceso de limpieza de datos

## Proyecto: UFC – Estilos de pelea, orígenes y su influencia en los resultados de campeonato

Este documento detalla el proceso de limpieza y preparación de la base de datos utilizada para el análisis del proyecto individual. El objetivo fue construir una base limpia, coherente y útil para analizar el impacto de los estilos de pelea y origen de los peleadores en las peleas por cinturones de campeonato en la UFC.

## Herramientas utilizadas

- Python
- Librería `pandas` para manipulación de datos
- Google Colab (alternativamente puede usarse Jupyter Notebook)
- Editor de texto para documentación (VSCode, Typora, etc.)


## Pasos del proceso de limpieza

### 1. Carga del archivo original

Se utilizó el archivo `UFC_fighter_original.csv`, que contiene los datos sin procesar de 3596 peleadores registrados en la UFC.

### 2. Identificación de variables clave

Según la hipótesis del proyecto, se seleccionaron las siguientes variables como esenciales para el análisis:

- Datos físicos: altura, peso, alcance
- Estilo de pelea (`stance`)
- Fecha de nacimiento (`DOB`)
- Estadísticas de combate: golpes por minuto, precisión, defensa, derribos y sumisiones

### 3. Eliminación de registros incompletos

Para mantener consistencia en el análisis, se eliminaron todos los registros que tenían datos faltantes en alguna de las siguientes columnas:

- `Height`
- `Weight`
- `Reach`
- `Stance`
- `DOB`

Esto permitió conservar una base más precisa, aunque más pequeña.

### 4. Transformación de datos

- **Altura (`Height`)**: convertida de pies y pulgadas (ej. "5' 11"") a centímetros.
- **Peso (`Weight`)**: limpiado el texto "lbs." y convertido a entero.
- **Alcance (`Reach`)**: limpiado el símbolo de pulgadas (`"`) y convertido a entero.
- **Porcentajes** (`Str_Acc`, `Str_Def`, `TD_Acc`, `TD_Def`): se eliminaron los signos `%` y se transformaron en valores numéricos enteros.

### 5. Selección final de variables

Se construyó una base con las siguientes columnas:

- `fighter_name`
- `DOB`
- `Stance`
- `Height_cm`
- `Weight_lbs`
- `Reach_in`
- `SLpM`
- `Str_Acc`
- `SApM`
- `Str_Def`
- `TD_Avg`
- `TD_Acc`
- `TD_Def`
- `Sub_Avg`

---

## Preguntas que se pueden responder con esta base

1. ¿Qué estilos de pelea son más comunes entre los peleadores con mayor alcance o peso?
2. ¿Existen diferencias en la efectividad de derribos y sumisiones entre stances como "Orthodox" y "Southpaw"?
3. ¿Cómo cambian las estadísticas ofensivas y defensivas según el tipo de peleador (striker vs grappler)?
4. ¿Hay patrones en la edad o complexión física de los peleadores con alto promedio de sumisiones?
5. ¿Qué estilos tienen mayor frecuencia de victorias por puntos versus nocaut o sumisión?

---

Esta base de datos es útil para visualizar y analizar cómo los factores físicos y estratégicos influyen en el desempeño de los peleadores. Su limpieza permite avanzar en la validación de la hipótesis sobre el impacto del estilo (como el sambo) y el origen geográfico (como Daguestán) en los resultados de peleas por el campeonato. La base está preparada para ser complementada con otras fuentes, como resultados históricos de peleas por cinturón o rankings de campeones.
