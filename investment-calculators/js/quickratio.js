const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const ms = getinputnumbervalue("pps");
    const ce = getinputnumbervalue("eps");
    const ar = getinputnumbervalue("ar");
    const cl = getinputnumbervalue("cl");
    const pe = getinputnumbervalue("pe");

    getResult(ms,ce,ar,cl);

}

function getinputnumbervalue(id){

    return Number(document.getElementById(id).value);
}

function validateForm() {
    // TODO
    return true;
}


function getResult(ms, ce, ar, cl ){
    const peratio = (ce+ms+ar)/cl;
    document.getElementById("pe").value = peratio.toFixed(2);
 
    
    
    const layout = `
      
      <div class="result-content2">
               Market Securities = <strong> ${ms}</strong> <br>
               Cash Equivalents = <strong> ${ce}</strong><br>
               Accounts Receivable = <strong> ${ar}</strong><br>
               Current Liabilities = <strong> ${cl}</strong><br>
               Quick Ratio = <strong> ${peratio.toFixed(2)}</strong><br>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }


function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

