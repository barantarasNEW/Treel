import { Branch } from "../../types";

export type BranchProps = {
  branch: Branch;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, newValue: string) => void;
};

export type UseBranchProps = Omit<BranchProps, "branch"> & {
  id: number;
};
