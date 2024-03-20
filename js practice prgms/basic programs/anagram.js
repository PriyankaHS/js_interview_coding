// JavaScript program to check if two strings are anagrams

function isAnagram(str1, str2) {

    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const string1 = "Listen";
const string2 = "Silent";

if(isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are  anagrams`);
} else {
    console.log(`${string1} and ${string2} are not anagrams`);
}