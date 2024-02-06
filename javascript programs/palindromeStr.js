// Palindrome string using reverse method
function isPalindromeUsingReverse(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  const palindromeString = "malayalam";
  
  if (isPalindromeUsingReverse(palindromeString)) {
    console.log(`${palindromeString} is a palindrome.`);
  } else {
    console.log(`${palindromeString} is not a palindrome.`);
  }
  