function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
window.onresize = window.onload = function() {
    let canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    for(let i = 0; i < 100; i += 1) {
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke();
    }
};
const circle = new Circle(10);

for (let key in circle) {
    console.log(typeof key)
}
window.resizeTo(100, 100);
window.focus();

