import { useEffect, useRef } from "preact/hooks";
import { axisBottom, axisLeft, format, max, range, scaleBand, scaleLinear, select, stack } from "d3";

import quarterlyCapex from "../data/quarterly-capex.json";

const navy = "#31577f";
const teal = "#438b84";
const gold = "#d39f4a";
const firstFullQuarterAfterChatGPTLaunch = "2023Q1";
const regionColors = [navy, teal, gold];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function drawCapex(svg, height) {
  const baseline = height - 30;
  const quarters = quarterlyCapex.map(({ quarter }) => quarter);
  const reported = quarterlyCapex.filter(({ totalUsdBillions }) => totalUsdBillions !== null);
  const x = scaleBand(quarters, [52, 704]).padding(0.22);
  const y = scaleLinear([0, max(reported, ({ totalUsdBillions }) => totalUsdBillions) ?? 1], [baseline, 18])
    .nice(5);

  svg.append("g").attr("transform", "translate(52,0)")
    .call(axisLeft(y).ticks(5).tickFormat((value) => `$${value}B`));
  svg.append("g").attr("transform", `translate(0,${baseline})`)
    .call(axisBottom(x).tickValues(quarters.filter((quarter) => quarter.endsWith("Q1")))
      .tickFormat((quarter) => quarter.slice(0, 4)));

  svg.append("g").selectAll("rect").data(reported, ({ quarter }) => quarter).join("rect")
    .attr("x", ({ quarter }) => x(quarter)).attr("width", x.bandwidth())
    .attr("y", ({ totalUsdBillions }) => y(totalUsdBillions))
    .attr("height", ({ totalUsdBillions }) => y(0) - y(totalUsdBillions))
    .attr("fill", ({ quarter }) => quarter >= firstFullQuarterAfterChatGPTLaunch ? teal : navy)
    .append("title").text(({ quarter, totalUsdBillions }) => `${quarter} · $${totalUsdBillions.toFixed(1)}B`);

  // const ink = "#a92e2a";
  // const annotation = svg.append("g").attr("pointer-events", "none")
    // .attr("fill", ink).style("font-family", 'Caveat, "Segoe Print", cursive').style("font-weight", 600);

  // const launch = reported.find(({ quarter }) => quarter === "2022Q4");
  // const comparison = reported.find(({ quarter }) => quarter === "2026Q3");
  // if (!launch?.totalUsdBillions || !comparison) return;

  // const tipX = x(comparison.quarter) + x.bandwidth() / 2;
  // const tipY = y(comparison.totalUsdBillions) - 5;
  // const note = annotation.append("g").attr("transform", "translate(128,112) rotate(-3)");
  // note.append("text").attr("font-size", 36)
  //   .text(`${(comparison.totalUsdBillions / launch.totalUsdBillions).toFixed(1)}× the launch quarter`);
  // note.append("text").attr("y", 37).attr("font-size", 25)
  //   .text(`$${launch.totalUsdBillions.toFixed(1)}B in Q4 2022 → $${comparison.totalUsdBillions.toFixed(1)}B in Q3 2026`);

  // note.append("path").attr("d", "M -2,8 Q 24,2 56,6 T 67,8")
  //   .attr("fill", "none").attr("stroke", ink).attr("stroke-width", 2).attr("stroke-linecap", "round");
  // annotation.append("path")
  //   .attr("d", `M 463,101 C 527,36 ${tipX - 59},${tipY - 44} ${tipX},${tipY}
  //     m -17,-3 l 17,3 l -8,-15`)
  //   .attr("fill", "none").attr("stroke", ink).attr("stroke-width", 2.5)
  //   .attr("stroke-linecap", "round").attr("stroke-linejoin", "round");
}

function drawWaffle(svg) {
  svg.selectAll("rect").data(range(100)).join("rect")
    .attr("x", (index) => 82 + (index % 10) * 19)
    .attr("y", (index) => 14 + Math.floor(index / 10) * 19)
    .attr("width", 15).attr("height", 15).attr("rx", 2)
    .attr("fill", (index) => index < 72 ? navy : "#d6e0ea");
}

function drawEnergy(svg) {
  const regions = ["EU", "US", "CHN"];
  const data = [
    { year: "2016", EU: 17, US: 25, CHN: 33 },
    { year: "2021", EU: 16, US: 26, CHN: 40 },
    { year: "2026", EU: 15, US: 27, CHN: 48 },
  ];
  const x = scaleBand(data.map(({ year }) => year), [45, 342]).padding(0.21);
  const group = scaleBand(regions, [0, x.bandwidth()]).padding(0.12);
  const y = scaleLinear([0, 50], [194, 18]);

  svg.append("g").attr("transform", "translate(45,0)")
    .call(axisLeft(y).ticks(5).tickFormat((value) => `${value}k`));
  svg.append("g").attr("transform", "translate(0,194)").call(axisBottom(x));

  svg.selectAll(".year").data(data).join("g").attr("class", "year")
    .attr("transform", ({ year }) => `translate(${x(year)},0)`)
    .selectAll("rect").data((row) => regions.map((region) => ({
      region, value: row[region], year: row.year,
    }))).join("rect")
    .attr("x", ({ region }) => group(region)).attr("width", group.bandwidth())
    .attr("y", ({ value }) => y(value)).attr("height", ({ value }) => y(0) - y(value))
    .attr("fill", ({ region }) => regionColors[regions.indexOf(region)])
    .append("title").text(({ region, value, year }) => `${region} · ${year} · ${value},000 TWh`);
}

const sourceColors = [navy, "#7893ae", gold, teal];
const electricitySources = ["Coal", "Gas", "Nuclear", "Renewables"];

function drawElectricity(svg) {
  const data = [
    { country: "US", Coal: 16, Gas: 42, Nuclear: 18, Renewables: 24 },
    { country: "CHN", Coal: 57, Gas: 4, Nuclear: 5, Renewables: 34 },
  ];
  const x = scaleLinear([0, 100], [48, 332]);
  const y = scaleBand(data.map(({ country }) => country), [28, 174]).padding(0.32);

  svg.append("g").attr("transform", "translate(48,0)").call(axisLeft(y).tickSize(0).tickPadding(8));
  svg.append("g").attr("transform", "translate(0,181)")
    .call(axisBottom(x).tickValues([0, 25, 50, 75, 100]).tickFormat((value) => `${value}%`));

  svg.selectAll(".source").data(stack().keys(electricitySources)(data)).join("g")
    .attr("class", "source").attr("fill", (_, index) => sourceColors[index])
    .selectAll("rect").data((series) => series.map((segment) => ({ segment, source: series.key })))
    .join("rect")
    .attr("x", ({ segment }) => x(segment[0]))
    .attr("width", ({ segment }) => x(segment[1]) - x(segment[0]))
    .attr("y", ({ segment }) => y(segment.data.country)).attr("height", y.bandwidth())
    .append("title").text(({ segment, source }) => `${segment.data.country} · ${source} · ${segment.data[source]}%`);
}

const heatColors = ["#e7eff6", "#bed2e5", "#86adcc", "#527fa8", "#31577f"];

function drawHeatmap(svg) {
  const years = range(2022, 2027);
  const cells = years.flatMap((year, row) => months.map((month, column) => ({
    year,
    month,
    level: Math.min(4, Math.round(row * 0.42 + (1 + Math.cos((column - 6) * Math.PI / 6)) * 1.05)),
  })));
  const x = scaleBand(months, [46, 348]).padding(0.13);
  const y = scaleBand(years, [22, 181]).padding(0.15);

  svg.append("g").attr("transform", "translate(0,181)").call(axisBottom(x).tickSize(0).tickPadding(8));
  svg.append("g").attr("transform", "translate(46,0)").call(axisLeft(y).tickSize(0).tickPadding(6).tickFormat(format("d")));
  svg.selectAll("rect").data(cells).join("rect")
    .attr("x", ({ month }) => x(month)).attr("y", ({ year }) => y(year))
    .attr("width", x.bandwidth()).attr("height", y.bandwidth()).attr("rx", 2)
    .attr("fill", ({ level }) => heatColors[level])
    .append("title").text(({ year, month, level }) => `${month} ${year} · demand level ${level + 1} of 5`);
}

const charts = [
  {
    title: "Hyperscaler aggregate capital spending (MSFT,GOOG,AMZN,META,ORCL)",
    description: "Combined quarterly capital expenditure, 2016–2026 (USD billions).",
    source: "SEC EDGAR Company Facts and Amazon’s 2017 Q2 10-Q",
    takeaway: "Quarterly cash spending accelerated after 2023.",
    draw: drawCapex,
    width: 720,
    height: 460,
    legend: [["Before ChatGPT’s first release", navy], ["After ChatGPT’s first release", teal]],
  },
  {
    title: "ASML and lithography machines",
    description: "this is gibberish and not real data",
    source: "Illustrative shipment counts",
    takeaway: "ASML accounts for 72 of the 100 illustrative shipments.",
    draw: drawWaffle,
    legend: [["ASML", navy], ["Other suppliers", "#d6e0ea"]],
  },
  {
    title: "Primary energy use",
    description: "this is gibberish and not real data",
    source: "Mock values for an OWID-style comparison",
    takeaway: "China shows the largest increase in this mock comparison.",
    draw: drawEnergy,
    legend: ["EU", "US", "CHN"].map((label, index) => [label, regionColors[index]]),
  },
  {
    title: "Electricity production by source",
    description: "this is gibberish and not real data",
    source: "Illustrative generation shares",
    takeaway: "Gas is the largest share in the mock US mix, while coal leads in China.",
    draw: drawElectricity,
    legend: electricitySources.map((label, index) => [label, sourceColors[index]]),
  },
  {
    title: "Seasonal data-center electricity demand",
    description: "this is gibberish and not real data",
    source: "Simulated monthly demand index",
    takeaway: "The example shows a summer peak and rising demand over time.",
    draw: drawHeatmap,
    legend: [["Lower demand", heatColors[0]], ["Higher demand", heatColors[4]]],
  },
];

function DataSource({ source }) {
  return (
    <p class="px-4 pb-4 text-xs text-ink-soft sm:px-6">
      <span class="font-semibold">Data source</span> · {source}
    </p>
  );
}

function Chart({ chart }) {
  const plot = useRef(null);
  const height = chart.height ?? 224;

  useEffect(() => {
    const svg = select(plot.current);
    chart.draw(svg, height);
    return () => svg.selectAll("*").remove();
  }, [chart, height]);

  return (
    <figure class="visualization-plot px-3 pb-4 sm:px-5">
      <svg
        ref={plot}
        class="mx-auto block h-auto w-full max-w-[720px]"
        viewBox={`0 0 ${chart.width ?? 360} ${height}`}
        role="img"
        aria-label={`${chart.title}. ${chart.description} ${chart.takeaway}`}
      />
      {chart.legend && (
        <figcaption class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-ink-soft">
          {chart.legend.map(([label, color]) => (
            <span key={label} class="inline-flex items-center gap-1.5">
              <span aria-hidden="true" class="size-2.5 rounded-xs" style={{ backgroundColor: color }} />
              {label}
            </span>
          ))}
        </figcaption>
      )}
    </figure>
  );
}

export function AssignmentOne() {
  return (
    <section aria-labelledby="assignment-1-title" class="page-pad pt-10 pb-12 sm:pt-14 sm:pb-16">
      <div class="mb-7 border-b border-ink/25 pb-4 sm:mb-9">
        <h2 id="assignment-1-title" class="home-title text-3xl font-bold sm:text-5xl">
          Assignment 1
        </h2>
      </div>

      <div class="visualization-grid">
        {charts.map((chart) => (
          <article key={chart.title} class="visualization-card">
            <header class="px-4 pt-4 sm:px-6 sm:pt-6">
              <h3 class="home-title text-xl font-semibold">{chart.title}</h3>
              <p class="mt-1 text-sm text-ink-soft">{chart.description}</p>
            </header>

            <Chart chart={chart} />
            <DataSource source={chart.source} />

            <div class="visualization-takeaway px-4 py-3 text-sm sm:px-6 sm:py-4">
              <h4 class="font-semibold">What does this mean?</h4>
              <p class="mt-0.5 text-ink-soft">{chart.takeaway}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
