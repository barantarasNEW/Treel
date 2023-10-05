import {
  BiSolidDownArrow,
  BiSolidLeftArrow,
  BiSolidUpArrow,
  BiSolidRightArrow,
} from "react-icons/bi";

import { useArrows } from "./useArrows";
import "./styles.scss";

const Arrows = (): JSX.Element => {
  const { onLeft, onRight, onTop, onDown } = useArrows();

  return (
    <div>
      <button onClick={onTop} className="arrows arrows__top">
        <BiSolidUpArrow className="arrows__icon" />
      </button>

      <button onClick={onDown} className="arrows arrows__bottom">
        <BiSolidDownArrow className="arrows__icon" />
      </button>

      <button onClick={onLeft} className="arrows arrows__left">
        <BiSolidLeftArrow className="arrows__icon" />
      </button>

      <button onClick={onRight} className="arrows arrows__right">
        <BiSolidRightArrow className="arrows__icon" />
      </button>
    </div>
  );
};

export default Arrows;
