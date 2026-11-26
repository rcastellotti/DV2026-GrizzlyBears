const commit = __COMMIT__;
const commitUrl = `${__REPO__}/commit/${commit}`;

export function Footer() {
  return (
    <footer class="notebook-footer page-pad mt-auto border-t border-ink/25 pt-4 pb-6">
      <div class="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-8">
        <div class="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
          <p class="font-note text-xs italic leading-snug text-ink-soft">
            “In God we trust. All others must bring data.”
          </p>
          <p class="text-xs leading-normal text-ink-faint">W. Edwards Deming</p>
        </div>

        <div class="flex min-w-0 flex-wrap items-baseline gap-x-4 gap-y-1 text-xs uppercase tracking-wide text-ink-faint lg:justify-end lg:text-right">
          <span class="normal-case tracking-normal">
            Made with love (and coffee) by GrizzlyBears ʕ•ᴥ•ʔ
          </span>
          {commit === "dev" ? (
            <span class="font-mono text-xs">dev build</span>
          ) : (
            <a
              class="min-w-0 wrap-anywhere font-mono text-xs normal-case tracking-normal underline decoration-ink-faint/40 underline-offset-2 transition-colors hover:text-ink-soft"
              href={commitUrl}
              target="_blank"
              rel="noreferrer"
            >
              {commit}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
