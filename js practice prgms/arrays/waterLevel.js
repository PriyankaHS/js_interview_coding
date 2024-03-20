// Given an array of non-negative integers representing the height of blocks. 
// If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.

// Input: arr[] = {3,0,0,2,0,4}
// Output: 10

// Brute Force Approach:
// For each block, find the maximum height of blocks to its left and right, 
// then calculate the trapped water at that block. 
// This approach has a time complexity of O(n^2).

function trappedWaterBruteForce(arr) {

    // Initialize the variable to store the total trapped water
    let waterTrapped = 0;
    
    // Get the length of the input array
    let n = arr.length;

// Loop through each block starting from the second block and ending before the last block
    for (let i = 1; i < n - 1; i++) {
        
// Initialize variables to store the maximum height of blocks to the left and right of the current block
        let leftMax = 0, rightMax = 0;
        
        // Find maximum height to the left of the current block
        for (let j = i; j >= 0; j--) {
            leftMax = Math.max(leftMax, arr[j]); // Update leftMax with the maximum height encountered so far
        }

        // Find maximum height to the right of the current block
        for (let j = i; j < n; j++) {
            rightMax = Math.max(rightMax, arr[j]); // Update rightMax with the maximum height encountered so far
        }

        // Calculate trapped water at the current block by taking the minimum of leftMax and rightMax and subtracting the height of the current block
        waterTrapped += Math.min(leftMax, rightMax) - arr[i];
    }

    // Return the total trapped water
    return waterTrapped;
}

let arr = [3, 0, 0, 2, 0, 4];
console.log("Total trapped water is : " + trappedWaterBruteForce(arr));



// Another approach of question 
function maxWater(arr) 
    { 
  
        let res = 0; 
        let n = arr.length; 
  
        for(let i = 0; i < n; i++) 
        { 
  
            // Find maximum element from left 
            let left = arr[i]; 
            for(let j = 0; j < i; j++) 
            { 
                left = Math.max(left, arr[j]); 
            } 
  
            // Find maximum elements from right 
            let right = arr[i]; 
            for(let j = i + 1; j < n; j++) 
            { 
                right = Math.max(right, arr[j]); 
            } 
  
            // Update maximum water value 
            res += Math.min(left, right) - arr[i]; 
        } 
        return res; 
    } 
      
let arr1 = [-1,0,0,0,0,0]; 
console.log(maxWater(arr1));