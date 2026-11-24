import { useEffect, useRef, useState } from "preact/hooks";
import { axisBottom, axisLeft, max, scaleBand, scaleLinear, select } from "d3";
import quarterlyCapex from "../data/quarterly-capex.json";

export function CapexBarchart({
  title,
  description,
  takeaway,
  source,
  categoryKey,
  valueKey,
  valuePrefix = "",
  valueSuffix = "",
  highlightAfter,
  beforeColor = "#31577f",
  afterColor = "#438b84",
}) {
  const plotContainer = useRef(null);
  const svgRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = plotContainer.current;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const { width, height } = size;
    if (!width || !height) return;

    const svg = select(svgRef.current);
    svg.selectAll("*").remove();

    const left = Math.min(64, width * 0.12);
    const right = 8;
    const top = 18;
    const baseline = height - 30;
    const reported = quarterlyCapex.filter((datum) => datum[valueKey] != null);
    const categories = quarterlyCapex.map((datum) => datum[categoryKey]);
    const x = scaleBand(categories, [left, width - right]).padding(0.22);
    const y = scaleLinear(
      [0, max(reported, (datum) => datum[valueKey]) ?? 1],
      [baseline, top],
    ).nice(5);

    svg.attr("viewBox", `0 0 ${width} ${height}`);
    svg.append("g").attr("transform", `translate(${left},0)`)
      .call(axisLeft(y).ticks(5).tickFormat((value) => `${valuePrefix}${value}${valueSuffix}`));
    svg.append("g").attr("transform", `translate(0,${baseline})`)
      .call(axisBottom(x)
        .tickValues(categories.filter((category) => category.endsWith("Q1")))
        .tickFormat((category) => category.slice(0, 4)));

    svg.append("g").selectAll("rect").data(reported, (datum) => datum[categoryKey]).join("rect")
      .attr("x", (datum) => x(datum[categoryKey]))
      .attr("width", x.bandwidth())
      .attr("y", (datum) => y(datum[valueKey]))
      .attr("height", (datum) => y(0) - y(datum[valueKey]))
      .attr("fill", (datum) => highlightAfter && datum[categoryKey] >= highlightAfter ? afterColor : beforeColor)
      .append("title")
      .text((datum) => `${datum[categoryKey]} · ${valuePrefix}${datum[valueKey].toFixed(1)}${valueSuffix}`);

    return () => svg.selectAll("*").remove();
  }, [categoryKey, valueKey, valuePrefix, valueSuffix, highlightAfter, beforeColor, afterColor, size]);

  return (
    <article class="flex h-full min-w-0 flex-col overflow-hidden rounded-[5px] border border-[#c5ccd5] bg-white shadow-[0_2px_4px_#233d610b]">
      <header class="px-4 pt-4 sm:px-6 sm:pt-6">
        <h3 class="home-title text-xl font-semibold">{title}</h3>
        <p class="mt-1 text-sm text-ink-soft">{description}</p>
      </header>

      <figure class="flex min-h-0 flex-1 flex-col px-3 pb-4 sm:px-5">
        <div ref={plotContainer} class="min-h-0 flex-1">
          <svg
            ref={svgRef}
            class="block h-full w-full"
            role="img"
            aria-label={`${title}. ${description} ${takeaway}`}
          />
        </div>
        {highlightAfter && (
          <figcaption class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-ink-soft">
            <span class="inline-flex items-center gap-1.5">
              <span aria-hidden="true" class="size-2.5 rounded-xs" style={{ backgroundColor: beforeColor }} />
              Before {highlightAfter}
            </span>
            <span class="inline-flex items-center gap-1.5">
              <span aria-hidden="true" class="size-2.5 rounded-xs" style={{ backgroundColor: afterColor }} />
              From {highlightAfter}
            </span>
          </figcaption>
        )}
      </figure>

      <p class="px-4 pb-4 text-xs text-ink-soft sm:px-6">
        <span class="font-semibold">Data source</span> · {source}
      </p>

      <div class="border-t border-[#dbe2eb] bg-[#f0f4f8] px-4 py-3 text-sm text-[var(--notebook-blue)] sm:px-6 sm:py-4">
        <h4 class="font-semibold">What does this mean?</h4>
        <p class="mt-0.5 text-ink-soft">{takeaway}</p>
      </div>
    </article>
  );
}
