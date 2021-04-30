const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);


function handleSubmit(event) {
    event.preventDefault();
    const salaryamount = getinputnumbervalue("salaryamount");
    const hpw = getinputnumbervalue("hpw");
    const dpw = getinputnumbervalue("dpw");
    const hpy = getinputnumbervalue("hpy");
    const vdpy = getinputnumbervalue("vdpy");



    if(validateForm()){
        getResult(salaryamount, hpw, dpw, hpy, vdpy);
    }

}


function validateForm() {
    // TODO
    return true;
}

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  



var input = document.getElementById('standard').value;
var values = input.split(',');