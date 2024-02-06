// count the values based on the index position of array, input and outputs are given
// output = [2, 3, 0, 1, 0, 0]

input = [0, 1, 1, 1, 3, 0]

function countIndexValues(input) {

    // Create an array 'output' filled with zeros and the same length as 'input'
    const output = Array.from({ length: input.length }, () => 0);

    // Outer loop: iterate over each index 'i' in the 'input' array
    for(let i = 0; i < input.length; i++) {

        // Inner loop: iterate over each index 'j' in the 'input' array
        for(let j = 0; j < input.length; j++) {

            // Check if the value at index 'j' in 'input' is equal to 'i'
            if(input[j] === i) {

                // If true, increment the corresponding element in 'output'
                output[i]++;
            }
        }
    }
// Return the final 'output' array with counts based on index positions
return output;
}

const result = countIndexValues(input);
console.log("Output is : ", result);
