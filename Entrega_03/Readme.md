# README - Entrega 03: Visualización Individual

## ✍️ Título de la visualización
**Las huellas del estilo: cómo se pelea en la UFC, según la postura**

---

## 📌 Hipótesis individual

Aunque la nacionalidad y el estilo de pelea específico no están disponibles en esta base, es posible detectar **patrones técnicos según la postura de combate**, lo que permite inferir tendencias que se relacionan con estilos dominantes (como el sambo, el boxeo o el muay thai). Esta visualización busca evidenciar cómo las posturas se asocian con ciertas lógicas de combate, aportando contexto a la hipótesis grupal sobre el dominio de peleadores de Eurasia y el impacto del sambo.

---

## 🎯 Objetivo de la visualización

Explorar y comparar el rendimiento técnico promedio de los peleadores de la UFC **según su tipo de postura**, utilizando métricas como frecuencia de golpeo, defensa, derribos y sumisiones. La idea es identificar perfiles técnicos generales que, si bien no revelan directamente el estilo de pelea, permiten **establecer inferencias relevantes sobre las estrategias predominantes en el octágono**.

---

## 🔧 Proceso de trabajo

1. **Carga y exploración del CSV `UFC_fighters_limpia.csv`** con datos de 1661 peleadores.
2. **Selección de las posturas más frecuentes** (`Orthodox`, `Southpaw`, `Switch`, etc.) para filtrar los casos más representativos.
3. **Conversión del dataframe a formato largo** (`long format`) para comparar múltiples métricas en un solo gráfico.
4. **Uso de Altair** para crear un gráfico de barras facetado, donde cada columna representa una postura distinta, con promedios por métrica.
5. **Instalación y configuración de VegaFusion en Google Colab** para permitir el renderizado de más de 5000 filas.

---

## 📊 Métricas incluidas en la visualización

- `SLpM`: Golpes significativos por minuto
- `SApM`: Golpes significativos absorbidos por minuto
- `Str_Acc`: Precisión de golpeo (%)
- `Str_Def`: Defensa contra golpes (%)
- `TD_Avg`: Promedio de derribos por 15 minutos
- `TD_Acc`: Precisión de derribos (%)
- `TD_Def`: Defensa contra derribos (%)
- `Sub_Avg`: Promedio de intentos de sumisión por 15 minutos

---

## ❓ ¿Qué preguntas permite responder esta visualización?

- ¿Qué diferencias técnicas existen entre peleadores según su postura?
- ¿Qué tipo de posturas se asocian con estilos ofensivos o defensivos?
- ¿Se puede inferir el enfoque estratégico (striker vs grappler) según el rendimiento en estas métricas?
- ¿Cómo se relacionan estas posturas con la narrativa grupal sobre el dominio técnico del sambo y su posible impacto en el estilo de combate actual?

---

## 🤝 Relación con el proyecto grupal

Esta visualización sirve como **contexto técnico** para reforzar el análisis que mis compañeros están haciendo sobre la expansión del sambo y los peleadores de Eurasia en la UFC. Aunque esta base no incluye nacionalidades ni estilos explícitos, **las métricas permiten aproximarse al "cómo se pelea" en el octágono**, un punto esencial para entender por qué ciertos estilos —como el sambo— se han consolidado como dominantes.

---

## 📁 Archivos generados

- `/visualizacion/vis_01.html`: visualización interactiva
- `/visualizacion/vis_01.jpg`: imagen exportada (en caso de que se use)
- `/visualizacion/cronica.md`: texto narrativo complementario
- `/scripts/codigo_para_visualizar_1.ipynb`: script Jupyter completo del proceso

---

## 🔄 Reproducibilidad

Este proyecto fue realizado íntegramente en Google Colab. Para reproducirlo, solo es necesario:
1. Subir el archivo `UFC_fighters_limpia.csv`
2. Ejecutar el script ubicado en `/scripts`
3. Asegurar la instalación de `vegafusion` y `vl-convert-python`
