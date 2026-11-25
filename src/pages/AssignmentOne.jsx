import { CapexBarchart } from "../components/CapexBarchart";
import { CriticalMineralsHeatmap } from "../components/CriticalMineralsHeatmap";
import { ElectricityGenerationMix } from "../components/ElectricityGenerationMix";
import { ElectricityGenerationTotals } from "../components/ElectricityGenerationTotals";
import { WaffleLitography } from "../components/WaffleLitography";

const basePath = import.meta.env.BASE_URL;

export function AssignmentOne() {
  return (
    <section class="page-pad py-8 sm:py-10">
      <div class="mb-4 border-b border-ink/25 pb-2 sm:mb-6">
        <h2 class="text-2xl font-bold">Assignment 1</h2>
      </div>

      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 min-h-128">
          <CapexBarchart />
        </div>
        <div class="col-span-12 min-h-96 lg:col-span-6">
          <WaffleLitography />
        </div>
        <div class="col-span-12 lg:col-span-6">
          <CriticalMineralsHeatmap />
        </div>
        <div class="col-span-12 lg:col-span-6">
          <ElectricityGenerationMix />
        </div>
        <div class="col-span-12 lg:col-span-6">
          <ElectricityGenerationTotals />
        </div>
      </div>
      <nav class="mt-8 flex justify-start border-t border-ink/25 pt-4 text-sm font-semibold">
        <a
          class="underline underline-offset-2 hover:no-underline"
          href={basePath}
          rel="prev"
        >
          <span aria-hidden="true">←</span> Cover
        </a>
      </nav>
    </section>
  );
}
