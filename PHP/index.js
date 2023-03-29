const email = document.getElementById("email");
const pass = document.getElementById("pass");
const form = document.getElementById("form");
const emailElement = document.getElementById("emailError");
const passElement = document.getElementById("passError");

form.addEventListener("submit", (e) => {
    let emailMessage = [];
    let passMessage = [];
    if (email.value === "" || email.value == null) {
        emailMessage.push("Email is required");
    } else if (!email.value.match(/^[a-z\._\-[0-9]*@*[a-z]*[\.][a-z]{3,4}$/)) {
        emailMessage.push("Email is invalid");
    }
    if (emailMessage.length > 0) {
        e.preventDefault();
        emailElement.innerText = emailMessage.join(" ");
        emailElement.style.display = "block";
        setTimeout(() => {
            emailElement.style.display = "none";
        }, 3000);
    }
    if (pass.value === "" || pass.value == null) {
        passMessage.push("Password is required");
    }
    if (passMessage.length > 0) {
        e.preventDefault();
        passElement.innerText = passMessage.join(" ");
        passElement.style.display = "block";
        setTimeout(() => {
            passElement.style.display = "none";
        }, 3000);
    }
});

var icon = document.getElementById("icon");
icon.onclick = () => {
    if (pass.type == "password") {
        pass.type = "text";
        icon.src = "eyeopenn.png";
        icon.title = "Click to hide password";
    } else {
        pass.type = "password";
        icon.src = "eyeclose.png";
        icon.title = "Click to show password";
    }
};
