// 1. find unique values from the array -> it filters out all the duplicate values

const arr1 = [1,2,3,1,3,5,3,1,8,2];
const uniqueArray = [...new Set(arr1)]; // spread operator
console.log(uniqueArray);


// 2. convert int to string

const num = 17;
const numStr = num + ''; // '17'
console.log(numStr + 10); // 1710
// OR
const numStr1 = String(num); // '17'
console.log(numStr1 + 10); 


// 3. convert float to int

const floatNum = 15.300;
const intNum = parseInt(floatNum);
console.log(intNum);


// 4. check if a variable is a number

const value = '10';

if(typeof value === 'number' && !isNaN(value)) {
    console.log(value + ' is number');
}
else {
    console.log(value + ' is not a number');
}


// 5. swap variable values without using 3rd variable

let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a,b);


// 6. check if an object has property

const person = {
    name : 'Sam',
    age : 27 ,
}
if(person.hasOwnProperty('name')) {
    console.log('Person has name property');
}


// 7. remove false values from the array -> false, 0, "", null, undefined, NaN

const values1 = [0, 1, false, 2, '', 3, null, undefined, NaN, 7];
const newVal1 = values1.filter(Boolean);
console.log(newVal1);


// 8. String -> convert to Uppercase, Lowercase

const str = "Welcome to Bengaluru";
const u1 = str.toUpperCase();
const l1 = str.toLowerCase();
console.log(u1);
console.log(l1);


// 9. Check if array contains a value

const lang = ['Python', 'Javascript', 'Ruby', 'Java'];

if(lang.includes('Java')) {
    console.log('found');
}


// 10. Check if an array is empty

const arrEmp = [];
if(arrEmp.length === 0) {
    console.log('Array is empty');
}


// 11. Generate a random number

const min = 17;
const max = 83;

const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`Random Number is : ${randomNumber}`);


// 12. String to number 

const strNumber = '1708.111';
const x1 = parseFloat(strNumber);
console.log(x1);


// 13. Join array elements into a string

const words = ['Hello', 'India'];
const sentence = words.join(' ');
console.log(sentence);


// 14. Access / Get object property

const user = {
    name : 'Joe',
    age : '24',
    dob : '01-02-2000'
};

console.log(user['name']);
console.log(user['dob']);


// 15. Clone / shadow copy of an array or Object -> spread operators can be used in objs also and store it in a variable

const marks = [35, 47, 65, 89, 92];
const marksDuplicate = [...marks];
console.log(marksDuplicate);

const userDuplicate = { ...user }; // spread operator
console.log(userDuplicate);


// 16. Convert an object to array

const employee = {
    name : 'Tom',
    age : '26',
    dob : '01-02-1998'
};

// a. keys arrays
const keysArray = Object.keys(employee);
console.log(keysArray);

// b. values arrays
const valuesArray = Object.values(employee);
console.log(valuesArray);

// c. key - value pair array
const keyValArray = Object.entries(employee);
console.log(keyValArray);


// 17. Get the current date and time 

const currentDate = new Date();
console.log(currentDate.toLocaleString());


// 18. Check if variable is defined or not

let i;

if(typeof i === 'undefined') {
    console.log('Variable is not defined');
}


// 19. Truncate an array -> manipulate the length of the array

const test1 = [0,1,5,6,9,3,8,4,2,7];
test1.length = 3; // it gives the value of the first 3 elements from the array
console.log(test1);


// 20. Last item in array

const popArray = [0,1,5,6,9,3,8,4,2,7];
const n1 = popArray.slice(-1);
console.log(n1);
