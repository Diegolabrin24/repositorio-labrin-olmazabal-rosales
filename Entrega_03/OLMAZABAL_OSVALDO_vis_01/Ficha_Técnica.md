
# Ficha Técnica - Base de Datos Visualización Individual

## 📁 Nombre del archivo
`UFC_fighters_limpia.csv`

## 🧭 Fuente
Base de datos provista por el equipo como parte del proyecto grupal. Corresponde a una versión limpia y preprocesada de un set de datos históricos de peleadores de UFC.

---

## 📝 Descripción general
Este conjunto de datos contiene información técnica y estadística de **1.661 peleadores** de la UFC. Cada fila representa a un peleador e incluye datos físicos (altura, peso, alcance), métricas de desempeño en combate (golpes, derribos, sumisiones) y tipo de postura (`Stance`).

---

## 📊 Variables utilizadas en la visualización

| Variable     | Descripción                                                                 |
|--------------|------------------------------------------------------------------------------|
| `Stance`     | Tipo de postura del peleador (Orthodox, Southpaw, Switch, etc.)             |
| `SLpM`       | Golpes significativos por minuto                                             |
| `SApM`       | Golpes significativos absorbidos por minuto                                 |
| `Str_Acc`    | Precisión de golpes significativos (%)                                       |
| `Str_Def`    | Defensa contra golpes significativos (%)                                     |
| `TD_Avg`     | Promedio de derribos por 15 minutos                                          |
| `TD_Acc`     | Precisión de derribos (%)                                                    |
| `TD_Def`     | Defensa contra derribos (%)                                                  |
| `Sub_Avg`    | Promedio de intentos de sumisión por 15 minutos                              |

---

## ⚙️ Procesamiento realizado
- Se filtraron las 5 posturas más frecuentes para evitar categorías con baja representación.
- Se eliminaron registros con valores nulos en las métricas técnicas seleccionadas.
- Se transformó la base a formato largo (`long format`) para facilitar la comparación por métrica.
- Se agruparon los datos por postura y métrica para calcular promedios.

---

## 🧩 Observaciones
- La base no incluye país de origen ni estilo de pelea (como sambo o BJJ), por lo tanto, **no es posible identificar directamente nacionalidades o escuelas técnicas**.
- La variable `Stance` no es un sustituto perfecto del estilo de pelea, pero sirve como un indicador técnico complementario.
- Algunas métricas pueden variar según la cantidad de peleas de cada luchador (no está incluido el número de combates).

---

## 🧠 Consideraciones finales
Esta base de datos permite explorar patrones de desempeño técnico en peleadores de UFC, lo que es útil para contextualizar preguntas sobre qué estilos de combate tienden a dominar dentro del octágono, aunque **no permite establecer causalidades ni vincular directamente con nacionalidades o estilos como el sambo**.
