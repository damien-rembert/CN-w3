const myHeading = document.getElementById("heading");
const myButton = document.getElementById("button");
const myInput = document.getElementById("input");




myButton.addEventListener("click", () => {
    alert(myInput.value);
    myHeading.style.color = myInput.value;
})
