// JavaScript program to check if two strings are anagrams:

// function areAnagrams(str1, str2) {
//     // Remove spaces and convert to lowercase for case-insensitive comparison
//     const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
//     const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
//     // Check if the sorted characters of both strings are the same
//     return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
//   }
  
//   // Example usage:
  
//   const word1 = "listen";
//   const word2 = "silent";
  
//   if (areAnagrams(word1, word2)) {
//     console.log(`${word1} and ${word2} are anagrams.`);
//   } else {
//     console.log(`${word1} and ${word2} are not anagrams.`);
//   }
  
//   function areAnagrams(str1, str2) {

//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
//     // Check if the lengths are the same
//     if (cleanStr1.length !== cleanStr2.length) {
//       return false;
//     }
  
//     // Sort the characters in both strings and compare
//     const sortedStr1 = cleanStr1.split('').sort().join('');
//     const sortedStr2 = cleanStr2.split('').sort().join('');
  
//     return sortedStr1 === sortedStr2;
//   }
  
//   // Example
//   const string1 = "Listen";
//   const string2 = "Silent";
  
//   if (areAnagrams(string1, string2)) {
//     console.log(`${string1} and ${string2} are anagrams.`);
//   } else {
//     console.log(`${string1} and ${string2} are not anagrams.`);
//   }
  
// Using sorting
function areAnagrams(str1, str2) {
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
const string1 = "Listen";
const string2 = "Silent";
  
if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams`);
  } else {
    console.log(`${string1} and ${string2} are not anagrams`);
  }
