const navToggle = documents.getElementById("id_nav_toggle");
const navClose = documents.getElementById("id_nav_close");
const navMenu = documents.getElementById("id_nav_menu");

if(navToggle){
    navToggle.addEventListner("click", ()=> {
        navMenu.classList.add("show_menu");
    });
}
if(navClose){
    navToggle.addEventListner("click", ()=> {
        navMenu.classList.remove("show_menu");
    });
}