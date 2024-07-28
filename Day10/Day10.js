//              ====> Day 10:: Event Handling  <====
// ====>Task/Activities:

// -=-=-> Activity 01: Basic Event Handling

// --->Task 01: Add a click event listener to a button that changes the text content of a paragraph.

/*

function paragraph() {
  let paragraph = document.getElementById("paragraph");
  paragraph.textContent = "This is new text btn is clicked";
}
const selectionOfBtn = document.getElementById("myButton");
selectionOfBtn.addEventListener("click", paragraph);

*/

// --->Task 02: Add a double-clicked event listener to an image that toggle its visiblity
/*

function toggleVisibility() {
  let image = document.getElementById("myImage");
  if (image.style.display == "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}
const selectionOfImg = document.getElementById("myImage");
selectionOfImg.addEventListener("dblclick", toggleVisibility);

*/

// -=-=->  Activity 02: Mouse Events

// ---> Task 03: Add a mouseover event listener to an element that changes its background color

/*

    const mouseOverEventListener = document.getElementById("myButton");
    mouseOverEventListener.addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue";
    this.style.color = "white";
    });

*/

// ---> Task 04: Add a mouseout event listener to an element that reset its background.
/*

   const changeBackgroundColor = document.getElementById("myButton");
   changeBackgroundColor.addEventListener("mouseout", function () {
   this.style.backgroundColor = "black";
   this.style.color = "white";
});

*/

// -=-=->Activity 03: Keyword Events

// ---> Task 05: Add a keydown event listener to an input field that logs the key pressed to the console
/*

function handelKeyDown(event) {
  const key = event.key;
  const output = document.getElementById("output");
  output.textContent = `You Proced ${key}`;
}
document.addEventListener("keydown", handelKeyDown);

*/

// ---> Task 06: Add a keyup event listener to an input field that display the current value in a paragraph

/*

function handelKeyUp(event) {
    const key = event.key;
    const output = document.getElementById("output");
    output.textContent = `You released: ${key}`;
}
  const inputField = document.getElementById("inputField");
  inputField.addEventListener("keyup", handelKeyUp);

*/

// -=-=-> Activty 04: Form Events

// ---> Task 07: Add an event listener to a form that prevents the default submission and logs the form data to the console.

/*

function handleFormSubmit(event) { // Prevent the default form submission behavior
  
  event.preventDefault();  

  const formData = new FormData(event.target);  // Get the form data

  const formObject = {};  

  formData.forEach((value, key) => {       // convert form data to an object
    formObject[key] = value;
  });
  console.log(`Form Data: ${formObject}`);
}

const form = document.getElementById("myForm");
form.addEventListener("submit", handleFormSubmit);

*/

// ---> Task 08: Add a change event listener to a select  dropdown that displays the selected value in a paragraph.
/*

function handleChange(event) {
  const selectedValue = event.target.value;
  const output = document.getElementById("output");
  output.textContent = `You selected: ${selectedValue}`;
}
const optionsSelection = document.getElementById("mySelect");
optionsSelection.addEventListener("change", handleChange);

*/

// -=-=-> Activty 05: Event Delegation

// ---> Task 09: Add a click event to a list that logs the text content of the clicked list item using event delegation
/*

const list = document.getElementById("myList");
list.addEventListener("click", (event) => {
  if (event.target.tagName) {
    console.log(`Clicked Item ${event.target.textContent}`);
  }
});

*/

// ---> Task 10: Add an event listener to parent element that listens for events from dynamically added child elements.

/*

const itemList = document.getElementById("itemList");
const addItemButton = document.getElementById("addItemButton");
addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("Li");
  newItem.textContent = "New Item";
  itemList.appendChild(newItem);
});

*/