const letters = document.getElementsByTagName("li");

const notOrange = document.getElementsByClassName("not-orange");

let printMe;
// printMe = letters.length;
// printMe = letters[0];
// letters[3];
// letters[0].style.color="red";
// console.log(printMe);

for (let i = 0; i < letters.length; i++) {
    
    if (letters[i].className !== "not-orange") {
        letters[i].style.color = "orange";


    }
}

// for (let i = 0; i < notOrange.length; i++) {
//     notOrange[i].style.color = "red";
// }


