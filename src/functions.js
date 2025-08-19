function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
};

function caesarCipher(string, shiftFactor) {
  let moduloShiftFactor = shiftFactor % 26;
  if (moduloShiftFactor < 0) {
    moduloShiftFactor += 26;
  }

  let cipheredWord = "";

  for (let i = 0; i < string.length; i++) {
    const ASCIICode = string.charCodeAt(i);

    if (ASCIICode >= 97 && ASCIICode <= 122) {
      cipheredWord += shiftedCharacter(ASCIICode, moduloShiftFactor, 97, 122);
    } else if (ASCIICode >= 65 && ASCIICode <= 90) {
      cipheredWord += shiftedCharacter(ASCIICode, moduloShiftFactor, 65, 90);
    } else {
      cipheredWord += string[i];
    }
  }

  return cipheredWord;
}

function shiftedCharacter(ASCIICode, shiftFactor, ASCIIStart, ASCIIEnd) {
  const cipheredASCIICode = ASCIICode + shiftFactor;
  if (cipheredASCIICode > ASCIIEnd) {
    const overflow = cipheredASCIICode - ASCIIEnd;
    return String.fromCharCode(ASCIIStart + overflow - 1);
  }

  return String.fromCharCode(cipheredASCIICode);
}

function analyzeArray(array) {
  if (array.length === 0) {
    throw new Error("Array cannot be empty.");
  }

  const sum = array.reduce((sum, num) => sum + num, 0);

  return {
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
