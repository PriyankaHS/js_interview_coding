// 1. Remove special characters from the string

function removeSpecialChars(str) {

    const specialChars = "!@#$%^&*?<>()";

    // Split the string into an array of characters, filter out the special characters, and then join the array back into a string
    return str.split('').filter(char => !specialChars.includes(char)).join('');
}

const my_string = "Hi! Hello$^&*^ How @re you*?";
const result = removeSpecialChars(my_string);
console.log("The result is :", result);


//  This line performs the actual removal of special characters:

// str.split(''): This splits the input string into an array of characters.
// .filter(char => !specialChars.includes(char)): This filters out the characters from the array that are not present in the specialChars string. It uses the includes() method to check whether each character is included in specialChars. Characters that are not included are kept in the array.
// .join(''): This joins the filtered array back into a string, effectively removing the special characters.
