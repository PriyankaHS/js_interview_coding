// 9. Take integer array as input, returning sorted array in desc order without using inbuilt sort method

// Descending order
const arr = [3,2,14,56,7];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log("Descending order of array is :", arr);

// Ascending order
const arr1 = [213, 9238, 756, 7862, 832, 735628];

for(let i=0; i<arr1.length; i++) {
    for(let j=i+1; j<arr1.length; j++) {
        if(arr1[i] > arr1[j]) {
            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
}

console.log("Ascending order of array is :", arr1);
