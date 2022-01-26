const keyP = document.getElementById("key");
const whichP = document.getElementById("which");
const codeP = document.getElementById("code");
const history = document.getElementById("history");



document.addEventListener("keydown", (event) => {
    displayP(event);
    addLetter(event)
})

// document.addEventListener("keyup", (e) => {
//     alert(`you pressed: ${e}`);
// })

function displayP(event) {
    // create a p to add to the div
    keyP.innerHTML = event.key;
    whichP.innerHTML = event.which;
    codeP.innerHTML = event.code;
    
}

// let go off the key you mad lad + crazy flashing css





// adding new elements

function addLetter(event) {

    // create the element to be added to the list
    let listItem = document.createElement('li');

    listItem.innerHTML = event.key;

    // add at the end of the list
    history.appendChild(listItem);
}



