import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AlbumProvider } from "./context/Album/AlbumProvider.jsx";
import { ThemeProvider } from "./context/Theme/ThemeProvider.jsx";
import { CarouselProvider } from "./context/Carousel/CarouselProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AlbumProvider>
          <CarouselProvider>
            <App />
          </CarouselProvider>
        </AlbumProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
