import { useContext, useEffect, useState } from "react";

import { TreeContext } from "../../context";

export const useHeader = () => {
  const { zoomLevel, setTranslateX, setTranslateY, setZoomLevel } =
    useContext(TreeContext);

  const [selectedValue, setSelectedValue] = useState<number>(100);

  const isZoomInDisabled = zoomLevel === 150;
  const isZoomOutDisabled = zoomLevel === 30;

  const onChange = (value: number): void => {
    setSelectedValue(value);
    setZoomLevel(value);
  };

  const onZoomIn = (): void => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel + 10);
  };

  const onZoomOut = (): void => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel - 10);
  };

  const onCenter = (): void => {
    setTranslateX(window.outerWidth / 2);
    setTranslateY(window.outerHeight / 2);
  };

  useEffect(() => {
    setSelectedValue(zoomLevel);
  }, [zoomLevel]);

  return {
    selectedValue,
    isZoomInDisabled,
    isZoomOutDisabled,
    onChange,
    onZoomOut,
    onCenter,
    onZoomIn,
  };
};
