// Remove Duplicate Elements From Array In JavaScript

const numbers = [1,3,5,3,9,4,3,7,9,2,3,6,8,9,3,2,9];
const names = ["Tom", "Jerry", "Minion", "Jack", "Nemo", "Jack", "Minion", "Tom"];

// Set doesn't contain any duplicate elements
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

const uniqueNames = [...new Set(names)];
console.log(uniqueNames);

