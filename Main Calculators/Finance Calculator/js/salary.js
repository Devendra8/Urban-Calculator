const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", handleReset);

function handleSubmit(event) {
    event.preventDefault();
    const salaryamount = getinputnumbervalue("salaryamount");
    const hpw = getinputnumbervalue("hpw");
    const dpw = getinputnumbervalue("dpw");
    const hpy = getinputnumbervalue("hpy");
    const vdpy = getinputnumbervalue("vdpy");



    if(validateForm()){
        getResult(salaryamount, hpw, dpw, hpy, vdpy);
    }

}


function getinputnumbervalue(id){

    return document.getElementById(id).value;
}

function validateForm() {
    // TODO
    return true;
}

function handleReset() {
    const result1 = document.getElementById("BMI");
    result1.innerHTML = "";
}  

function getResult(salaryamount, hpw, dpw, hpy, vdpy){

    if(document.getElementById("Hours").selected){
      const dailyex = (hpw/dpw)*salaryamount;
      const weeklyex = ((hpw/dpw)*salaryamount)*dpw;
      const bi_weeklyex = (((hpw/dpw)*salaryamount)*dpw)*2;
      const semi_monthly = ((((hpw/dpw)*salaryamount)*dpw)*2) + dailyex;




        const layout = `
      
        <div class="result-content2">
                <table>
                <tr>
                    <th></th>
                    <th>Vacation and Holiday Excluded</th>
                    <th>Vacation and Holiday Included</th>
                </tr>
                <tr>
                    <td>Hourly</td>
                    <td><strong>$${salaryamount}</strong></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Daily</td>
                    <td><strong>$${dailyex}</strong></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td><strong>$${weeklyex}</strong></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Bi-Weekly</td>
                    <td><strong>$${bi_weeklyex}</strong></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Semi-Monthly</td>
                    <td><strong>$${semi_monthly}</strong></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Quaterly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Yearly</td>
                    <td></td>
                    <td></td>
                </tr>
               

                </table>
        </div>
        `;

        document.getElementById("BMI").innerHTML =  layout;

    }else if(document.getElementById("Days").selected){





        const layout = `
      
        <div class="result-content2">
                <table>
                <tr>
                    <th></th>
                    <th>Vacation and Holiday Excluded</th>
                    <th>Vacation and Holiday Included</th>
                </tr>
                <tr>
                    <td>Hourly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Daily</td>
                    <td><strong>$${salaryamount}</strong></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Bi-Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Semi-Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Quaterly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Yearly</td>
                    <td></td>
                    <td></td>
                </tr>
               

                </table>
        </div>
        `;

        document.getElementById("BMI").innerHTML =  layout;

    }else if(document.getElementById("Week").selected){



        
        const layout = `
      
        <div class="result-content2">
                <table>
                <tr>
                    <th></th>
                    <th>Vacation and Holiday Excluded</th>
                    <th>Vacation and Holiday Included</th>
                </tr>
                <tr>
                    <td>Hourly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Daily</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td></td>
                    <td><strong>$${salaryamount}</strong></td>
                </tr>
                <tr>
                    <td>Bi-Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Semi-Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Quaterly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Yearly</td>
                    <td></td>
                    <td></td>
                </tr>
               

                </table>
        </div>
        `;

        document.getElementById("BMI").innerHTML =  layout;


    }else if(document.getElementById("Bi-week").selected){
        



        
        
        const layout = `
      
        <div class="result-content2">
                <table>
                <tr>
                    <th></th>
                    <th>Vacation and Holiday Excluded</th>
                    <th>Vacation and Holiday Included</th>
                </tr>
                <tr>
                    <td>Hourly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Daily</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Bi-Weekly</td>
                    <td></td>
                    <td><strong>$${salaryamount}</strong></td>
                </tr>
                <tr>
                    <td>Semi-Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Quaterly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Yearly</td>
                    <td></td>
                    <td></td>
                </tr>
               

                </table>
        </div>
        `;

        document.getElementById("BMI").innerHTML =  layout;


    }else if(document.getElementById("Semi-Month").selected){

          



        const layout = `
      
        <div class="result-content2">
                <table>
                <tr>
                    <th></th>
                    <th>Vacation and Holiday Excluded</th>
                    <th>Vacation and Holiday Included</th>
                </tr>
                <tr>
                    <td>Hourly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Daily</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Bi-Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Semi-Monthly</td>
                    <td></td>
                    <td><strong>$${salaryamount}</strong></td>
                </tr>
                <tr>
                    <td>Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Quaterly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Yearly</td>
                    <td></td>
                    <td></td>
                </tr>
               

                </table>
        </div>
        `;

        document.getElementById("BMI").innerHTML =  layout;


        
    }else if(document.getElementById("Month").selected){





        const layout = `
      
        <div class="result-content2">
                <table>
                <tr>
                    <th></th>
                    <th>Vacation and Holiday Excluded</th>
                    <th>Vacation and Holiday Included</th>
                </tr>
                <tr>
                    <td>Hourly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Daily</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Bi-Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Semi-Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monthly</td>
                    <td></td>
                    <td><strong>$${salaryamount}</strong></td>
                </tr>
                <tr>
                    <td>Quaterly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Yearly</td>
                    <td></td>
                    <td></td>
                </tr>
               

                </table>
        </div>
        `;

        document.getElementById("BMI").innerHTML =  layout;


        
    }else if(document.getElementById("Quarter").selected){





        

        const layout = `
      
        <div class="result-content2">
                <table>
                <tr>
                    <th></th>
                    <th>Vacation and Holiday Excluded</th>
                    <th>Vacation and Holiday Included</th>
                </tr>
                <tr>
                    <td>Hourly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Daily</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Bi-Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Semi-Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Quaterly</td>
                    <td></td>
                    <td><strong>$${salaryamount}</strong></td>
                </tr>
                <tr>
                    <td>Yearly</td>
                    <td></td>
                    <td></td>
                </tr>
               

                </table>
        </div>
        `;

        document.getElementById("BMI").innerHTML =  layout;


        
    }else if(document.getElementById("year").selected){







        
        const layout = `
      
        <div class="result-content2">
                <table>
                <tr>
                    <th></th>
                    <th>Vacation and Holiday Excluded</th>
                    <th>Vacation and Holiday Included</th>
                </tr>
                <tr>
                    <td>Hourly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Daily</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Bi-Weekly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Semi-Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Monthly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Quaterly</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Yearly</td>
                    <td></td>
                    <td><strong>$${salaryamount}</strong></td>
                </tr>
               

                </table>
        </div>
        `;

        document.getElementById("BMI").innerHTML =  layout;


        
    }

    const layout = `
      
    <div class="result-content2">
            Interest Rate = <strong> ${interestrate.toFixed(2)}%</strong> <br>
             Total Amount after ${loanterm1} Month= <strong> ${totalpayment.toFixed(2)}$</strong><br>
             Interest Amount = <strong> ${interest.toFixed(2)}$</strong><br>
    </div>
    `;


  document.getElementById("BMI").innerHTML =  layout;
}
