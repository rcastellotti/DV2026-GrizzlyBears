import { useEffect, useRef, useState } from "preact/hooks";
import {
  axisBottom,
  axisLeft,
  format,
  max,
  scaleBand,
  scaleLinear,
  select,
} from "d3";
import { DataSource } from "./DataSource";
import { WindowTitlebar } from "./WindowTitlebar";
import regions from "../data/electricity-generation-totals.json";

const years = regions[0].years.map(({ year }) => year);
const formatTwh = format(",.1f");

export function ElectricityGenerationTotals({ class: className = "" }) {
  const plot = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );
    observer.observe(plot.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (width <= 70) return;

    const svg = select(plot.current);
    const height = 330;
    const left = 57;
    const right = width - 10;
    const baseline = height - 30;
    const x = scaleBand(years, [left, right]).padding(0.18);
    const withinYear = scaleBand(
      regions.map(({ name }) => name),
      [0, x.bandwidth()],
    ).padding(0.08);
    const y = scaleLinear(
      [0, max(regions, ({ years }) => max(years, ({ totalTwh }) => totalTwh))],
      [baseline, 18],
    ).nice(5);

    svg.attr("viewBox", `0 0 ${width} ${height}`);
    svg
      .append("g")
      .attr("transform", `translate(${left},0)`)
      .call(
        axisLeft(y)
          .ticks(5, ",d")
          .tickSize(left - right)
          .tickPadding(5),
      )
      .call((axis) => axis.select(".domain").remove())
      .call((axis) =>
        axis.selectAll(".tick line").attr("stroke-opacity", 0.07),
      )
      .call((axis) =>
        axis.selectAll(".tick text").attr("fill-opacity", 0.55),
      );
    svg
      .append("g")
      .attr("transform", `translate(0,${baseline})`)
      .call(axisBottom(x).tickSizeOuter(0));

    for (const { name, color, years } of regions) {
      svg
        .append("g")
        .attr("fill", color)
        .selectAll("rect")
        .data(years)
        .join("rect")
        .attr("x", ({ year }) => x(year) + withinYear(name))
        .attr("width", withinYear.bandwidth())
        .attr("y", ({ totalTwh }) => y(totalTwh))
        .attr("height", ({ totalTwh }) => baseline - y(totalTwh))
        .append("title")
        .text(
          ({ year, totalTwh }) =>
            `${name}, ${year} · ${formatTwh(totalTwh)} TWh`,
        );
    }

    return () => svg.selectAll("*").remove();
  }, [width]);

  return (
    <article class={`win95-window min-w-0 overflow-hidden ${className}`}>
      <WindowTitlebar title="Electricity generation totals" />
      <header class="px-4 pt-4 sm:px-6 sm:pt-6">
        <h3 class=" text-base font-semibold">Total electricity production</h3>
        <p class="mt-1 text-xs text-ink-soft">
          Domestic electricity generation in terawatt-hours (TWh) in{" "}
          {years.join(", ")}.
        </p>
      </header>
      <figure class="px-3 pt-3 pb-4 sm:px-5">
        <svg
          ref={plot}
          class="block w-full"
          height="330"
          role="img"
          aria-label={`Grouped electricity generation bars for the United States, China, and the European Union in ${years.join(", ")}.`}
        />
        <figcaption class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-ink-soft">
          {regions.map(({ name, color }) => (
            <span key={name} class="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                class="size-2.5 rounded-xs"
                style={{ backgroundColor: color }}
              />
              {name}
            </span>
          ))}
        </figcaption>
      </figure>
      <DataSource note="Ember compiles data from multi-country datasets (EIA, Eurostat, Energy Institute, UN) and national sources such as China’s National Bureau of Statistics.">
        <a href="https://ember-energy.org/data/yearly-electricity-data/">
          Ember – Yearly Electricity Data (2026)
        </a>
      </DataSource>
    </article>
  );
}
