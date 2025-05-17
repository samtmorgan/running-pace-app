import { stringUtils } from "./stringUtils";

describe("stringUtils.capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a lowercase string", () => {
    expect(stringUtils.capitalizeFirstLetter("hello")).toBe("Hello");
  });

  it("should not change the first letter if it is already capitalized", () => {
    expect(stringUtils.capitalizeFirstLetter("Hello")).toBe("Hello");
  });

  it("should handle an empty string gracefully", () => {
    expect(stringUtils.capitalizeFirstLetter("")).toBe("");
  });

  it("should capitalize the first letter of a string with special characters", () => {
    expect(stringUtils.capitalizeFirstLetter("!hello")).toBe("!hello");
  });

  it("should handle strings with only one character", () => {
    expect(stringUtils.capitalizeFirstLetter("a")).toBe("A");
  });

  it("should handle strings with spaces at the beginning", () => {
    expect(stringUtils.capitalizeFirstLetter(" hello")).toBe(" hello");
  });
});
