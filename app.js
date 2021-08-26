const hamburger_button = document.querySelector(".header__menu");
const menu = document.querySelector(".hide-for-mobile");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade"); //All element that have has-fade class

hamburger_button.addEventListener("click", openMenu);

function openMenu(){
    if(hamburger_button.classList.contains("open")){ //Close Menu
        hamburger_button.classList.remove("open")
        fadeElements.forEach(element => {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        })
        /* overlay.classList.remove("fade-in")
        overlay.classList.add("fade-out") */
    }
    else {
        hamburger_button.classList.add("open") //Open Menu
        fadeElements.forEach(element => {
            element.classList.add("fade-in");
            element.classList.remove("fade-out");
        })
        /*overlay.classList.add("fade-in");
        overlay.classList.remove("fade-out"); */
    }
}