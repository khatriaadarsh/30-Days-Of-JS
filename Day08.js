//              ====> Day 08: ES6+ Features  <====
//              ---->Tasks/Activities<-----
// -=-=->Activity 01: Template Literals
// --->Task 01: Use template literals to create a string that include vairable for a person's name and age and log the string to the console.
/*
let name = "Aadarsh";
let age = 21;
let personInfo = `Hello, my name is ${name} and I am  ${age} year old`;
console.log(personInfo); // Output: Hello, my name is Aadarsh and I am  21 year old
*/

// ---> Task 02: Create a multi line String using templete literal and log it to the console.
/*
let multiLineString = `This is a string
that spans across
multiple lines.`;
console.log(multiLineString);
*/
/*
     Output:This is a string
     that spans across
     multiple lines.
*/

// -=-=-> Activity 02: Destructuring
// ---> Task 03: Use array destructuring to extract the first and second element form an array of number and log them to the console.
/* 

let arr = ["Aadarsh", "Kumar"];
const [firstName, lastName] = arr;
console.log(firstName); // Output: Aadarsh
console.log(lastName); // Output: Kumar

*/
// -->Task 04: Use object destructuring to extract the title and auther from a book object and log them to the console
/*

let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
let {title, author, year} = book;
console.log(title); // Output: The Great Gatsby
console.log(author); //Output: F. Scott Fitzgerald 

*/

// -=-=-> Activity 03: Spread and Rest Operators
// ---> Task 05: Use the Spread operator to create a new array that includes all elements of and existing plus additional elements, and log the new array to the console.
/*
let arr = [11, 22, 33, 44];
let newArr = [...arr, 55, 66, 77];
console.log(newArr);
*/
//       Output:
//  [
//   11, 22, 33, 44,
//   55, 66, 77
// ]

// --->Task 06: Use the rest operator in a function to accept an arbitrary number of arguments sum, them and return the result

/*

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

*/

// -=-=->Activity 04: Default Parameters

// --->Task 07: Write a function takes two parameters and returns their product, with the second paramter having default value of 1. Log the result of calling this function and with and without the second parameter

/*

  function defaultParameter(num1, num2 = 1) {
  return num1 * num2;
  }
  console.log(defaultParameter(3, 4));  // Output: 12
  console.log(defaultParameter(4));     //Output: 4

*/

// -=-=->Activity 05: Enhanced Object Literals

// ---> Task 08: Use enhanced object literal to create an object with methods and properties, and log the object to the console
/*

let person = {
  firstName: "Aadarsh",
  lastName: "Kumar",
  age: 20,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  haveBirthday() {
    this.age++;
  },
};
console.log(person);
console.log(person.getFullName());
person.haveBirthday();
console.log(person.age);  //Output: 21

*/

// --->Task 09: Create an Object with computed porperty names based in variable and log the result
/*

  let Age = "age";
  let person = {
  name: "Aadarsh",
  lastName: "Kumar",
  [Age]: 20,
  };
    console.log(person[Age]); //Output: 20

*/