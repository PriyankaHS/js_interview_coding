// How do you destructure an object in JavaScript?

// Destructuring in JavaScript is a way to extract values from objects or arrays and assign them to variables. When it comes to objects, you can use object destructuring. 

// Example object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };
  
  // Destructuring the object
  const { firstName, lastName, age } = person;
  
  // Using the extracted values
  console.log(firstName); // Output: John
  console.log(lastName);  // Output: Doe
  console.log(age);       // Output: 30

// In this example, { firstName, lastName, age } is the destructuring syntax. It creates three variables (firstName, lastName, and age) and assigns them the corresponding values from the person object.
