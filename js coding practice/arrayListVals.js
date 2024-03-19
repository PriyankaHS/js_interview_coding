// A arraylist contains some values and add element to the another array list 
// which are more than 100 asked try to solve with streams, try it in javascript

// Original array list
let originalArrayList = [50, 110, 70, 90, 120, 150];

// Filter elements greater than 100 and add them to the new array using arrow functions
let newArray = originalArrayList.filter(element => element > 100);

console.log(newArray);
