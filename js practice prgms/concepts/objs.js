//  Create 2 objects and merge them together in JavaScript , objects will be in key value pairs add 1 to other

// Approach 1 

const obj1 = {a : 1, b : 2, c : 17};
const obj2 = {b : 15, d : 33, e : 86};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// output : b value from obj1 over rides to obj2
// { a: 1, b: 15, c: 17, d: 33, e: 86 }

// Approach 2

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
  const mergedObject = { };
  
  for (const key in object1) {
    mergedObject[key] = object1[key] + object2[key];
  }
  
  console.log("Object 1:", object1);
  console.log("Object 2:", object2);
  console.log("Merged Object:", mergedObject);
  

// var example :
  
function example() { 
  if (true) { 
    var x = 5; 
  } 
console.log(x); 
} 
example();


// let example 

// function example() { 
//   if (true) { 
//     let y = 10; 
//   } 
// console.log(y); // Error: y is not defined 
// } 
// example();