function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsBtn = document.getElementById("member-skills-btn");
    var memberSkillsBtnClose = document.getElementById("member-skills-btn-close");

    memberSkillsBtn.addEventListener("click", function () {
        memberSkills.style.display = "block";
        member.style.display = "none";
    });

    memberSkillsBtnClose.addEventListener("click", function () {
        memberSkills.style.display = "none";
        member.style.display = "block";
    });
}