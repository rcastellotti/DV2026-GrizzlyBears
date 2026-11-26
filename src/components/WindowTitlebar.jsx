export function WindowTitlebar({ title }) {
  return (
    <div class="win95-titlebar">
      <span>{title}</span>
      <span class="win95-controls" aria-hidden="true">
        <span>_</span><span>□</span><span>×</span>
      </span>
    </div>
  );
}
