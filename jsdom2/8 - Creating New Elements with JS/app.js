const input = document.getElementById('input');
const button = document.getElementById('submit');
const showhidebtn = document.getElementById('showhide-btn');


button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let list = document.getElementsByTagName('ul')[0];

    list.appendChild(listItem);

})

showhidebtn.addEventListener('click', () => {
    let list = document.getElementsByTagName('ul');
    if(list.style.display == 'none') {
        list.style.display = 'block';

    } else {

        showhidebtn.textContent = 'show';
    }
})