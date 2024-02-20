// // 2.) Print the largest and smallest number in a array ,Also , print the second largest and second smallest element in an array without sorting

function findLargestSmallest(arr) {

    let largest, smallest;

    if (arr[0] > arr[1]) {
        largest = arr[0];
        smallest = arr[1];
    } else {
        largest = arr[1];
        smallest = arr[0];
    }

    let secondLargest = smallest;
    let secondSmallest = largest;

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        } else if (arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }
    
    console.log("Largest no is :", largest);
    console.log("Second Largest no is :", secondLargest);
    console.log("Smallest no is :", smallest);
    console.log("Second Smallest no is :", secondSmallest);

}

const array = [17, 21, 30, 77, 98];
findLargestSmallest(array);
