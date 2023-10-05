import { Dispatch, createContext } from "react";

type Context = {
  translateX: number;
  translateY: number;
  zoomLevel: number;
  setZoomLevel: Dispatch<React.SetStateAction<number>>;
  setTranslateY: Dispatch<React.SetStateAction<number>>;
  setTranslateX: Dispatch<React.SetStateAction<number>>;
};

export const TreeContext = createContext<Context>({
  translateX: 0,
  translateY: 0,
  zoomLevel: 0,
  setZoomLevel: () => {},
  setTranslateY: () => {},
  setTranslateX: () => {},
});
