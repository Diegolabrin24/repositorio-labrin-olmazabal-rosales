# Ficha Técnica – Base de Datos de Finalizaciones en Combates de MMA

Características Generales de los Datos: 

Origen: Base de datos compilada de eventos de artes marciales mixtas, proveniente desde registros públicos de los eventos y carteleras de la UFC.

Formato del archivo: CSV (Base_de_datos_limpia.csv)

Número de registros: 6.224 combates

Cobertura temporal: Contiene eventos fechados desde 2010 hasta 2024.

Nivel de análisis: Cada fila representa un combate individual entre dos peleadores.

# Variables 

Variable	y    Descripción
RedFighter: 	Nombre del peleador asignado al rincón rojo
BlueFighter:	Nombre del peleador asignado al rincón azul
Location:   	Ciudad, estado y país donde se celebró el evento
TotalFightTimeSecs: 	Duración total del combate en segundos
FinishRoundTime:        Tiempo exacto en el que terminó el combate en el último round
WeightClass:        	Categoría de peso del combate (ej. Featherweight, Lightweight, etc.)
Date:               	Fecha del evento (en formato AAAA-MM-DD)
Winner:             	Rincón ganador (Red o Blue)
FinishDetails:      	Detalle específico de la finalización (ej. Rear Naked Choke, Elbows, etc.)
Finish:	Tipo de finalización principal que se divide en cuatro:
- KO/TKO: Knockout / Technical Knockout
- SUB: Submission (Sumisión)
- U-DEC: Unanimous Decision (Decisión unánime)
- S-DEC: Split Decision (Decisión dividida)

# Observaciones sobre la Base de Datos

Datos Faltantes: La columna FinishDetails presenta valores nulos en casos donde la pelea terminó por decisión (lo cual es lógico).

Variables y siglas: Algunas variables como Finish usan siglas, por lo cual se requiere saber desde antes que significan. 

Potencial de análisis: DUración promedio de combates por tipo de finalización, tasa de victorias por peleador azul o rojo, frecuencia de sumisiones por peso, etc.

Limitaciones: No contiene información sobre género, nacionalidad de los peleadores, ni estadísticas técnicas, es más general y limita ciertos tipos de análisis más avanzados.