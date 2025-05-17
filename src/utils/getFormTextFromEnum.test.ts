import { getFormTextFromEnum } from "./getFormTextFromEnum";
import { ECalculationTypes, ERaceDistances, EUnits } from "../config";

jest.mock("../utils/stringUtils", () => ({
  capitalizeFirstLetter: jest.fn(
    (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
  ),
}));

describe("getFormTextFromEnum", () => {
  it("should return an array of objects with label and value for ECalculationTypes", () => {
    const result = getFormTextFromEnum(ECalculationTypes);
    const expected = [
      {
        label: "Pace",
        value: "pace",
      },
      {
        label: "Goal",
        value: "goal",
      },
    ];
    expect(result).toEqual(expected);
  });

  it("should return an empty array if the enum object is empty", () => {
    const emptyEnum = {};
    const result = getFormTextFromEnum(emptyEnum as any);
    expect(result).toEqual([]);
  });
});
