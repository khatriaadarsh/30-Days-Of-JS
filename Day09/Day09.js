//              ====> Day 09: Dom Manipulation  <====

//---> Task/Activities:

// -=-=->Activity 01: Selecting and Manipulating Elements

// --->Task 01: Select an HTML element by its ID and Change its text content.
/*

let selectByID = document.getElementById("heading");
selectByID.textContent = "Dom Manipulation";

*/

//---> Task 02: Select and HTML element by its class and changes its background color.
/*

  let selectByClass = document.getElementsByClassName("text");
  selectByClass[0].style.backgroundColor = "red";

*/

// -=-=-> Activity 02: Creating and Appending Element.
// --->Task 03: Create a new div element with some text content and append it to body.
/*

let newDiv = document.createElement("div");

let textContent = document.createTextNode("This is new div");

newDiv.appendChild(textContent);

document.body.appendChild(newDiv);

*/

// ---> Task 04: Create a new li element and add it to existing ul list.
/*

let newListItem = document.createElement("li");

let textContent = document.createTextNode("This is new li element");
newListItem.appendChild(textContent);

let list = document.getElementById("myList");
list.appendChild(newListItem);

*/

// -=-=-> Activity 03: Removing Elements

// ---> Task 05: Select an HTML element and remove it from the dom.
/*

let removeElement = document.getElementById("head03");
removeElement.remove();

*/

//---> Task 06: Remove the last child of a specific HTML element.
/*

let removeChildELement = document.querySelector("ul");
removeChildELement.removeChild(removeChildELement.lastChild);
if (removeChildELement.lastChild) {
  removeChildELement.removeChild(removeChildELement.lastChild);
}

*/

// -=-=->Actvity 04: Modifying Attribute and Classes

// --->Task 07: Select an HTML element and Change one of its attributes(e.g src of an img tag).

/*

const image = document.getElementById("myImage");
image.src ="https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg";

*/

// ---> Task 08: Add and remove CSS class to/ from an HTML element.
/*

document
  .getElementById("addClassButton")
  .addEventListener("click", function () {
    const divElement = document.getElementById("myDiv");
    divElement.classList.add("highlight");
  });

document
  .getElementById("removeClassButton")
  .addEventListener("click", function () {
    const divElement = document.getElementById("myDiv");
    divElement.classList.remove("highlight");
  });

document
  .getElementById("toggleClassButton")
  .addEventListener("click", function () {
    const divElement = document.getElementById("myDiv");
    divElement.classList.toggle("highlight");
  });

*/

// -=-=->Activity 05: Event Handling

// Task 09: Add a click event listener to a button that changes the text content of a graph.
/*

function changeTextOnclick() {
  const text = document.getElementById("randomText");
  text.textContent = "This is new text";
}
let button = document.getElementById("mybutton");
button.addEventListener('click', changeTextOnclick);

*/

// Task 10: Add a mouseover event listener to a button that changes its border color.
/*
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("btn").style.border = "5px solid red";
});
*/
