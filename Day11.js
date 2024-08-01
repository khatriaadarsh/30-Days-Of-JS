//           ====> Day 11: Promises and Async/Await
// -=-=->Task/Activities:

// ---> Activity 01: Understanding Promises

// Task 01: Create a promises that resolve with a message after a 2-second timeout and log the message to the console.
/*
let promiseOne = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1 resolved after 2 seconds");
  }, 2000);
});
promiseOne.then((message) => {
  console.log(message);
});

*/

//Task 02:Create a promise that rejects with an error message after 2 seconds timeout and handle the error using'.catch()'
/*

let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 rejected after 2 seconds");
  }, 2000);
});
promiseTwo
  .then((message) => {
    console.log("Resolved:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

*/

// ---->Activity 02: Chaining Promises

// Task 03: Create a squence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

/*

---> // Simulate fetching data from a server with a sequence of promises
function fetchDataFromServer(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (step === 1) {
        resolve("Step 01: Data fetched from the server");
      } else if (step === 2) {
        resolve("Step 02: Data Processed");
      } else if (step === 3) {
        resolve("Step 03: Data saved to the database");
      } else {
        reject("Error fetching data from the server");
      }
    }, 1000);
  });
}  
 ---> // Chain the promises to simulate the sequence of fetching data
fetchDataFromServer(1)
  .then((message) => {
    console.log(message);    // Log message from step 1
    return fetchDataFromServer(2);  // Fetch data for step 2
  })
  .then((message) => {
    console.log(message);  // Log message from step 2
    return fetchDataFromServer(3);  // Fetch data for step 3
  })
  .then((message) => {
    console.log(message);   // Log message from step 3
  })
  .catch(() => {
    console.log("Error fetching data from the server");
  });

*/

// -=-=->Activity 03:Using Async/Await

// -->Task04: Write an async function that waits for a promise to resolve and then logs the resolved error message.
/*

function resolveMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved successfully!");
    }, 2000);
  });
}
async function logResolvedMessage() {
  try {
    const message = await resolveMessage();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}
logResolvedMessage();

*/

// Task 05: Write an async function that handles a rejected promise using try-catch and logs the error message.

/*

function rejectMessage() {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("Promise rejected successfully!");
    }, 2000);
  });
}

async function logRejectMessage() {
  try {
    const message = await rejectMessage();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

logRejectMessage();

*/

// -=-=->Activity 04: Fetching data from an API

// Task 06: Use the 'fetch' API to get data from a public API and log the response data to the console using promises.
/*

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

*/

// Task 07: Use the fetch API to get data from a public API and log the response data to the console using async/await.
/*

async function useAsyncAwait() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
useAsyncAwait();

*/

// Activity 05: Concurrent Promises.

// Task 08: Use Promise.all to wait for mutliple promises to resolve and then log all their values.
/*

function createPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promises = [
  createPromise("Promise 01", 1000),
  createPromise("Promise 02", 2000),
  createPromise("Promise 03", 3000),
];
Promise.all(promises)
  .then((value) => {
    console.log(`All the data fetched: ${value}`);
  })
  .catch((error) => {
    console.log(error);
  });

  */

// Task 09: Use Promise.race to log the value of the first promise that resolve among multiple promises

/*

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 rejected");
  }, 3000);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((err) => {
    console.log("First promise rejected:", err);
  });

*/