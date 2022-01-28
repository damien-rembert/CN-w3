// do a slap game
// when space hit: slap sound

// click on face to slap it?
// display stars or tears after slap?




// get face
const imageID = document.getElementById("face");

// get sound
const slap_sound = document.getElementById("slap_sound");

// upload face rather than provide link?
// const uploadID = document.getElementById("upload");
// uploadID.addEventListener("change", () => {imageID.src = uploadID;})

const inputID = document.getElementById("input");
const buttonID = document.getElementById("submit");

// buttonID.addEventListener("click", () => {imageID.src = inputID.value;})
buttonID.addEventListener("click", () => {face.src = inputID.value;})



// if (keyValue.keyCode == 97) {
//     main.style.animation = "mainDrum 0.1s linear"
//     setTimeout(() => {
//         main.style.removeProperty('animation')
//     }, 100)
//     boom.pause()
//     boom.currentTime = 0
//     boom.play();


document.addEventListener("keydown", (event) => {
    if (checkSpace(event)) {
        slap();        
    } 
    // else 
    // {
    //     alert(`you pressed: ${event.key}.\nThat's cool and all but only space works.`);
    // }    
})

// 
// })

function slap() {
    // moveHand();
    playSound();
}

function checkSpace(event) {
    // create a p to add to the div
    if (event.key == " ") {
        return true;        
    } else return false;    
}


function moveHand() {
    throw new Error("Function not implemented.");
}

function playSound() {
    // stop (in case already playing)
    // rewind
    // play
    slap_sound.pause()
    slap_sound.currentTime = 0
    slap_sound.play();

}
