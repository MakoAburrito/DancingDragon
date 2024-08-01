/*Script for navigation bar popup*/
const toggleButton = document.getElementsByClassName('togglebtn')[0]
const navbarLinks = document.getElementsByClassName('MenuItem')

toggleButton.addEventListener('click', () => {
    /*For Loop used to toggle each to .active using the get elements by using a string that stores each menu item */
    for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.toggle('active');
    }
})

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4){
        counter = 1;
    }
}, 5000)