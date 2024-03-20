// find whether the given no is perfect no or not using javascript program

function isPerfectNumber(number) {
  if (number <= 1) {
    return false;
  }

  let sum = 1; // 1 is always a divisor

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      sum += i;
      if (i !== number / i) {
        sum += number / i;
      }
    }
  }

  return sum === number;
}

// Example usage:
let givenNumber = 28; // You can replace this with any positive integer
if (isPerfectNumber(givenNumber)) {
  console.log(`${givenNumber} is a perfect number.`);
} else {
  console.log(`${givenNumber} is not a perfect number.`);
}
