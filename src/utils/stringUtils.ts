export const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const createPaceString = (pace: number): string => {
  const minutes = Math.floor(pace / 60);
  const seconds = Math.round(pace % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};

export const createGoalString = (goal: {
  hours: number;
  minutes: number;
  seconds: number;
}): string => {
  const { hours, minutes, seconds } = goal;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};
