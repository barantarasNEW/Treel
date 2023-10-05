export type Branch = {
  id: number;
  value: string;
  branches: Branch[];
};

export type SelectItem = {
  value: number;
  title: string;
};
