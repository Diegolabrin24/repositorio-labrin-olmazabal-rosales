import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Cargar datos
df = pd.read_csv("union-clean.csv")

# Limpiar y filtrar
df["Fight-Secs"] = pd.to_numeric(df["Fight-Secs"], errors="coerce")
df = df[(df["Winner"] == 1) & df["Fight-Secs"].notna() & df["Region"].notna()]
df["Fight-Minutes"] = df["Fight-Secs"] / 60

# Agrupar por región
region_avg = df.groupby("Region")["Fight-Minutes"].mean()
region_counts = df["Region"].value_counts()
region_avg = region_avg[region_counts[region_counts >= 50].index].sort_values()

# Gráfico
plt.figure(figsize=(10, 6))
sns.barplot(x=region_avg.values, y=region_avg.index, palette="viridis")
plt.xlabel("Duración promedio de peleas ganadas (minutos)")
plt.ylabel("Región")
plt.title("Duración promedio de peleas ganadas por región (2010–2024)")
plt.tight_layout()
plt.savefig("duracion_promedio_por_region_optimo.jpg")
