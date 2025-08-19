import { describe, test, expect } from "@jest/globals";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
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
});
