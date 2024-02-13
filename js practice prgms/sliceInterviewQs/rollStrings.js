// Input- "bca"
// list=[1,2,3]
// Output- "eeb"

// Traverse the list
// If list index is 1, then roll 1st element by 1, so Output-> cca
// If list index is 2, then roll 2 elements by 1, so Output-> dda
// If list index is 3, then roll 3 elements by 1, so Output-> eeb

// Approach 1

function rollCharacter(target){
    let ele=String.fromCharCode(parseInt(target.charCodeAt(0))+1)
    return ele
}
function modifyString(target,index){
    target=target.split("")
    index.forEach(ele=>{
        for(let i=0;i<ele;i++){
            target[i]=rollCharacter(target[i])
        }
    })
    return target.join("")
}
let result=modifyString("bca",[1,2,3])
console.log(result);


// Approach 2

// Define the input string
let inputStr = "bca";

// Define an array indicating how many characters to roll
let roll = [1, 2, 3];

// Split the input string into an array of characters
let letter = inputStr.split('');

// Initialize a variable to store the result
let result1 = "";

// Loop through each element in the 'roll' array
for (let i = 0; i < roll.length; i++) {

    // Get the current number of characters to roll
    let n = roll[i];

    // Loop 'n' times for each rolling operation
    for (let j = 0; j < n; j++) {

        // Roll the character by incrementing its ASCII code by 1
        // The charCodeAt() method returns the code of the character at a specified index in a string
        letter[j] = String.fromCharCode(letter[j].charCodeAt(0) + 1);
    }
}

// Join the array of characters back into a string
result1 = letter.join('');
console.log("The result is : ", result1);
