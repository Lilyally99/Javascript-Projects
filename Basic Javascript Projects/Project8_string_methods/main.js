// Using concat() to join multiple strings

let firstName = "Allen";
let lastName = "Omoruyi";
let message = "Welcome to my website, ";

// Combine the strings using concat()
let fullMessage = message.concat(firstName, " ", lastName, "!");

// Display the result in the console
console.log(fullMessage);
// Using slice() to display part of a string

let sentence = "Welcome to my JavaScript assignment!";

// slice(start, end) → extracts part of the string
let section = sentence.slice(11, 25);

// Display in console
console.log(section);
// Using toUpperCase()

let text = "hello world";

// Convert to uppercase
let upperText = text.toUpperCase();

// Display result
console.log(upperText);

// Optional: display on webpage
document.getElementById("upperResult").innerHTML = upperText;

// Using toPrecision()

let num = 123.456789;

// Format number to 5 total digits
let preciseNum = num.toPrecision(5);

// Display result in console
console.log(preciseNum);

// Optional: display on webpage
document.getElementById("precisionResult").innerHTML = preciseNum;