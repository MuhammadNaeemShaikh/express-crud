//closure
// A closure in JavaScript is a function that can access variables from its outer scope, even after the outer function has finished executing.
// Example
// function multiplier(factor) {
//     return function (number) { // it does not return the inner funcion only it will return the lexical enviroment as well bcz we are using factor that's all closure is all about.
//         return number * factor;
//     };
// }

// const double = multiplier(2); 
// const triple = multiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15



// function counter() {
//     let count = 0; // Private variable //lexical enviroment

//     return {
//         increment: function () {
//             count++;
//             console.log(`Count: ${count}`);
//         },
//         decrement: function () {
//             count--;
//             console.log(`Count: ${count}`);
//         }
//     };
// }

// const myCounter = counter();
// myCounter.increment(); // Count: 1
// myCounter.increment(); // Count: 2
// myCounter.decrement(); // Count: 1
