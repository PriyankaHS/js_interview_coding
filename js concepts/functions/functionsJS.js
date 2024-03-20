// 1. Generator function -> A function that returns a iterator object, for generating a sequence of values
// syntax -> function* with wild card and yield keyword is used
// next() -> prints the next value from the generator

function* generateNumSeq() {
    yield 1;
    yield 2;
    yield 3;
}

const g = generateNumSeq();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


// 2. Anonymous function -> No specific name

const numbers = [1,2,3,4,5];
const squareNum = numbers.map((e) => {
    return e * e;
});
console.log(squareNum);


// 3. Recursive function -> A function which calls by itself during the execution

function factorial(n) {

    if(n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log("Factorial of 7 is :", factorial(7));


// 4. Higher order functions -> Function that takes 1 or more function as argument

function addition(a,b) {
    return a + b;
}

function multiply(a,b) {
    return a * b;
}

function operate(funcName, a, b) {
    return funcName(a,b);
}

const s = operate(addition, 17, 30);
const s1 = operate(multiply, 17, 30);
console.log(s);
