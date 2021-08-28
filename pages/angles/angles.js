const form = document.getElementById("anglesTriangle");
const angles = document.querySelectorAll(".input");
const output = document.getElementById("result");
const err = document.querySelector(".error");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let sum = 0;

    angles.forEach((angle) => {
        sum += Number(angle.value);
    });

    if (sum === 180) {
        output.innerText = "They make an traingle!";
        output.style.background = "#A7F3D0";
    }
    else {
        err.style.display = "block";
    }
});


