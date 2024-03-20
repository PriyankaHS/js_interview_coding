// check if the number is palindrome or not

function isPalindromeNum(num) {

        const numStr = num.toString();
        const reversedStr = numStr.split('').reverse().join('');

        return numStr === reversedStr;
    }

const palindromeNumber = 12321; 

if (isPalindromeNum(palindromeNumber)) {
    console.log(`${palindromeNumber} is a palindrome`);
} else {
    console.log(`${palindromeNumber} is not a palindrome`);
}


//  Approach 2

function isPalindromeNum(num) {
    if (num < 0) {
      return false; // Negative numbers can't be palindromes
    }
  
    const originalNum = num;
    let reversedNum = 0;
  
    while (num > 0) {
      const digit = num % 10;
      reversedNum = reversedNum * 10 + digit;
      num = Math.floor(num / 10);
    }
  
    return originalNum === reversedNum;
  }
  
  const palindromeNumber1 = 12321; // Changed the number to a palindrome for testing
  
  if (isPalindromeNum(palindromeNumber1)) {
    console.log(`${palindromeNumber1} is a palindrome`);
  } else {
    console.log(`${palindromeNumber1} is not a palindrome`);
  }
  