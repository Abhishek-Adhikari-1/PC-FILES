//nav bar for phone
function hideMenu(){
    var a = document.querySelector("ul");
    a.style.transition = "1s";
    a.style.margin = "0 -600px 0 0";
}
function showMenu(){
    var a = document.querySelector("ul");
    a.style.transition = "1s";
    a.style.margin = "0";
}
//nav bar For resizing bug
function re(){
    var bcd = window.matchMedia("(min-width: 678px)");
    if(bcd.matches){
        var a = document.querySelector("ul");
        a.style.transition = "0s";
        a.style.margin = "0 0 0 0";
    }
    else {
        var a = document.querySelector("ul");
        a.style.margin = "0 -600px 0 0";
    }
}
//For Scrolling path
var progressbar = document.getElementById("progressbar");
var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    var progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.height = progressHeight + "%";
}
//Smooth Scroll In desire div
$('a[href^="#"]').on('click', function(e) {
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-0
    }, 2000, 'swing', function() {
        window.location.hash = target;
    });
});
// form validation
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

function validatephone(input){
    var phone = document.getElementById('id-phone').value;

    if(phone.length != 0){
        var num = /[^0-9]/gi;
        input.value = input.value.replace(num,"");
    }
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

function validateemail(input){
    var email = document.getElementById('id-email').value;

    if(email.length != 0){
        var ema = /[^a-z0-9@.]/gi;
        input.value = input.value.replace(ema,"");
    }
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
    if(!validatename() || !validatephone() || !validateemail() || !validatemessage()){
        submitError.style.display='block';//multiple time jastai.
        submitError.innerHTML = 'Please fix all error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);//time 3 second paxi haraunako lagi.
        return false;
    }
}
//feedback stars
function star1(){
    var star1 = document.getElementById('star1');
    star1.style.color = "Orange";
    star1.style.transition = ".7s";
    return true;
}
function star2(){
    var star1 = document.getElementById('star1');
    star1.style.color = "Orange";
    star1.style.transition = ".7s";
    var star2 = document.getElementById('star2');
    star2.style.color = "Orange";
    star2.style.transition = "1.4s";
    return true;
}
function star3(){
    var star1 = document.getElementById('star1');
    star1.style.color = "Orange";
    star1.style.transition = ".7s";
    var star2 = document.getElementById('star2');
    star2.style.color = "Orange";
    star2.style.transition = "1.4s";
    var star3 = document.getElementById('star3');
    star3.style.color = "Orange";
    star3.style.transition = "2.1s";
    return true;
}
function star4(){
    var star1 = document.getElementById('star1');
    star1.style.color = "Orange";
    star1.style.transition = ".7s";
    var star2 = document.getElementById('star2');
    star2.style.color = "Orange";
    star2.style.transition = "1.4s";
    var star3 = document.getElementById('star3');
    star3.style.color = "Orange";
    star3.style.transition = "2.1s";
    var star4 = document.getElementById('star4');
    star4.style.color = "Orange";
    star4.style.transition = "2.8s";
    return true;
}
function star5(){
    var star1 = document.getElementById('star1');
    star1.style.color = "Orange";
    star1.style.transition = ".7s";
    var star2 = document.getElementById('star2');
    star2.style.color = "Orange";
    star2.style.transition = "1.4s";
    var star3 = document.getElementById('star3');
    star3.style.color = "Orange";
    star3.style.transition = "2.1s";
    var star4 = document.getElementById('star4');
    star4.style.color = "Orange";
    star4.style.transition = "2.8s";
    var star5 = document.getElementById('star5');
    star5.style.color = "Orange";
    star5.style.transition = "3.5s";
    return true;
}
//Selected after Clicking
// function selector1(){
//     $(li1).addClass('selected');
//     $(li2).removeClass('selected');
//     $(li3).removeClass('selected');
//     $(li4).removeClass('selected');
//     $(li5).removeClass('selected');
// }
// function selector2(){
//     $(li1).removeClass('selected');
//     $(li2).addClass('selected');
//     $(li3).removeClass('selected');
//     $(li4).removeClass('selected');
//     $(li5).removeClass('selected');
// }
// function selector3(){
//     $(li1).removeClass('selected');
//     $(li2).removeClass('selected');
//     $(li3).addClass('selected');
//     $(li4).removeClass('selected');
//     $(li5).removeClass('selected');
// }
// function selector4(){
//     $(li1).removeClass('selected');
//     $(li2).removeClass('selected');
//     $(li3).removeClass('selected');
//     $(li4).addClass('selected');
//     $(li5).removeClass('selected');
// }
// function selector5(){
//     $(li1).removeClass('selected');
//     $(li2).removeClass('selected');
//     $(li3).removeClass('selected');
//     $(li4).removeClass('selected');
//     $(li5).addClass('selected');
// }
//Selected After Scrolling or Clicking
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