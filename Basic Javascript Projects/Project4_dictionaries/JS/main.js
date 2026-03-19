// This function creates a dictionary (JavaScript object)
function my_Dictionary() {

    // Creating a dictionary with key-value pairs
    var Animal = {
        Species: "Dog",
        Color: "Brown",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark"
    };

    // Delete a key BEFORE displaying it
    delete Animal.Breed;

    // Try to display the deleted value
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}

