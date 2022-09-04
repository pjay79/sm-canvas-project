import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { FindingsProvider } from "./providers/Findings";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("main") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FindingsProvider>
        <App />
      </FindingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
