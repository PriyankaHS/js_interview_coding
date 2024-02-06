// reverse the number using recursion and without using in built methods

// Approach 1
function revNumber(number, reversed = 0) {

    if(number == 0) {
        return reversed;
    }
    const lastDigit = number % 10;

    const newReversed = reversed * 10 + lastDigit;

    return revNumber((number - lastDigit) / 10, newReversed);
}

let rev_num = 12345;
let reversedNumber = revNumber(rev_num);

console.log("Reversed Number is :", reversedNumber);


// Approach 2
function rev() {

    let reversedNum = "";

    for (let i = num.length-1; i >= 0; i--) {
        reversedNum += num[i];
    }
    return reversedNum;
}

let num = "12345";
let reversNumber = rev(num);

console.log("Reversed Number :", reversNumber);


// Approach 3 - using toString() method 

function rev(num) {
    let reversedNum = "";

    for (let i = num.toString().length - 1; i >= 0; i--) {
        reversedNum += num.toString()[i];
    }

    return reversedNum;
}

let num1 = 12345;
let reversedNumber1 = rev(num);

console.log("Original Number:", num1);
console.log("Reversed Number:", reversedNumber1);
