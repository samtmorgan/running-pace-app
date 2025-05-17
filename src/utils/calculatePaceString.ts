export const calculatePaceString = (
  totalSeconds: number,
  distance: number
): string => {
  const paceInSeconds = totalSeconds / distance;
  const minutes = Math.floor(paceInSeconds / 60);
  const seconds = Math.round(paceInSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};
