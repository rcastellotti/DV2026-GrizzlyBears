import { render } from "preact";
import { LocationProvider, Route, Router } from "preact-iso";
import { Home } from "./components/Home";
import { AssignmentOne } from "./pages/AssignmentOne";
import { Methodology } from "./pages/Methodology";
import { Footer } from "./components/Footer";
import "./styles.css";

function NotFound() {
  return (
    <section class="page-pad flex flex-1 flex-col items-center justify-center py-16 text-center">
      <h1 class="home-title text-3xl font-bold text-ink">Page not found</h1>
      <a class="mt-6 inline-block rounded bg-[#233d61] px-[18px] py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#172c48] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233d61]" href="/">Back to home</a>
    </section>
  );
}

function App() {
  return (
    <LocationProvider>
      <div class="site-shell notebook">
        <main class="paper flex min-h-[70vh] flex-col">
          <Router>
            <Route path="/" component={Home} />
            <Route path="/assignment1/" component={AssignmentOne} />
            <Route path="/methodology/" component={Methodology} />
            <Route default component={NotFound} />
          </Router>
          <Footer />
        </main>
      </div>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
