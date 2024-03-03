import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { Global } from "./styles/global.js";
import { defaultTheme } from "./styles/theme/default.js";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <Global />
    </ThemeProvider>
  </React.StrictMode>
);
