//Text

const grade = document.getElementById("igrade");
const grade_BG = document.getElementById("igrade_BG");

const shield = document.getElementById("ishield");
const shield_BG = document.getElementById("ishield_BG");

const power = document.getElementById("ipower");
const power_BG = document.getElementById("ipower_BG");

//Icon

const shield_img = document.getElementById("shield")

grade.addEventListener('input', function() {
    grade_BG.textContent = grade.value;
    if (grade.value == "") {
        grade.placeholder = 0;
        grade_BG.textContent = 0;
    };
});

shield.addEventListener('input', function() {
    shield_BG.textContent = shield.value;
    if (shield.value == "") {
        shield_img.src = "Assets/None.png"
        shield.placeholder = ""
    }else {
       if(shield.value > 0) {
        shield_img.src = "Assets/Base/Shield/N_Shield.png"
       }else if(shield.value == 0){
        shield_img.src = "Assets/Base/Shield/S_Shield.png"
       };
    }
});

power.addEventListener('input', function() {
    power_BG.textContent = power.value;
    if (power.value == "") {
        power.placeholder = 0;
        power_BG.textContent = 0;
    };
})
