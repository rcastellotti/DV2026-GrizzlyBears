export function DataSource({ children, note }) {
  return (
    <div class="data-source px-4 py-4 text-xs text-ink-soft sm:px-6">
      <p class="[&_a]:text-ink-soft [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:no-underline">
        <span class="font-bold">Data source</span> · {children}
      </p>
      {note && <p class="mt-1">{note}</p>}
    </div>
  );
}
