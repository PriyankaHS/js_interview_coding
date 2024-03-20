// Chef and Happy String
// Chef has a string S with him. 
// Chef is happy if the string contains a contiguous substring of length strictly greater than 2
// 2 in which all its characters are vowels.

// Determine whether Chef is happy or not.

// Note that, in english alphabet, vowels are a, e, i, o, and u.

// Input Format
// First line will contain 

// T, number of test cases. Then the test cases follow.
// Each test case contains of a single line of input, a string 

// S.
// Output Format
// For each test case, if Chef is happy, print HAPPY else print SAD.

// You may print each character of the string in uppercase or lowercase (for example, the strings hAppY, Happy, haPpY, and HAPPY will all be treated as identical).

function isHappy(str) {

    const vowels = ["a", "e", "i", "o", "u"];
    let contiguousCount = 0;

    for (let i = 0; i < str.length; i++) {
        
        if (vowels.includes(str[i])) {
            contiguousCount++;

            if (contiguousCount > 2) {
                return 'Happy';
            }
        } else {
            contiguousCount = 0;
        }
    }
    return 'Sad';
}

function logResult(input) {
    console.log(isHappy(input));
}

const inputString = ["aeiou", "abxy", "aebcdefghij", "abcdeeafg"];

for (let i = 0; i < inputString.length; i++) {
    logResult(inputString[i]);
}
