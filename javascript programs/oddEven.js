function separateOddEven(arr) {
  // Separate odd and even numbers
  const oddNumbers = arr.filter(num => num % 2 !== 0);
  const evenNumbers = arr.filter(num => num % 2 === 0);

  // Concatenate odd and even numbers
  const resultArray = oddNumbers.concat(evenNumbers);

  return resultArray;
}

// Example usage:
const inputArray = [3, 8, 5, 12, 7, 6];
const result = separateOddEven(inputArray);

console.log("Original Array:", inputArray);
console.log("Separated Odd and Even Array:", result);
