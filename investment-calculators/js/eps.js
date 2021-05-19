const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const pps = getinputnumbervalue("pps");
    const eps = getinputnumbervalue("eps");
    const cs = getinputnumbervalue("cs");
    const pe = getinputnumbervalue("pe");

    getResult(pps,eps, cs);

}

function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

function validateForm() {
    // TODO
    return true;
}


function getResult(pps, eps, cs){
    const peratio = (pps-eps)/cs;
    document.getElementById("pe").value = peratio.toFixed(2);
 
    
    
    const layout = `
      
      <div class="result-content2">
               Given Net Income = <strong> ${pps}</strong> <br>
              Dividends = <strong> ${eps}</strong><br>
              Common Shares = <strong> ${cs}</strong><br>
               Earnings per Share = <strong> ${peratio.toFixed(2)}</strong><br>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }


function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

