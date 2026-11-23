import { render } from "preact";
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import { Home } from "./components/Home";
import { AssignmentOne } from "./components/AssignmentOne";
import { Footer } from "./components/Footer";
import "./styles.css";

const pages = [
  { id: "cover", title: "Cover", Content: Home },
  { id: "assignment-1", title: "Assignment 1", Content: AssignmentOne },
];

function readPageIndex() {
  return Math.max(0, pages.findIndex(({ id }) => window.location.hash === `#${id}`));
}

function App() {
  const [pageIndex, setPageIndex] = useState(readPageIndex);
  const page = useRef(null);
  const lastPageIndex = useRef(pageIndex);
  const { Content } = pages[pageIndex];
  const previous = pages[pageIndex - 1];
  const next = pages[pageIndex + 1];

  useEffect(() => {
    const syncPage = () => setPageIndex(readPageIndex());
    window.addEventListener("hashchange", syncPage);
    syncPage();
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  useLayoutEffect(() => {
    if (lastPageIndex.current === pageIndex) return;
    lastPageIndex.current = pageIndex;
    window.scrollTo(0, 0);
    page.current.focus({ preventScroll: true });
  }, [pageIndex]);

  return (
    <div class="site-shell notebook">
      <main ref={page} tabIndex={-1} class="paper">
        <Content />
        {previous && (
          <>
            <nav class="page-pad notebook-pagination" aria-label="Notebook pages">
              <a href={`#${previous.id}`} rel="prev">
                <span aria-hidden="true">←</span> {previous.title}
              </a>
              {next && (
                <a href={`#${next.id}`} rel="next">
                  {next.title} <span aria-hidden="true">→</span>
                </a>
              )}
            </nav>
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

render(<App />, document.getElementById("app"));
