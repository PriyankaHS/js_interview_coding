// anagram using sort

// / / Input: {""""""""cat"""""""", """"""""dog"""""""", """"""""tac"""""""", """"""""god"""""//""", """"""""act""""""""}
// # // Output: {""""""""cat"""""""", """"""""tac"""""""", """"""""act"""""""",""""""""dog"""""""", """"""""god"""""""" }


function isAnagram(string1, string2) {

    string11 = str.toLowerCase().split('').join();
    string22 = str.toLowerCase().split('').join();

    newStr1 = string11.sort();
    newStr2 = string22.sort()

    return newStr1 === newStr2;

   
}

string1 = "cat";
string2 = "tac";

if((isAnagram)){
    console.log(`{string1} and {string2} are anagrams`);
} else {
    console.log(`{string1} and {string2} are not anagrams`);
}
