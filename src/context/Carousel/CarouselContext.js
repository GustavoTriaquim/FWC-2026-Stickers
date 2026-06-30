import { createContext, useContext } from "react";

export const CarouselContext = createContext(null);

export function useCarouselPosition() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error(
      "useCarouselPosition precisa ser usado dentro de um CarouselProvider",
    );
  }
  return context;
}
