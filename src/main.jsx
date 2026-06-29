import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AlbumProvider } from "./context/AlbumProvider.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AlbumProvider>
          <App />
        </AlbumProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
