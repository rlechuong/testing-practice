import { describe, test, expect } from "@jest/globals";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions.js";

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

describe("calculator", () => {
  test("should add two numbers", () => {
    expect(calculator.add(6, 9)).toBe(15);
  });

  test("should add two different numbers", () => {
    expect(calculator.add(8, 1)).toBe(9);
  });

  test("should subtract two numbers", () => {
    expect(calculator.subtract(6, 9)).toBe(-3);
  });

  test("should subtract two different numbers", () => {
    expect(calculator.subtract(8, 1)).toBe(7);
  });

  test("should multiply two numbers", () => {
    expect(calculator.multiply(6, 9)).toBe(54);
  });

  test("should multiply two different numbers", () => {
    expect(calculator.multiply(8, 1)).toBe(8);
  });

  test("should divide two numbers", () => {
    expect(calculator.divide(69, 3)).toBe(23);
  });

  test("should divide two different numbers", () => {
    expect(calculator.divide(81, 9)).toBe(9);
  });
});

describe("caesarCipher", () => {
  test("should shift string by the shift factor", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("should shift different string by the shift factor", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  test("should shift different string by the shift factor with wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("should follow the original lettercase when shifting", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("should follow the original lettercase when shifting with wrapping", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });

  test("should not change punctuation, spaces, or non-alphabetical characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("should handle empty strings", () => {
    expect(caesarCipher("", 9)).toBe("");
  });

  test("should handle large shift factors", () => {
    expect(caesarCipher("abc", 69)).toBe("rst");
  });
});

describe("analyzeArray", () => {
  test("should return object with average, min, max, and length for an array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("should return object with average, min, max, and length for a different array", () => {
    expect(analyzeArray([2, 4, 6, 8, 10])).toEqual({
      average: 6,
      min: 2,
      max: 10,
      length: 5,
    });
  });

  test("should throw an error if an empty array is passed", () => {
    expect(() => analyzeArray([])).toThrow("Array cannot be empty.");
  });

  test("should handle an array with one element", () => {
    expect(analyzeArray([9])).toEqual({
      average: 9,
      min: 9,
      max: 9,
      length: 1,
    });
  });

  test("should handle an array with negative numbers", () => {
    expect(analyzeArray([-3, -6, -9])).toEqual({
      average: -6,
      min: -9,
      max: -3,
      length: 3,
    });
  });
});
