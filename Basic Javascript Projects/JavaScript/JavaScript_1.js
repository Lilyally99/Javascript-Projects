// Switch statement example

function checkDay() {
    let day = new Date().getDay(); // gets current day (0–6)
    let result;

    switch (day) {
        case 0:
            result = "Today is Sunday";
            break;
        case 1:
            result = "Today is Monday";
            break;
        case 2:
            result = "Today is Tuesday";
            break;
        case 3:
            result = "Today is Wednesday";
            break;
        case 4:
            result = "Today is Thursday";
            break;
        case 5:
            result = "Today is Friday";
            break;
        case 6:
            result = "Today is Saturday";
            break;
        default:
            result = "Invalid day";
    }

    document.getElementById("output").innerHTML = result;
}
// Function that uses getElementsByClassName()

function changeText() {

    // Get all elements with class "text"
    let elements = document.getElementsByClassName("text");

    // Change the text of each element
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Text has been changed!";
    }
}

// Get the canvas element
var canvas = document.getElementById("myCanvas");

// Get the drawing context (2D)
var ctx = canvas.getContext("2d");

// Draw a rectangle (graphic)
ctx.fillStyle = "blue"; // set color
ctx.fillRect(50, 50, 150, 100); // x, y, width, height

// Draw a circle
ctx.beginPath();
ctx.arc(150, 150, 40, 0, 2 * Math.PI); // x, y, radius
ctx.fillStyle = "red";
ctx.fill();

context.createLinearGradient(x0, y0, x1, y1);

// Get the canvas element
let canvas = document.getElementById("myCanvas");

// Get the drawing context
let ctx = canvas.getContext("2d");

// Create a linear gradient
let gradient = ctx.createLinearGradient(0, 0, 400, 0);

// Add colors to the gradient
gradient.addColorStop(0, "blue");   // start color
gradient.addColorStop(1, "green");  // end color

// Apply gradient as fill style
ctx.fillStyle = gradient;

// Draw rectangle with gradient background
ctx.fillRect(0, 0, 400, 200);