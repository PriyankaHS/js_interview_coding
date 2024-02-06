// Write an JS program to find the maximum length of a non-repeating substring in a string.

function maxLengthUniqueSubstring(str) {

    // Initialize variables
    let maxLength = 0;          // Maximum length of the substring
    let start = 0;              // Starting index of the current substring
    let charSet = new Set();    // Set to keep track of characters in the current substring
    let maxStart = 0;           // Starting index of the maximum length substring

    // Loop through the string
    for (let end = 0; end < str.length; end++) {
        
        // Check if the current character is already in the substring
        while (charSet.has(str[end])) {
            // If yes, remove the first character from the set and move the starting index forward
            charSet.delete(str[start]);
            start++;
        }

        // Add the current character to the set
        charSet.add(str[end]);

        // Update the maximum length and starting index if the current substring is longer
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxStart = start;
        }
    }

    // Extract the maximum length substring from the original string
    const maxUniqueSubstring = str.substring(maxStart, maxStart + maxLength);
    
    // Return the result
    return maxUniqueSubstring;
}

const inputString = "abcabcbb";
const result = maxLengthUniqueSubstring(inputString);
console.log(result); // Output: "abc"
