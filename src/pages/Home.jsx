const basePath = import.meta.env.BASE_URL;

export function Home() {
  return (
    <section class="page-pad flex flex-1 flex-col py-4">
      <div class="flex justify-end">
        <div class="text-right text-xs text-ink-soft">
          <p class="text-ink-faint">a project by:</p>
          <ul class="font-bold text-ink">
            <li>Gianluca Bottiglieri</li>
            <li>Roberto Castellotti</li>
            <li>Virginia Passalacqua</li>
            <li>Edoardo Siri</li>
          </ul>
          <p class="text-ink-faint">assisted by Deepseek v4.1-flash</p>
        </div>
      </div>

      <div class="flex flex-1 flex-col items-center justify-center py-10 text-center sm:py-14">
        <h1 class=" max-w-4xl text-3xl leading-tight font-bold tracking-tight text-ink text-balance sm:text-5xl">
          AI: an industry of bottlenecks
        </h1>

        <p class="mt-5 max-w-2xl text-sm leading-relaxed text-justify text-ink-soft">
          What makes the AI boom possible, and what could slow it down? We use
          data and visualizations to explore where the AI supply chain depends
          on specialized equipment, critical minerals, and electricity.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a
            class="inline-block rounded bg-[#233d61] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#172c48] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233d61]"
            href={`${basePath}assignment1/`}
          >
            Open the notebook
          </a>
          <p class="text-xs text-ink-faint">
            or{" "}
            <a
              class="text-[#002677] underline underline-offset-2 hover:no-underline"
              href={`${basePath}about/`}
            >
              learn about the project
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
