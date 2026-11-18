import { render } from "preact";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div class="site-shell">
      <main class="paper">
        <Home />
        <Footer />
      </main>
    </div>
  );
}

render(<App />, document.getElementById("app"));
