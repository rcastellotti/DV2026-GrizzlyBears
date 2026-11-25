export function Header() {
  return (
    <nav class="notebook-footer page-pad border-b border-ink/25 pt-2 pb-3">
      <div class="flex justify-between gap-4 sm:items-end sm:gap-8">
        <a
          class="font-bold text-ink underline decoration-(--notebook-blue) underline-offset-4 hover:no-underline"
          href="/"
        >
          Home
        </a>
        <a
          class="font-bold text-ink underline decoration-(--notebook-blue) underline-offset-4 hover:no-underline"
          href="/assignment1"
        >
          Assignment 1
        </a>
      </div>
    </nav>
  );
}
