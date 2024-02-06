function fibonacci(n) {
// Base case: If 'n' is 0 or 1, return 'n' (Fibonacci of 0 is 0, and Fibonacci of 1 is 1)
    if (n <= 1) {
        return n;
    } else {
        // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
const n = 10;

// Loop through indices from 0 to 'n' and print the Fibonacci series
for (let i = 0; i <= n; i++) {
    console.log(fibonacci(i));
}