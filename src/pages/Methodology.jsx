const basePath = import.meta.env.BASE_URL;

export function Methodology() {
  return (
    <section aria-labelledby="methodology-title" class="page-pad flex-1 py-10 sm:py-14">
      <div class="mb-7 border-b border-ink/25 pb-4 sm:mb-9">
        <h1 id="methodology-title" class="home-title text-3xl font-bold sm:text-5xl">
          Research methodology
        </h1>
      </div>
      <div class="space-y-5 text-sm leading-relaxed text-ink-soft sm:text-base">
        <p>
          Here we will describe our research methodology, highlighting how data is massaged/extracted.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p>
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
        <p>
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <nav class="mt-10 border-t border-ink/25 pt-4 text-sm font-semibold text-[var(--notebook-blue)]" aria-label="Site pages">
        <a class="hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dashed" href={basePath} rel="prev">
          <span aria-hidden="true">←</span> Cover
        </a>
      </nav>
    </section>
  );
}
