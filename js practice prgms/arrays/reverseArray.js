// reverse the same array in reverse order without using in built method

// Approach 1

function revArray(arr) {

    reversed_array = [ ];

    for(let i = arr.length - 1; i >= 0; i--) {
        // reversed_array = reversed_array + arr[i]; // return type is string
        reversed_array.push(arr[i]); // return type is array and is inbuilt method
    }
    return reversed_array;
}

my_array = [17, 21, 79, 93, 104];
let reverse_order = revArray(my_array);

console.log("Original Array : ", my_array);
console.log("Reversed order is : ", reverse_order);


// Approach 2  using inbuilt method for reverse array order 

function reverseArray(arr) {
    let rev = arr.reverse();
    console.log(rev);
}
reverseArray([1, 3, 4, 5]);
