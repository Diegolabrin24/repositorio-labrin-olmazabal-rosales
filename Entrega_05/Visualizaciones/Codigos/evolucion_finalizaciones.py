import pandas as pd
import matplotlib.pyplot as plt

# Cargar datos
df = pd.read_csv("union-clean.csv")
df["Fight-Secs"] = pd.to_numeric(df["Fight-Secs"], errors="coerce")
df["Year"] = pd.to_numeric(df["Year"], errors="coerce")

df = df[df["Finish"].notna() & df["Year"].notna()]

# Clasificar finalización
def tipo(x):
    if "KO" in x:
        return "KO/TKO"
    elif "SUB" in x or "Submission" in x:
        return "Sumisión"
    elif "DEC" in x:
        return "Decisión"
    else:
        return "Otro"

df["TipoFinal"] = df["Finish"].apply(tipo)

# Agrupar por año
final_by_year = df.groupby(["Year", "TipoFinal"]).size().unstack().fillna(0)

# Gráfico retro arcade
plt.style.use("dark_background")
final_by_year.plot(figsize=(12, 6), linewidth=2,
                   color={"KO/TKO": "magenta", "Sumisión": "cyan", "Decisión": "yellow", "Otro": "orange"})
plt.title("Evolución de métodos de finalización en UFC (2010–2024)", fontsize=14)
plt.xlabel("Año")
plt.ylabel("Número de peleas")
plt.tight_layout()
plt.savefig("evolucion_finalizaciones_retro_FIX.jpg")
