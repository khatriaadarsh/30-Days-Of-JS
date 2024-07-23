//             ====> Day 05: Function <====
//  ---> Task/Activities:

// -=-=-> Activity 01: Function Declaration

// -->Task 01: Write a function to check if number is even or odd and log the result to the console
/*  

function checkNumber(num) {
    if (num % 2 === 0) {
     console.log(`${num} is even number`);
    } else {
      console.log(`${num} is odd number`);
    }
  }
 checkNumber(10);
 checkNumber(11);

 */

// -->Task 02: Write a function to calculate the square of a number and return the result.
/*
        function squareOfNumber(num){
        return num * num;
        }
        console.log(squareOfNumber(5));
          
 */

// -=-=-> Activity 02: Function Expression

// -->Task 03: Write a function expression to find the maximum of two numbers and log the result to the console.

/*
function findMaxiOfTwoNum(num1, num2) {
    if (num1 > num2) {
     console.log(`${num1} is maximum number`);
       } else {
      console.log(`${num2} is maximum number`);
     }
    }
    findMaxiOfTwoNum(10, 20);
*/

//--> Task 04 Write a function expression to concatenate two strings and return to the console.
//--------- Without Parameters
/*
    function stringsConcat(){
    let str1 = "Hello";
    let str2 = "World";
    return str1.concat(str2);
    }
    console.log(stringsConcat());
 */

//---------- With parameter
/*
    function stringsConcatenate(str1, str2) {
    return str1 + str2;
    }
    console.log(stringsConcatenate("Hello ", "World!"));
*/

// -=-=> Activity 03: Arrow Function

// -->Task 05: Write an arrow function to find the sum of two numbers and return the result.
/*
      const sumOfTwoNumbers = (num1, num2) => {
      return num1 + num2;
      };
      console.log(sumOfTwoNumbers(10, 20));
*/

// -->Task 06: Write an arrow function to check if a string contains a specific character and return a boolean value.
/*
    const checkCharacter = (str, char) => {
    return str.includes(char);
    };
    console.log(checkCharacter("Hello", "l")); //Its return True in output
*/

// -=-=->Activity 04: Function Parameter and Default Values

// --->Task 07:  Wrtie a function take two parameter and return their product. Provide a default value for the second paramter.
/*
       function takeTwoParameter(num1, num2 = 4) {
       return num1 * num2;
       }
       console.log(takeTwoParameter(10)); //Its return 40 in output
       console.log(takeTwoParameter(10,3)); // Its return 30 in output
*/

// ---> Task 08: Write a function that takes persons name and age and returns a greeting message. Provides a default value for the age.
/*
   const greetingMessage = (name, age = 20) => {
     return `Hello ${name} you are ${age} years old.`;
   };
    console.log(greetingMessage("Aadarsh Kumar")); //Output: Hello Aadarsh Kumar you are 20 years old.
    console.log(greetingMessage("Aadarsh Kumar", 22)); //Output: Hello Aadarsh Kumar you are 22 year old
*/

// Activity 05: Higher order Functions
// ---> Task 09: Write higher-order function that takes a function as a parameter and returns the result
/*
   function executeFunction(func) {
   return func(10, 20);
   }
   const sumOfTwoNumbers = (num1, num2) => {
   return num1 + num2;
   };
   console.log(executeFunction(sumOfTwoNumbers)); //Output: 30
*/

//   --->Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
/*
   function applyFunction(func1, func2, value) {
    return func1(func2(value));
  }
   const square = (num) => {
     return num * num;
   };
    const cube = (num) => {
      return num * num * num;
    };
    console.log(applyFunction(square, cube, 2)); //Output: 64
*/
