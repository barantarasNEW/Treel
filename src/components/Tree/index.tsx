import { IoMdAddCircle } from "react-icons/io";

import Branches from "../Branches";
import { useTree } from "./useTree";
import { generateUniqueId } from "../../helpers/generateUniqueId";
import "./styles.scss";

const Tree = (): JSX.Element => {
  const {
    tree,
    translateX,
    translateY,
    isDragging,
    zoomLevel,
    onEdit,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    onRemove,
    onAdd,
  } = useTree();

  return (
    <div className="tree">
      <div
        className="tree__content"
        style={{
          transform: `scale(${zoomLevel}) translate(-50%, -50%)`,
          left: translateX,
          top: translateY,
          userSelect: isDragging ? "none" : "auto",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="tree__categories">
          <div>Categories</div>

          <button
            className="tree__categories__button"
            onClick={() => onAdd(generateUniqueId())}
          >
            <IoMdAddCircle className="tree__icon" />
          </button>
        </div>

        <Branches
          items={tree}
          onAdd={onAdd}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      </div>
    </div>
  );
};

export default Tree;
