// fibonacci series using recursion in javascript 

function fibo(n) {
    
    if(n <= 1) {
        return n;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}
console.log("Fibonacci series : ");

for(let i = 0; i < 10; i++){
    console.log(fibo(i));
}
