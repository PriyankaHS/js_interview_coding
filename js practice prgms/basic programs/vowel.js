// Write a program to separate vowel from consonant

// Approach 1

function vowel(str) {

     // Initialize empty arrays to store vowels and consonants
    let vowels = [];
    let consonants = [];

    // Iterate through each character in the input string
    for (let i = 0; i < str.length; i++) {

        // Get the character at the current index
        let ch = str.charAt(i);

        // Check if the character is a vowel using the helper function 'isVowel'
        if (isVowel(ch)) {

            // If it's a vowel, push it to the 'vowels' array
            vowels.push(ch);
        } else {

            // If it's not a vowel (consonant), push it to the 'consonants' array
            consonants.push(ch);
        }
    }

    console.log(`Vowels: ${vowels}`);
    console.log(`Consonants: ${consonants}`);
}

// Define a helper function called 'isVowel' that checks if a character is a vowel
function isVowel(ch) {
    return 'aeiou'.includes(ch);
}

let str = 'Hello World';
vowel(str);


// Approach 2
// Using Array Filter and Reduce

// function separateVowels(str) {

//     const isVowel = char => 'aeiou'.includes(char.toLowerCase());

//     const vowels = Array.from(str).filter(isVowel).join('');
//     const consonants = Array.from(str).filter(char => !isVowel(char)).join('');

//     return { vowels, consonants };
// }

// const input_string = "Bengaluru is beautiful";
// const resultFilterReduce = separateVowels(input_string);

// console.log("Vowels : " + resultFilterReduce.vowels);
// console.log("Consonants : " + resultFilterReduce.consonants);
