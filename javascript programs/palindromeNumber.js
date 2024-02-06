// Palindrome number using reverse method
function isPalindromeNumberUsingReverse(num) {
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
  
    return numStr === reversedStr;
  }
    
  const palindromeNumber = 12321;
  
  if (isPalindromeNumberUsingReverse(palindromeNumber)) {
    console.log(`${palindromeNumber} is a palindrome number.`);
  } else {
    console.log(`${palindromeNumber} is not a palindrome number.`);
  }
  