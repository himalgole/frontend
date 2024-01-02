window.addEventListener("scroll",()=>{
    if(scrollY > 10)
    {
        document.querySelector(".social-links").classList.add("highlight-links")
        

    }
    else
    {
        document.querySelector(".social-links").classList.remove("highlight-links")
    }
    setTimeout(() => {
        document.querySelector(".social-links").classList.remove("highlight-links")
    }, 10000);
    document.querySelector("nav").classList.remove("nav-displayed")
    document.querySelector(".menu-icon").classList.remove("clicked-menu")
})

function show_menu()
{
    document.querySelector("nav").classList.toggle("nav-displayed")
    document.querySelector(".menu-icon").classList.toggle("clicked-menu")
}