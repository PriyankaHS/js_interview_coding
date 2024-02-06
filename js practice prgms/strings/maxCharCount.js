// JavaScript to find the number of maximum repeating characters in a given string

// using array 
function findMaxRepeatingCharCount(inputString) {
    
    const charFrequency = Array.from({ length: 256 }, () => 0);

    // Iterate through the string and count character frequencies
    for (let char of inputString) {
        charFrequency[char.charCodeAt(0)]++;
    }

    // Find the maximum frequency
    const maxFrequency = Math.max(...charFrequency);

    return maxFrequency;
}

const inputString = "aabbbcccaa";
const maxRepeatingCount = findMaxRepeatingCharCount(inputString);
console.log("Number of maximum repeating characters:", maxRepeatingCount);


// function maxCharCount(string){
//     let map = new Map();
//     for (const char of string) {
//         if(map.has(char)){
//             map.set(char,map.get(char)+1);
//         }else{
//             map.set(char,1);
//         }
//     }
//     let maxChar = "";
//     let maxCount = 0;
//     for (let [key,value] of map.entries()) {
//         if(maxCount < value){
//             maxChar = key;
//             maxCount = value;
//         }
//     }
//     return maxChar;
// }
// console.log("maximum repeating character is : "+ maxCharCount(str));
