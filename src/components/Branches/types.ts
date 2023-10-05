import { Branch } from "../../types";

export type BranchesProps = {
  items: Branch[];
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, newValue: string) => void;
};
