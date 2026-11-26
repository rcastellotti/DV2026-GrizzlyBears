const drawings = [
  ["board", 4, 8, 36], ["minerals", 15, 5, 48], ["tester", 25, 12, 33],
  ["lithography", 37, 5, 56], ["fan", 49, 10, 27], ["wafer", 59, 6, 44],
  ["truck", 70, 12, 42], ["chip", 78, 4, 32], ["tower", 96, 8, 37],
  ["tower", 8, 20, 50], ["recovery", 19, 24, 31], ["terminal", 30, 19, 49],
  ["chip", 43, 25, 35], ["factory", 54, 18, 58], ["board", 65, 23, 32],
  ["rack", 75, 18, 47], ["fan", 92, 20, 36],
  ["glovebox", 4, 34, 45], ["wafer", 13, 38, 40], ["minerals", 86, 30, 42],
  ["tester", 96, 39, 36], ["terminal", 7, 49, 34], ["truck", 93, 51, 55],
  ["chip", 3, 62, 46], ["tower", 12, 65, 32], ["rack", 87, 63, 42],
  ["fan", 96, 66, 30], ["lithography", 8, 76, 51], ["board", 18, 75, 32],
  ["recovery", 83, 76, 47], ["wafer", 94, 80, 53],
  ["factory", 4, 90, 40], ["truck", 14, 94, 52], ["glovebox", 24, 85, 38],
  ["fan", 30, 95, 32], ["tester", 39, 87, 46], ["chip", 47, 96, 31],
  ["terminal", 55, 85, 48], ["minerals", 62, 95, 42], ["tower", 69, 86, 48],
  ["board", 76, 96, 34], ["rack", 86, 91, 51], ["lithography", 96, 94, 39],
  ["chip", 9, 11, 23], ["fan", 21, 5, 20], ["rack", 32, 9, 23],
  ["board", 46, 4, 22], ["minerals", 52, 13, 22], ["tester", 63, 12, 24],
  ["fan", 73, 5, 22], ["wafer", 84, 9, 25], ["glovebox", 97, 15, 25],
  ["chip", 4, 25, 24], ["board", 15, 28, 24], ["truck", 24, 23, 25],
  ["wafer", 36, 23, 24], ["rack", 49, 22, 24], ["fan", 59, 24, 23],
  ["terminal", 71, 28, 25], ["tester", 79, 27, 22], ["chip", 92, 33, 22],
  ["recovery", 8, 42, 24], ["minerals", 3, 52, 23], ["glovebox", 90, 41, 22],
  ["tower", 97, 46, 23], ["board", 11, 56, 26], ["tester", 88, 55, 22],
  ["chip", 98, 57, 22], ["truck", 6, 69, 26], ["lithography", 91, 70, 24],
  ["terminal", 3, 81, 24], ["wafer", 15, 83, 24], ["fan", 31, 81, 20],
  ["chip", 47, 83, 22], ["factory", 63, 82, 24], ["tester", 77, 84, 22],
  ["tower", 91, 86, 22], ["recovery", 21, 95, 23], ["rack", 35, 96, 22],
  ["fan", 53, 94, 21], ["truck", 70, 95, 22], ["minerals", 81, 93, 23],
  ["nvidia", 25, 32, 64], ["board", 34, 34, 25], ["asml", 43, 14, 59],
  ["fan", 46, 31, 21], ["tsmc", 56, 33, 65], ["tester", 63, 35, 27],
  ["arm", 73, 36, 57], ["minerals", 81, 39, 23], ["rack", 18, 47, 24],
  ["chip", 84, 48, 25], ["factory", 17, 57, 30], ["fan", 90, 60, 21],
  ["wafer", 6, 58, 22], ["truck", 9, 86, 24], ["micron", 27, 73, 67],
  ["board", 35, 75, 24], ["skhynix", 45, 75, 66], ["glovebox", 53, 77, 24],
  ["dell", 62, 73, 57], ["recovery", 68, 78, 21], ["vertiv", 76, 69, 64],
  ["fan", 79, 79, 20], ["tester", 86, 83, 22], ["wafer", 98, 88, 23],
  ["rack", 18, 88, 23], ["tower", 28, 89, 24], ["board", 41, 93, 25],
  ["glovebox", 59, 89, 21], ["chip", 66, 91, 22], ["minerals", 92, 96, 20],
];

export function SupplyChainSketch() {
  return (
    <svg
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 h-full w-full text-graphite opacity-18"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      shape-rendering="crispEdges"
    >
      <defs>
        <symbol id="home-sketch-nvidia" viewBox="-36 -24 72 48">
          <path d="M-20-7h6v-5h8v-5h25V2H0v-5h-8v-6H5v5h7v-8H-2m-12 5v5h6v5h13" />
          <text y="16" fill="currentColor" stroke="none" text-anchor="middle" font-size="12">NVIDIA</text>
        </symbol>
        <symbol id="home-sketch-asml" viewBox="-36 -24 72 48">
          <text y="5" fill="currentColor" stroke="none" text-anchor="middle" font-size="19" font-weight="bold">ASML</text>
          <path d="M-24 10h48" />
        </symbol>
        <symbol id="home-sketch-tsmc" viewBox="-36 -24 72 48">
          <path d="M-17 8v-19h5v-5h24v5h5V8h-5v5h-24V8zM-8-15v7m8-7v7m8-7v7M-16-11h32m-24 20v3m8-3v3m8-3v3" />
          <text y="6" fill="currentColor" stroke="none" text-anchor="middle" font-size="12" font-weight="bold">tsmc</text>
        </symbol>
        <symbol id="home-sketch-arm" viewBox="-36 -24 72 48">
          <text y="6" fill="currentColor" stroke="none" text-anchor="middle" font-size="23" font-weight="bold">arm</text>
        </symbol>
        <symbol id="home-sketch-micron" viewBox="-36 -24 72 48">
          <path d="M-29-3h6v-5h10v-5H6v-4h20m3 14h-6v5" />
          <text y="9" fill="currentColor" stroke="none" text-anchor="middle" font-size="14" font-weight="bold">Micron</text>
        </symbol>
        <symbol id="home-sketch-skhynix" viewBox="-36 -24 72 48">
          <path d="M-14-8h7v-5h9v-4h10m-11 9h8v-5h8" />
          <text y="9" fill="currentColor" stroke="none" text-anchor="middle" font-size="12">SK hynix</text>
        </symbol>
        <symbol id="home-sketch-dell" viewBox="-36 -24 72 48">
          <path d="M-12-18h24v4h6v6h4V8h-4v6h-6v4h-24v-4h-6V8h-4V-8h4v-6h6z" />
          <text y="4" fill="currentColor" stroke="none" text-anchor="middle" font-size="12" font-weight="bold">DELL</text>
        </symbol>
        <symbol id="home-sketch-vertiv" viewBox="-36 -24 72 48">
          <path d="M-13-17v5h4v5h4v5H5v-5h4v-5h4v-5" />
          <text y="12" fill="currentColor" stroke="none" text-anchor="middle" font-size="13" font-weight="bold">VERTIV</text>
        </symbol>
        {/* Mineral blocks */}
        <symbol id="home-sketch-minerals" viewBox="-34 -34 68 68">
          <path d="M-28 24V8h8V0h8v-20h8v-4h16v8h8V0h8v8h4v16z" />
          <path d="M-12 0h16v24M4 8h24M-20 8v16m16-44v12h8v8h16m-4 8v16" />
        </symbol>
        {/* Design terminal */}
        <symbol id="home-sketch-terminal" viewBox="-34 -34 68 68">
          <path d="M-28-24h56v40h-56zM-20-16h40V8h-40zM-8 16v8M8 16v8M-20 24h40" />
          <path d="M-12 0h8v-8h8v8h8m-24-8h4m16 0h4" />
        </symbol>
        {/* Wafer and die grid */}
        <symbol id="home-sketch-wafer" viewBox="-34 -34 68 68">
          <path d="M-12-24h24v4h8v8h4v24h-4v8h-8v4h-24v-4h-8v-8h-4v-24h4v-8h8z" />
          <path d="M-12-16v32M-4-20v40M4-20v40M12-16v32M-16-12h32M-20-4h40M-20 4h40M-16 12h32" />
        </symbol>
        {/* Chip package */}
        <symbol id="home-sketch-chip" viewBox="-34 -34 68 68">
          <path d="M-20-20h40v40h-40zM-12-12h24v24h-24zM-8-8h4" />
          <path d="M-28-12h8m-8 8h8m-8 8h8m-8 8h8m40-24h8m-8 8h8m-8 8h8m-8 8h8M-12-28v8m8-8v8m8-8v8m8-8v8m-24 40v8m8-8v8m8-8v8m8-8v8" />
        </symbol>
        {/* Server rack */}
        <symbol id="home-sketch-rack" viewBox="-34 -34 68 68">
          <path d="M-24-24h48v48h-48zM-24-8h48m-48 16h48m-40 16v4m32-4v4" />
          <path d="M-16-16h12m-12 16h12m-12 16h12M8-16h2m4 0h2M8 0h2m4 0h2M8 16h2m4 0h2" />
        </symbol>
        {/* Material recovery */}
        <symbol id="home-sketch-recovery" viewBox="-34 -34 68 68">
          <path d="M-24-4v-16h40v8m-8-4h4v4h8v-4h4M24 4v16h-40v-8m8 4h-4v-4h-8v4h-4" />
          <path d="M-8-8H8V8H-8z" />
        </symbol>
        {/* Lithography tool */}
        <symbol id="home-sketch-lithography" viewBox="-34 -34 68 68">
          <path d="M-30-24h60v48h-60zM-22-16h36v32h-36zM20-16h4m-4 8h4m-4 8h4M-10-16v8H2v-8M-8 0h8m-12 8H4" />
          <path d="M-22 24v4m44-4v4" />
        </symbol>
        {/* Circuit board */}
        <symbol id="home-sketch-board" viewBox="-34 -34 68 68">
          <path d="M-24-20h48v32H8v8h-32zM-8-8H8V8H-8z" />
          <path d="M-8-4h-8v-8h-4M8 0h8v-12h4M0 8v8h-16m28-8h8" />
        </symbol>
        {/* Transmission tower */}
        <symbol id="home-sketch-tower" viewBox="-34 -34 68 68">
          <path d="M-4-28h8v12h16v8H8V4h12v8H8v8h8v8m-32 0v-8h8v-8h-12V4h12V-8h-12v-8h16z" />
          <path d="M-8 4H8M-8 12H8M-8 20H8M-20-8v4m40-4v4m-40 16v4m40-4v4" />
        </symbol>
        {/* Cleanroom glovebox */}
        <symbol id="home-sketch-glovebox" viewBox="-34 -34 68 68">
          <path d="M-24-20h48v36h-48zM-16-12h32V8h-32zM-16 16v12m32-12v12M-16 24h32" />
          <path d="M-12-4h8v8h-8zm16 0h8v8H4z" />
        </symbol>
        {/* Cooling fan */}
        <symbol id="home-sketch-fan" viewBox="-34 -34 68 68">
          <path d="M-24-24h48v48h-48zM-4-4h8v8h-8z" />
          <path d="M-4-4v-12H8v8H4m0 4h12V8H8V4m-4 0v12H-8V8h4m0-4h-12V-8h8v4" />
        </symbol>
        {/* Freight truck */}
        <symbol id="home-sketch-truck" viewBox="-34 -34 68 68">
          <path d="M-28-16H8V8h-36zM8-8h16v8h8v8H8m12-16v8h4" />
          <path d="M-20 8h8v8h-8zM16 8h8v8h-8zM-20-8h20m-20 8h12" />
        </symbol>
        {/* Factory */}
        <symbol id="home-sketch-factory" viewBox="-34 -34 68 68">
          <path d="M-32 24V0h8v-8h12V0h8v-8H8V0h12v-24h8V0h4v24z" />
          <path d="M-24 8h8v8h-8zm16 0h8v8h-8zm16 0h8v8H8zM20-16h8" />
        </symbol>
        {/* Test instrument */}
        <symbol id="home-sketch-tester" viewBox="-34 -34 68 68">
          <path d="M-28-20h56v40h-56zM-20-12H8v24h-28zM-16 4h8v-8h8v8h4" />
          <path d="M16-12h4v4h-4zm0 16h4v4h-4z" />
        </symbol>
      </defs>
      {drawings.map(([motif, x, y, size], index) => (
        <use
          key={`${x}-${y}`}
          href={`#home-sketch-${motif}`}
          x={`${x}%`}
          y={`${y}%`}
          width={size}
          height={size}
          transform={`translate(${-size / 2} ${-size / 2})`}
          class={size < 30 && index % 2 ? "hidden sm:inline" : undefined}
        />
      ))}
    </svg>
  );
}
