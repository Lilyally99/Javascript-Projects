// GLOBAL VARIABLE (can be accessed anywhere in the script)
var globalVar = 10;

// FUNCTION USING GLOBAL VARIABLE
function showGlobal() {
    document.getElementById("globalResult").innerHTML = "Global variable: " + globalVar;
}

// FUNCTION WITH LOCAL VARIABLE
function showLocal() {
    var localVar = 5; // LOCAL VARIABLE (only works inside this function)
    document.getElementById("localResult").innerHTML = "Local variable: " + localVar;
}

// FUNCTION WITH AN INTENTIONAL ERROR
function errorFunction() {
    var x = 20;

    // INTENTIONAL ERROR: 'y' is not defined
    console.log(x + y);
}

// DEBUG VERSION OF THE FUNCTION
function debugFunction() {
    var x = 20;
    var y = 5;

    // console.log helps us check values in Chrome DevTools
    console.log("x =", x);
    console.log("y =", y);
    console.log("x + y =", x + y);
}

// FUNCTION WITH IF / ELSE STATEMENT
function checkAge() {
    // Get the value from the input box
    let age = document.getElementById("ageInput").value;

    // Select the paragraph where the result will appear
    let result = document.getElementById("result");

    // If the age is 18 or greater, allow access
    if (age >= 18) {
        result.innerHTML = "You are eligible!";
    } else {
        result.innerHTML = "You are not eligible!";
    }
}

// TIME FUNCTION
function Time_function() {
    // Get the current hour from the computer clock
    let time = new Date().getHours();
    let reply;

    // Decide what message to show based on the time
    if (time < 12) {
        reply = "Good morning!";
    } else if (time < 18) {
        reply = "Good afternoon!";
    } else {
        reply = "Good evening!";
    }

    // Display the message in the paragraph
    document.getElementById("timeResult").innerHTML = reply;
}