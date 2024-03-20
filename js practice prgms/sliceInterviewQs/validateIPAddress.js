// 8. Validate IPAddress which which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1

function validateIP(str) {

    // Create an array 'digits' containing numbers from 0 to 255
    let digits = Array.from(Array(256).keys());

    // Split the input string 'str' into an array of parts using '.' as delimiter
    let separated = str.split('.');

    // Check if the length of the separated array is not equal to 4
    if (separated.length !== 4) {

        // If not, return false indicating that it's not a valid IP address, IP address should consist of exactly 4 parts
        return false; 
    }

    // Iterate over each part of the separated array
    for (let part of separated) {

        // Check if the current part is not included in the 'digits' array
        if (!digits.includes(parseInt(part))) {

            // If not, return false indicating that it's not a valid IP address, Each part should be a number in the range 0 to 255
            return false; 
        }
    }

    // If all parts are valid (i.e., each part is a number in the range 0 to 255 and there are exactly 4 parts), return true
    return true; 
}

console.log("IP Address is : ", validateIP("172.16.254.1"));


// practice

// function validateIp(str) {

//     let dgts = Array.from(Array(256).keys());

//     let separatd = str.split('.');
    
//     if(separatd.length !== 4) {
//         return false;
//     }

//     for(let part of separatd) {

//         if(!dgts.includes(parseInt(part))) {
//             return false;
//         }
//     }
//     return true;
// }

