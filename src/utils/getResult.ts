import { ECalculationTypes, ERaceDistances, EUnits } from "../config";
import { TGoalInput, TPaceInput } from "../components";
import { getDistanceLength } from "./getDistanceLength";
import { createGoalString, createPaceString } from "./stringUtils";

type TCalculation = {
  calculationType: ECalculationTypes;
  distance: ERaceDistances;
  paceInput: TPaceInput;
  goalInput: TGoalInput;
};

export type TCalculationResult = {
  kmPace: number;
  mPace: number;
  distance: ERaceDistances;
  distanceLength: number;
  goalDuration: number;
  goalInput: TGoalInput;
  goalTime: TGoalInput;
  goalString: string;
  kmPaceString: string;
  mPaceString: string;
  paceInput: TPaceInput;
};

export const getResult = ({
  calculationType,
  distance,
  paceInput,
  goalInput,
}: TCalculation) => {
  if (calculationType === ECalculationTypes.PACE) {
    const { hours, minutes, seconds } = goalInput;
    const goalDuration = hours * 60 * 60 + minutes * 60 + seconds;
    const distanceLength = getDistanceLength(distance);
    const kmPace = goalDuration / distanceLength;
    const mPace = kmPace / 0.621371;

    const result: TCalculationResult = {
      kmPace,
      mPace,
      distance,
      distanceLength,
      goalDuration,
      goalInput,
      goalTime: goalInput,
      goalString: createGoalString(goalInput),
      kmPaceString: createPaceString(kmPace),
      mPaceString: createPaceString(mPace),
      paceInput,
    };
    return result;
  }
  if (calculationType === ECalculationTypes.GOAL) {
    const { minutes, seconds, units } = paceInput;

    const paceInSeconds = minutes * 60 + seconds;

    const distanceLength = getDistanceLength(distance);

    const goalDuration = paceInSeconds * distanceLength;

    const kmPace =
      goalDuration /
      (units === EUnits.KILOMETRES
        ? distanceLength
        : distanceLength / 0.621371);

    const mPace =
      goalDuration /
      (units === EUnits.MILES ? distanceLength : distanceLength * 0.621371);

    const goalTime = {
      hours: Math.floor(goalDuration / 3600),
      minutes: Math.floor((goalDuration % 3600) / 60),
      seconds: Math.round(goalDuration % 60),
    };

    const result: TCalculationResult = {
      kmPace,
      mPace,
      distance,
      distanceLength,
      goalDuration,
      goalInput,
      goalTime,
      goalString: createGoalString(goalTime),
      kmPaceString: createPaceString(kmPace),
      mPaceString: createPaceString(mPace),
      paceInput,
    };
    return result;
  }

  return null;
};
