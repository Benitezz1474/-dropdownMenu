let dropdown = document.querySelector(".dropdown");
let dropdown__icon = document.querySelector(".dropdown__icon");
let btn_menu = document.getElementById("btn_menu");
let i = document.querySelectorAll(".i");


dropdown.addEventListener("click",dropdown__ON);

function dropdown__ON(){
    dropdown.classList.toggle("dropdown__on");
    dropdown__icon.classList.toggle("dropdown__icon__on");
    i.classList.toggle("i__on");
}