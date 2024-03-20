// swap 2 strings without using 3rd variable in javascript 

let str1 = "Hello";
let str2 = "Bengaluru";

console.log("Before swapping :");
console.log("str1:", str1);
console.log("str2:", str2);

[str1, str2] = [str2, str1];

console.log("After swapping :");
console.log("str1:", str1);
console.log("str2:", str2);
