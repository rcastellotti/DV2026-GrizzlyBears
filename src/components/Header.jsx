import { SupplyChainFigure } from "./SupplyChainFigure.jsx";

const basePath = import.meta.env.BASE_URL;

export function Header() {
  return (
    <nav class="notebook-footer page-pad border-b border-ink/25 pt-2 pb-3">
      <div class="relative flex items-center justify-between gap-4 sm:gap-8">
        <div class="flex items-center gap-3">
          <SupplyChainFigure />
          <a
            class="font-bold text-ink underline decoration-(--notebook-blue) underline-offset-4 hover:no-underline"
            href={basePath}
          >
            ~/home
          </a>
        </div>
        <a
          class="font-bold text-ink underline decoration-(--notebook-blue) underline-offset-4 hover:no-underline"
          href={`${basePath}assignment1/`}
        >
          ~/assignment_1
        </a>
      </div>
    </nav>
  );
}
