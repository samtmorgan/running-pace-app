import { distanceMap, ERaceDistances } from "../config";

export const getDistanceLength = (distance: ERaceDistances) =>
  distanceMap[distance];
