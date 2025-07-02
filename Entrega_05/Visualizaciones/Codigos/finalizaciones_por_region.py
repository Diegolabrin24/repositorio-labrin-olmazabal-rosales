import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Cargar datos
df = pd.read_csv("union-clean.csv")

# Filtrar valores
df = df[(df["Winner"] == 1) & df["Finish"].notna() & df["Region"].notna()]

# Clasificar finalizaciones
def clasificar(x):
    if "KO" in x:
        return "KO/TKO"
    elif "SUB" in x or "Submission" in x:
        return "Sumisión"
    elif "DEC" in x:
        return "Decisión"
    else:
        return "Otro"

df["TipoFinal"] = df["Finish"].apply(clasificar)

# Conteo
conteo = df.groupby(["Region", "TipoFinal"]).size().unstack().fillna(0)

# Gráfico
conteo.plot(kind="bar", stacked=True, figsize=(12, 6), colormap="tab20")
plt.title("Finalizaciones por región en UFC (2010–2021)")
plt.ylabel("Número de victorias")
plt.xlabel("Región")
plt.tight_layout()
plt.savefig("finalizaciones_por_region_retro.jpg")
