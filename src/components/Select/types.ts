import { SelectItem } from "../../types";

export type SelectProps = {
  currentValue: number;
  items: SelectItem[];
  onChange: (value: number) => void;
};

export type UseSelectProps = Pick<SelectProps, "onChange">;
