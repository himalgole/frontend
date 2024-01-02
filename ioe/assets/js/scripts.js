document.getElementById("btn").addEventListener("click", function () {
    var container = document.querySelector(".container")
    container.classList.toggle("expanded")
})

document.getElementById("menu-icon").addEventListener("click",function(){
    var container = document.querySelector(".mobile-sidebar")
    container.classList.toggle("viewed")
})

document.getElementById("menu-icon").addEventListener("click",function(){
    var container = document.querySelector(".container")
    container.classList.toggle("expanded")
})

document.querySelector(".login-show-btn").addEventListener("click",function(){
   document.querySelector(".login-action").classList.toggle("None")
})