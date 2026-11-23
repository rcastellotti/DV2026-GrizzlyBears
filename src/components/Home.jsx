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

        <a class="notebook-open mt-8" href="#assignment-1">
          Open the notebook
        </a>
      </div>
    </section>
  );
}
