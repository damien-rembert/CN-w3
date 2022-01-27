// most common sounds ee è ah T O N R ss z sh d L F k M oo shwa Guy d Jouet Papa B V THick THis  
// link common sounds
//


const keyP = document.getElementById("key");
const whichP = document.getElementById("which");
const codeP = document.getElementById("code");
const history = document.getElementById("history");



document.addEventListener("keydown", (event) => {
    displayP(event);
    addLetter(event);
    
})

// document.addEventListener("keyup", (e) => {
//     alert(`you pressed: ${e}`);
// })

function play(sound) {
    // stop (in case already playing)
    // rewind
    // play
}

function displayP(event) {
    // create a p to add to the div
    keyP.innerHTML = event.key;
    whichP.innerHTML = event.which;
    codeP.innerHTML = event.code;
    
}

// let go off the key you mad lad + crazy flashing css
// function madLad() {
// }





// adding new elements

function addLetter(event) {
    let listItems = document.getElementsByTagName("li");
    let previousItem = listItems[0];


    // create the element to be added to the list
    let newItem = document.createElement('li');

    newItem.innerHTML = event.key;

    // add at the end of the list
    history.insertBefore(newItem, previousItem);

    if (listItems.length > 10) {
        
        history.removeChild(listItems[10]);
        
    }
}



