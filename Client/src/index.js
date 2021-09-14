import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import AppTheme from "./styles/theme";
import { ThemeProvider } from "@material-ui/core";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={AppTheme}>
      <App />
      <ToastContainer
        closeOnClick
        autoClose={4000}
        theme="colored"
        position="bottom-center"
        style={{ textAlign: "center" }}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
