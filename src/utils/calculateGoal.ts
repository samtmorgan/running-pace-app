import { TPaceInput } from "@/components";
import { ERaceDistances } from "@/config";
import { getDistanceLength } from "./getDistanceLength";

type TCalculateGoalProps = {
  distance: ERaceDistances;
  pace: TPaceInput;
};

export const calculateGoal = ({
  distance,
  pace,
}: TCalculateGoalProps): {
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const distanceLength = getDistanceLength(distance);

  const paceInSeconds = pace.minutes * 60 + pace.seconds;
  const totalSeconds = paceInSeconds * distanceLength;

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.round(totalSeconds % 60);

  return { hours, minutes, seconds };
};
