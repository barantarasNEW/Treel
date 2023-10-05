import { useCallback, useEffect, useReducer, useRef } from "react";

import { UseSelectProps } from "./types";

export const useSelect = ({ onChange }: UseSelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isActive, onToggleActive] = useReducer((v) => !v, false);

  const onSelectValue = (value: number): void => {
    onChange(value);
    onToggleActive();
  };

  const onClickOutside = useCallback(
    (e: MouseEvent): void => {
      if (!selectRef.current) {
        return;
      }

      if (
        !(e.target instanceof Node) ||
        !selectRef.current.contains(e.target as Node)
      ) {
        onToggleActive();
      }
    },
    [onToggleActive]
  );

  useEffect(() => {
    if (!isActive) {
      return;
    }

    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [onClickOutside, isActive]);

  return { isActive, selectRef, onSelectValue, onToggleActive };
};
