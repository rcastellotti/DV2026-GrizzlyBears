import { DataSource } from "./DataSource";
import { useEffect, useRef, useState } from "preact/hooks";
import { axisBottom, axisLeft, max, scaleBand, scaleLinear, select } from "d3";
import quarterlyCapex from "../data/quarterly-capex.json";
import { Chart } from "./Chart";

export function CapexBarchart({ class: className = "", explainer }) {
  const title =
    "Hyperscaler aggregate capital spending (MSFT, GOOG, AMZN, META, ORCL)";
  const description =
    "Combined quarterly capital expenditure, 2016–2026 (USD billions).";
  const takeaway = "Quarterly cash spending accelerated after 2023.";
  const source = "SEC EDGAR Company Facts and Amazon’s 2017 Q2 10-Q";
  const categoryKey = "quarter";
  const valueKey = "totalUsdBillions";
  const valuePrefix = "$";
  const valueSuffix = "B";
  const highlightAfter = "2023Q1";
  const beforeColor = "var(--color-blue)";
  const afterColor = "var(--color-phosphor)";

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
    svg
      .append("g")
      .attr("transform", `translate(${left},0)`)
      .call(
        axisLeft(y)
          .ticks(5)
          .tickFormat((value) => `${valuePrefix}${value}${valueSuffix}`),
      );
    svg
      .append("g")
      .attr("transform", `translate(0,${baseline})`)
      .call(
        axisBottom(x)
          .tickValues(categories.filter((category) => category.endsWith("Q1")))
          .tickFormat((category) => category.slice(0, 4)),
      );

    svg
      .append("g")
      .selectAll("rect")
      .data(reported, (datum) => datum[categoryKey])
      .join("rect")
      .attr("x", (datum) => x(datum[categoryKey]))
      .attr("width", x.bandwidth())
      .attr("y", (datum) => y(datum[valueKey]))
      .attr("height", (datum) => y(0) - y(datum[valueKey]))
      .attr("fill", (datum) =>
        datum[categoryKey] >= highlightAfter ? afterColor : beforeColor,
      )
      .append("title")
      .text(
        (datum) =>
          `${datum[categoryKey]} · ${valuePrefix}${datum[valueKey].toFixed(1)}${valueSuffix}`,
      );

    const releaseX = x(highlightAfter) - (x.step() - x.bandwidth()) / 2;
    const releaseMarker = svg
      .append("g")
      .attr("pointer-events", "none");
    releaseMarker
      .append("line")
      .attr("x1", releaseX)
      .attr("x2", releaseX)
      .attr("y1", top)
      .attr("y2", baseline)
      .attr("stroke", "var(--color-graphite)")
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "3 4");
    releaseMarker
      .append("text")
      .attr("transform", `translate(${releaseX - 5},${(top + baseline) / 2}) rotate(-90)`)
      .attr("text-anchor", "middle")
      .attr("font-size", 10)
      .attr("font-weight", 700)
      .attr("fill", "var(--color-ink-soft)")
      .text("ChatGPT first release");

    return () => svg.selectAll("*").remove();
  }, [size]);

  return (
    <Chart explainer={explainer} id="capital-spending" title="Capital spending" class={`flex h-full min-w-0 flex-col overflow-hidden ${className}`}>
      <header class="px-4 pt-4 sm:px-6 sm:pt-6">
        <h3 class=" text-base font-bold">{title}</h3>
        <p class="mt-1 text-xs text-ink-soft">{description}</p>
      </header>

      <figure class="flex min-h-0 flex-1 flex-col px-3 pb-4 sm:px-5">
        <div ref={plotContainer} class="min-h-[24rem] flex-1">
          <svg
            ref={svgRef}
            class="block h-full w-full"
            role="img"
            aria-label={`${title}. ${description} ${takeaway}`}
          />
        </div>
        <figcaption class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-ink-soft">
          <span class="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              class="size-2.5 rounded-xs"
              style={{ backgroundColor: beforeColor }}
            />
            Before {highlightAfter}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              class="size-2.5 rounded-xs"
              style={{ backgroundColor: afterColor }}
            />
            From {highlightAfter}
          </span>
        </figcaption>
      </figure>

      <DataSource>{source}</DataSource>
    </Chart>
  );
}
