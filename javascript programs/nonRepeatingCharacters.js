// findNonRepeatingCharacters in the given string

function findNonRepeatingCharacters(str) {
  // Create an object to store character occurrences
  let charCount = {};

  // Iterate through the string and count character occurrences
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Filter non-repeating characters
  let nonRepeatingChars = Object.keys(charCount).filter((char) => charCount[char] === 1);

  return nonRepeatingChars;
}

// Example usage:
let inputString = "abacabad";
let result = findNonRepeatingCharacters(inputString);
console.log("Non-repeating characters:", result);
