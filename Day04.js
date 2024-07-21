//                   ====>Day 04: Loops <====

// ---:Tasks/Activity:
//-->Activity 01: For Loop
// ->Task 01: Write a program to print numbers 1 to 10 using for loop.
/*
     for (let i = 1; i <= 10; i++) {
      console.log(i);
     }
*/

// Task 02:
/*
    let num = 5;
    for (i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
    }
*/

//-=-=->Activity 02: While Loop
// Task 03: Write a program to calculate the sum of numbers from 1 to 10.
/*
   let sum = 0;
   let i = 1;
   while (i <= 10) {
   sum = sum + i;
   i++;
   }
   console.log(sum);
*/

// Task 04: Write a program to print numbers from 10 to 1.

/*
    let num = 10;
    while (num >= 1) {
    console.log(num);
    num--;
    }
*/

// -=-=-> Activity 03: Do...While Loop

// Task 05: Write a program to print numbers from 1 to 5.
/*
      let num = 1;
      do {
        console.log(num);
        num++;
      } while (num <= 5);
*/

// Task 06: Write a program to calculate the factorial of a number.

/*
   let fact = 1;
   let num = 5;
   let i = 1;
   do {
   fact = fact * i;
   i++;
   } while (i <= num);
   console.log(fact);
*/

// ---> Activity 04: Nested Loops

//  Task 07:Write a program to print pattern
// *
// * *
// * * *
// * * * *
// * * * * *

/*
    for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
    pattern += ' *';
    }
    console.log(pattern.trim()); //.trim() removes the trailling  space for a cleaner output.
}
*/

// -=-=-> Activity 05: Loop Control Statements
// Task 08: Write to print number from 1 to 10, but Skip the number 5 using the 'Continue' statement.
/*
     for (let i = 1; i <= 10; i++) {
     console.log(i); //-->This is extra just for check output
     if (i == 5) {
     continue;
     }
     console.log(i);
    }
*/
// Task 09: Write to print number from 1 to 10, but stop loop when the number 7 using the break statement.
/*
    for(let i = 1; i<=10;i++){
    if(i == 7){
    break;
    }
    console.log(i);
    }
*/
