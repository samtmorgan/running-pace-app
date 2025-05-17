import { ERaceDistances } from "../config";
import { calculatePaceString } from "./calculatePaceString";
import { getDistanceLength } from "./getDistanceLength";

type TCalculatePaceProps = {
  distance: ERaceDistances;
  hours: number;
  minutes: number;
  seconds: number;
};

type TGoalTime = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type TPace = {
  distance: ERaceDistances;
  goal: TGoalTime;
  kmPace: string;
  mPace: string;
};

export const calculatePace = ({
  distance,
  hours,
  minutes,
  seconds,
}: TCalculatePaceProps): TPace => {
  const distanceLength = getDistanceLength(distance);

  const totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;
  const kmPace = calculatePaceString(totalSeconds, distanceLength);
  const mPace = calculatePaceString(totalSeconds, distanceLength * 0.621371);

  return { kmPace, mPace, distance, goal: { hours, minutes, seconds } };
};
