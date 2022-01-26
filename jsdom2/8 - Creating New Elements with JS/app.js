const input = document.getElementById('input');
const button = document.getElementById('submit');
const showhidebtn = document.getElementById('showhide-btn');


button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    // ElementS returns an array
    let list = document.getElementsByTagName('ul')[0];

    // Creating an item from the text field
    listItem.textContent = input.value;

    // adding 
    list.appendChild(listItem);
    // clear the text field
    input.value = "";

    list.appendChild(listItem);

})

showhidebtn.addEventListener('click', () => {
    let list = document.getElementsByTagName('ul')[0];
    if(list.style.display == 'none') {
        list.style.display = 'block';
        showhidebtn.textContent = 'hide';
    } else {
        list.style.display = 'none';


        showhidebtn.textContent = 'show';
    }
})