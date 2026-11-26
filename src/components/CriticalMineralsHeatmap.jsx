import { DataSource } from "./DataSource";
import minerals from "../data/critical-minerals-2025.json";
import { WindowTitlebar } from "./WindowTitlebar";

const stages = [
  { key: "mining", label: "Mining" },
  { key: "refining", label: "Refining" },
];

export function CriticalMineralsHeatmap({ class: className = "" }) {
  return (
    <article class={`win95-window flex h-full min-w-0 flex-col overflow-hidden ${className}`}>
      <WindowTitlebar title="Critical minerals" />
      <header class="px-4 pt-4 sm:px-6 sm:pt-6">
        <h3 class=" text-base font-semibold">Critical minerals production</h3>
        <p class="mt-1 text-xs text-ink-soft">
          Leading country or region by share of global production, 2025.
        </p>
      </header>
      <figure class="flex flex-1 flex-col px-3 py-4 sm:px-5">
        <table
          class="w-full table-fixed border-separate border-spacing-1 text-xs"
          aria-label="Leading critical mineral producers in 2025"
        >
          <thead>
            <tr>
              <th scope="col" class="px-1 pb-1 text-left">
                Mineral
              </th>
              {stages.map(({ key, label }) => (
                <th key={key} scope="col" class="pb-1">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {minerals.map(({ mineral, ...production }) => (
              <tr key={mineral}>
                <th scope="row" class="px-1 text-left font-semibold">
                  {mineral}
                </th>
                {stages.map(({ key }) => {
                  const { region, share } = production[key];
                  return (
                    <td
                      key={key}
                      class="rounded-xs px-1 py-1.5 text-center"
                      style={{
                        backgroundColor: `color-mix(in oklab, var(--color-amber) ${share}%, var(--color-silver))`,
                        color: "var(--color-ink)",
                      }}
                    >
                      <span
                        class={
                          region === "China"
                            ? "block font-bold underline"
                            : "block"
                        }
                      >
                        {region}
                      </span>
                      <strong class="tabular-nums">≈{share}%</strong>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <figcaption class="mx-auto mt-3 w-full max-w-56 text-center text-xs text-ink-soft">
          <div
            class="h-2 rounded-xs"
            aria-hidden="true"
            style={{
              background: "linear-gradient(to right in oklab, var(--color-silver), var(--color-amber))",
            }}
          />
          <div class="mt-1 flex justify-between tabular-nums">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </figcaption>
      </figure>
      <DataSource note="Approximate shares read from pages 31–32. Mining covers natural graphite, refining covers battery-grade graphite, and rare earths refer to those used in magnets.">
        <a href="https://www.iea.org/reports/global-critical-minerals-outlook-2026">
          IEA – Global Critical Minerals Outlook 2026
        </a>
      </DataSource>
    </article>
  );
}
