// Example - Promise

// Creates a new Promise using the Promise constructor.
// Takes a function with two parameters resolve and reject, which are functions provided by JavaScript to handle the state of the promise.

const randomNumberPromise = new Promise((resolve, reject) => {

    // Initiates an asynchronous operation Inside Promise using setTimeout to simulate a delay of 2000 milliseconds (2 seconds)
    setTimeout(() => {

        // Generates a random value between 0 and 1
        const randomVaue = Math.random();

        // If the random value is greater than 0.5, the Promise is resolved with the random value.
        // If not, the Promise is rejected with an error indicating that the value is too small.
        if(randomVaue > 0.5){
            resolve(randomVaue);
        } else {
            reject(new Error("value is too small"))
        }
    }, 2000) // Simulating a 2-second asynchronous operation
});

// Promise Consumption
// Handling the Promise resolution with the then method
randomNumberPromise
.then(result => {
    console.log("promise is fulfilled with value :" , result)
})

// Handling the Promise rejection with the catch method
.catch(error => {
    console.error("promise is rejected with error : " , error)
})

// Uses the then method to handle the fulfilled state of the Promise, logging the resolved value.
// Uses the catch method to handle the rejected state of the Promise, logging the error
