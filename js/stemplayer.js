let button = document.querySelector(".ebutton");

let mail = document.querySelector("#mail");

function change(e) {
    Event.preventDefault;
    if (mail.className == "hide"){
        mail.className = "";
        button.className = "hide";
    }
}

button.addEventListener('click', change);