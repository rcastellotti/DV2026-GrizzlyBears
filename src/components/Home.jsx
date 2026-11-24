const basePath = import.meta.env.BASE_URL;

export function Home() {
  return (
    <section class="page-pad flex flex-1 flex-col py-4">
      <div class="flex w-full justify-end text-right text-sm leading-snug text-ink-soft">
        <div>
          <p class="text-ink-faint">a project by:</p>
          <ul class="font-bold text-ink">
            <li>Gianluca Bottiglieri</li>
            <li>Roberto Castellotti</li>
            <li>Virginia Passalacqua</li>
            <li>Edoardo Siri</li>
          </ul>
          <p class="mt-0.5 text-ink-faint">assisted by Deepseek v4.1-flash</p>
        </div>
      </div>

      <div class="flex flex-1 flex-col items-center justify-center py-10 text-center sm:py-14">
        <h1 class="home-title max-w-4xl text-4xl leading-tight font-bold tracking-tight text-ink text-balance sm:text-6xl">
          AI: an industry of bottlenecks
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-xl">
          With this project, we want to explore what makes AI possible and what might hold it back. Through data and visualizations, we aim to uncover the bottlenecks behind the AI boom and give our audience the tools to better understand it and form their own opinions.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a class="inline-block rounded bg-[#233d61] px-[18px] py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#172c48] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233d61]" href={`${basePath}assignment1/`}>
            Open the notebook
          </a>
        </div>
      </div>
    </section>
  );
}
