import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
