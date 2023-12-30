const addButton = document.querySelector(".container-textbox > button");
const textBox = document.querySelector(".container-textbox > input");
const unorderedList = document.querySelector("ul");
let listButtons;

function removeParent(element) {
    element.parentElement.remove();
}

function addElementsToParent(parent) {
    li = document.createElement("li");
    li.textContent = textBox.value;
    button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("delete-button");

    li.appendChild(button);
    parent.appendChild(li);

    listButtons = document.querySelectorAll(".delete-button");
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
    return field.value == "" ? false : true;
}

addButton.addEventListener("click", () => {
    if (checkUserInput(textBox)) {
        addElementsToParent(unorderedList);
        addListButtonsFunctionality(listButtons);
        clearInputField(textBox);
        textBox.focus();
    } else {
        return;
    }
});
