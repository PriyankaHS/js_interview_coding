// Write a Anagram program for this given string input and output, using sort and arrange it
//  Input: {""""""""cat"""""""", """"""""dog"""""""", """"""""tac"""""""", """"""""god"""""//""", """"""""act""""""""}
//  Output: {""""""""cat"""""""", """"""""tac"""""""", """"""""act"""""""",""""""""dog"""""""", """"""""god"""""""" }

function groupAnagrams(words) {

    // Create a Map to efficiently store anagrams together:
    const anagramsMap = new Map();

    // Iterate through each word in the input array
    for (const word of words) {

        // Sort the letters of the word alphabetically
        const sortedWord = word.split('').sort().join('');
        
        // Check if the sorted word (key) already exists in the Map
        if(!anagramsMap.has(sortedWord)) {

            // If it doesn't exist, create a new array in the Map for that key
            anagramsMap.set(sortedWord, []);
        }
        // Push the original word into the array associated with the key
        anagramsMap.get(sortedWord).push(word);
    } 

    // Use flat() to create a single array of anagrams
    // Convert the Map's values (arrays of anagrams) into a single array
    const flattenedAnagrams = Array.from(anagramsMap.values()).flat();

    // Return the flattened array of anagrams:
    return flattenedAnagrams;
}

const inputWords1 = ["cat", "dog", "tac", "god", "act"];
const groupedAnagrams = groupAnagrams(inputWords1);

// Print the final array of grouped anagrams
console.log(groupedAnagrams); 


// The code effectively groups anagrams together using a Map and the sorting technique.
// The flat() method is used to flatten the nested arrays into a single array, producing the desired output format.
// Clear comments enhance code readability and understanding.



// practiced one
// function isAnagram(words) {

//     const anagramsMap = new Map();

//     for (const word of words) {

//         const sortedWord = word.split('').sort().join('');

//         if(!anagramsMap.has(sortedWord)) {
//             anagramsMap.set(sortedWord, []);
//         }
//         anagramsMap.get(sortedWord).push(word);
//     }

//     const flattenedAnagrams = Array.from(anagramsMap.values()).flat();

//     return flattenedAnagrams;
// }

// const input1 = ["cat", "dog", "tac", "god", "act"];
// const groupedAnagrams = isAnagram(input1);

// console.log(groupedAnagrams);
