import { getResult } from "./getResult";
import { ECalculationTypes, ERaceDistances, EUnits } from "../config";

describe("getResult", () => {
  it("should calculate pace correctly for PACE calculation type", () => {
    const calculation = {
      calculationType: ECalculationTypes.PACE,
      distance: ERaceDistances.MARATHON,
      paceInput: { minutes: 0, seconds: 0, units: EUnits.KILOMETRES },
      goalInput: { hours: 3, minutes: 20, seconds: 0 },
    };

    const result = getResult(calculation);

    expect(result).toEqual({
      kmPace: 284.3938855314611,
      mPace: 457.6877349143444,
      distance: calculation.distance,
      distanceLength: expect.any(Number),
      goalDuration: 12000, // 3 hours 20 minutes in seconds
      goalInput: calculation.goalInput,
      goalTime: calculation.goalInput,
      goalString: "03:20:00",
      kmPaceString: "4:44",
      mPaceString: "7:38",
      paceInput: calculation.paceInput,
    });
  });

  it("should calculate goal duration correctly for GOAL calculation type with kilometers", () => {
    const calculation = {
      calculationType: ECalculationTypes.GOAL,
      distance: ERaceDistances.TEN_KM,
      paceInput: { minutes: 5, seconds: 0, units: EUnits.KILOMETRES },
      goalInput: { hours: 0, minutes: 0, seconds: 0 },
    };

    const result = getResult(calculation);

    expect(result).toEqual({
      kmPace: 300,
      mPace: 482.80334936776904,
      distance: "10km",
      distanceLength: 10,
      goalDuration: 3000,
      goalInput: calculation.goalInput,

      goalString: "00:50:00",
      kmPaceString: "5:00",
      mPaceString: "8:03",
      paceInput: calculation.paceInput,
      goalTime: {
        hours: 0,
        minutes: 50,
        seconds: 0,
      },
    });
  });

  it("should calculate goal duration correctly for GOAL calculation type with miles", () => {
    const calculation = {
      calculationType: ECalculationTypes.GOAL,
      distance: ERaceDistances.TEN_KM,
      paceInput: { minutes: 8, seconds: 3, units: EUnits.MILES },
      goalInput: { hours: 0, minutes: 0, seconds: 0 },
    };

    const result = getResult(calculation);

    expect(result).toEqual({
      kmPace: 300.12219300000004,
      mPace: 483,
      distance: "10km",
      distanceLength: 10,
      goalDuration: 4830,
      goalInput: calculation.goalInput,
      goalTime: {
        hours: 1,
        minutes: 20,
        seconds: 30,
      },
      goalString: "01:20:30",
      kmPaceString: "5:00",
      mPaceString: "8:03",
      paceInput: calculation.paceInput,
    });
  });
});
