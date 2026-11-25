export function About() {
  return (
    <section aria-labelledby="about-title" class="page-pad flex-1 py-8 sm:py-10">
      <div class="mb-4 border-b border-ink/25 pb-2 sm:mb-6">
        <h1 id="about-title" class="text-2xl font-bold">
          About
        </h1>
      </div>
      <div class="space-y-5 text-xs leading-relaxed text-ink-soft sm:text-sm">
        <p>
          A{" "}
          <a
            class="text-[#002677] underline underline-offset-2 hover:no-underline"
            href="https://corsi.unige.it/en/off.f/2025/ins/83997"
          >
            Data Visualization
          </a>{" "}
          project by <b>GrizzlyBears</b> — Academic Year 2026/2027.
        </p>

        <section
          aria-labelledby="methodology-title"
          class="space-y-2 [&_a]:text-[#002677] [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:no-underline"
        >
          <h2 id="methodology-title" class="text-base font-bold text-ink">
            Research methodology
          </h2>
          <p>
            Getting hold of good data on the AI supply chain is harder than we
            expected. A lot of the detailed industry data sits
            behind paid services such as <b>Bloomberg</b> and{" "}
            <b>Morgan Stanley Research</b>, or specialist publications like{" "}
            <b>SemiAnalysis</b>. One welcome exception is{" "}
            <a href="https://epoch.ai/data"><b>Epoch AI</b></a>, where you can
            download datasets on models, chips, and data centers.
          </p>
          <p>
            For broader context, there’s the <b>U.S. Census Bureau</b>,{" "}
            <b>FRED</b> from the <b>Federal Reserve Bank of St. Louis</b>, and
            reports from the <b>OECD</b>, the{" "}
            <b>International Energy Agency (IEA)</b>, and the{" "}
            <b>Bank for International Settlements (BIS)</b>. The tricky part is
            finding numbers detailed enough to use. Plenty of sites repeat
            figures without saying where they got them. A piece in the{" "}
            <b>Financial Times</b> can help us understand what’s going on,
            though we often can’t get our hands on the data behind it. That’s
            hardly surprising in an industry moving this fast.
          </p>
          <p>
            Public company filings are easier to get hold of. Figuring out
            what’s behind the headline numbers takes a bit more digging. A data center
            joint venture can take on the debt while the company using the
            facility commits to a long-term lease or provides a guarantee.
            Those commitments can be easy to miss if you only look at the
            company’s reported debt. See the{" "}
            <a href="https://www.bis.org/publications/qr-202603/financing-ai-infrastructure-boom-on-and-off-balance-sheet-borrowing">
              <b>BIS</b> report on AI infrastructure financing
            </a>{" "}
            and the sources we collected in{" "}
            <a href="https://github.com/rcastellotti/DV2026-GrizzlyBears/issues/40">
              issue #40
            </a> (TODO cleanup).
          </p>
          <p>
            We work with the data we can get hold of and link to the sources
            below the charts so you can see what each one is based on.
          </p>
          <p class="font-semibold text-ink">Resources</p>
          <ul class="list-disc space-y-1 pl-5">
            <li>
              <a href="https://example.com/lorem-ipsum">Lorem ipsum dolor sit amet</a>
            </li>
            <li>
              <a href="https://example.com/consectetur">
                Consectetur adipiscing elit
              </a>
            </li>
            <li>
              <a href="https://example.com/eiusmod">Sed do eiusmod tempor</a>
            </li>
            <li>
              <a href="https://example.com/incididunt">
                Incididunt ut labore et dolore
              </a>
            </li>
          </ul>
        </section>

        <section
          aria-labelledby="technical-details-title"
          class="space-y-2 [&_a]:text-[#002677] [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:no-underline"
        >
          <h2 id="technical-details-title" class="text-base font-bold text-ink">
            Technical details
          </h2>
          <p>
            Data extraction scripts are available in{" "}
            <a href="https://github.com/rcastellotti/DV2026-GrizzlyBears/tree/main/extractors">
              <code>extractors/</code>
            </a>, and the{" "}
            <a href={`${__REPO__}/blob/HEAD/README.md`}>README</a> explains how
            to run them. The scripts and the rest of the project’s code are
            released under the{" "}
            <a href={`${__REPO__}/blob/HEAD/LICENSE`}>MIT license</a>.
          </p>
          <p>
            We encourage you to reproduce our experiments. Start with{" "}
            <code>nix develop</code>. The{" "}
            <a href={`${__REPO__}/blob/HEAD/flake.nix`}>project flake</a> pins
            the tools and dependencies so you can use the same environment we
            do. See the <a href="https://nix.dev/concepts/flakes.html">Nix flake
            documentation</a> for more on how that works.
          </p>
          <p>
            The site uses Preact for its pages and D3 for the charts.
          </p>
        </section>

        <p>
          <b>Happy Hacking</b> 🧸 🐻
          <br />
          GB, RC, VP, ES
        </p>
      </div>
    </section>
  );
}
