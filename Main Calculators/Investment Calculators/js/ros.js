const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const pps = getinputnumbervalue("pps");
    const eps = getinputnumbervalue("eps");
    const pe = getinputnumbervalue("pe");

    getResult(pps,eps);

}

function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

function validateForm() {
    // TODO
    return true;
}


function getResult(pps, eps){
    const peratio = (pps/eps)*100;
    document.getElementById("pe").value = peratio.toFixed(0);
 
    
    
    const layout = `
      
      <div class="result-content2">
               Given Operating Profit = <strong> ${pps}</strong> <br>
              Net Sale = <strong> ${eps}</strong><br>
               Return on Sale = <strong> ${peratio.toFixed(0)}%</strong><br>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }


function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

