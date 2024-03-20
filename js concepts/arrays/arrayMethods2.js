// 1. every() -> check if all the elements in the array pass for a specific condition

// A function that accepts up to three arguments. 
// The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.

// Determines whether all the members of an array satisfy the specified test.

let num = [1,2,3,4,5];
let flag = num.every((e) => e < 10);
console.log(flag);


// 2. some() -> check atleast 1 element in the array passes the condition

// A function that accepts up to three arguments. 
// The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, 
// or until the end of the array.

// Determines whether the specified callback function returns true for any element of an array.

let num1 = [1,2,3,4,5];
let fg = num1.some((e) => e % 2 === 0);
console.log(fg);


// // 3. find() -> returns the value of the first element in the array that satifies a specific condition 

// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. 
// If such an element is found, find immediately returns that element value. 
// Otherwise, find returns undefined.

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.

let total = [1,2,3,7,9];
let fe = total.find((e) => e % 2 === 0);
console.log(fe);


// 4. indexOf() -> Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// @param searchElement — The value to locate in the array.

// @param fromIndex — The array index at which to begin the search. 
// If fromIndex is omitted, the search starts at index 0.

let fruits = ['avacado', 'berry', 'mango', 'pear', 'grapes'];
let indexOf_str = fruits.indexOf('berry');
// let indexOf_str = fruits.indexOf('orange');
console.log(indexOf_str);


// 5. lastIndexOf() -> Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

// @param searchElement — The value to locate in the array.

// @param fromIndex — The array index at which to begin searching backward. 
// If fromIndex is omitted, the search starts at the last index in the array.

let fruits1 = ['avacado', 'berry', 'mango', 'pear', 'grapes', 'pear'];
// let fruits1 = ['avacado', 'pear', 'berry', 'mango', 'pear', 'grapes'];

let lastPear = fruits1.lastIndexOf('pear');
console.log(lastPear);


// 6. reverse () -> Reverses the elements in an array in place. 
// This method mutates the array and returns a reference to the same array.

let frts = ['avacado', 'berry', 'mango', 'grapes', 'pear'];
let revFruits = frts.reverse();
console.log(revFruits);


// 7. sort() -> Sorts an array in place. This method mutates the array and returns a reference to the same array.

// @param compareFn
// Function used to determine the order of the elements. 
// It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. 
// If omitted, the elements are sorted in ascending order, ASCII character order.

let products = ['macbook', 'imac', 'samsung', 'one plus', 'redmi', '123test', 'Realme'];
let proSort = products.sort();
console.log(proSort);
