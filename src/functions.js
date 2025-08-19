function capitalize(string) {
  const word = string;
  const firstCharCapitalized = word.charAt(0).toUpperCase();
  const capitalizedWord = firstCharCapitalized + word.slice(1);
  return capitalizedWord;
}

function reverseString(string) {
  const word = string;
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

const calculator = {
  add: function add(num1, num2) {
    return num1 + num2;
  },
  subtract: function subtract(num1, num2) {
    return num1 - num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  },
  divide: function divide(num1, num2) {
    return num1 / num2;
  },
};

function caesarCipher(string) {
  return "bcd";
}

export { capitalize, reverseString, calculator, caesarCipher };
