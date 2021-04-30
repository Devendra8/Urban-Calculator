const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const pps = Number(getinputnumbervalue("runs"));
    const eps = Number(getinputnumbervalue("wicket"));
    const pe = getinputnumbervalue("pe");
    const pe1 = getinputnumbervalue("pe1");

    getResult(pps, eps, pe, pe1);

}

function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

function validateForm() {
    // TODO
    return true;
}


function getResult(pps, eps, pe, pe1){
    const peratio = pps + 2*eps + 3*pe + 4*pe1
 
    
    
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

