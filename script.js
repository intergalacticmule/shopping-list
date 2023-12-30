const container = document.querySelector(".container-textbox");
const addButton = document.querySelector(".container-textbox > button");
const textBox = document.querySelector(".container-textbox > input");
const unorderedList = document.querySelector("ul");
let listButtons;

addButton.addEventListener("click", () => {
  div = document.createElement("div");
  li = document.createElement("li");
  li.textContent = textBox.value;
  button = document.createElement("button");
  button.textContent = "Delete";
  button.classList.add("delete-button");

  div.appendChild(li);
  div.appendChild(button);
  container.appendChild(div);

  listButtons = document.querySelectorAll(".delete-button");
});

// Add event listener to addButton that adds a div with list element and a button child to unorderedList;

// Add event listeners to all delete buttons of list elements using for each that deletes their parent element;
