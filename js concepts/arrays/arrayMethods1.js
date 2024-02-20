// 1. Map() -> A function that accepts up to three arguments. 
// The map method calls the callbackfn function one time for each element in the array.
// It always return an another new array, creates a new array
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// here 'e' is representing each element in the array, 
// so each and every number in array and will be multiplied by 2

let numbers = [1,2,3];
let doubleNumbers = numbers.map((e) => e * 2);
console.log(doubleNumbers);

// convert from Farenheit to Celcius
// (F-32) * (5/9)

let fahTemp = [32, 55, 78, 104, 212];

function fahToCel(fah) {

    return (fah - 32) * (5/9);
}

let celTemp = fahTemp.map(fahToCel);
console.log("Celcius temperature is :", celTemp);


// 2. filter() -> We need to filter the data from the array
// It will create an new array once again, and returns a new array 

// Returns the elements of an array that meet the condition specified in a callback function.

// @param predicate — A function that accepts up to three arguments. 
// The filter method calls the predicate function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

let num1 = [11,22,33,44,55,66,77,88,99,100];
let evenNum = num1.filter((e) => e % 2 === 0);
console.log("Even nos are :", evenNum);

let employee = [
    {name : "Ram", age : "30", gender : "Male"},
    {name : "Bharathi", age : "27", gender : "Female"},
    {name : "Pavi", age : "38", gender : "Female"},
    {name : "John", age : "55", gender : "Male"},
    {name : "Sam", age : "78", gender : "Male"},
];

let femaleEmp = employee.filter((emp) => {
    return emp.gender === "Female" && emp.age > 30;
})

console.log(femaleEmp);


// 3. reduce() -> The .reduce() method combines each element of an array, using a specified reducer function, and returns a single value.

// A function that accepts up to four arguments. 
// The reduce method calls the callbackfn function one time for each element in the array.

// Calls the specified callback function for all the elements in an array. 
// The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// reduce will always give the final value of the accumulator and the first variable is always that the accumulator variable

let numb = [1,2,3,4,5]; // 1+2+3+4+5 = 15
let sum = numb.reduce((acc, num) => acc + num, 0); // acc is stored in 0 and num is stored in 1st value
console.log("Sum of the array is :", sum);

// find the max number in the array
let arr2 = [43, 897, 211, 538, 99];

let maxNum = arr2.reduce((max, num) => {
    if(num > max) {
        return num;
    } else {
        return max;
    }
}, arr2[1]);

console.log("Max no from the array is :", maxNum);

// find min number in the array

// cart name, price
let cartItems = [
    {name : 'Tops', price : 500},
    {name : 'Pants', price : 800},
    {name : 'Kurtis', price : 1500},
    {name : 'Socks', price : 170},
    {name : 'Jeans', price : 2300},
];

// accumulator -> total, calling 1 callback function
// initial total value is 0
// keep fetching the price and keep adding the total
let totalCost = cartItems.reduce((total, item) => total + item.price, 0);
console.log("The total cost of the Cart Items is :", totalCost);
