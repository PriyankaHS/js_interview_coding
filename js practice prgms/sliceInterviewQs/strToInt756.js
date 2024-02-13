// Convert "756" string into integer without using parseint

function stringToInteger(str) {

  // Initialize the variable 'result' to store the final integer value
  let result = 0;

  // Iterate over each character in the input string
  for (let i = 0; i < str.length; i++) {

    // Convert the current character to its corresponding digit value
    const digit = str.charCodeAt(i) - 48;

    // Multiply the existing result by 10 and add the current digit value
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
