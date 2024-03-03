import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Global } from "./styles/global.js";
import { defaultTheme } from "./styles/theme/default.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global theme={defaultTheme}>
      <App />
    </Global>
  </React.StrictMode>
);
