// factorial of a number using recursion
function factorialRecursive(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return n * factorialRecursive(n - 1);
    }
}

// Example usage:
const resultRecursive = factorialRecursive(5);
console.log("Factorial (Recursive):", resultRecursive);
