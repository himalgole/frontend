var nav = document.querySelector("#nav")
window.addEventListener('load',()=>{
   nav.classList.add("nav-animated");
})

var menu_icon = document.querySelector(".menu-icon");
menu_icon.addEventListener("click",()=>{
    nav.classList.toggle("ul-display")
})

var nav_height  = nav.clientHeight
console.log(nav_height)