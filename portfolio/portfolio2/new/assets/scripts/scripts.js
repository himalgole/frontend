let screenH = window.innerHeight;
let screenW = window.innerWidth;

mode_status = localStorage.getItem("mode");
var mode = document.querySelector(".mode-change-btn")

if (mode_status == null) {
    localStorage.setItem("mode", "default");
}
else {
    if (mode_status == "changed") {
        mode.classList.add("mode-changed")
    }
}

var home = document.querySelector(".home");
// var box = document.querySelector(".box");
function loaded() {
    home.classList.add("home-animated");
    // box.classList.add("box-animated")
}
var currentPos = 0
var header = document.querySelector(".header");
function check_scroll(scl) {
    // console.log("top "+top)
    currentPos = scl - currentPos
    if (currentPos > 0 && scl > 100) {
        header.classList.add("header-hide")

    }
    else {
        header.classList.remove("header-hide")

    }
    if (scl > 100) {
        header.classList.add("header-highlight")
    }
    else {
        header.classList.remove("header-highlight")
    }
}
window.addEventListener("scroll", () => {
    check_scroll(window.scrollY);
    currentPos = window.scrollY;

})
function menu_display() {
    header.classList.toggle("menu-display")

}

var work = document.querySelectorAll(".work");
function work_animate() {
    for (var i = 0; i < work.length; i++) {
        if (work[i].getBoundingClientRect().top < screenH * 0.83) {
            work[i].classList.add("work-animate");
        }
    }
}
work_animate();
window.addEventListener("scroll", function () {
    work_animate();
})

var contact = document.querySelector(".contact");
function contact_animate() {
    if (contact.getBoundingClientRect().top < screenH * 0.83) {
        contact.classList.add("contact-animate")
    }
}
contact_animate();
window.addEventListener("scroll", () => {
    contact_animate();
})


function mode_change() {
    if (localStorage.getItem("mode") == "default") {
        localStorage.setItem("mode", "changed")
        mode.classList.add("mode-changed")
    }
    else {
        localStorage.setItem("mode", "default")
        mode.classList.remove("mode-changed")
    }
}
