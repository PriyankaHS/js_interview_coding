// check if the string is palindrome or not in javascript

function isPalindrome(str) {

    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;

}

const palindromeString = "malayalam";

if (isPalindrome(palindromeString)) {
    console.log(`${palindromeString} is a palindrome`);
  } else {
    console.log(`${palindromeString} is not a palindrome`);
  }
  