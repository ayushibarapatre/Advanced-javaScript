// 1. Create a module math.js that exports a function add(a, b), then import and use it in index.js.
// function add(a,b){
// return a+b
// }

// 2. Export a constant PI = 3.14159 from constants.js and import it in another file to calculate the area of a circle.
// function Area(pi,r){
//     return  pi *r *r;

// }

// 3. Create a function greet(name) in greetings.js, export it as a default export, and import it in another file.
// function greet(name){
//     return name
// }
// 6. Create a module that exports multiple functions (add, subtract, multiply), then import only multiply in another file.

// function addition(a,b){
//    return a+b
// }
// function substraction(a,b){
//    return a-b
// }
// function multiplication(a,b){
//    return a*b
// }
// 7. Use named exports to export square(n) and cube(n), then import both in a single line in another file.

//  function square(n){
//     return n * n
// }
//  function cube(n){
//     return n * n * n
// }

// 8. Import a module using import * as utils from "./utils.js" and use utils.add(5, 10).
// export function add(a,b){
//     return a+b
// }

// 9. Use export default to export a function that returns today’s date and import it in another file.

//   function date(){
//     const today = new Date();
//      return today.toLocaleDateString();
// }

// export default date


// 10. Create an index.js file that re-exports everything from math.js and constants.js using export.
// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }


// 2. Create a function that takes an array of numbers, filters even numbers, and exports the result. Import it and log the result in another file.
// function PureArray(arr){
//    const filter = arr.filter(singleArr => singleArr%2 ===0)
//    return filter
// }
// export default PureArray

// 3. Export an object containing methods (getName(), getAge()) and destructure-import them in another file.

// let obj = {
//     getName(){
//         return "Ayushi"
//     },
//     getAge(){
//         return 20
//     }
// }
// export default obj;

// 5. Export a function that returns the factorial of a number using recursion and import it in main.js to calculate 5!.

// export function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// 1. Create a module cart.js that exports a function to add items to an array. Import it in checkout.js and use reduce() to get the total price.
// function checkout(arr){
  
// }



// add,Area,greet,multiplication,square,cube