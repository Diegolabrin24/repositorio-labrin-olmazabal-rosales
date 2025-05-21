# Ficha Técnica de la Base de Datos

## 1. Fuente de los datos

Los datos fueron obtenidos a partir de una base pública con información de peleadores de UFC y procesados previamente en la Entrega 02. La fuente incluye estadísticas oficiales y atributos básicos de los peleadores, extraídos desde sitios como [ufc.com](https://www.ufc.com) y otros recursos públicos de datos abiertos.

## 2. Características generales

- **Cobertura temporal:** Hasta fines de 2024.
- **Cobertura geográfica:** Peleadores de Estados Unidos y Europa del Este.
- **Unidad de análisis:** Cada fila representa un peleador profesional de UFC.
- **Total de registros analizados para esta visualización:** Solo los que declararon un estilo de pelea (excluye "NA").

## 3. Variables incorporadas (relevantes para la visualización)

| Variable         | Descripción                                                                 |
|------------------|------------------------------------------------------------------------------|
| `pais`           | País de origen declarado del peleador.                                      |
| `estilo_pelea`   | Disciplina base declarada por el peleador.                                  |
| `region`         | Agrupación regional creada: Estados Unidos o Europa del Este.               |
| `cantidad`       | Número de peleadores por estilo y región (resultado de agrupación).         |

## 4. Observaciones

- La columna `region` fue creada manualmente para efectos del análisis.
- Se eliminaron temporalmente las filas donde el estilo de pelea estaba vacío, como "NA", solo para esta visualización.
- El estilo de pelea "MMA" aparece como categoría declarada por muchos peleadores, aunque puede incluir una combinación de disciplinas.
- Disciplinas como Sambo o Jiu-Jitsu tienen una representación más fuerte en Europa del Este.
- Esta base de datos fue usada para construir una visualización comparativa de estilos dominantes por región.
