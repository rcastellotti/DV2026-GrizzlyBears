import { DataSource } from "./DataSource";
import { Chart } from "./Chart";

const companies = [
  { name: "Nikon", percentage: "2.5%", tiles: 3, color: "var(--color-amber)" },
  { name: "Canon", percentage: "3.4%", tiles: 3, color: "var(--color-oxide)" },
  { name: "ASML", percentage: "94.1%", tiles: 94, color: "var(--color-blue)" },
];

const tiles = companies.flatMap(({ name, color, tiles: count }) =>
  Array.from({ length: count }, (_, index) => ({
    key: `${name}-${index}`,
    name,
    color,
  })),
);

export function WaffleLitography({ class: className = "", explainer }) {
  return (
    <Chart explainer={explainer} id="wafer-lithography" title="Wafer lithography" class={`flex min-w-0 flex-col overflow-hidden ${className}`}>
      <header class="px-4 pt-4 sm:px-6 sm:pt-6">
        <h3 class=" text-base font-bold">Wafer lithography market share</h3>
        <p class="mt-1 text-xs text-ink-soft">
          Estimated share by equipment supplier
        </p>
      </header>

      <figure class="flex flex-1 flex-col items-center gap-5 p-4 sm:p-6">
        <div
          class="grid w-full max-w-md grid-cols-10 gap-1"
          role="img"
          aria-label="Waffle chart of wafer lithography market share: ASML 94.1 percent, Nikon 2.5 percent, Canon 3.4 percent. Tiles are rounded to whole percentages."
        >
          {tiles.map((tile) => (
            <span
              key={tile.key}
              class="aspect-square rounded-[2px]"
              style={{ backgroundColor: tile.color }}
              aria-hidden="true"
            />
          ))}
        </div>

        <figcaption class="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-ink-soft">
          {companies.map((company) => (
            <span key={company.name} class="inline-flex items-center gap-2">
              <span
                class="size-3 rounded-sm"
                style={{ backgroundColor: company.color }}
                aria-hidden="true"
              />
              <span>{company.name}</span>
              <strong class="font-bold text-ink">
                {company.percentage}
              </strong>
            </span>
          ))}
        </figcaption>
      </figure>

      <DataSource note="Each tile represents 1%; values are rounded to whole tiles for display.">
        Takashi Yunogami, EE Times Japan, elaboration on Morgan Stanley
        Securities data (2024),{" "}
        <a
          href="https://eetimes.itmedia.co.jp/ee/articles/2508/26/news015_3.html"
          target="_blank"
          rel="noreferrer"
        >
          article
        </a>
        .
      </DataSource>
    </Chart>
  );
}
