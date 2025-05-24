enum ECalculationTypes {
  PACE = "pace",
  GOAL = "goal",
}

enum ERaceDistances {
  FIVE_KM = "5km",
  TEN_KM = "10km",
  HALF_MARATHON = "half",
  MARATHON = "marathon",
  "50KM" = "50km",
  "100KM" = "100km",
}

enum EUnits {
  KILOMETRES = "kilometres",
  MILES = "miles",
}

enum ETimeInput {
  HOURS = "hours",
  MINUTES = "minutes",
  SECONDS = "seconds",
}

enum ETimeInputPlaceholder {
  HOURS = "hrs",
  MINUTES = "min",
  SECONDS = "sec",
}

const distanceMap: Record<ERaceDistances, number> = {
  [ERaceDistances.FIVE_KM]: 5,
  [ERaceDistances.TEN_KM]: 10,
  [ERaceDistances.HALF_MARATHON]: 21.0975,
  [ERaceDistances.MARATHON]: 42.195,
  [ERaceDistances["50KM"]]: 50,
  [ERaceDistances["100KM"]]: 100,
};

enum EPaceLabels {
  KILOMETRES = "min/km",
  MILES = "min/mile",
}

export {
  ECalculationTypes,
  ERaceDistances,
  EUnits,
  ETimeInput,
  ETimeInputPlaceholder,
  EPaceLabels,
  distanceMap,
};
