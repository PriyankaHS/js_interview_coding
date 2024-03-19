// 1. Remove special characters from the string

function removeSpecialChars(str) {

    const specialChars = "!@#$%^&*?<>()";

    // Split the string into an array of characters, filter out the special characters, and then join the array back into a string
    return str.split('').filter(char => !specialChars.includes(char)).join('');
}

const my_string = "Hi! Hello$^&*^ How @re you*?";
const result = removeSpecialChars(my_string);
console.log("The result is :", result);
