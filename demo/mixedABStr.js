// 8. In given mixed A and B strings I have to print separate “A” or “B” string

function separateStrings(mixedString) {

    const stringA = mixedString.split('').filter(char => char === 'A').join('');
    const stringB = mixedString.split('').filter(char => char === 'B').join('');

    console.log("String A :", stringA);
    console.log("String B :", stringB);
}

const mixedString = "ABABABBBABA";
console.log("The seperated strings are :", mixedString);
