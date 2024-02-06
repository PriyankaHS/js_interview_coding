// count the number of characters in a given string

function countOfCharacter(string){

    // Initialize an empty string to store the result
    let newStr = "";

    // Initialize a counter for consecutive occurrences
    let count = 1;

    // Iterate through each character in the string
    for (let i = 0; i < string.length; i++) {

        // Check if the current character is the same as the next one
        if(i < string.length-1 && string.charAt(i) === string.charAt(i+1)){

            // If true, increment the counter=
            count++;
        }else{

            // If false, append the current character and its count to the result string
            newStr  = newStr+string.charAt(i)+count;

            // Reset the counter for the next character
            count = 1;
        }
    }
    // Return the final result string
    return newStr;
}

let str = "aabbbcccaa";
console.log(countOfCharacter(str));
