// 3. Sum of the elements in an Array

const array1 = [1,2,3,4,5];
let sum = 0;

// Iterate over each element of the array using the forEach() method
array1.forEach(element => {

    // For each element, add its value to the sum
    sum += element;
});

console.log("The Sum of the elements in an Array is :", sum);



// array.forEach(element => { ... });: This line iterates over each element of the array using the forEach() method. For each element, the code inside the curly braces { ... } will be executed.

// sum += element;: This line adds the value of each element to the sum variable. += is the addition assignment operator, which adds the value of the right operand (in this case, element) to the value of the left operand (in this case, sum) and assigns the result to the left operand (updating sum).
