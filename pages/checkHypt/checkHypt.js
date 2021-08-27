const form = document.getElementById("checkHypotenuse");
const sides = document.querySelectorAll(".input");
const output = document.getElementById("result");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let l1 = Number(sides[0].value);
    let l2 = Number(sides[1].value);

    output.innerText = Math.sqrt((l1 * l1) + (l2 * l2)).toFixed(2);
});