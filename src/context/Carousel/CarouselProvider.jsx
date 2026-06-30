import { useState, useCallback } from "react";
import { CarouselContext } from "./CarouselContext";

export function CarouselProvider({ children }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const updateSlideIndex = useCallback((index) => {
    setSlideIndex(index);
  }, []);

  return (
    <CarouselContext.Provider value={{ slideIndex, updateSlideIndex }}>
      {children}
    </CarouselContext.Provider>
  );
}
