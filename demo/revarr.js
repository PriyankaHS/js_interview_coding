// 1. reverse the same array in reverse order

myarr1 = [1, 19, 99, 0, 45, 7];
reverseArray = []

// let reverseArray = myarr1.slice().reverse();
// let reverseArray = Array.from(myarr1).reverse();

for (let i= myarr1.length-1; i >=0; i--) {
    reverseArray.push(myarr1[i])
}
console.log("my array is ", myarr1);
console.log("reverse array is ", reverseArray);



// 2. stack using array 
// array1 = [2, 4, 6, 8, 10]


class Stack {
    constructor() {
        my_array = [];
    }

    push(element) {
        my_array.push(element);
    }

    pop() {
        if(my_array.length == 0) {
            return "stack over flow";
        }
        return this.my_array.pop();
    }
}
myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);



// 3. create 2 objs and merge them together
// key value pairs will be used in a object and add 1 to other


// 4. there is a list of elements name and price, scan the entire list, retun the product with highest price

// async function swipe(start x, start y, end y) {

//     await driver.touchAction(){
//         await driver.scroll(start x, start y);
//         await driver.moveTo(start x, end y);
//         await driver.release();
//     }
//     }
    
    // product wiuth highest price
    
    // vertical scrolling
    
