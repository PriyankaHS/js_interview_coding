// # Given a string, you need to tell if it is a lapindrome.

// # Input:
// # First line of input contains a single integer T, the number of test cases.
// # Each test is a single line containing a string S composed of only lowercase English alphabet.
// # Output:
// # For each test case, output on a separate line: "YES" if the string is a lapindrome and "NO" if it is not

// # these are sample inputs :

// # gaga abcde rotor xyzxy abbaab ababc
// # YES NO YES YES NO NO

function isPindrome(str) {

    const length = str.length;
    const mid = Math.floor(str.length/2);
    
    const leftHalf = str.slice(0, mid);
    const rgtHalf = str.slice(-mid);

    const sortedLeft = leftHalf.split('').sort().join('');
    const sortedRgt = rgtHalf.split('').sort().join('');

    return sortedLeft === sortedRgt;
}

function logResult(str) {

    if (isPindrome(str)) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

logResult("abcdabc");
