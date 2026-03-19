// This function assigns two variables and displays them
function myFunction() {

    // Assign two variables
    var firstPart = "Hello";
    var secondPart = " World!";

    // Combine the variables
    var result = firstPart + secondPart;

    // Displays result in the HTML using getElementById
    document.getElementById("demo").innerHTML = result;
}