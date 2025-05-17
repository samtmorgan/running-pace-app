import { ECalculationTypes, ERaceDistances, EUnits } from "../config/constants";

const defaultFormValues = {
  calculationType: ECalculationTypes.PACE,
  raceDistance: ERaceDistances.FIVE_KM,
  units: EUnits.KILOMETRES,
};

export { defaultFormValues };
