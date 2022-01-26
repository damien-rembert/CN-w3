const myRemove = document.getElementById("remove");
// const myRemov3 = document.querySelector("#remove")

const myList = document.getElementById("list");


// adding new elements
const myNewElement = document.getElementById("input");
const submitButton = document.getElementById("submit");

function submitElement() {
    // alert(myNewElement.value);

    // create the element to be added to the list
    let listItem = document.createElement('li');

    // give it the value of the text field
    listItem.innerHTML = myNewElement.value;

    // add at the end of the list
    myList.appendChild(listItem);
    // clear the field
    myNewElement.value = "";   
}


// submitButton.addEventListener("click", submitElement());
submitButton.addEventListener("click", () => submitElement());



myRemove.addEventListener("click", () => {
    let lastItem = document.querySelector('li:last-child');
    myList.removeChild(lastItem);
})