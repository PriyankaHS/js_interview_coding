// find the unique non-repeating substring of max length in a given string in javascript

function maxLengthUniqueSubstring(str) {

// Initialize variables to keep track of the maximum length, starting index,
// and a set to store characters in the current substring.
// charSet is a Set that stores characters in the current substring to check for uniqueness.
// maxStart is initialized to keep track of the starting index of the maximum length substring.

    let maxLength = 0;
    let start = 0;
    let charSet = new Set();
    let maxStart = 0;

    // Iterate over the characters of the string.
    // Inside the loop, it checks if the current character str[end] has been seen before in the substring using a while loop. If so, it removes characters from the beginning of the substring until it becomes unique.

    for (let end = 0; end < str.length; end++) {

        // While the current character has been seen before in the substring,
        // remove characters from the beginning of the substring until it becomes unique.
        // The current character is added to the set charSet.
        
        while (charSet.has(str[end])) {
            charSet.delete(str[start]);
            start++;
        }

        // Add the current character to the set.
        charSet.add(str[end]);

        // Update the maximum length and starting index if the current substring is longer.
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxStart = start;
        }
    }

    // Extract the maximum unique substring using the starting index and length.
    const maxUniqueSubstring = str.substring(maxStart, maxStart + maxLength);
    return maxUniqueSubstring;
}

const result = maxLengthUniqueSubstring("abcabcbb");
console.log("Max length is : ", result);
