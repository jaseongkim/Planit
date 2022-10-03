import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./shared/theme";// Google Analytics
import ReactGA from "react-ga";
import { BrowserRouter } from "react-router-dom";
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS; // MEASUREMENT ID
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
