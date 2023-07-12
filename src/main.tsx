import { render } from "preact";
import { HashRouter } from "react-router-dom";

import App from "./app.tsx";
import "./index.css";
import "./reset.css";

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")!
);
