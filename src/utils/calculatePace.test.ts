import { calculatePace, TPace } from "./calculatePace";
import { ERaceDistances } from "../config";

describe("calculatePace", () => {
  it("should calculate pace for a 5K race", () => {
    const result: TPace = calculatePace({
      distance: ERaceDistances.FIVE_KM,
      hours: 0,
      minutes: 25,
      seconds: 0,
    });

    expect(result.kmPace).toBe("5:00");
    expect(result.mPace).toBe("8:03");
    expect(result.distance).toBe(ERaceDistances.FIVE_KM);
    expect(result.goal).toEqual({ hours: 0, minutes: 25, seconds: 0 });
  });

  it("should calculate pace for a marathon", () => {
    const result: TPace = calculatePace({
      distance: ERaceDistances.MARATHON,
      hours: 3,
      minutes: 20,
      seconds: 0,
    });

    expect(result.kmPace).toBe("4:44");
    expect(result.mPace).toBe("7:38");
    expect(result.distance).toBe(ERaceDistances.MARATHON);
    expect(result.goal).toEqual({ hours: 3, minutes: 20, seconds: 0 });
  });

  it("should calculate pace for a 10K race", () => {
    const result: TPace = calculatePace({
      distance: ERaceDistances.TEN_KM,
      hours: 0,
      minutes: 50,
      seconds: 0,
    });

    expect(result.kmPace).toBe("5:00");
    expect(result.mPace).toBe("8:03");
    expect(result.distance).toBe(ERaceDistances.TEN_KM);
    expect(result.goal).toEqual({ hours: 0, minutes: 50, seconds: 0 });
  });

  it("should calculate pace for a half marathon", () => {
    const result: TPace = calculatePace({
      distance: ERaceDistances.HALF_MARATHON,
      hours: 1,
      minutes: 45,
      seconds: 0,
    });

    expect(result.kmPace).toBe("4:59");
    expect(result.mPace).toBe("8:01");
    expect(result.distance).toBe(ERaceDistances.HALF_MARATHON);
    expect(result.goal).toEqual({ hours: 1, minutes: 45, seconds: 0 });
  });

  it("should calculate pace for a 50K race", () => {
    const result: TPace = calculatePace({
      distance: ERaceDistances["50KM"],
      hours: 5,
      minutes: 0,
      seconds: 0,
    });

    expect(result.kmPace).toBe("6:00");
    expect(result.mPace).toBe("9:39");
    expect(result.distance).toBe(ERaceDistances["50KM"]);
    expect(result.goal).toEqual({ hours: 5, minutes: 0, seconds: 0 });
  });

  it("should calculate pace for a 100K race", () => {
    const result: TPace = calculatePace({
      distance: ERaceDistances["100KM"],
      hours: 10,
      minutes: 0,
      seconds: 0,
    });

    expect(result.kmPace).toBe("6:00");
    expect(result.mPace).toBe("9:39");
    expect(result.distance).toBe(ERaceDistances["100KM"]);
    expect(result.goal).toEqual({ hours: 10, minutes: 0, seconds: 0 });
  });

  it("should handle zero time input", () => {
    const result: TPace = calculatePace({
      distance: ERaceDistances.FIVE_KM,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    expect(result.kmPace).toBe("0:00");
    expect(result.mPace).toBe("0:00");
    expect(result.distance).toBe(ERaceDistances.FIVE_KM);
    expect(result.goal).toEqual({ hours: 0, minutes: 0, seconds: 0 });
  });
});
