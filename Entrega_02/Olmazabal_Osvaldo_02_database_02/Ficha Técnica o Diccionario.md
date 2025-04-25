# Ficha Técnica de la Base de Datos Limpia: ufc_champs_limpia.csv

## Fuente de los datos
Base original: `raw_fighter_details.csv` proporcionada por el usuario, que contiene detalles de peleadores de UFC.

## Metodología de construcción
Eliminé los registros con datos faltantes en variables clave (`Height`, `Weight`, `Reach`, `Stance`, `DOB`). 
Se estandarizaron y convirtieron unidades: altura a centímetros, peso a libras, alcance a pulgadas.
Eliminar símbolos no numéricos como `%`, `"`, `lbs.`. 
Aplicacinón de limpieza y selección de variables relevantes para el análisis.

## Alcance de los datos
Incluye solo peleadores con datos completos y relevantes para el análisis de estilos de combate y efectividad.
Número de registros finales: **(puedes completar con el número exacto de filas resultantes)**  
Número de variables: **14**

## Características de los datos
Cada fila representa un peleador de UFC con sus características físicas y estadísticas de combate.

## Variables incorporadas

| Variable      | Descripción                                                                 |
|---------------|-----------------------------------------------------------------------------|
| fighter_name  | Nombre del peleador.                                                        |
| DOB           | Fecha de nacimiento.                                                        |
| Stance        | Estilo de pelea (Orthodox, Southpaw, etc.).                                 |
| Height_cm     | Altura del peleador en centímetros.                                         |
| Weight_lbs    | Peso del peleador en libras.                                                |
| Reach_in      | Alcance del peleador en pulgadas.                                           |
| SLpM          | Golpes significativos por minuto.                                           |
| Str_Acc       | Precisión de golpes (como porcentaje entero).                               |
| SApM          | Golpes significativos recibidos por minuto.                                 |
| Str_Def       | Porcentaje de defensa de golpes (como porcentaje entero).                   |
| TD_Avg        | Promedio de derribos por pelea.                                              |
| TD_Acc        | Precisión de derribos (como porcentaje entero).                             |
| TD_Def        | Porcentaje de defensa contra derribos (como porcentaje entero).             |
| Sub_Avg       | Promedio de intentos de sumisión por pelea.                                 |

## Observaciones
Esta base se centró en variables útiles para estudiar el estilo y efectividad de peleadores en contextos de campeonato, lo que permite evaluar hipótesis sobre su impacto en la vistosidad y resultado de las peleas.
