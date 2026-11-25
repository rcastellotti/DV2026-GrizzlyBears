import { SupplyChainFigure } from "./SupplyChainFigure.jsx";

export function Header() {
  return (
    <nav class="notebook-footer page-pad border-b border-ink/25 pt-2 pb-3">
      <div class="relative flex items-center justify-between gap-4 sm:gap-8">
        <div class="flex items-center gap-3">
          <SupplyChainFigure />
          <a
            class="font-bold text-ink underline decoration-(--notebook-blue) underline-offset-4 hover:no-underline"
            href="/"
          >
            Home
          </a>
        </div>
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
