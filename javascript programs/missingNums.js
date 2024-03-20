function findMissingNumbers(arr) {
    const maxNum = Math.max(...arr);
    const minNum = Math.min(...arr);
    const missingNumbers = [];
    
    for (let i = minNum; i <= maxNum; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }
    
    return missingNumbers;
}

// Example usage:
const numbers = [1, 2, 4, 6, 7, 9];
const missing = findMissingNumbers(numbers);
console.log(missing); // Output: [3, 5, 8]
