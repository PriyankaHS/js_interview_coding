// Approach 1

// Creating the first object
const object1 = {
  key1: 10,
  key2: 20,
  key3: 30
};

// Creating the second object
const object2 = {
  key1: 5,
  key2: 15,
  key3: 25
};

// Merging the objects by adding the values of corresponding keys
const mergedObject = {};

for (const key in object1) {
  mergedObject[key] = object1[key] + object2[key];
}

console.log("Object 1:", object1);
console.log("Object 2:", object2);
console.log("Merged Object:", mergedObject);


// Approach 2
const obj1 = { a: 1, b: 2, c: 5 };
const obj2 = { b: 3, c: 4 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// output : b value from obj1 over-riden to obj2
// { a: 1, b: 3, c: 4 }
