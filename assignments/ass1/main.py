import marimo

__generated_with = "0.25.1"
app = marimo.App()


@app.cell
def _():
    import pandas as pd
    import seaborn as sns
    import matplotlib.pyplot as plt
    from matplotlib.ticker import StrMethodFormatter

    df = pd.read_csv("./ass1/country_values_tidy.csv")

    sns.set_theme(style="whitegrid")

    plt.figure(figsize=(8, 5))
    markers = {
        "USA": "o",
        "India": "s",
        "China": "^",
        "Russia": "D",
        "United Kingdom": "P",
        "Saudi Arabia": "X"
    }

    sns.lineplot(
        data=df,
        x="Year",
        y="Value",
        hue="Country",
        style="Country",
        markers=markers,
        dashes=False,
        linewidth=2,
        markersize=5
    )

    plt.gca().yaxis.set_major_formatter(
        StrMethodFormatter('{x:,.0f}')
    )

    plt.title(
        "Military expenditure by country, in constant (2024) US$ m., 1992–2025",
        fontsize=14,
        pad=15
    )

    plt.xlabel("Year", fontsize=12)
    plt.ylabel("US$ million", fontsize=12)

    plt.grid(
        True,
        which="major",
        axis="both",
        linestyle="--",
        linewidth=0.6,
        alpha=0.5
    )

    plt.legend(
        loc="upper left",
        frameon=True,
        framealpha=0.85,
        ncol=2
    )

    plt.tight_layout()
    plt.show()
    return


if __name__ == "__main__":
    app.run()
