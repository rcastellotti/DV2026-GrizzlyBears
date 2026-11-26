import { CapexBarchart } from "../components/CapexBarchart";
import { CriticalMineralsHeatmap } from "../components/CriticalMineralsHeatmap";
import { ElectricityGenerationMix } from "../components/ElectricityGenerationMix";
import { ElectricityGenerationTotals } from "../components/ElectricityGenerationTotals";
import { WaffleLitography } from "../components/WaffleLitography";

const charts = new Map([
  ["capital-spending", CapexBarchart],
  ["critical-minerals", CriticalMineralsHeatmap],
  ["electricity-generation-mix", ElectricityGenerationMix],
  ["electricity-generation-totals", ElectricityGenerationTotals],
  ["wafer-lithography", WaffleLitography],
]);

export function ChartPage({ slug }) {
  const SelectedChart = charts.get(slug);

  return (
    <div class="page-pad flex-1 py-8 sm:py-10">
      <SelectedChart
        class="w-full"
        explainer={
          <aside
            aria-label="Chart explainers"
            class="self-stretch space-y-5 border-t border-ink/25 p-4 text-sm text-ink md:border-t-0 md:border-l"
          >
            <section>
              <h2 class="text-base font-bold">Explainer</h2>
              <p class="mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
            <section class="border-t border-ink/25 pt-3">
              <h2 class="text-base font-bold">TL;DR</h2>
              <p class="mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </section>
          </aside>
        }
      />
    </div>
  );
}
