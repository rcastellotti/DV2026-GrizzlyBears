const commit = __COMMIT__;
const commitUrl = `${__REPO__}/commit/${commit}`;

export function Footer() {
  return (
    <footer class="notebook-footer page-pad mt-auto border-t border-ink/25 pt-4 pb-6">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div class="max-w-xl">
          <p class="font-note text-lg italic leading-snug text-ink-soft">
            “In God we trust. All others must bring data.”
          </p>
          <p class="mt-1 font-mono text-xs leading-normal text-ink-faint">
            W. Edwards Deming
          </p>
        </div>

        <div class="flex shrink-0 flex-wrap items-center justify-start gap-x-4 gap-y-2 text-xs uppercase tracking-wide text-ink-faint sm:items-end">
          <span class="normal-case tracking-normal">
            Made with love (and coffee) by GrizzlyBears ʕ•ᴥ•ʔ
          </span>
          {commit === "dev" ? (
            <span class="font-mono text-xs">dev build</span>
          ) : (
            <a
              class="font-mono text-xs normal-case tracking-normal underline decoration-ink-faint/40 underline-offset-2 transition-colors hover:text-ink-soft"
              href={commitUrl}
              target="_blank"
              rel="noreferrer"
            >
              commit {commit}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
