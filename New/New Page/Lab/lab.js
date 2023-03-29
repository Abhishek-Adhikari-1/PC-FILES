var icon = document.getElementById('icon');
var xamp = document.getElementById('pass');
icon.onclick = ()=>{
    if(xamp.type == "password"){
        xamp.type = "text";
        icon.className = "uil uil-eye";
        icon.title = "Hide Password";
    }
    else{
        xamp.type = "password";
        icon.className = "uil uil-eye-slash";
        icon.title = "Show Password";
    }
}


var phone = document.querySelector("#phone");
var email = document.querySelector("#email").value;
var pass = document.querySelector("#pass").value;
function name() {
    var name = document.querySelector("#name").value;
    if (name.value != null) {
        alert("hello");
        return false;
    }
}
