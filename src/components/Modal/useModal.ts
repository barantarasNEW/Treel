import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import { ModalProps } from "./types";

export const useModal = ({ onSubmit, onCancel }: ModalProps) => {
  const [value, setInputValue] = useState<string>("");
  const modalRef = useRef<HTMLFormElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmitValue = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(value);
  };

  const onClickOutside = useCallback(
    (e: MouseEvent): void => {
      if (!modalRef.current) {
        return;
      }

      if (
        !(e.target instanceof Node) ||
        !modalRef.current.contains(e.target as Node)
      ) {
        onCancel();
      }
    },
    [onCancel]
  );

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [onClickOutside]);

  return { value, onChange, onSubmitValue, modalRef };
};
