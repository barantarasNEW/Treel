import { useCallback, useContext, useState } from "react";

import { TreeContext } from "../../context";
import { generateUniqueId } from "../../helpers/generateUniqueId";
import { findBranch, findBranchIndex, findParentBranch } from "./helpers";
import { Branch } from "../../types";

export const useTree = () => {
  const [tree, setTree] = useState<Branch[]>([]);
  const { translateX, translateY, zoomLevel, setTranslateX, setTranslateY } =
    useContext(TreeContext);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);

  const handleMouseDown = (e: any): void => {
    setIsDragging(true);
    setDragStartX(e.clientX - translateX);
    setDragStartY(e.clientY - translateY);
  };

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

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      const newTranslateX = e.clientX - dragStartX;
      const newTranslateY = e.clientY - dragStartY;
      setTranslateX(newTranslateX);
      setTranslateY(newTranslateY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const onEdit = useCallback(
    (id: number, newValue: string): void => {
      const newTree: Branch[] = [...tree];
      const branch: Branch | undefined = findBranch(id, newTree);

      if (branch) {
        branch.value = newValue;
      }

      setTree(newTree);
    },
    [tree]
  );

  const onAdd = useCallback(
    (id: number): void => {
      const newBranch: Branch = {
        id: generateUniqueId(),
        branches: [],
        value: "Empty",
      };

      const newTree: Branch[] = [...tree];
      const branch: Branch | undefined = findBranch(id, newTree);

      if (branch) {
        branch.branches.push(newBranch);
      } else {
        newTree.push(newBranch);
      }

      setTree(newTree);
    },
    [tree]
  );

  const onRemove = useCallback(
    (id: number): void => {
      let newTree: Branch[] = [...tree];
      const parentBranch: Branch | undefined = findParentBranch(id, newTree);

      if (parentBranch) {
        const index = findBranchIndex(id, parentBranch.branches);

        parentBranch.branches.splice(index, 1);
      } else {
        newTree = newTree.filter((value) => value.id !== id);
      }

      setTree(newTree);
    },
    [tree]
  );

  return {
    tree,
    translateX,
    zoomLevel: zoomLevel / 100,
    translateY,
    isDragging,
    onEdit,
    onRight,
    onDown,
    onTop,
    onLeft,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    onRemove,
    onAdd,
  };
};
