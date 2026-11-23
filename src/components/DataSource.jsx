export function DataSource({ children, note }) {
  return (
    <div class="px-4 pb-4 text-xs text-ink-soft sm:px-6">
      <p class="[&_a]:text-[#002677] [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:no-underline">
        <span class="font-semibold">Data source</span> · {children}
      </p>
      {note && <p class="mt-1">{note}</p>}
    </div>
  );
}
