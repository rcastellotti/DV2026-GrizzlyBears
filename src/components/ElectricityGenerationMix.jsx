import { DataSource } from "./DataSource";
import { WindowTitlebar } from "./WindowTitlebar";
import { useEffect, useRef, useState } from "preact/hooks";
import {
  axisBottom,
  axisLeft,
  scaleBand,
  scaleLinear,
  select,
  stack,
} from "d3";
import generationMix from "../data/electricity-generation-mix.json";

const sourceNames = generationMix.sources.map(({ name }) => name);
const years = generationMix.regions[0].years.map(({ year }) => year);
const stackShares = stack()
  .keys(sourceNames)
  .value((record, source) => record.shares[source]);
const regions = generationMix.regions.map(({ name, years: records }) => ({
  name,
  layers: stackShares(records),
}));

export function ElectricityGenerationMix({ class: className = "" }) {
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
    if (width <= 64) return;

    const svg = select(plot.current);
    const panelHeight = 164;
    const panelStride = 204;
    const left = 44;
    const right = width - 12;
    const plotWidth = right - left;
    const height = panelStride * regions.length;
    const x = scaleBand(years, [left, right]).padding(0.5);
    const y = scaleLinear([0, 100], [panelHeight, 0]);
    const shareTicks = [0, 25, 50, 75, 100];
    svg.attr("viewBox", `0 0 ${width} ${height}`).attr("height", height);

    for (const [index, region] of regions.entries()) {
      const panel = svg
        .append("g")
        .attr("transform", `translate(0,${24 + panelStride * index})`);
      panel
        .append("text")
        .attr("x", left)
        .attr("y", -10)
        .attr("font-size", 11)
        .attr("font-weight", 600)
        .attr("fill", "currentColor")
        .text(region.name);

      panel
        .append("g")
        .attr("transform", `translate(${left},0)`)
        .call(
          axisLeft(y)
            .tickValues(shareTicks)
            .tickSize(-plotWidth)
            .tickPadding(5)
            .tickFormat((share) =>
              share === 0 || share === 100 ? `${share}%` : "",
            ),
        )
        .call((axis) => axis.select(".domain").remove())
        .call((axis) =>
          axis
            .selectAll(".tick line")
            .attr("stroke-opacity", 0.07),
        )
        .call((axis) =>
          axis.selectAll(".tick text").attr("fill-opacity", 0.55),
        );

      panel
        .append("line")
        .attr("x1", left)
        .attr("x2", right)
        .attr("y1", panelHeight)
        .attr("y2", panelHeight)
        .attr("stroke", "currentColor")
        .attr("stroke-opacity", 0.3);

      if (!region.name.startsWith("China")) {
        const yearsAxis = panel
          .append("g")
          .attr(
            "transform",
            region.name.startsWith("United States")
              ? "translate(0,0)"
              : `translate(0,${panelHeight})`,
          )
          .call(
            region.name.startsWith("United States")
              ? axisBottom(x).tickSize(0).tickPadding(0)
              : axisBottom(x).tickSizeOuter(0),
          );

        if (region.name.startsWith("United States")) {
          yearsAxis.selectAll(".tick text").attr("dy", "-0.45em");
          yearsAxis.select(".domain").remove();
        }
      }

      const layers = panel
        .append("g")
        .selectAll("g")
        .data(region.layers)
        .join("g")
        .attr("fill", (_, i) => generationMix.sources[i].color);

      layers.each(function (layer) {
        select(this)
          .selectAll("rect")
          .data(layer)
          .join("rect")
          .attr("x", (segment) => x(segment.data.year))
          .attr("width", x.bandwidth())
          .attr("y", (segment) => y(segment[1]))
          .attr("height", (segment) => y(segment[0]) - y(segment[1]))
          .append("title")
          .text(
            ({ data }) =>
              `${region.name}, ${data.year} · ${layer.key} ${data.shares[layer.key].toFixed(1)}%`,
          );
      });
    }

    return () => svg.selectAll("*").remove();
  }, [width]);

  return (
    <article class={`win95-window min-w-0 overflow-hidden ${className}`}>
      <WindowTitlebar title="Electricity generation mix" />
      <header class="px-4 pt-4 sm:px-6 sm:pt-6">
        <h3 class=" text-base font-semibold">
          Electricity production by source
        </h3>
        <p class="mt-1 text-xs text-ink-soft">
          Share of domestic electricity generation in {years.join(", ")}.
        </p>
      </header>
      <figure class="px-3 pt-3 pb-4 sm:px-5">
        <svg
          ref={plot}
          class="block w-full"
          height="612"
          role="img"
          aria-label={`100% stacked bars by electricity source for the United States, China, and the EU in ${years.join(", ")}.`}
        />
        <figcaption class="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-ink-soft">
          {generationMix.sources.map(({ name, color }) => (
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
