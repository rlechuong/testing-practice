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

export { capitalize, reverseString };
