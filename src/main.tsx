import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./app.tsx";
import "./index.css";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
