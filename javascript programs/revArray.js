// reverse the same array in reverse order without using in built method

// Approach 1

function revArrayOrder(arr) {

    let reverse_array = [];

    for(let i = arr.length - 1; i >= 0; i--){
        reverse_array.push(arr[i]);
    }
    return reverse_array;
}

my_array = [1, 2, 3, 4, 5];
let reversedOrder = revArrayOrder(my_array);

console.log("Original Array : ", my_array);
console.log("Reversed order is : ", reversedOrder);
