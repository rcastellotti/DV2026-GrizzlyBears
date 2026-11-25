const commit = __COMMIT__;
const commitUrl = `${__REPO__}/commit/${commit}`;

export function Navbar() {
  return (
    <nav class="notebook-footer page-pad mt-auto border-t border-ink/25 pt-4 pb-6">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <a href="/">Home</a>
        <a href="/assignment1">Assignment1</a>
      </div>
    </nav>
  );
}
