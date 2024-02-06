// String programs
let str = "aabbbcccaa";

function countOfCharacter(string){
    let newStr = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if(i < str.length-1 && str.charAt(i) === str.charAt(i+1)){
            count++;
        }else{
            newStr  = newStr+str.charAt(i)+count;
            count = 1;
        }
    }
    return newStr;
}

console.log(countOfCharacter(str))

function maxCharCount(string){
    let map = new Map();
    for (const char of string) {
        if(map.has(char)){
            map.set(char,map.get(char)+1);
        }else{
            map.set(char,1);
        }
    }
    let maxChar = "";
    let maxCount = 0;
    for (let [key,value] of map.entries()) {
        if(maxCount < value){
            maxChar = key;
            maxCount = value;
        }
    }
    return maxChar;
}
console.log("maxium repeating character is : "+ maxCharCount(str));

function reverseString(str) {
    let buffer = [] // Assuming StringBuffer is a requirement, but usually, you would use an array or a string directly in JavaScript

    let words = str.split(" ");
    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        buffer.push(word.substring(0, 1).toUpperCase() + word.substring(1));
        if (i > 0) {
            buffer.push(" ");
        }
    }

    return buffer.toString();
}

// Example usage:
let inputString = "hello world";
let reversedString = reverseString(inputString);
console.log(reversedString);

function findLargestNonRepetitiveSubstring(str) {
    let n = str.length;
    let charSet = new Set();
    let start = 0, end = 0, maxLength = 0;

    while (end < n) {
        if (!charSet.has(str.charAt(end))) {
            charSet.add(str.charAt(end));
            end++;
            maxLength = Math.max(maxLength, end - start);
        } else {
            charSet.delete(str.charAt(start));
            start++;
        }
    }

    // Extract the substring
    return str.substring(start, start + maxLength);
}

// Example usage:
let inputStrin = "abcabcbb";
let result = findLargestNonRepetitiveSubstring(inputStrin);
console.log(result);

function areAnagram1(str1, str2){
    if (str1.length === 0 && str2.length === 0) {
        throw new Error("Input invalid");
    }

    // Convert strings to arrays, sort them, and then compare
    const sortedStr1 = [...str1].sort().join('');
    const sortedStr2 = [...str2].sort().join('');

    return sortedStr1 === sortedStr2;
}

function areAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let map = new Map();
    for (const char of str1) {
        if(map.has(char)){
            map.set(char,map.get(char)+1);
        }else{
            map.set(char,1);
        }
    }
    for (const char of str2) {
        if(map.has(char) && map.get(char) > 0){
            map.set(char,map.get(char)-1);
        }else{
            return false;
        }
    }
    return true;
}
const result1 = areAnagram1("listen", "silent");
console.log(result1); // Output: true
const input = "(rs. 20.73)";
let value = input.substring(input.indexOf(".")+1,input.indexOf(")"))
console.log(Number.parseFloat(value));



// Palindrome
let str1 = "abccbc";
for(let i = 0;i<str.length;i++){
    for(let j= i+1;j<str.length;j++){
        let subtring  = str1.substring(i,j);
        if(ispalindrome(subtring)){
            console.log(subtring);
        }

    }
}
function ispalindrome(str){
    let i = 0;
    let j = str.length-1;
    while(i<=j){
        let char1 = str[i];
        let char2 = str[j];
        if(char1 !== char2){
            return false;
        }else{
            i++;
            j--;
        }
    }
    return true;
}

function maxLengthOfPalindrome(str){
    if(str.length === 0){
        return 0;
    }
    let len = 0;
    let dp = Array.from({length: str.length},()=>Array(str.length).fill(false))
    for(let g = 0; g < str.length; g++){
        for(let i = 0, j = g ; j < str.length; i++,j++){
            if(g === 0){
                dp[i][j] = true;
            }else if(g === 1){
                dp[i][j] = str.charAt(i) === str.charAt(j);
            }else {
                dp[i][j] = str.charAt(i) === str.charAt(j) && dp[i+1][j-1];
            }

            if(dp[i][j]){
                len = g+1;
            }
        }
    }
    return  len;
}
console.log(maxLengthOfPalindrome(str));

function countOfPalindrome(str){
    if(str.length === 0){
        return 0;
    }
    let count = 0;

    let dp = Array.from({length:str.length},()=>Array(str.length).fill(false));
    for(let g = 0; g < str.length; g++){
        for(let i = 0, j = g; j < str.length; i++, j++){
            if(g === 0){
                dp[i][j] = true;
            }else if(g === 1){
                if(str.charAt(i) === str.charAt(j)){
                    dp[i][j] = true;
                }else{
                    dp[i][j] = false;
                }
            }else{
                if(str.charAt(i) === str.charAt(j) && dp[i+1][j-1]){
                    dp[i][j] = true;
                }else{
                    dp[i][j] = false;
                }
            }

            if(dp[i][j]){
                count++;
            }
        }
    }
    return count;
}
console.log("the number of palindrome are :"+ countOfPalindrome(str));


// Array programs
arr1 = [2,4,6,7,9,12,15];

let evenArray = arr1.filter(number => number % 2 === 0);
console.log("even filter : "+evenArray)

let modifiedArray = arr1.map(num => num*2);
console.log("modified Array : "+modifiedArray)

let sum  = arr1.reduce((sum,num) => sum+num, 0);
console.log("sum of array element : "+sum)

function secondMaxNumber(array){
    if(array.length === 0){
        throw new Error("Invalid array input");
    }
    let firstMaxNumber = Number.MIN_VALUE;
    let secondMaxNumber = Number.MIX_VALUE;

    for (const element of array) {
        if(element > firstMaxNumber){
            secondMaxNumber = firstMaxNumber;
            firstMaxNumber = element;
        }else if(element !== firstMaxNumber && element > secondMaxNumber){
            secondMaxNumber = element;
        }
    }
    return secondMaxNumber;
}
console.log("the second maxium number is "+ secondMaxNumber(arr1));

let arr = [900, 945, 955, 1100, 1500, 1800];
let dep = [920, 1200, 1130, 1150, 1900, 2000];

function findMaxPlatform(arr,dep){
    arr.sort((a,b) => a - b);
    dep.sort((a,b) => a - b);

    let n = arr.length
    let platform = 1; result = 1;
    let i = 1, j =0;
    
    while(i < n && j < n){
        if (arr[i] <= dep[j]) {
            platform++;
            i++;
        } else if (arr[i] > dep[j]) {
            platform--;
            j++;
        }
        result = Math.max(result, platform);
    }
    return result;
}

console.log("The number of platform required : " +findMaxPlatform(arr,dep));

let arr3 = [1,3,4,5,6,7,8,9,10,11,12];

function sortByOddEven(array){
    let newArray = new Array(array.length);
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray[index] = array[i];
            index++;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray[index] = array[i];
            index++;
        }
    }
    return newArray;
}
console.log(sortByOddEven(arr3))

function mergeAndSort(arr,dep){
    let array = new Array(arr.length+dep.length);
    for(let i = 0; i < arr.length; i++){
        array[i] = arr[i];
    }
    for(let i = 0; i < dep.length; i++){
        array[arr.length+i] = dep[i];
    }
    for(let i = 0; i < array.length;i++){
        let flag = false;
        for(let j = 0;j < array.length-1-i;j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = true;
            }
        }
        if(!flag){
            break;
        }
    }
    return array;
}
console.log(mergeAndSort(arr,dep));

let array1 = [-1,1,0,-3,3]

function arrayProblem(array){
    if(array.length === 0){
        return 0;
    }
    let sum = 1;
    let zeroCount = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] !== 0){
            sum = sum*array[i];
        }else{
            zeroCount++;
        }
    }
    for(let i = 0; i < array.length; i++){
        if(zeroCount === 0){
            let temp = sum;
            array[i] = temp/array[i];
        }else if(zeroCount === 1){
            if(array[i] === 0){
                array[i] = sum;
            }else{
                array[i] = 0;
            }
        }else{
            array[i] = 0;
        }
    }
    return array;
}

console.log(arrayProblem(array1))