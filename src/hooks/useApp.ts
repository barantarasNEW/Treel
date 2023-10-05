import { useState } from "react";

export const useApp = () => {
  const [translateX, setTranslateX] = useState<number>(190);
  const [translateY, setTranslateY] = useState<number>(190);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  return {
    translateX,
    translateY,
    zoomLevel,
    setZoomLevel,
    setTranslateX,
    setTranslateY,
  };
};
