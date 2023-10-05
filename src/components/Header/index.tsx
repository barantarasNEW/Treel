import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { MdAssistantNavigation } from "react-icons/md";

import Logo from "../Logo";
import Select from "../Select";
import { useHeader } from "./useHeader";
import { HEADER_SELECT_ITEMS } from "./constants";
import "./styles.scss";

const Header = (): JSX.Element => {
  const {
    selectedValue,
    isZoomInDisabled,
    isZoomOutDisabled,
    onChange,
    onZoomOut,
    onCenter,
    onZoomIn,
  } = useHeader();

  return (
    <header className="header">
      <Logo />

      <div className="header__actions">
        <button onClick={onCenter}>
          <MdAssistantNavigation className="header__icon" />
        </button>

        <button disabled={isZoomInDisabled} onClick={onZoomIn}>
          <AiFillPlusCircle className="header__icon" />
        </button>

        <Select
          currentValue={selectedValue}
          onChange={onChange}
          items={HEADER_SELECT_ITEMS}
        />

        <button disabled={isZoomOutDisabled} onClick={onZoomOut}>
          <AiFillMinusCircle className="header__icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
