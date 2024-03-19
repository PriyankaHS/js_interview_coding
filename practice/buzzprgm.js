// Write a program that prints the numbers from 1 to 100. 
// But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz". 
// Additionally, for numbers that contain the digit 3, print "Fizz" instead of the number, and for numbers that contain the digit 5, print "Buzz" instead of the number.

for (let i=1; i<=100; i++) {

    switch (true) {
        case i % 3 === 0 && i % 5 === 0:
            console.log("FizzBuzz");
            break;
        case i % 3 === 0:
            console.log("Fizz");
            break;
        case i % 5 === 0:
            console.log("Buzz");
            break;
        default:
            console.log(i);
    }
}
