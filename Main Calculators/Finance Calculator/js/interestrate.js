const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const loanamount = getinputnumbervalue("loanamount");
    const loanterm = getinputnumbervalue("loanterm");
    const mpayment = getinputnumbervalue("mpayment");

    if(validateForm()){
        getResult(loanamount, loanterm, mpayment);
    }

}

function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

function validateForm() {
    // TODO
    return true;
}

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

function getResult(loanamount, loanterm, mpayment){
    const loanterm1 = loanterm*12;
    const totalpayment = loanterm1*Number(mpayment);
    const interest = totalpayment - loanamount;
    const interestrate = (interest*100)/loanamount*loanterm;

    const layout = `
      
    <div class="result-content2">
            Interest Rate = <strong> ${interestrate.toFixed(2)}%</strong> <br>
             Total Amount after ${loanterm1} Month= <strong> ${totalpayment.toFixed(2)}$</strong><br>
             Interest Amount = <strong> ${interest.toFixed(2)}$</strong><br>
    </div>
    `;


  document.getElementById("BMI").innerHTML =  layout;
}
