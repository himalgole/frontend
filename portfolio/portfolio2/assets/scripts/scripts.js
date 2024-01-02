var loader = document.querySelector(".preloader");
function loaded()
{
    loader.classList.add("del-loader")
}
var currentPos = 0
var header = document.querySelector(".header");
function check(scl) {
    // console.log("top "+top)
    currentPos = scl - currentPos
    if (currentPos > 0 && scl > 100) {
        header.classList.add("header-hide")
        
    }
    else {
        header.classList.remove("header-hide")
        
    }
    if(scl >100)
    {
        header.classList.add("header-highlight")
    }
    else
    {
        header.classList.remove("header-highlight")
    }
}
window.addEventListener("scroll", () => {
    check(window.scrollY);
    currentPos = window.scrollY;
   
})



var header2 = document.querySelector(".header");
function menu_display() {
    header2.classList.toggle("menu-display")
    
}

var work = document.querySelectorAll(".work");
function work_animate()
{
    for(var i = 0; i<work.length; i++)
    {
        if(work[i].getBoundingClientRect().top < 500)
        {
            console.log(work[i].getBoundingClientRect().top)
            work[i].classList.add("work-animate");
        }
    }
}
work_animate();
window.addEventListener("scroll",function(){
    work_animate();
})

var contact = document.querySelector(".contact");
function contact_animate()
{
    if(contact.getBoundingClientRect().top < 500)
    {
        contact.classList.add("contact-animate")
    }
}
contact_animate();
window.addEventListener("scroll",()=>{
   contact_animate();
})