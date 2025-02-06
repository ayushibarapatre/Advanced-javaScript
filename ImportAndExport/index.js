// 1. Create a module math.js that exports a function add(a, b), then import and use it in index.js.
// import add  from './math.js';  

// const result = add(3, 5);  
// console.log(result);  


// ******************************************************************************************************************


// 2. Export a constant PI = 3.14159 from constants.js and import it in another file to calculate the area of a circle.
// import Area  from './math.js'; 
// const circleArea = Area(3.14 ,2)
// console.log(circleArea)


// *********************************************************************************************************************

// 3. Create a function greet(name) in greetings.js, export it as a default export, and import it in another file.
// import greet  from './math.js';
// const output = greet("Good Morning")
// console.log(output)


// ************************************************************************************************************************


// 4. Create an array [1, 2, 3, 4, 5] in numbers.js, export it, and use map() to double each number in main.js.
// import number  from './number.js';
// var double =number.map( num => num*2)
// console.log(double)


// ****************************************************************************************************************************


// 5. Export an object {name: "Alice", age: 25, job: "Engineer"} from user.js and import it in another file to log the name property.
// import obj  from './user.js';
// console.log(obj.name)


// ********************************************************************************************************************************


// 6. Create a module that exports multiple functions (add, subtract, multiply), then import only multiply in another file.
// import multiplication  from './math.js';
// const multi = multiplication(5,2)
// console.log(multi)


// **************************************************************************************************************************************

// 7. Use named exports to export square(n) and cube(n), then import both in a single line in another file.
// import math from "./math.js"
// console.log(math.square(2))
// console.log(math.cube(2))



// *****************************************************************************************************************************************



// 8. Import a module using import * as utils from "./utils.js" and use utils.add(5, 10).
// import * as math from "./math.js"
// console.log(math.add(2,3))


// ***********************************************************************************************************************************************



// 9. Use export default to export a function that returns today’s date and import it in another file.
// import date from "./math.js"
// console.log(date())


// ****************************************************************************************************************************************************


// 10. Create an index.js file that re-exports everything from math.js and constants.js using export.
// import { add, subtract, PI, E } from './user.js';

// console.log(add(5, 3));      
// console.log(subtract(5, 3)); 
// console.log(PI);             
// console.log(E);


// ****************************************************************************************************************************************************


              
// 1. Export an array of users from users.js and use filter() in main.js to get users above age 30.
// import arr from "./user.js"
// const final =arr.filter(array => array > 30)
// console.log(final)

// *****************************************************************************************************************************************************

// 2. Create a function that takes an array of numbers, filters even numbers, and exports the result. Import it and log the result in another file.
// import PureArray from "./math.js"
// console.log(PureArray([1,2,3,4,5,6]))


// *****************************************************************************************************************************************************


// 3. Export an object containing methods (getName(), getAge()) and destructure-import them in another file.
// import obj from "./math.js"
// const {getName ,getAge} = obj;
// console.log(getName());
// console.log(getAge())


// *****************************************************************************************************************************************************
// 4. Use dynamic import (import()) to load math.js only when a button is clicked.


// ********************************************************************************************************************************************************

// 5. Export a function that returns the factorial of a number using recursion and import it in main.js to calculate 5!.
// import { factorial } from "./math.js";

// console.log( factorial(5)); 

// ***********************************************************************************************************************************************************

// 1. Create a module cart.js that exports a function to add items to an array. Import it in checkout.js and use reduce() to get the total price.
// import checkout from "./math.js"
// console.log(checkout([1,2,3,4,5]))


// 2. Export an array of products from products.js, then use map() in main.js to create a new array of product names.
// import { products } from './products.js';
// const productNames = products.map(product => product.name);
// console.log("Product Names:", productNames);
// 3. Use import inside a loop to dynamically load different modules based on user input.
// 4. Create a module that exports a class Person. Import it in another file, create an instance, and use its methods.
// 5. Use export default to export an async function that fetches data from an API. Import and call it in another file.