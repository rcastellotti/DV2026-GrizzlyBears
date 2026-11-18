<<<<<<< HEAD
=======
const base = import.meta.env.BASE_URL;

>>>>>>> origin/main
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

      <div class="flex flex-1 flex-col items-center justify-center text-center">
        <h1 class="home-title mt-2 text-6xl leading-none font-bold tracking-tight text-ink">
          AI: an industry of bottlenecks
        </h1>

        <p class="mt-4 max-w-4xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          With this project, we want to explore what makes AI possible and what might hold it back. Through data and visualizations, we aim to uncover the bottlenecks behind the AI boom and give our audience the tools to better understand it and form their own opinions.
        </p>
      </div>
    </section>
  );
}
