//           ====> Day 12: Error Handling
// -=-=->Tasks/Activities:

// --->Activity 01: Basic Error Handling with Try-Catch

// Task 01: Write a function that intenionally throws an error and use a try-catch block to handle the error and log an appropiate.
/*
function throwError() {
 --> // Intentionally throw an error
  throw new Error("Something went wrong");
}
--> // Use a try-catch block to handle the error
try {
  throwError();
} catch (error) {
  console.log("An error occurred");
}
*/

// Task 02: Create a function that divide two number and throws an error if the denomination is zero. Use a try-catch block to handle this error

/*

function dividwNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator can not be zero.");
  }
  return numerator / denominator;
}

try {
  const result = dividwNumbers(10, 0);
  console.log("Result", result);
} catch (error) {
  console.log("Error", error.message);
}

*/

// ----> Activity 02: Finally Block
// Task 03: Write a script that include try-catch block and a finally block. log message in the try, catch and finally blocks to obeserve the execution.

/*

function riskyOperation() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error("An error accurred: Random number is less then 0.5");
  }
  return "Operation succeeded: Random number is " + randomNumber;
}
try {
  console.log("Trying to perform the risky operation");
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.log("An error occurred: ", error.message);
} finally {
  console.log("Finally block executed");
}
*/

// Task 05: Write a function that validates user input (e.g., checking if a string is not empty ) and throw a custom error if the validation fails. Handle the custom error using try catch.

/*

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateInput(input) {
  if (!input || input.trim() === "") {
    throw new ValidationError("Input cannot be empty");
  }
  return input;
}

function handleInput(input) {
  try {
    const ValidatedInput = validateInput(input);
    console.log("Validated Input:", ValidatedInput);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

handleInput("Hello World"); // Validated Input: Hello World
handleInput(""); // Error: Input cannot be empty
handleInput(" "); // Error: Input cannot be empty

*/

// ---> Activity 04: Error Handling Promises

// Task 06: Create a promise that randomly resolve or reject. Use .catch() to handle the rejection and log an approppiate message to the console.

/*

let promiseOne = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random < 0.5) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});

promiseOne
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

  */

// Task 07:Use try-catch within an async function to handle errors from a promise that randomly resolve or rejects, and log the error message.

/*

function asyncFunc() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
}
async function implement() {
  try {
    const result = await asyncFunc();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

implement();

*/

// ---> Activity 05:Graceful Error Handling in Fetch
// Task 08: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

// Method 01

// fetch("https://invalid-url.com").catch((error) => {
//   console.log("Error fetching data:", error);
// });

// Method 02
/*

function fetchAPI(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error:", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data", data);
    });
}
fetchAPI("https://invalid-url.com").catch((error) => {
  console.log("Error fetching data:", error);
});

*/

// Task 09: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate.

/*

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("HTTP error", response.status);
    }
    console.log("Fetched data:", data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData("https://invalid-url.com");

*/