// string - replace space in string with start
// Ex: ab c
// Output :ab*c
// With built in function and without build in function

// in built function
function replaceSpaceWithStar(inputString) {
    return inputString.split(' ').join('*');
}

let input = "ab c";
let output = replaceSpaceWithStar(input);
console.log(output);


// without in built function
function replaceSpaceWithStar(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === ' ') {
            result += '*';
        } else {
            result += inputString[i];
        }
    }
    return result;
}

let input1 = "ab c";
let output1 = replaceSpaceWithStar(input1);
console.log(output1); // Output: ab*c
