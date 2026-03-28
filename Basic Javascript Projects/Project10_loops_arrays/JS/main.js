// A while loop

var i = 1; // initialize variable

while (i <= 5) { // condition
    console.log("Count is: " + i); // output to console
    i++; // increment
}

// For loop example

for (var i = 1; i <= 5; i++) {
    console.log("Count is: " + i);
}

function cat_pics() {
    var Cat_Picture = [];
    
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    
    document.getElementById("Cat").innerHTML = 
        "In this picture, the cat is " + Cat_Picture[2] + ".";
}
// Function that contains an array and displays a value

function showAnimal() {

    // Create an array
    var animals = ["Dog", "Cat", "Rabbit", "Lion"];

    // Display one value from the array on the webpage
    document.getElementById("output").innerHTML =
        "My favorite animal is: " + animals[1];
}

// Create a constant object
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Black"
};

// Function to display object properties
function constant_function() {
    document.getElementById("Constant").innerHTML =
    
    "My car is a " + car.year + " " + car.color + " " + car.brand + " " + car.model + ".";
}
// Function using the let keyword

function showMessage() {

    // 'let' is used to declare a block-scoped variable
    let message = "Hello, this is a message using let!";

    // Display the message on the webpage
    document.getElementById("output").innerHTML = message;
}
// Create an object using let with properties and a method

let person = {
    name: "Allen",
    age: 25,
    job: "Student",

    // Method inside the object
    description: function() {
        return this.name + " is a " + this.age + " year old " + this.job + ".";
    }
};

// Function to display the object method result
function showPerson() {
    document.getElementById("output").innerHTML = person.description();
}