# Proceso de Limpieza de la Base de Datos de Peleas
A continuación, se detalla paso a paso cómo se llevó a cabo el proceso de limpieza:
## Documentación
El objetivo de esta documentación es explicar el paso a paso de la limpieza de datos de la base que escogí. La principal hipótesis que presentamos dentro de nuestro proyecto es si realmente la irrupción de peleadores euroasiáticos dentro de la UFC con un estilo de pelea más “aburrido” a afectado a las peleas en este último tiempo. 
Esta base de datos estará enfocada en mostrar todas las carteleras de la UFC desde 2010-2024 para así mostrar la irrupción de los peleadores euroasiáticos en la UFC, la duración de sus peleas en comparación con otras de su misma división de peso, y demostrar que estos tipos de peleadores vuelven más aburrida a la UFC. 
## Herramientas para la limpieza de los datos 
Excel: Se utilizó Excel para poder eliminar las columnas innecesarias o no pertinentes para la elaboración de la nueva base de datos. Existían columnas que no aportaban nada para nuestra hipótesis, así que manualmente las fui eliminando.
## Limpieza de datos 
1. Paso 1: Abrir la base de datos que encontré por internet y ver si realmente cuadraba con el tema escogido. 
2. Paso 2: Identificar cuáles eran las columnas inútiles o no pertinentes para nuestro proyecto para borrarlas manualmente. 
3. Paso 3: La siguiente etapa consistió en identificar y seleccionar únicamente las columnas que considere útiles:
- Nombres de los peleadores: RedFighter/BlueFighter
- Lugar del evento: Location
- Duración de la pelea: TotalFightTimeSecs
- Duración del round final: FinishRoundTime
- División de los peleadores: WeightClass
- Fecha del evento: Date
- Ganador de la pelea: Winner
- Detalles de la finalización: FinishDetails
- Método o cómo acabó la pelea: Finish
Este proceso implicó revisar los nombres de columnas y asegurarse de que coincidieran exactamente. También, el verificar si es que las columnas que no cuadraban con este proyecto hayan sido eliminadas por completo. 
4. Paso 4: Borrar manualmente todas las otras columnas que no fueran las del paso 3 para así solo dejar lo que me interesaba. 
5. Paso 5: Exportar en un nuevo .csv la nueva base de datos limpia. 
## Fuentes de los datos: 
-	La propia UFC con todas sus carteleras desde el 2010-2024.
Esta fuente fue utilizada porque la UFC tiene públicamente todas las carteleras que se han hecho durante toda su historia, por lo cual, el identificarlas nos ayudará para lo que resta del proyecto.
-	Wikipedia: Wikipedia tiene todas las carteleras de la historia de la UFC, por lo cual así se hace más fácil comparar si tenemos todas las carteleras de 2010-2024 dentro de la base de datos.  
## Posibles preguntas que se pueden responder con la base de datos 
1.	¿Cuál es la división con más finalizaciones por sumisión?
2.	¿Qué ciudad o lugar ha tenido más eventos de peleas?
3.	¿Cuál ha sido la duración promedio de las peleas en cada categoría de peso?
4.	¿Cuántos peleadores practicantes de sambo ha habido en el periodo de tiempo 2010-2024? 
## Observaciones finales
La limpieza de los datos hecha fue algo meramente funcional. Sirve para enfocarse en los datos que verdaderamente nos importan, especialmente en donde ocurrieron las peleas a través de los años, quienes las ganaron, la duración de su victoria, y especialmente, el poder identificar a aquellos peleadores de Europa del Este (practicantes de sambo) que hayan peleado durante este intervalo de tiempo 2010-2024.
Con está base de datos como punto de partida, nos viene bien para el proyecto del reportaje visual. 
