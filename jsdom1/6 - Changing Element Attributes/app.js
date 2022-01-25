const imageID = document.getElementById("image");
const inputID = document.getElementById("input");
const buttonID = document.getElementById("submit");

buttonID.addEventListener("click", () => {imageID.src = inputID.value;})
