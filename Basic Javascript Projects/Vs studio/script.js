let position = 0;
let direction = 1;

function moveBox() {

    let box = document.getElementById("box");

    setInterval(function () {

        position += direction * 2;

        box.style.left = position + "px";

        // Bounce effect
        if (position >= 300 || position <= 0) {
            direction *= -1;
        }

    }, 10);
}