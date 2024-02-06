function isPrime(number) {
  // Check if the number is less than 2 (not a prime number)
  if (number < 2) {
    return false;
  }

  // Iterate from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by any value in this range, it's not prime
    if (number % i === 0) {
      return false;
    }
  }

  // If no divisors were found, the number is prime
  return true;
}

// Example usage:
let num = 17;
if (isPrime(num)) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is not a prime number.`);
}
