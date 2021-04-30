function yesnoCheck(that) {
    if (that.value == "percentoff") {
        document.getElementById("formadditional").style.display = "block";
    }else if (that.value == "fixed") {
        document.getElementById("formadditional").style.display = "none";
}
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const pbd = getinputnumbervalue("pbd");
    const discount = getinputnumbervalue("discount");
    const pad = getinputnumbervalue("pad");
    const saved = getinputnumbervalue("saved");

    if(pbd && discount){
     getResult(pbd, discount);
    }else if(pbd && pad){
     getResult1(pbd, pad);
    }else if(pbd & saved){
        getResult2(pbd, saved);
       }else if(discount && pad){
        getResult3(discount, pad);
       }else if(discount && saved){
        getResult4(discount, saved);
       }else if(pad && saved){
        getResult5(pad, saved);
       }


}

function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

function validateForm() {
    // TODO
    return true;
}


function getResult(pbd, discount){
    const pad1 =pbd -( pbd*(discount/100));
    const saved1 = pbd - pad1;
    
    
    const layout = `
      
      <div class="result-content2">
               As per given Discount Rate = <strong> ${discount}%</strong> <br>
               Price after Discount = <strong> ${pad1.toFixed(2)}</strong><br>
               Saved Amount = <strong> ${saved1.toFixed(2)}</strong><br>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function getResult1(pbd, pad)
{
    const discount1 = 100-((pad/pbd)*100);
    const saved1 = pbd - pad;
    
    
    const layout = `
      
      <div class="result-content2">
               As per given Price after Discount= <strong> ${pad}</strong> <br>
               Discount Rate = <strong> ${discount1.toFixed(2)}</strong><br>
               Saved Amount = <strong> ${saved1.toFixed(2)}</strong><br>
      </div>
      `;
  
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

function getResult2(pbd, saved){
    const discount1 = (saved *100)/pbd;
    const pad1 = pbd - saved;
    
    
    const layout = `
      
      <div class="result-content2">
               As per given Price before Discount= <strong> ${pbd}</strong> <br>
               Discount Rate = <strong> ${discount1.toFixed(2)}</strong><br>
               Price after Discount = <strong> ${pad1.toFixed(2)}</strong><br>
      </div>
      `;
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

function getResult3(discount, pad){
    const discount1 = (100-discount)/100;
    const pbd1 = pad/discount1;
    const saved1 = pbd1 - pad;
    
    
    const layout = `
      
      <div class="result-content2">
               As per given Discount Rate = <strong> ${discount}%</strong> <br>
               Price before Discount = <strong> ${pbd1.toFixed(2)}</strong><br>
               Saved Amount = <strong> ${saved1.toFixed(2)}</strong><br>
      </div>
      `;
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  


function getResult4(discount, saved){
    const pbd1 = (saved*100)/discount;
    const pad1 = pbd1-saved;
    
    
    const layout = `
      
      <div class="result-content2">
               As per given Discount Rate = <strong> ${discount}%</strong> <br>
               Price before Discount = <strong> ${pbd1.toFixed(2)}</strong><br>
               Price after Discount  = <strong> ${pad1.toFixed(2)}</strong><br>
      </div>
      `;
  
  
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  


function  getResult5(pad, saved){

    const saved1 = saved;
    const pbdis = Number(saved1) + Number(pad) ;
    const discount1 = saved1*100/pbdis;
    
    
    
    const layout = `
      
      <div class="result-content2">
               As per given Price after Discount = <strong> ${pad}</strong> <br>
               Price before Discount = <strong> ${pbdis}</strong><br>
               Discount Rate = <strong> ${discount1.toFixed(2)}</strong><br>
      </div>
      `;
  
    document.getElementById("BMI").innerHTML =  layout;
  }

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  