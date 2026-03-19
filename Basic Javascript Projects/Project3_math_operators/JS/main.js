function addition_Function() {
    var x = 5;
    var y = 10;
    var result = x + y;
    document.getElementById("Math").innerHTML = "5 + 10 = " + result;
}

function subtraction_Function() {
    var x = 10;
    var y = 5;
    var result = x - y;
    document.getElementById("Math2").innerHTML = "10 - 5 = " + result;
}

function multiplication_Function() {
    var x = 6;
    var y = 4;
    var result = x * y;
    document.getElementById("Math3").innerHTML = "6 × 4 = " + result;
}

function division_Function() {
    var x = 20;
    var y = 5;
    var result = x / y;
    document.getElementById("Math4").innerHTML = "20 ÷ 5 = " + result;
}

// This function performs a modulus operation
function modulus_Function() {

    var x = 10;
    var y = 3;

    var result = x % y;

    document.getElementById("Math5").innerHTML = "10 % 3 = " + result;
}

// This function performs negation
function negation_Function() {

    var x = 10;

    var result = -x;

    document.getElementById("Math6").innerHTML = "The negation of 10 is " + result;
}
// This function performs increment
function increment_Function() {

    var x = 5;

    x++; // increases by 1

    document.getElementById("Math7").innerHTML = "After increment, the value is " + x;
}


// This function performs decrement
function decrement_Function() {

    var y = 5;

    y--; // decreases by 1

    document.getElementById("Math8").innerHTML = "After decrement, the value is " + y;
}
// This function generates a random number
function random_Function() {

    var result = Math.random();

    document.getElementById("Math9").innerHTML = "Random number: " + result;
}