import { FC } from "react";

import Branch from "../Branch";
import { BranchesProps } from "./types";
import "./styles.scss";

const Branches: FC<BranchesProps> = ({
  items,
  onAdd,
  onRemove,
  onEdit,
}): JSX.Element => (
  <>
    {!!items.length && (
      <ul className="branches">
        {items.map((value) => (
          <Branch
            key={value.id}
            branch={value}
            onAdd={onAdd}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
      </ul>
    )}
  </>
);
export default Branches;
