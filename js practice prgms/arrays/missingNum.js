// 1 find the missing number in the given array

function findMissingNum() {
    const arr = [1,2,3,4,5,7];
    let num = 0;
    let num1 = 0

    for(let i=0; i<arr.length; i++) {
        num = num + arr[i];
    }
    for(let i=1; i<=7; i++){
        num1 += i;
    }
    console.log(`The missing number is ${num1 - num}`);
}

findMissingNum()


// 2
function findMissingNumber(arr) {
    const n = arr.length + 1; // Including the missing number
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    const expectedSum = (n * (n + 1)) / 2;
    const missingNum = expectedSum - actualSum;

    console.log(`The missing number is ${missingNum}`);
}

const arr = [1, 2, 3, 4, 5, 7];
findMissingNumber(arr);


// 3
function findMissingNumber1(array) {
    
    for (let i = 1; i <= array.length + 1; i++) {
        if (!array.includes(i)) {
            return i;
        }
    }
}

console.log(findMissingNumber1(arr));
