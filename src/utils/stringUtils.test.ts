import { capitalizeFirstLetter, createGoalString } from "./stringUtils";

describe("stringUtils.capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a lowercase string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
  });

  it("should not change the first letter if it is already capitalized", () => {
    expect(capitalizeFirstLetter("Hello")).toBe("Hello");
  });

  it("should handle an empty string gracefully", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should capitalize the first letter of a string with special characters", () => {
    expect(capitalizeFirstLetter("!hello")).toBe("!hello");
  });

  it("should handle strings with only one character", () => {
    expect(capitalizeFirstLetter("a")).toBe("A");
  });

  it("should handle strings with spaces at the beginning", () => {
    expect(capitalizeFirstLetter(" hello")).toBe(" hello");
  });
});

describe("stringUtils.createGoalString", () => {
  it("should format a goal with hours, minutes, and seconds", () => {
    expect(createGoalString({ hours: 1, minutes: 30, seconds: 45 })).toBe(
      "01:30:45"
    );
  });

  it("should format a goal without hours", () => {
    expect(createGoalString({ hours: 0, minutes: 15, seconds: 20 })).toBe(
      "00:15:20"
    );
  });

  it("should pad single-digit minutes and seconds with leading zeros", () => {
    expect(createGoalString({ hours: 0, minutes: 5, seconds: 7 })).toBe(
      "00:05:07"
    );
  });

  it("should handle a goal with only seconds", () => {
    expect(createGoalString({ hours: 0, minutes: 0, seconds: 59 })).toBe(
      "00:00:59"
    );
  });

  it("should handle a goal with zero hours, minutes, and seconds", () => {
    expect(createGoalString({ hours: 0, minutes: 0, seconds: 0 })).toBe(
      "00:00:00"
    );
  });

  it("should handle a goal with hours but zero minutes and seconds", () => {
    expect(createGoalString({ hours: 2, minutes: 0, seconds: 0 })).toBe(
      "02:00:00"
    );
  });

  it("should handle a goal with hours greater than two digits", () => {
    expect(createGoalString({ hours: 123, minutes: 45, seconds: 6 })).toBe(
      "123:45:06"
    );
  });
});
