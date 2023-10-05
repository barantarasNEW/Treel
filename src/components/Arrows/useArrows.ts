import { useContext } from "react";

import { TreeContext } from "../../context";

export const useArrows = () => {
  const { setTranslateX, setTranslateY } = useContext(TreeContext);

  const onLeft = (): void => {
    setTranslateX((prev: number) => prev - 10);
  };
  const onRight = (): void => {
    setTranslateX((prev: number) => prev + 10);
  };
  const onTop = (): void => {
    setTranslateY((prev: number) => prev - 10);
  };
  const onDown = (): void => {
    setTranslateY((prev: number) => prev + 10);
  };

  return { onLeft, onRight, onTop, onDown };
};
