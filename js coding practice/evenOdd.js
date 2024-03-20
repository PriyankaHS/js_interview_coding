// 1.) Find the middle element ,to the right of the middle element ,print all the even numbers , and to the left of middle element ,print all the odd elements

arr1 = [1,2,3,4,5];
// arr1 = [1,2,3,4,5,6,7,8,9,10,11];

let middleIndex = Math.floor(arr1.length/2);

let middleElement = arr1[middleIndex];

for(let i = middleIndex + 1; i < arr1.length; i++) {

    if(arr1[i] % 2 === 0) {
        console.log("The even nos are : ", arr1[i]);
    }
}

for (let i = middleIndex - 1; i >= 0; i--) {

    if (arr1[i] % 2 !== 0) {
        console.log("The odd nos are : ", arr1[i]);
    }
}
