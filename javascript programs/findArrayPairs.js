// in a set of array the target is 10, find the pairs of array
function findPairs(array, target) {
  const pairs = [];

  // Use a Set to store already visited numbers
  const visitedNumbers = new Set();

  for (let num of array) {
    const complement = target - num;

    if (visitedNumbers.has(complement)) {
      pairs.push([num, complement]);
    }

    visitedNumbers.add(num);
  }

  return pairs;
}

const array = [3, 4, 5, 2, 6, 8];
const target = 10;

const result = findPairs(array, target);
console.log(result);
