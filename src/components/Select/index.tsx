import { FC } from "react";

import { useSelect } from "./useSelect";
import { SelectProps } from "./types";
import "./styles.scss";

const Select: FC<SelectProps> = ({
  currentValue,
  onChange,
  items,
}): JSX.Element => {
  const { isActive, selectRef, onSelectValue, onToggleActive } = useSelect({
    onChange,
  });

  return (
    <div className="select" ref={selectRef}>
      <button className="select__value" onClick={onToggleActive}>
        {currentValue}%
      </button>

      {isActive && (
        <ul className="select__list">
          {items.map(({ value, title }) => (
            <li className="select__item" key={value}>
              <button
                className="select__item__button"
                onClick={() => onSelectValue(value)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
