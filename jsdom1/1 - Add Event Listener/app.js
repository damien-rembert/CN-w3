// console.log("pop pop");
// document.getElementById("heading").style.color = "red";
// document.body.style.backgroundColor = "pink";

// console.log("pop pop");
const myHeading = document.getElementById("heading");
// console.log(myHeading);
// document.body.style.backgroundColor = "pink";
myHeading.addEventListener("click", () => {
    myHeading.style.color = "blue";
})
myHeading.addEventListener("onHover", () => {
    myHeading.style.color = "red";
})


