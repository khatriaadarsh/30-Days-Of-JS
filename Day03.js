// -=-=->Day 03: Control Structures

// Activity 01: If-Else Statements
// * Task 01: Write a program to check if a number is positive of negative or zero and log the result to the console.
/*
     let num = 6;
     if (num > 0) {
     console.log("The number is positive");
     } else if (num < 0) {
     console.log("The number is negative");
     } else {
    console.log("The number is zero");
     } 
*/
// * Task 02: Write a program to check if person is eligible to vote (age >= 18) and log the result to the console.
/*
    let age = 18;
    if (age >= 18) {
    console.log("You are eligible to vote");
    } else {
    console.log("You are not eligible to vote");
    }
*/

// Activity 02: Nested If-Else Statements
// * Task 03: Write a program to check if a number is positive or negative and if
// it is positive check if it is even or odd and log the result to the console.
/*
function characterType(character) {
  if (typeof character === "string" && character.length === 1) {
    if (character >= "A" && character <= "Z") {
      console.log(`The ${character} is uppercase`);
    } else if (character >= "a" && character <= "z") {
      console.log(`The ${character} is lowercase`);
    } else if (character >= 0 && character <= 9) {
      console.log(`The ${character} is a number`);
    } else {
      console.log(`The ${character} is a special character`);
    }
  } else {
    console.log(`The input ${character} is not a single character`);
  }
}

--> Test the function with different inputs 
characterType('A');     //Output A
characterType('a');     //Output a
characterType('1');     //Output 1
characterType('a1!');   //Output: The input a1! is not a character  
characterType('@');     //Output: The @ is a Speical Character
characterType('AB')     //Output: The input AB is not Single a Character 

*/

// Activity 03: Switch Case
//  Task 04: Wirte a program that is uses switch case to determine the day of the week based on number (1 to 7) and log the name to the console
/*
let days = 1;
switch (days) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Input Please into between (1 - 7)");
}
      Output: Monday
*/

// Task 05:Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on socre and log the grade to the console.
/*
let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Fair");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid Input Please into between (A - F)");
}
Output: Excellent
*/

// Activity 04: Conditional (Ternary) Operator
//  Task 04: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
/*
   --> Method 01
    
    let num = 2;
    if (num % 2 == 0) {
    console.log("Even Number");
    } else {
    console.log("Odd Number");
    } 
    
    -->Method 02
   
    let number = 2;
    number % 2 == 0 ? console.log("Even") : console.log("Odd");

    */

// Activity 05: Combining Conditions
// Task 07: Write a program to check to check if a year is leap year using multi conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console
/*
function isLeapYear(year) {
  if (year % 4 == 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 == 0) {
    return true;
  }
}
 console.log(isLeapYear(2020)); // true

 --->Creating array or years to check leap year

let years = [2020, 2021, 2022, 2023, 2024];
  Using forEach Loop for printing years  
years.forEach((year) => {
  if (isLeapYear(year)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
});

*/

