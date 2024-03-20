// Function that returns a Promise
function fetchData() {
    return new Promise(function (resolve, reject) {
      console.log("Fetching data...");
  
      // Simulating an asynchronous operation with setTimeout
      setTimeout(function () {
        const success = true;
  
        if (success) {
          const data = "This is the fetched data!";
          console.log("Data fetched!");
  
          // Resolving the promise with the fetched data
          resolve(data);
        } else {
          const error = "Failed to fetch data!";
          console.error("Error fetching data:", error);
  
          // Rejecting the promise with the error
          reject(error);
        }
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Using the Promise with a callback
  fetchData()
    .then(function (data) {
      console.log("Handling data:", data);
    })
    .catch(function (error) {
      console.error("Error handling data:", error);
    });
  
  console.log("Program continues to execute...");
  
  // Output:
  // Fetching data...
  // Program continues to execute...
  // (after 2 seconds)
  // Data fetched!
  // Handling data: This is the fetched data!
  