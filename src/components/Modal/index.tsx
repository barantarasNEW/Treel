import { FC } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

import { useModal } from "./useModal";
import { ModalProps } from "./types";
import "./styles.scss";

const Modal: FC<ModalProps> = ({ onSubmit, onCancel }): JSX.Element => {
  const { value, onChange, onSubmitValue, modalRef } = useModal({
    onSubmit,
    onCancel,
  });

  return (
    <form className="modal" onSubmit={onSubmitValue} ref={modalRef}>
      <input
        className="modal__input"
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Title"
        autoFocus
        required
      />

      <button type="submit">
        <AiFillCheckCircle className="modal__icon" />
      </button>

      <button type="reset" onClick={onCancel}>
        <MdCancel className="modal__icon modal__icon--cancel" />
      </button>
    </form>
  );
};

export default Modal;
