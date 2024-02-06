// 1. Find out the substring with max length where substring should have unique character in Javascript

function maxLengthSubstring(str) {

    // maxLength to store the maximum length of the substring
    // start to store the starting index of the current substring
    // charIndexMap as an empty object to map characters to their last index
    let maxLength = 0, start = 0, charIndexMap = {};

    // Start a for loop that iterates over each character in the input string
    // Update the starting index (start) based on whether the current character (str[end]) is already present in the charIndexMap
    // If it is, set start to the maximum of the last index of the character + 1 or 0 
    // This ensures that start is always at the beginning of a new substring
    // Update the charIndexMap to store the last index of the current character
    // Update the maximum length (maxLength) by comparing it with the length of the current substring (end - start + 1)

    for (let end = 0; end < str.length; end++) {
        start = Math.max(charIndexMap[str[end]] + 1 || 0, start);
        charIndexMap[str[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Return the final maximum length of the substring with unique characters
    return maxLength;
}

const inputString = "abcabcbb";
const result = maxLengthSubstring(inputString);
console.log("The output is :", result);
