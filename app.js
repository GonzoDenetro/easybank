const hamburger_button = document.querySelector(".header__menu");
const menu = document.querySelector(".hide-for-mobile");
const overlay = document.querySelector(".overlay");

hamburger_button.addEventListener("click", openMenu);

function openMenu(){
    if(hamburger_button.classList.contains("open")){
        hamburger_button.classList.remove("open")
        overlay.classList.remove("fade-in")
        overlay.classList.add("fade-out")
    }
    else {
        hamburger_button.classList.add("open") //Open Menu
        overlay.classList.add("fade-in");
        overlay.classList.remove("fade-out")
    }
    console.log("Vamooo Xime")
}