//to open navbar
function showMenu(){
    var open = document.querySelector("ul");
    open.style.transition = "1s";
    open.style.margin = "3px -17px 0 0";
    var op = document.getElementById("open");
    op.style.transition = "1s";
    op.style.opacity = "0";
}
//to close nabar
function hideMenu(){
    var close = document.querySelector("ul");
    close.style.transition = "1s";
    close.style.margin = "3px -600px 0 0";
    var op = document.getElementById("open");
    op.style.transition = "1s";
    op.style.opacity = "100%";
}
// form validation
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

/* Main submit button ko validation */
function validateform(){
    var submitError = document.getElementById('submit-error');
    if(!validatename() || !validatephone() || !validateemail() || !validatemessage()){
        submitError.style.display='block';//multiple time jastai.
        submitError.innerHTML = 'Please fix all error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);//time 3 second paxi haraunako lagi.
        return false;
    }
}
//for scrolling path
window.onscroll = function(){
    var progressbar = document.getElementById('progressbar');
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    var progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.height = progressHeight + "%";
}


















$(window).on('scroll',function(){
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    if($(window).scrollTop() >= 3.75*vh){
        $(li5).addClass('selected');
        $(li1).removeClass('selected');
        $(li2).removeClass('selected');
        $(li3).removeClass('selected');
        $(li4).removeClass('selected');
    }
    else if($(window).scrollTop() >= 2.75*vh && $(window).scrollTop() <= 3.75*vh){
        $(li4).addClass('selected');
        $(li1).removeClass('selected');
        $(li2).removeClass('selected');
        $(li3).removeClass('selected');
        $(li5).removeClass('selected');
    }
    else if($(window).scrollTop() >= 1.75*vh && $(window).scrollTop() <= 2.75*vh){
        $(li3).addClass('selected');
        $(li1).removeClass('selected');
        $(li2).removeClass('selected');
        $(li4).removeClass('selected');
        $(li5).removeClass('selected');
    }
    else if($(window).scrollTop() >= 0.75*vh && $(window).scrollTop() <= 1.75*vh){
        $(li2).addClass('selected');
        $(li1).removeClass('selected');
        $(li3).removeClass('selected');
        $(li4).removeClass('selected');
        $(li5).removeClass('selected');
    }
    else if($(window).scrollTop() >= 0*vh && $(window).scrollTop() <= 0.75*vh){
        $(li1).addClass('selected');
        $(li2).removeClass('selected');
        $(li3).removeClass('selected');
        $(li4).removeClass('selected');
        $(li5).removeClass('selected');
    }
});
$('a[href^="#"]').on('click', function(e) {
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-0
    }, 2000, 'swing', function() {
        window.location.hash = target;
    });
});