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
  const weight40 = Math.round(((maintenance*0.4)/4) +20);
  const weight55 = Math.round(((maintenance*0.55)/4) +25);
  const weight65 = Math.round(((maintenance*0.65)/4) +30);
  const weight75 = Math.round(((maintenance*0.75)/4) +35); 
 
  const lose040 = Math.round(((lose0*0.4)/4) +10);
  const lose055 = Math.round(((lose0*0.55)/4) +12);
  const lose065 = Math.round(((lose0*0.65)/4) +15);
  const lose075 = Math.round(((lose0*0.75)/4) +20); 

  const lose140 = Math.round(((lose1*0.4)/4) +10);
  const lose155 = Math.round(((lose1*0.55)/4) +12);
  const lose165 = Math.round(((lose1*0.65)/4) +15);
  const lose175 = Math.round(((lose1*0.75)/4) +20); 

  const gain040 = Math.round(((gain0*0.4)/4) +10);
  const gain055 = Math.round(((gain0*0.55)/4) +12);
  const gain065 = Math.round(((gain0*0.65)/4) +15);
  const gain075 = Math.round(((gain0*0.75)/4) +20); 

  const gain140 = Math.round(((gain1*0.4)/4) +10);
  const gain155 = Math.round(((gain1*0.55)/4) +12);
  const gain165 = Math.round(((gain1*0.65)/4) +15);
  const gain175 = Math.round(((gain1*0.75)/4) +20); 
  const layout = `
  
    <div class="result-content">
        <table> 
            <tr>
                <th><strong>Goal</strong>.</td>
                <th><strong>Daily Calorie Allowance</strong>.</td>
                <th><strong>40%</strong>.</td>
                <th><strong>55%</strong>.</td>
                <th><strong>65%</strong>.</td>
                <th><strong>75%</strong>.</td>
            </tr>
            <tr>
                <td> Weight Maintainance</td>
                <td>  <strong> ${maintenance} calories</strong>.</td>
                <td>  <strong> ${weight40} </strong></td>
                <td>  <strong> ${weight55} </strong></td>
                <td>  <strong> ${weight65} </strong></td>
                <td>  <strong> ${weight75} </strong></td>
            </tr>
            <tr>
                <td> Lose 0.5 kg/week</td>
                <td>  <strong> ${lose0} calories</strong>.</td>
                <td>  <strong> ${lose040} </strong></td>
                <td>  <strong> ${lose055} </strong></td>
                <td>  <strong> ${lose065} </strong></td>
                <td>  <strong> ${lose075} </strong></td>
            </tr>
            <tr>
                <td> Lose 1 kg/week</td>
                <td>  <strong> ${lose1} calories</strong>.</td>
                <td>  <strong> ${lose140} </strong></td>
                <td>  <strong> ${lose155} </strong></td>
                <td>  <strong> ${lose165} </strong></td>
                <td>  <strong> ${lose175} </strong></td>
            </tr>
            <tr>
                <td> Gain 0.5 kg/week</td> 
                <td>  <strong> ${gain0} calories</strong>.</td>
                <td>  <strong> ${gain040} </strong></td>
                <td>  <strong> ${gain055} </strong></td>
                <td>  <strong> ${gain065} </strong></td>
                <td>  <strong> ${gain075} </strong></td>
            </tr>
            <tr>
                <td> Gain 1 kg/week</td> 
                <td>  <strong> ${gain1} calories</strong>.</td>
                <td>  <strong> ${gain140}</strong></td>
                <td>  <strong> ${gain155}</strong></td>
                <td>  <strong> ${gain165}</strong></td>
                <td>  <strong> ${gain175}</strong></td>
            </tr>
        </table>
    </div>
    `;

  const result = document.getElementById("result");
  result.innerHTML = layout;
  result.scrollIntoView();
}
