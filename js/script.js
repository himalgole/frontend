var children = document.querySelectorAll(".child")

children.forEach((x)=>{
    x.addEventListener("click",function()
    {
        this.classList.toggle('active')
        this.innerHTML = x.className
    })
})


