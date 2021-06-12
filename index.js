function Circle(radius) {
    // Public variable
    this.radius = radius;
    // Private variable
    let defaultLocation = {x: 0, y: 0};
    // Private function
    let computeOptimumLocation = function(factor) {
        // ...
    }
    // Public function
    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log(this.radius, 'draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        // What to do when defaultLocation is read
        get: function() {
            return defaultLocation;
        },
        // What to do when defaultLocation is assigned
        // Only lets the value of x and y to be non zeros
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error("Invalid Location");
            
            defaultLocation = value;
        }
    });
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
circle.defaultLocation = {x:1, y:1};
for (let key in circle) {
    console.log(typeof key)
}
