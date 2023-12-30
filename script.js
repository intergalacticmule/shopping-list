container = document.querySelector(".container-textbox");
addButton = document.querySelector(".container-textbox > button");
textBox = document.querySelector(".container-textbox > input");
unorderedList = document.querySelector("ul");

addButton.addEventListener("click", () => {
  div = document.createElement("div");
  li = document.createElement("li");
  button = document.createElement("button");
  li.textContent = textBox.value;
  button.textContent = "Delete";

  div.appendChild(li);
  div.appendChild(button);
  container.appendChild(div);
});

/* <div>
        <li></li>
        <button></button>
    </div> */

// Add event listener to addButton that adds a div with list element and a button child to unorderedList;

// Add event listeners to all delete buttons of list elements using for each that deletes their parent element;
