// Create a variable
var myVariable = "Hello World";

// Display the data type using document.write and typeof
document.write(typeof myVariable);


// This demonstrates type coercion
document.write("10" + 5);

// This function displays Infinity
function infinity_Function() {
    document.getElementById("Infinity").innerHTML = 2E310;
}


// This function displays -Infinity
function negative_Infinity_Function() {
    document.getElementById("NegativeInfinity").innerHTML = -2E310;
}


// This function shows a TRUE result
function true_Function() {
    document.getElementById("True").innerHTML = (10 > 5);
}


// This function shows a FALSE result
function false_Function() {
    document.getElementById("False").innerHTML = (5 > 10);
}

// Perform a math operation and display it in the console
console.log(5 + 10);

// This will return TRUE
function equal_True() {
    document.getElementById("EqualTrue").innerHTML = (10 == 10);
}


// This will return FALSE
function equal_False() {
    document.getElementById("EqualFalse").innerHTML = (10 == 5);
}
// TRUE: same value AND same data type
function true_Strict() {
    document.getElementById("StrictTrue").innerHTML = (10 === 10);
}


// FALSE: different data type AND different value
function false_DiffTypeDiffValue() {
    document.getElementById("False1").innerHTML = (10 === "5");
}


// FALSE: different data type but same value
function false_DiffTypeSameValue() {
    document.getElementById("False2").innerHTML = (10 === "10");
}


// FALSE: same data type but different value
function false_SameTypeDiffValue() {
    document.getElementById("False3").innerHTML = (10 === 20);
}
// TRUE: same value AND same data type
function true_Strict() {
    document.getElementById("StrictTrue").innerHTML = (10 === 10);
}


// FALSE: different data type AND different value
function false_DiffTypeDiffValue() {
    document.getElementById("False1").innerHTML = (10 === "5");
}


// FALSE: different data type but same value
function false_DiffTypeSameValue() {
    document.getElementById("False2").innerHTML = (10 === "10");
}


// FALSE: same data type but different value
function false_SameTypeDiffValue() {
    document.getElementById("False3").innerHTML = (10 === 20);
}
// Display the data type of a variable using typeof
var myVariable = "Hello World";
document.write("Data type of myVariable: " + typeof myVariable + "<br><br>");


// Combine a string and a number (type coercion)
document.write("String + Number: " + ("10" + 5) + "<br><br>");


// == operator (loose equality)
document.write("10 == '10': " + (10 == "10") + "<br>");


// === operator (strict equality)
document.write("10 === '10': " + (10 === "10") + "<br>");


// > operator (greater than)
document.write("10 > 5: " + (10 > 5) + "<br>");


// < operator (less than)
document.write("5 < 10: " + (5 < 10) + "<br>");


// && operator (AND - both must be true)
document.write("(10 > 5 && 5 < 10): " + (10 > 5 && 5 < 10) + "<br>");


// || operator (OR - at least one must be true)
document.write("(10 > 5 || 5 > 10): " + (10 > 5 || 5 > 10) + "<br>");


// ! operator (NOT - reverses the result)
document.write("!(10 > 5): " + !(10 > 5) + "<br>");