// Remove all consecutive duplicates from the string

function removeConsecutiveDuplicates(str) {

    return str.split('').filter((char, index, array) => char !== array[index + 1]).join('');

    // let result = '';
    // for(let i=0; i<str.length; i++) {
    //     if(str[i] !== str[i+1]) {
    //         result += str[i];
    //     }
    // }
    // return result;
}

let originalString = "aaabbbcccdddeeefgh";
let stringWithoutDuplicates = removeConsecutiveDuplicates(originalString);
console.log(stringWithoutDuplicates);


// In this approach:

// split('') is used to split the input string into an array of characters.

// filter() is applied to remove consecutive duplicates by checking if the current character is different from the next character in the array.

// join('') is used to join the array back into a string after filtering.

// This approach achieves the same result as the previous one but utilizes array manipulation methods rather than iterating over the string.
