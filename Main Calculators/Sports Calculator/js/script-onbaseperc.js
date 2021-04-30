const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const pps = Number(getinputnumbervalue("runs"));
    const eps = Number(getinputnumbervalue("wicket"));
    const pe = getinputnumbervalue("pe");
    const pe1 = getinputnumbervalue("pe1");
    const pe2 = getinputnumbervalue("pe2");


    getResult(pps, eps, pe, pe1, pe2);

}

function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

function validateForm() {
    // TODO
    return true;
}


function getResult(pps, eps, pe, pe1, pe2){
    const peratio = (pps+eps+pe)/(pe1+pe2+eps+pe)
 
    
    
    const layout = `
      
      <div class="result-content2">
              <strong> ${peratio.toFixed(2)}</strong><br>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }


function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

