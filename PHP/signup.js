const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const conpass = document.getElementById("conpass");
    const nameElement = document.getElementById("nameError");
    const phoneElement = document.getElementById("phoneError");
    const emailElement = document.getElementById("emailError");
    const passElement = document.getElementById("passError");
    const conpassElement = document.getElementById("conpassError");
    let nameMessage = [];
    let phoneMessage = [];
    let emailMessage = [];
    let passMessage = [];
    let conpassMessage = [];

    if (name.value === "" || name.value == null) {
        nameMessage.push("Name is required");
    } else if (!name.value.match(/^[A-Z a-z]*\s{1}[A-Z a-z]*$/)) {
        nameMessage.push("Name is invalid");
    }
    if (nameMessage.length > 0) {
        e.preventDefault();
        nameElement.innerText = nameMessage.join(" ");
        nameElement.style.display = "block";
        setTimeout(() => {
            nameElement.style.display = "none";
        }, 3000);
    }

    if (phone.value === "" || phone.value == null) {
        phoneMessage.push("Contact number is required");
    } else if (!phone.value.match(/^[0-9]{1,10}$/)) {
        phoneMessage.push("Only digits please");
    } else if (!phone.value.match(/^[0-9]{10}$/)) {
        phoneMessage.push("Contact number should be of 10 digits");
    } else if (!phone.value.match(/^[9][0-9]{9}$/)) {
        phoneMessage.push("First number should be 9");
    }
    if (phoneMessage.length > 0) {
        e.preventDefault();
        phoneElement.innerText = phoneMessage.join(" ");
        phoneElement.style.display = "block";
        setTimeout(() => {
            phoneElement.style.display = "none";
        }, 3000);
    }

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

    if (conpass.value === "" || conpass.value == null) {
        conpassMessage.push("Password is required");
    } else if (pass.value !== conpass.value) {
        conpassMessage.push("Enter the same password");
    }
    if (conpassMessage.length > 0) {
        e.preventDefault();
        conpassElement.innerText = conpassMessage.join(" ");
        conpassElement.style.display = "block";
        setTimeout(() => {
            conpassElement.style.display = "none";
        }, 3000);
    }
});

var icon1 = document.getElementById("icon1");
icon1.onclick = () => {
    if (pass.type == "password") {
        pass.type = "text";
        icon1.src = "eyeopenn.png";
        icon1.title = "Click to hide password";
    } else {
        pass.type = "password";
        icon1.src = "eyeclose.png";
        icon1.title = "Click to show password";
    }
};
var icon2 = document.getElementById("icon2");
icon2.onclick = () => {
    if (conpass.type == "password") {
        conpass.type = "text";
        icon2.src = "eyeopenn.png";
        icon2.title = "Click to hide password";
    } else {
        conpass.type = "password";
        icon2.src = "eyeclose.png";
        icon2.title = "Click to show password";
    }
};

function isChecked() {
    if (document.getElementById("terms").checked) {
        document.getElementById("samp").style.color =
            "hsl(var(--color-picker), 90%, 25%)";
    } else {
        document.getElementById("samp").style.color = "var(--text-color)";
    }
}
