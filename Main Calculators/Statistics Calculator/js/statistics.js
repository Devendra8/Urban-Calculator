const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);


function handleSubmit(event) {
    event.preventDefault();
    var input = document.getElementById('statistic').value;
    var values = input.split(',');
    alert(values)


    

}


function validateForm() {
    // TODO
    return true;
}


function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  



