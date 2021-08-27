const form = document.getElementById("anglesTriangle");
const angles = document.querySelectorAll(".input");
const output = document.getElementById("result");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let sum = 0;

    angles.forEach((angle) => {
        sum += Number(angle.value);
    });

    if (sum === 180)
        output.innerText = "They make an traingle!";
    else
        output.innerText = "Oh no! these angles dont make a traingle.";
});


