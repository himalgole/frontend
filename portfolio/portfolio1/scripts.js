var nav = document.querySelector("#nav")
window.addEventListener('load', () => {
    nav.classList.add("nav-animated");
})

var menu_icon = document.querySelector(".menu-icon");
menu_icon.addEventListener("click", () => {
    nav.classList.toggle("ul-display")
})

var gole = document.querySelectorAll(".gole-anime");
for (var i = 0; i < gole.length; i++) {
    gole[i].style.display = "none"

}


setTimeout(() => {
    gole[0].style.display = "block";
}, 1200);
setTimeout(() => {
    gole[1].style.display = "block";
}, 1500);
setTimeout(() => {
    gole[2].style.display = "block";
}, 1800);
setTimeout(() => {
    gole[3].style.display = "block";
}, 2100);

var work = document.querySelectorAll(".work");
window.addEventListener("scroll",function(){
    for(var i = 0; i<work.length; i++)
    {
        if(work[i].getBoundingClientRect().top < 500)
        {
            work[i].classList.add("work-animate")
        }
    }
})
var skill_content = document.querySelectorAll(".skill")
var skill_title = document.querySelectorAll(".skill-title")
window.addEventListener("scroll",function(){
    
 
        for(var i = 0; i < skill_title.length; i++)
        {
            if(skill_title[i].getBoundingClientRect().top < 490)
            {
                skill_title[i].classList.add("swipe-title")
            }
            
        }

    if(skill_content[0].getBoundingClientRect().top < 485)
    {
        for(var i = 0; i < 4; i++)
        {
            skill_content[i].classList.add("skill-animate");
        }
        
    }
    if(skill_content[4].getBoundingClientRect().top < 485)
    {
        for(var i = 4; i < 8; i++)
        {
            skill_content[i].classList.add("skill-animate");
        }
        
    }
    
})

