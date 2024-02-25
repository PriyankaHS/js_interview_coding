// Given two strings of lowercase alphabets and a value k, the task is to find if two strings are K-anagrams of each other or not.
// Two strings are called k-anagrams if following two conditions are true.
// Both have same number of characters.
// Two strings can become anagram by changing at most k characters in a string.

// Examples :

// Input:  str1 = "anagram" , str2 = "grammar" , k = 3
// Output:  Yes
// Explanation: We can update maximum 3 values and 
// it can be done in changing only 'r' to 'n' 
// and 'm' to 'a' in str2.

// Input:  str1 = "geeks", str2 = "eggkf", k = 1
// Output:  No
// Explanation: We can update or modify only 1 
// value but there is a need of modifying 2 characters. 
// i.e. g and f in str 2.

function areAnagrams(str1, str2, k) {

    if(str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {

        let charFound = false;

        for (let j = 0; j < str2.length; j++) {
            
            if (str1[i] === str2[j]) {

            [str2[i], str2[j]] = [str2[j], str2[i]];
            charFound = true;
            break;
          }
        }
        if (!charFound) {
          return false;
        }
    }
    return true;
}

//     const sortedStr1 = str1.split('').sort();
//     const sortedStr2 = str2.split('').sort();

//     let diff = 0;
    
//     for (let i = 0; i < sortedStr1.length; i++) {
        
//         if (sortedStr1[i] !== sortedStr2[i]) {
//             diff++;
//         }
//     }
//     return diff <= k;
// }

const str1 = "anagram";
const str2 = "grammar";
const k1 = 3;

console.log(areAnagrams(str1, str2, k1));

const str3 = "geeks";
const str4 = "eggkf";
const k2 = 1;

console.log(areAnagrams(str3, str4, k2));
