// reverse the string without using inbuilt method in js

function revString(str) {

    let reversedStr = '';

    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

let my_string = "Hello Bengaluru";
let reversedString = revString(my_string);

console.log("Reversed string is : ", reversedString);

// using in built method 
// join - converts from array to string with seperator, This method joins the elements of the array into a string
// split('') - This method splits the string into an array of characters.
// reverse() - This method reverses the order of elements in the array.

function reverseString(str) {
    return str.split('').reverse().join('+');
}

let reversedSt = reverseString(my_string);

console.log("Reversed string is : ", reversedSt);
