
var skill_level = [90, 90, 80, 70];
var skill_level_show = document.querySelectorAll(".progress")
var skill_percent_show = document.querySelectorAll(".skill-percent");
var i;
for (i = 0; i < skill_level.length; i++) {
    // skill_level_show[i].style.width = skill_level[0]
    skill_level_show[i].style.width = skill_level[i]+"%";
    skill_percent_show[i].innerHTML = skill_level[i]+"%"

}
