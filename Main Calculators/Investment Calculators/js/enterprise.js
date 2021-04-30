const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const pps = getinputnumbervalue("pps");
    const eps = getinputnumbervalue("eps");
    const cs = getinputnumbervalue("cs");
    const debt = getinputnumbervalue("debt");
    const cash = getinputnumbervalue("cash");
    const pe = getinputnumbervalue("pe");

    getResult(pps,eps, cs, debt, cash);

}

function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

function validateForm() {
    // TODO
    return true;
}


function getResult(pps, eps, cs, debt, cash){
    const peratio = Number(pps) + Number(eps) +Number(cs) +Number(debt) - Number(cash);
    document.getElementById("pe").value = peratio.toFixed(2);
 
    
    
    const layout = `
      
      <div class="result-content2">
            Market Capitalization = <strong> ${pps}</strong> <br>
            Enterprise Value = <strong> ${peratio.toFixed(2)}</strong><br>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }


function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

