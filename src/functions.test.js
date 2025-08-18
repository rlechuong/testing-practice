import { describe, test, expect } from "@jest/globals";
import { capitalize, reverseString } from "./functions.js";

describe("capitalize", () => {
  test("should capitalize first character of a lowercase string", () => {
    expect(capitalize("chicken")).toBe("Chicken");
  });

  test("should capitalize first character of a different lowercase string", () => {
    expect(capitalize("fried")).toBe("Fried");
  });

  test("should return empty string if an empty string is passed", () => {
    expect(capitalize("")).toBe("");
  });

  test("should capitalize a single character", () => {
    expect(capitalize("w")).toBe("W");
  });

  test("should return the same string if already capitalized", () => {
    expect(capitalize("Chicken")).toBe("Chicken");
  });
});

describe("reverseString", () => {
  test("should return a string reversed", () => {
    expect(reverseString("Chicken")).toBe("nekcihC");
  });

  test("should return a different string reversed", () => {
    expect(reverseString("Fried")).toBe("deirF");
  });

  test("should return an empty string if an empty string is passed", () => {
    expect(reverseString("")).toBe("");
  });

  test("should return a single character if a single character is passed", () => {
    expect(reverseString("w")).toBe("w");
  });
});
