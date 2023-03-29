var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validatename(){
    var name = document.getElementById('id-name').value;
  
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

    if(phone.length == 0){
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

    if(email.length == 0){
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
    var required = 50;
    var ubreko = required - message.length;

    if(ubreko > 0){
        messageError.innerHTML = ubreko + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i><i class="fa-solid fa-circle-check"></i>';
    return true;
}
/* Main submit button ko validation */

function validateform(){
    if(!validatename() || !validatephone() || !validateemail() || !validatemessage()){
        submitError.style.display='block';//multiple time jastai.
        submitError.innerHTML = 'Please fix all error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);//time 3 second paxi haraunako lagi.
        return false;
    }
}