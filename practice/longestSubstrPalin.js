// Given a string str, the task is to find the longest substring which is a palindrome.

function longestPalindrome(str) {

    if(str.length === 0) {
        return '';
    }

    let longest = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            const substr = str.substring(i, j + 1);
            if (substr.length > longest.length && isPalindrome(substr)) {
                longest = substr;
            }
        }
    }
    return longest;
}

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

const inputString = "Malayalam is a language";
console.log("Longest substring which is a palindrome is :", longestPalindrome(inputString));
