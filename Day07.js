//              ====> Day 07: Objects <====

//              ---->Tasks/Activities<-----

// -=-=->Activity 01:Object Creation and Access

// --->Task 01: Create an object representing a book with properties like title,auther and year and log the object to the console.
/*
const book = {
  title: "Minte",
  author: "Mehdi",
  year: 2020,
};
   console.log(book); //Output:{ title: 'Minte', author: 'Mehdi', year: 2020 }
*/

// Task 02: Access and log the title and auther properties of the book object.
/*

const bookPropertiesAccess = {
  title: "Minte",
  author: "Mehdi",
  year: 2020,
};
console.log(bookPropertiesAccess.title); //Output:Minte
console.log(bookPropertiesAccess.author); //Output:Mehdi
console.log(bookPropertiesAccess.year); // Output:2020

*/

// -=-=->Activity 02: Object Methods

// --->Task 03: Add a method to the book object that return a string with the book's title and auther and log the result of calling this methode

/*

const callingMethodeOfBook = {
  title: "Minte",
  auther: "Mehdi",
  year: 2022,
  getBookInfo: function () {
    return `Title: ${this.title} Auther: ${this.auther} Year: ${this.year}`;
  },
};
console.log(callingMethodeOfBook.getBookInfo());   // Output:Title: Title: Minte Auther: Mehdi Year: 2022

*/

// --->Task 04: Add a method to the book object that take parameter (year) and update the book's year property, them log the update object.

/*

  const passingParameterInObject = {
  title: "Minte",
  auther: "Mehdi",
  year: 2022,
  getBookInfo: function () {
    return `Title: ${this.title} Auther: ${this.auther} Year: ${this.year}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
    return this;
  },
};
    passingParameterInObject.updateYear(2023);
    console.log(passingParameterInObject.getBookInfo());// Output:Title: Minte Auther: Mehdi Year: 2023

*/

//    -=-=->Activity 03: Nested Objects

// Task 05:  Create a Nested Object representing a Library with properties like name and books (an array book objects),and log the library object to the console.
/*

const nestedObject = {
  name: "Mehdi Library",
  location: "DownTown",
  books: [
    {
      title: "Minte",
      auther: "Mehdi",
      year: 2022,
    },
    {
      title: "Minte 2",
      auther: "Mehdi 2",
      year: 2024,
    },
  ],
};
console.log(nestedObject); 

*/
/*
    --->   Output:
{
  name: 'Mehdi Library',
  location: 'DownTown',
  books: [
    { title: 'Minte', auther: 'Mehdi', year: 2022 },
    { title: 'Minte 2', auther: 'Mehdi 2', year: 2024 }
  ]
}
*/

// --->Task: 06 Access and log the name of the library and the title of all the books in the  library.

/*
const nestedObj = {
  name: "Mehdi Library",
  location: "DownTown",
  books: [
    {
      title: "Minte",
      auther: "Medhi",
      year: 2022,
    },
    {
      title: "Minte 2",
      auther: "Medhi 2",
      year: 2024,
    },
  ],
};

console.log(nestedObj.name);              //Output: Mehdi Library

console.log(nestedObj.books[1].auther);    //Output: Medhi 2


nestedObj.books.forEach((titles) => {   //Output:  -> Minte
  console.log("->", titles.title);      //        -> Minte 2
});

*/

// -=-=-> Activity 04: The 'this' keyword

//---> Task 07: Add a method to the book object that uses the 'this' Keyword to return a string with the book's title and year, and log the result if calling this method.
/*

const useThisKeyword = {
  name: "Mehdi Library",
  location: "DownTown",
  getBookInfo: function () {
    return `${this.name} and location ${this.location}`;
  },
};
console.log(useThisKeyword.getBookInfo()); //Output: Mehdi Library and location DownTown

*/

// -=-=-> Activity 05: Object Iteration
//---> Task 08: Use a for...in loop to iterate over the properties of the book object and logs each property and it's value.
/*
const forInLoopObj = {
  name: "Aadarsh Kumar",
  age: 20,
  email: "aadarsh@gmail.com",
};
for (let key in forInLoopObj) {
  console.log(key + "->" + forInLoopObj[key]);
}
  */
/*
  
-->Output: 
name->Aadarsh Kumar
age->20
email->aadarsh@gmail.com

*/

// --->Task 09:Use 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object.
/*

const book = {
  title: "Minte",
  author: "Aadarsh Kumar",
  year: 2024,
  pages: 200,
};
console.log(`Keys: ${Object.keys(book)}`); //Output: Keys: title,author,year,pages
console.log(`Values: ${Object.values(book)}`); //Values: Values: Minte,Aadarsh Kumar,2024,200

*/