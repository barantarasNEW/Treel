import { Branch } from "../../types";

export const findBranch = (id: number, array: Branch[]): Branch | undefined => {
  for (const branch of array) {
    if (branch.id === id) {
      return branch;
    }

    const foundBrach = findBranch(id, branch.branches);

    if (foundBrach) {
      return foundBrach;
    }
  }
};

export const findParentBranch = (
  id: number,
  array: Branch[]
): Branch | undefined => {
  for (const branch of array) {
    const findBrach = branch.branches.some((value) => value.id === id);

    if (findBrach) {
      return branch;
    }

    const foundBrach = findBranch(id, branch.branches);

    if (foundBrach) {
      return foundBrach;
    }
  }
};

export const findBranchIndex = (id: number, array: Branch[]): number => {
  return array.findIndex((value) => value.id === id);
};
