// decorators are a way to modify or extend the behavior of classes, methods, or properties at design time

// Decorator function
function logClass(target: Function) {
    // target here is the constructor function of the class
    console.log(`Class ${target.name} is being logged.`);
  }
  
  // Applying the decorator to a class
//   @logClass
  class ExampleClass {
    constructor() {
      console.log('Creating an instance of ExampleClass.');
    }
  }
  
  // Creating an instance of the class
  const exampleInstance = new ExampleClass();
  