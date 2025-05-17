import {
  ECalculationTypes,
  ETimeInput,
  ERaceDistances,
  EUnits,
} from "../config";
import { capitalizeFirstLetter } from "./stringUtils";

type TFormText = {
  label: string;
  value: string;
};

export const getFormTextFromEnum = (
  enumObject:
    | typeof ECalculationTypes
    | typeof ERaceDistances
    | typeof EUnits
    | typeof ETimeInput
): TFormText[] => {
  return Object.entries(enumObject).map(([key, value]) => ({
    label: capitalizeFirstLetter(value),
    value,
  }));
};
