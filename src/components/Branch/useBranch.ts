import { useReducer } from "react";

import { UseBranchProps } from "./types";

export const useBranch = ({ id, onAdd, onRemove, onEdit }: UseBranchProps) => {
  const [isEdit, onToggleEdit] = useReducer((v) => !v, true);

  const onSubmit = (value: string): void => {
    onEdit(id, value);
    onToggleEdit();
  };

  const onAddBranch = (): void => onAdd(id);

  const onRemoveBranch = (): void => onRemove(id);

  return {
    isEdit,
    onSubmit,
    onAddBranch,
    onRemoveBranch,
    onToggleEdit,
  };
};
