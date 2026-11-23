import { render } from "preact";
import { LocationProvider, Route, Router } from "preact-iso";
import { Home } from "./components/Home";
import { AssignmentOne } from "./pages/AssignmentOne";
import { Methodology } from "./pages/Methodology";
import { Footer } from "./components/Footer";
import "./styles.css";


function App() {
  return (
    <LocationProvider>
      <div class="site-shell notebook">
        <main class="paper flex min-h-[70vh] flex-col">
          <Router>
            <Route path="/" component={Home} />
            <Route path="/assignment1/" component={AssignmentOne} />
            <Route path="/methodology/" component={Methodology} />
          </Router>
          <Footer />
        </main>
      </div>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
