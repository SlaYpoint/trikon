const form = document.forms[0];
const submitBtn = document.querySelector("#submit");
const quesDivs = document.querySelectorAll(".radio");
const output = document.querySelector("#result");

let score = 0;
const rightAns = ["opt2", "opt1", "opt3", "opt2", "opt1", "opt1"];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    let idx = 0;

    for (let inp of formData) {
        if (inp[1] === rightAns[idx]) {
            quesDivs[idx].style.background = '#A7F3D0';
            score+=2;
        } else {
            quesDivs[idx].style.background = "#FCA5A5";
        }
        idx++;
    }

    submitBtn.style.display = "none";
    output.innerText = `Your Score is ${score}`;
    output.style.backgroundColor = "#FEF3C7";
});
