const basePath = import.meta.env.BASE_URL;

export function Chart({
  id,
  title,
  class: className = "",
  explainer,
  children,
}) {
  return (
    <article
      id={id}
      class={`chart ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div class="chart-titlebar">
        <span id={`${id}-title`}>{title}</span>
        <a
          class="chart-permalink"
          href={`${basePath}charts/${id}/`}
          aria-label={`Permalink to ${title}`}
        >
          Permalink
        </a>
      </div>
      {explainer ? (
        <div class="grid min-w-0 items-start md:grid-cols-[minmax(0,1fr)_16rem]">
          <div class="chart-content flex min-w-0 flex-col">{children}</div>
          {explainer}
        </div>
      ) : (
        children
      )}
    </article>
  );
}
