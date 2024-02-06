// Asynchronous function simulating data fetching
function fetchData(callback) {
  console.log("Fetching data...");

  // Simulating an asynchronous operation with setTimeout
  setTimeout(function () {
    const data = "This is the fetched data!";
    console.log("Data fetched!");

    // Calling the callback with the fetched data
    callback(null, data); // Pass null as the error parameter since there's no error
  }, 2000); // Simulating a 2-second delay
}

// Callback function to handle the fetched data
function handleData(error, data) {
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log("Handling data:", data);
  }
}

// Using the fetchData function with a callback
fetchData(handleData);

console.log("Program continues to execute...");

// Output:

// Fetching data...
// Program continues to execute...
// (after 2 seconds)
// Data fetched!
// Handling data: This is the fetched data!
