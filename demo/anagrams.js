// Create a function that takes in two strings and returns true if they are anagrams of each other (contain the same characters in different orders), and false otherwise.

function areAnagrams(str1, str2) {

    const sorted1 = str1.toLowerCase().split('').sort().join();
    const sorted2 = str2.toLowerCase().split('').sort().join('');
  
    return sorted1 === sorted2;
}

const string1 = "Listen";
const string2 = "Silent";
  
if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams`);
} else {
    console.log(`${string1} and ${string2} are not anagrams`);
}
