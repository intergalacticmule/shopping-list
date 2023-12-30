const container = document.querySelector(".container-textbox");
const addButton = document.querySelector(".container-textbox > button");
const textBox = document.querySelector(".container-textbox > input");
const unorderedList = document.querySelector("ul");
let listButtons;

function removeParent(element) {
  element.parentElement.remove();
}

function addListButtonsFunctionality(buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      removeParent(button);
    });
  });
}

function clearInputField(field) {
  field.value = "";
}

function checkUserInput(field) {
  return field.value == "" ? true : false;
}

addButton.addEventListener("click", () => {
  li = document.createElement("li");
  li.textContent = textBox.value;
  button = document.createElement("button");
  button.textContent = "Delete";
  button.classList.add("delete-button");

  li.appendChild(button);
  unorderedList.appendChild(li);

  listButtons = document.querySelectorAll(".delete-button");
  addListButtonsFunctionality(listButtons);
  clearInputField(textBox);
  textBox.focus();
});

// Add event listener to addButton that adds a div with list element and a button child to unorderedList;

// Add event listeners to all delete buttons of list elements using for each that deletes their parent element;
