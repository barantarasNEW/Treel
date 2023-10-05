import { FC } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdModeEditOutline, MdCancel } from "react-icons/md";

import Branches from "../Branches";
import Modal from "../Modal";
import { useBranch } from "./useBranch";
import { BranchProps } from "./types";
import "./styles.scss";

const Branch: FC<BranchProps> = ({
  branch: { id, branches, value },
  onAdd,
  onRemove,
  onEdit,
}): JSX.Element => {
  const { isEdit, onToggleEdit, onAddBranch, onSubmit, onRemoveBranch } =
    useBranch({
      id,
      onAdd,
      onRemove,
      onEdit,
    });

  return (
    <li className="branch">
      <div className="branch__actions">
        {isEdit ? (
          <Modal onSubmit={onSubmit} onCancel={onToggleEdit} />
        ) : (
          <>
            <div className="branch__value">{value}</div>

            <button onClick={onToggleEdit}>
              <MdModeEditOutline className="branch__icon" />
            </button>
            <button onClick={onAddBranch}>
              <IoMdAddCircle className="branch__icon" />
            </button>
            <button onClick={onRemoveBranch}>
              <MdCancel className="branch__icon branch__icon--remove" />
            </button>
          </>
        )}
      </div>

      <Branches
        items={branches}
        onAdd={onAdd}
        onRemove={onRemove}
        onEdit={onEdit}
      />
    </li>
  );
};

export default Branch;
