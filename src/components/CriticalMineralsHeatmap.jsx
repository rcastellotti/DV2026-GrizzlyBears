import { interpolateBlues, scaleSequential } from "d3";
import { DataSource } from "./DataSource";
import minerals from "../data/critical-minerals-2025.json";

const shareColor = scaleSequential([0, 100], interpolateBlues);
const stages = [
  { key: "mining", label: "Mining" },
  { key: "refining", label: "Refining" },
];
const legendStops = [0, 25, 50, 75, 100];

export function CriticalMineralsHeatmap() {
  return (
    <article class="flex h-full min-w-0 flex-col overflow-hidden rounded-[5px] border border-[#c5ccd5] bg-white shadow-[0_2px_4px_#233d610b]">
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
                        backgroundColor: shareColor(share),
                        color: share >= 65 ? "white" : "#14283b",
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
              background: `linear-gradient(to right, ${legendStops.map((share) => shareColor(share)).join(", ")})`,
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
