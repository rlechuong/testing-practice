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

function caesarCipher(string, shiftFactor) {
  let cipheredWord = "";
  for (let i = 0; i < string.length; i++) {
    const ASCIICode = string.charCodeAt(i);
    if (ASCIICode >= 97 && ASCIICode <= 122) {
      cipheredWord += cipherLowerCase(ASCIICode, shiftFactor);
    } else if (ASCIICode >= 65 && ASCIICode <= 90) {
      cipheredWord += cipherUpperCase(ASCIICode, shiftFactor);
    } else {
      cipheredWord += string.charAt(i);
    }
  }

  return cipheredWord;
}

function cipherUpperCase(ASCIICode, shiftFactor) {
  if (ASCIICode + shiftFactor > 90) {
    const overflow = ASCIICode + shiftFactor - 90;
    const cipheredASCIICode = 64 + overflow;
    const cipheredLetter = String.fromCharCode(cipheredASCIICode);
    return cipheredLetter;
  } else {
    const cipheredASCIICode = ASCIICode + shiftFactor;
    const cipheredLetter = String.fromCharCode(cipheredASCIICode);
    return cipheredLetter;
  }
}

function cipherLowerCase(ASCIICode, shiftFactor) {
  if (ASCIICode + shiftFactor > 122) {
    const overflow = ASCIICode + shiftFactor - 122;
    const cipheredASCIICode = 96 + overflow;
    const cipheredLetter = String.fromCharCode(cipheredASCIICode);
    return cipheredLetter;
  } else {
    const cipheredASCIICode = ASCIICode + shiftFactor;
    const cipheredLetter = String.fromCharCode(cipheredASCIICode);
    return cipheredLetter;
  }
}

export { capitalize, reverseString, calculator, caesarCipher };
