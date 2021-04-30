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
  const ada = Math.ceil(weight*0.8);
  const cdc= Math.ceil((maintenance*.10)/4);
  const cdc1= Math.ceil((maintenance*.35)/4);
  const who= Math.ceil(weight/1.2);

  const layout = `
  
    <div class="result-content">
        <ul>
            <li>
            &bull; Your Basal Metabolic Rate is <strong> ${bmr} calories</strong>.
            </li>
            <li>
            &bull; American Dietetic Association (ADA): <strong> ${ada} - ${weight} grams/day</strong>.
            </li>
            <li>
            &bull; The Centers for Disease Control and Prevention (CDC):<strong> ${cdc} - ${cdc1} grams/day</strong>.
            </li>
            <li>
            &bull; World Health Organization Safe Limit:<strong> ${who} grams/day</strong>.
            </li>
        </ul>
    </div>
    `;

  const result = document.getElementById("result");
  result.innerHTML = layout;
  result.scrollIntoView();
}
