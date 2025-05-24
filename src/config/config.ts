import { ECalculationTypes, ERaceDistances, EUnits } from "../config/constants";

const defaultFormValues = {
  calculationType: ECalculationTypes.PACE,
  raceDistance: ERaceDistances.FIVE_KM,
  units: EUnits.KILOMETRES,
  goalInput: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  paceInput: {
    minutes: 0,
    seconds: 0,
    units: EUnits.KILOMETRES,
  },
};

export { defaultFormValues };
