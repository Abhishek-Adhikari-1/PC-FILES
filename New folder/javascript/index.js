//For close menu
function hideMenu(){
    var a = document.querySelector('ul');
    a.style.transition = ".5s";
    a.style.margin = "-600px 3px 0 0";
    var b = document.getElementById('open');
    b.style.display = "block";
}
// function re(){
//     var bcd = window.matchMedia("(min-width: 678px)");
//     if(bcd.matches){
//         var a = document.querySelector("ul");
//         a.style.transition = "0s";
//         a.style.margin = "0 0 0 0";
//     }
//     else {
//         var a = document.querySelector("ul");
//         a.style.margin = "0 -600px 0 0";
//     }
// }
function showMenu(){
    var a = document.querySelector('ul');
    a.style.transition = ".5s";
    a.style.margin = "3px 3px 0 0";
    var b = document.getElementById('open');
    b.style.display = "none";
}
window.onscroll = function(){
    var progressbar = document.getElementById("progressbar");
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    var progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.height = progressHeight + "%";
}
function validatename(){
    var name = document.getElementById('id-name').value;
    var nameError = document.getElementById('name-error');
    
    if(name.length == null || name.length == 0 || name.length == ""){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Z a-z]*\s{1}[A-Z a-z]*$/)){
        nameError.innerHTML = 'Write full Name';
        return false;
    }
    nameError.innerHTML = '<i><i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatephone(){
    var phone = document.getElementById('id-phone').value;
    var phoneError = document.getElementById('phone-error');
    
    if(phone.length == 0 || phone.length == null || phone.length == ""){
        phoneError.innerHTML = 'Phone Number is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone Number should be of 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits Please';
        return false;
    }
    if(!phone.match(/^[9][0-9]{9}$/)){
        phoneError.innerHTML = 'First Number should be 9';
        return false;
    }
    phoneError.innerHTML = '<i><i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateemail(){
    var email = document.getElementById('id-email').value;
    var emailError = document.getElementById('email-error');
    
    
    if(email.length == 0 || email.length == null || email.length == ""){
        emailError.innerHTML = 'E-mail is required';
        return false;
    }
    if(!email.match(/^[a-z\._\-[0-9]*@[a-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i><i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatemessage() {
    var message = document.getElementById('id-message').value;
var messageError = document.getElementById('message-error');
var required = 50;
var ubreko = required - message.length;

if(message.length == 0 || message.length == null || message.length == ""){
        messageError.innerHTML = 'Message cannot be empty';
        return false;
    }
    if(ubreko > 0){
        messageError.innerHTML = ubreko + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i><i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateform(){
    var submitError = document.getElementById('submit-error');
    if(!validatename() || !validatephone() || !validateemail() || !validatemessage()){
        submitError.style.display='block';//multiple time jastai.
        submitError.innerHTML = 'Please fix all error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);//time 3 second paxi haraunako lagi.
        return false;
    }
}
function selector1(){
    $(li1).addClass('selected');
    $(li2).removeClass('selected');
    $(li3).removeClass('selected');
    $(li4).removeClass('selected');
    $(li5).removeClass('selected');
}
function selector2(){
    $(li1).removeClass('selected');
    $(li2).addClass('selected');
    $(li3).removeClass('selected');
    $(li4).removeClass('selected');
    $(li5).removeClass('selected');
}
function selector3(){
    $(li1).removeClass('selected');
    $(li2).removeClass('selected');
    $(li3).addClass('selected');
    $(li4).removeClass('selected');
    $(li5).removeClass('selected');
}
function selector4(){
    $(li1).removeClass('selected');
    $(li2).removeClass('selected');
    $(li3).removeClass('selected');
    $(li4).addClass('selected');
    $(li5).removeClass('selected');
}
function selector5(){
    $(li1).removeClass('selected');
    $(li2).removeClass('selected');
    $(li3).removeClass('selected');
    $(li4).removeClass('selected');
    $(li5).addClass('selected');
}