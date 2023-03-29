const coords = { x: -100, y: -100 };
const circles = document.querySelectorAll(".circle");
const colors = [
    "hsl(30, 100%, 71%)",
    "hsl(28, 97%, 70%)",
    "hsl(23, 91%, 68%)",
    "hsl(22, 88%, 67%)",
    "hsl(17, 82%, 65%)",
    "hsl(15, 79%, 65%)",
    "hsl(8, 71%, 63%)",
    "hsl(5, 67%, 62%)",
    "hsl(358, 60%, 59%)",
    "hsl(355, 58%, 57%)",
    "hsl(347, 53%, 51%)",
    "hsl(345, 53%, 49%)",
    "hsl(338, 60%, 44%)",
    "hsl(335, 64%, 41%)",
    "hsl(327, 76%, 35%)",
    "hsl(324, 82%, 32%)",
    "#hsl(316, 100%, 26%)",
    "hsl(314, 100%, 24%)",
    "hsl(305, 100%, 20%)",
    "hsl(301, 100%, 19%)",
    "hsl(285, 100%, 19%)",
    "hsl(279, 100%, 18%)",
];
circles.forEach((circle, index) => {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});
window.addEventListener("mousemove", (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
});
function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach((circle, index)=>{
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    requestAnimationFrame(animateCircles);
}
animateCircles();

const coord = { x: 0, y: 0 };
const shift = document.getElementById("clicke");
function clickers() {
    window.addEventListener('click', (f) => {
        coord.x = f.clientX;
        coord.y = f.clientY;
        let i = coord.x;
        let j = coord.y;
        shift.style.opacity = "1";
        shift.style.left = i - 25 + 'px';
        shift.style.top = j - 25 + 'px';
        shift.style.scale = "2";
        shift.style.transition = "1s";
        setTimeout(() => {
            shift.style.transition = ".1s";
            shift.style.opacity = "0";
            shift.style.scale = "1";
        }, 700);
    });
    // requestAnimationFrame(clickers);
}
clickers();