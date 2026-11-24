import { CapexBarchart } from "../components/CapexBarchart";
import { CriticalMineralsHeatmap } from "../components/CriticalMineralsHeatmap";
import { ElectricityGenerationMix } from "../components/ElectricityGenerationMix";
import { ElectricityGenerationTotals } from "../components/ElectricityGenerationTotals";
import { WaffleLitography } from "../components/WaffleLitography";

const basePath = import.meta.env.BASE_URL;

export function AssignmentOne() {
  return (
    <section aria-labelledby="assignment-1-title" class="page-pad pt-10 pb-12 sm:pt-14 sm:pb-16">
      <div class="mb-7 border-b border-ink/25 pb-4 sm:mb-9">
        <h2 id="assignment-1-title" class="home-title text-3xl font-bold sm:text-5xl">
          Assignment 1
        </h2>
      </div>

      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 min-h-192">
          <CapexBarchart
            title="Hyperscaler aggregate capital spending (MSFT, GOOG, AMZN, META, ORCL)"
            description="Combined quarterly capital expenditure, 2016–2026 (USD billions)."
            takeaway="Quarterly cash spending accelerated after 2023."
            source="SEC EDGAR Company Facts and Amazon’s 2017 Q2 10-Q"
            categoryKey="quarter"
            valueKey="totalUsdBillions"
            valuePrefix="$"
            valueSuffix="B"
            highlightAfter="2023Q1"
          />
        </div>
        <div class="col-span-12 min-h-128 lg:col-span-6">
          <WaffleLitography />
        </div>
        <div class="col-span-12 lg:col-span-6">
          <CriticalMineralsHeatmap />
        </div>
        <div class="col-span-7">
          <ElectricityGenerationMix />
        </div>
        <div class="col-span-5">
          <ElectricityGenerationTotals />
        </div>
      </div>
      <nav class="mt-8 flex justify-start border-t border-ink/25 pt-4 text-base font-semibold text-[var(--notebook-blue)]" aria-label="Notebook pages">
        <a class="hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dashed" href={basePath} rel="prev">
          <span aria-hidden="true">←</span> Cover
        </a>
      </nav>
    </section>
  );
}
