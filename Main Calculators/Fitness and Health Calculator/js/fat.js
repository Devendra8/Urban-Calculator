function yesnoCheck(that){
  document.getElementById("contain-carb").style.display = "block";
}

function yesnoCheck1(that){
  document.getElementById("contain-carb").style.display = "none";
}


const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
  event.preventDefault();

  const gender = getSelectedValue("gender");
  const age = getInputNumberValue("age");
  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");
  const activityLevel = getSelectedValue("activity_level");

  if (validateForm()) {
    getCalorieResult(gender, age, weight, height, activityLevel);
  }
}

function handleReset() {
  const result = document.getElementById("result");
  result.innerHTML = "";
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}

function validateForm() {
  // TODO
  return true;
}

function getCalorieResult(gender, age, weight, height, activityLevel) {
  // Result fields do be displayed in result-container
  const bmr = Math.round(
    gender === "female"
      ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
      : 66 + 13.7 * weight + 5 * height - 6.8 * age
  );

  const maintenance = Math.round(bmr * Number(activityLevel));
  const lose0 = maintenance -500;
  const lose1 = lose0 -500;
  const gain0 = maintenance +500;
  const gain1 = gain0 + 500;
  const ada = Math.ceil(weight*0.8);
  const cdc= Math.ceil((maintenance*.10)/4);
  const cdc1= Math.ceil((maintenance*.35)/4);
  const who= Math.ceil(weight/1.2);

  const weight20 = Math.round(((maintenance*0.2)/9) +2);
  const weight35 = Math.round(((maintenance*0.35)/9) +2);
  const weight10 = Math.round(((maintenance*0.2)/18) +3);
  const weight7 = Math.round((maintenance*0.07)/9); 
 
  const lose020 = Math.round(((lose0*0.2)/9) +2);
  const lose035 = Math.round(((lose0*0.35)/9) +2);
  const lose010 = Math.round(((lose0*0.2)/18) +3);
  const lose07 = Math.round((lose0*0.07)/9); 

  const lose120 = Math.round(((lose1*0.2)/9) +2);
  const lose135 = Math.round(((lose1*0.35)/9) +2);
  const lose110 = Math.round(((lose1*0.2)/18) +5);
  const lose17 = Math.round((lose1*0.07)/9) ; 

  const gain020 = Math.round(((gain0*0.2)/9) +2);
  const gain035 = Math.round(((gain0*0.35)/9) +3);
  const gain010 = Math.round(((gain0*0.2)/18) +5);
  const gain07 = Math.round((gain0*0.07)/9); 

  const gain120 = Math.round(((gain1*0.2)/9) +2);
  const gain135 = Math.round(((gain1*0.35)/9) +3);
  const gain110 = Math.round(((gain1*0.2)/18) +5);
  const gain17 = Math.round((gain1*0.07)/9); 

  const layout = `
  
    <div class="result-content">
        <table style="width:100%">
            <tr>
                <th><strong>Goal</strong>.</td>
                <th><strong>Daily Calorie Allowance</strong>.</td>
                <th><strong>Daily Fat Allowance (20-35%)*</strong>.</td>
                <th><strong>Saturated Fat Allowance (10%)*</strong>.</td>
                <th><strong>Saturated Fat Allowance to Help Reduce Heart Disease (7%)*</strong>.</td>
            </tr>
            <tr>
                <td> Weight Maintainance</td>
                <td>  <strong> ${maintenance} calories</strong>.</td>
                <td>  <strong> ${weight20} - ${weight35} </strong></td>
                <td>  <strong> <${weight10} </strong></td>
                <td>  <strong> <${weight7} </strong></td>
            </tr>
            <tr>
                <td> Lose 0.5 kg/week</td>
                <td>  <strong> ${lose0} calories</strong>.</td>
                <td>  <strong> ${lose020} - ${lose035} </strong></td>
                <td>  <strong> <${lose010} </strong></td>
                <td>  <strong> <${lose07} </strong></td>
            </tr>
            <tr>
                <td> Lose 1 kg/week</td>
                <td>  <strong> ${lose1} calories</strong>.</td>
                <td>  <strong> ${lose120} - ${lose135}</strong></td>
                <td>  <strong> <${lose110} </strong></td>
                <td>  <strong> <${lose17} </strong></td>
            </tr>
            <tr>
                <td> Gain 0.5 kg/week</td> 
                <td>  <strong> ${gain0} calories</strong>.</td>
                <td>  <strong> ${gain020} - ${gain035} </strong></td>
                <td>  <strong> <${gain010} </strong></td>
                <td>  <strong> <${gain07} </strong></td>
            </tr>
            <tr>
                <td> Gain 1 kg/week</td> 
                <td>  <strong> ${gain1} calories</strong>.</td>
                <td>  <strong> ${gain120} - ${gain135}</strong></td>
                <td>  <strong> <${gain110}</strong></td>
                <td>  <strong> <${gain17}</strong></td>
            </tr>
        </table>
    </div>
    `;

  const result = document.getElementById("result");
  result.innerHTML = layout;
  result.scrollIntoView();
}
