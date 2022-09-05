import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { FabricProvider } from "./providers/Fabric";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("main") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FabricProvider>
        <App />
      </FabricProvider>
    </BrowserRouter>
  </React.StrictMode>
);
