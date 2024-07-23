//              ====> Day 06: Arrays <====
//        ---> Task/Activities:

// -=--> Activity 01: Array Creation and Access

//--> Task 01: Create an array of number 1 to 5 and log the array result to the console.
/*

     let arrOFNumbers = [1, 2, 3, 4, 5];
       for (let i = 0; i < arrOFNumbers.length; i++) {
     console.log(arrOFNumbers[i]);
     }

*/

//-->Task 02: Access the first and last elements of the array and log them to the console.

/*

   let lastAndFirstElement = [1, 2, 3, 4, 5];
   let firstElement = lastAndFirstElement[0];
   let lastELement = lastAndFirstElement[lastAndFirstElement.length - 1];
   console.log(firstElement, lastELement); //Output: 1 5

*/

// -=--> Activity 01: Array Methods (Basics)
//--> Task 03: Use the PUSH method to add a new number to the end of the array and log the updated array.
/*
     let pushOperation = [11, 22, 33, 44, 55];
      pushOperation.push(66);
     console.log(pushOperation); //Output: [11, 22, 33, 44,55,66]
*/

//---> Task 04: Use the POP method to remove the last element from array and log the updated array.
/*

   const popOperation = [11,22,33,44,55];
   popOperation.pop();
   console.log(popOperation); //Output: [11,22,33,44]
 
*/

// --->Task 05: Use the SHIFT method to remove first element from array and log the updated array.
// --->Shift used to remove first element of array

/*
    const shiftFruits = ["Apple", "Banana", "Orange"];
    let removedElement = shiftFruits.shift();
    console.log(removedElement); //Output: Apple
    console.log(shiftFruits); //Output: ['Banana','Orange']
*/

// --->Task 06: Use the UNSHIFT method to add a new element to the beginning array and log the updated array.

//---=>  The unshift() method in JavaScript adds one or more elements to the beginning of an array and returns the new length of the array.

/*
     const unshiftCountry = ["Pakistan", "USA", "Germany"];
     let newLength = unshiftCountry.unshift("France"); 
     console.log(unshiftCountry);  //Output: ['France','Pakistan','USA','Germany']
     console.log(newCountry);     //Output: 4  
*/

// -=-=-> Activity 03: Array Methods (Intermediate)

//---> Task 07: Use the MAP method to create a new array where each number is doubled and log the new array.

//--->In JavaScript, the map method is used to create a new array populated with the results of calling a provided function on every element in the calling array.
//It is particularly useful for transforming or processing elements of an array.

/*

  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled); //Output: [2, 4, 6, 8, 10]

*/

// ---> Task 08: Use the FILTER method to create a new array with only even numbers and log the new array.

/*
   const filterEvenNumbers = [1, 2, 3, 4, 5, 6];
   const evenNumber = filterEvenNumbers.filter((number) => number % 2 === 0);
   console.log(evenNumber); //Output: [2, 4, 6]
*/

// ---> Task 09: Use the reduce method to calculate the sum of all numbers in the array and log the result
// ---> The reduce() method executes a provided function for each value of the array (from left-to-right). The reduce provides single value
/*
   let sumByReduce = [1, 2, 3, 4, 5];
   let reduce_nums = (num1, num2) => {
    return num1 + num2;
   };
    let sum = sumByReduce.reduce(reduce_nums); //Passing function as a parameter or value 
     console.log(sum);
*/

//-=-=-> Activity 04: Array Iteration

// --->Task 10: Use a for loop to iterate over the array and log each element to the console.
/*

    let forLoop = [12, 13, 14, 15];
    for (let i = 0; i < forLoop.length; i++) {
    console.log(forLoop[i]);
    }

*/

// ---> Task 11: Use the forEach method to iterate over the array and log each element of the array.

/*

   const forEachLoop = [11, 22, 33, 44, 55];
   forEachLoop.forEach((val) => {
   return val;
   });
   console.log(forEachLoop); //Output: [11, 22, 33, 44, 55]

*/

//-=-=-> Activity 05: Mutli-dimensional Arrays

//---> Task 12: Create a two-dimensional array (matrix) and log the entrie array to the console.

/*

   let twoDimensionalArray = [
      [2, 4],
      [6, 8],
   ];

    for (let i = 0; i < twoDimensionalArray.length; i++) {
      for (let j = 0; j < twoDimensionalArray[i].length; j++) {
      console.log(twoDimensionalArray[i][j]);
     }
    }

*/

// -->Task 13: Access and log the a specfic element from the two-dimensional array.

/*

      let accessSPecficElement = [
         [11, 22, 33],
         [44, 55, 66],
         [77, 88, 99],
     ];
         console.log(accessSPecficElement[1][1]); //Output: 55

*/

