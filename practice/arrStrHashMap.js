// 7. Convert given array of string to hash map

const fruits = ["avacado", "berry", "guava", "orange", "melon"];

// This line initializes an empty object hashMap which will serve as our hash map.
const hashMap = {};
// const hashMap = new Map();

// This line iterates over each element of the array using the forEach() method.
// For each element (item) in the array, it sets a property in the hashMap object with the key being the element itself (item) and the value being true.
// This effectively creates a hash map where each string from the array becomes a key, and the value associated with each key is set to true.
fruits.forEach(item => {
    hashMap[item] = true;
});

console.log("Result is :", hashMap);
