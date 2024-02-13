// Convert "756" string into integer without using parseint

function stringToInteger(str) {

  // Initialize the variable 'result' to store the final integer value
  let result = 0;

  // Iterate over each character in the input string
  for (let i = 0; i < str.length; i++) {

    // Inside the loop, we convert each character to its corresponding digit value by subtracting the character code of '0' from the character code of the current character (str.charCodeAt(i)). 
    // This works because the character codes of digits '0' to '9' are consecutive and start from 48.
    const digit = str.charCodeAt(i) - 48;

    // We then update the result variable by multiplying it by 10 (to shift digits to the left) and adding the current digit value.
    result = result * 10 + digit;
  }

  // Return the final integer value
  return result;
}

// Call the function 'stringToInteger' with the input string "756"
const number = stringToInteger("756");
console.log(number); 


// other approaches

// let str = "123";
// let num = str * 1;
// console.log(num); // Output: 123
