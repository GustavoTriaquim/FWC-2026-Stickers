import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AlbumProvider } from "./context/AlbumProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AlbumProvider>
        <App />
      </AlbumProvider>
    </BrowserRouter>
  </StrictMode>,
);
