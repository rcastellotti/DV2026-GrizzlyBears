import { render } from "preact";
import { LocationProvider, Route, Router } from "preact-iso";
import { Home } from "./pages/Home";
import { AssignmentOne } from "./pages/AssignmentOne";
import { Methodology } from "./pages/Methodology";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./styles.css";

const basePath = import.meta.env.BASE_URL;

function App() {
  return (
    <LocationProvider>
      <div class="site-shell notebook">
        <main class="paper flex min-h-[70vh] flex-col">
          <Header />
          <Router>
            <Route path={basePath} component={Home} />
            <Route path={`${basePath}assignment1/`} component={AssignmentOne} />
            <Route path={`${basePath}methodology/`} component={Methodology} />
          </Router>
          <Footer />
        </main>
      </div>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
