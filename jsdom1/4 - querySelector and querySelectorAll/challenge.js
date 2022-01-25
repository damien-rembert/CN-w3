// const listItems = document.querySelectorAll("li:nth-child(odd)");
// console.log(listItems);
// console.log(listItems.length);

const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const listItems = document.querySelectorAll("li");


let j = 0;
for(let i = 0; i < listItems.length; i++) {
    if (j == colours.length) {
        j = 0;
    }
    listItems[i].style.color = colours[j];
    j++;

    
}



// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = "lightgreen";
// }