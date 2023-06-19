const toggle_menu = document.getElementById("nav-menu");
const menu_close = document.getElementById("nav-xmark");

const toggle_display = document.querySelector(".nav-links");

const open_toggle = () => {
    if (window.getComputedStyle(toggle_display).display === "none") {
        toggle_display.style.display = "block";
    }
    if (window.getComputedStyle(toggle_menu).cursor === "pointer"){
        toggle_menu.style.document = "default"
    } else{
        toggle_menu.style.document = "pointer"
    }
}

const close_toggle = () => {
    if (window.getComputedStyle(toggle_display).display === "block") {
        toggle_display.style.display = "none";
    }
}

menu_close.addEventListener("click", close_toggle);
toggle_menu.addEventListener("click", open_toggle);
