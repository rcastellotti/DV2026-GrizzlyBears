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

      <div class="flex flex-col items-center gap-5">
        <CapexBarchart class="mx-auto w-full max-w-4xl" />
        <WaffleLitography class="mx-auto w-full max-w-4xl" />
        <CriticalMineralsHeatmap class="mx-auto w-full max-w-4xl" />
        <ElectricityGenerationTotals class="mx-auto w-full max-w-4xl" />
        <ElectricityGenerationMix class="mx-auto w-full max-w-4xl" />
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
