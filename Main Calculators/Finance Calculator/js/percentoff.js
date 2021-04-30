function yesnoCheck(that) {
    if (that.value == "yes") {
        document.getElementById("formadditional").style.display = "block";
    }else if (that.value == "no") {
        document.getElementById("formadditional").style.display = "none";
}
}



const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);


function handleSubmit(event) {
    event.preventDefault();
    const originalp = getinputnumbervalue("originalp");
    const percentoff = getinputnumbervalue("percentoff");
    const finalprice = getinputnumbervalue("finalprice");
    const saved = getinputnumbervalue("saved");
    const percentoff2 = getinputnumbervalue("2percentoff");

    if(originalp){
     getResult(originalp);
    }else if(percentoff){
     getResult1(percentoff);
    }else if(finalprice){
        getResult2(finalprice);
       }else if(saved){
        getResult3(saved);
       }

}

function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

  
function validateForm() {
    // TODO
    return true;
}

function getResult(originalp){
    const dia = (2*Radius);
    const circum = (2*3.14*Radius);
    const area =  (3.14*(Radius*Radius));
    
    
    const layout = `
      
      <div class="result-content2">
               As per Given Radius = <strong> ${Radius}</strong> <br>
               Diameter = <strong> ${dia.toFixed(2)}</strong><br>
               Circumference = <strong> ${circum.toFixed(2)}</strong><br>
               Area = <strong> ${area.toFixed(2)} </strong>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function getResult1(Diameter){
    const rad = (Diameter/2);
    const circum = (3.14*Diameter);
    const area =  (3.14*(Diameter/2)*(Diameter/2));
    
    
    const layout = `
      
      <div class="result-content2">
      <ul>
      <li>As per Given Diameter = <strong> ${Diameter}</strong></li> <br>
         <li>Radius = <strong>${rad} </strong></li><br>
         <li> Circumference = <strong> ${circum.toFixed(2)}</strong></li><br>
         <li> Area = <strong> ${area.toFixed(2)} </strong></li>
      </ul>
          </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

function getResult2(Circumference){
    const rad = (Circumference/(2*3.14));
    const dia = (Circumference/3.14);
    const area = (Circumference*Circumference)/(4*3.14);
    
    
    const layout = `
      



      <div class="result-content2">
      <ul>
      <li>As per Given Circumference = <strong> ${Circumference}</strong></li> <br>
         <li>Radius = <strong>${rad.toFixed(2)} </strong></li><br>
         <li> Diameter = <strong> ${dia.toFixed(2)}</strong></li><br>
         <li> Area = <strong> ${area.toFixed(2)} </strong></li>
      </ul>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

function getResult3(Area){
    const result = (Diameter*Diameter*Diameter);
    
    
    const layout = `
      


      <div class="result-content2">
      <ul>
      <li>As per Given Area = <strong> ${area}</strong></li> <br>
         <li>Radius = <strong>${rad} </strong></li><br>
         <li> Circumference = <strong> ${circum.toFixed(2)}</strong></li><br>
         <li> Area = <strong> ${area.toFixed(2)} </strong></li>
      </ul>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  