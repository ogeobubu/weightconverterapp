const lbsNum = document.getElementById("lbs-num");
const output = document.getElementById("output");
const gramOutput = document.getElementById("gram-output");
const kgOutput = document.getElementById("kg-output");
const ozOutput = document.getElementById("oz-output");

// AddEventListener
lbsNum.addEventListener("input", myInput);

// Add Function
function myInput(e) {
  let lbs = e.target.value;
  gramOutput.innerHTML = lbs * 453.59237;
  kgOutput.innerHTML = lbs / 2.205;
  ozOutput.innerHTML = lbs * 16;
}
