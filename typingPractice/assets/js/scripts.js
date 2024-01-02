// Typing practice....
// vanilla javascript
// Himal Gole
// Fine coding

var continue_btn = document.getElementsByClassName("continue-btn")[0];
var intro_panel = document.getElementsByClassName("intro")[0];
var paragraph_entry = document.getElementsByClassName("paragraph-entry")[0];
function Continue()
{
    intro_panel.style.display = "none"
    paragraph_entry.style.zIndex = "99999"
}
function submitVal()
{
    var para = document.getElementById("textarea").value;
    if(para.length == 0)
    {
        document.write("<a href=\"index.html\">Back</a>")
        document.write("<br>")
        document.write("Please type a paragraph")
    }
    else if(para.length < 10)
    {
        document.write("<a href=\"index.html\">Back</a>")
        document.write("<br>")
        document.write("You should have longer paragraph")
    }
    window.localStorage.setItem("para",para);
    paragraph_entry.style.display = "none"
}

// document.querySelector(".demo").innerHTML = window.localStorage.getItem("para")

console.log(window.localStorage.getItem("para"))
