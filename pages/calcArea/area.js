const areaCalcDisplay = document.querySelectorAll(".areaCalc");
const err = document.querySelector(".error");

const input1 = document.querySelectorAll("#input1");
const input2 = document.querySelectorAll("#input2");
const input3 = document.querySelector("#input3");

const outputDiv = document.querySelectorAll(".output");
const output = document.querySelectorAll("#result");
//Globals
const forms = document.forms;
const selectOptions = forms[0].elements;

//Events/Actions
selectOptions[0].addEventListener('change', () => {
    showDiv(areaCalcDisplay, 0, 1);
});

selectOptions[1].addEventListener("change", () => {
    showDiv(areaCalcDisplay, 1, 0);
});

forms[1].addEventListener('submit', (e) => {
    e.preventDefault();
    let b = Number(input1[0].value);
    let h = Number(input2[0].value);
    output[0].innerText = 0.5 * (b * h);
});

forms[2].addEventListener('submit', (e) => {
    e.preventDefault();
    err.style.display = "none";
    let a = Number(input1[1].value);
    let b = Number(input2[1].value);
    let c = Number(input3.value);

    if (a + b > c && b + c > a && c + a > b) {
      const s = (a + b + c) / 2;
      output[1].innerText = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
      outputDiv[1].style.display = "block";
    } else {
        err.style.display = "block";
        outputDiv[1].style.display = "none";
    }
});

// Utils
function showDiv(divList, showDiv, hideDiv) {
    divList[showDiv].style.display = "block";
    divList[hideDiv].style.display = "none"
}

