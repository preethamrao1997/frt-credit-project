async function submitLoanForm() {
    var formData = {
        Gender: document.getElementById("GenderField").value,
        Married: document.getElementById("MarriedField").value,
        Dependents: document.getElementById("DepdField").value,
        Education: document.getElementById("EduField").value,
        Self_Employed: document.getElementById("EmpField").value,
        Property_Area: document.getElementById("AreaField").value,
        ApplicantIncome: document.getElementById("Income1Field").value !== "" ? document.getElementById("Income1Field").value / 500 : "",
        CoapplicantIncome: document.getElementById("Income2Field").value !== "" ? document.getElementById("Income2Field").value / 500 : "",
        LoanAmount: document.getElementById("AmtField").value !== "" ? document.getElementById("AmtField").value / 4000 : "",
        Loan_Amount_Term: document.getElementById("TermField").value !== "" ? document.getElementById("TermField").value * 51.4 : "",
        Credit_History: document.getElementById("HistField").value
    };

    if (Object.values(formData).some(value => value === null || value === undefined || value === "")) {
        document.getElementById('LoanResult').style="display: flex";
        document.getElementById('LoanResult').style.marginTop = '10px';
        document.getElementById('LoanResult').style.padding = '10px';
        document.getElementById('LResultImg').innerHTML = '<img src="./resources/warning.svg" alt="Value Warning" style="width: 50%;">';
        document.getElementById('LResultText').classList.add('field-label');
        document.getElementById('LResultText').classList.add('nav-cta-button-container');
        document.getElementById('LResultText').innerHTML = "One or more values haven't been entered correctly." + '<br><br>' + 'Please try again.';
        return;
    }

    const requestBody = JSON.stringify({
        Inputs: {
            data: [formData]
        },
        GlobalParameters: {
            method: "predict"
        }
    });

    const url = "https://api-mgmnt.azure-api.net/loan/score";

    const options = {
        method: 'POST',
        body: requestBody,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);

        if (response.ok) {
            const result = await response.json();
            //console.log('Result:', result);

            document.getElementById('LoanResult').style="display: flex";
            document.getElementById('LoanResult').style.marginTop = '10px';
            document.getElementById('LoanResult').style.padding = '10px';
            if (result.Results[0] === true)
            {
                document.getElementById('LResultImg').innerHTML = '<img src="./resources/pass.svg" alt="Loan Pass" style="width: 50%;">';
                document.getElementById('LResultText').classList.add('field-label');
                document.getElementById('LResultText').classList.add('nav-cta-button-container');
                document.getElementById('LResultText').innerHTML = 'Success' + '<br><br>' + 'There is a high chance that your loan will get approved.';
            }
            else
            {
                document.getElementById('LResultImg').innerHTML = '<img src="./resources/fail.svg" alt="Loan Fail" style="width: 50%;">';
                document.getElementById('LResultText').classList.add('field-label');
                document.getElementById('LResultText').classList.add('nav-cta-button-container');
                document.getElementById('LResultText').innerHTML = 'Sorry'+ '<br><br>' + 'There is a high chance that your loan will not get approved.';
            }
        } else {
            /*console.error('The request failed with status code:', response.status);
            const responseContent = await response.text();
            console.error('Response Content:', responseContent);*/

            document.getElementById('LoanResult').style="display: flex";
            document.getElementById('LoanResult').style.marginTop = '10px';
            document.getElementById('LoanResult').style.padding = '10px';
            document.getElementById('LResultImg').innerHTML = '<img src="./resources/error.svg" alt="API Error" style="width: 50%;">';
            document.getElementById('LResultText').classList.add('field-label');
            document.getElementById('LResultText').classList.add('nav-cta-button-container');
            document.getElementById('LResultText').innerHTML = error.message + '<br><br>' + 'Please try again.';
        }
    } catch (error) {
        //console.error('Error:', error.message);

        document.getElementById('LoanResult').style="display: flex";
        document.getElementById('LoanResult').style.marginTop = '10px';
        document.getElementById('LoanResult').style.padding = '10px';
        document.getElementById('LResultImg').innerHTML = '<img src="./resources/error.svg" alt="API Error" style="width: 50%;">';
        document.getElementById('LResultText').classList.add('field-label');
        document.getElementById('LResultText').classList.add('nav-cta-button-container');
        document.getElementById('LResultText').innerHTML = error.message + '<br><br>' + 'Please try again.';
    }
}

async function submitCreditForm() {
    var formData = {
        Gender: document.getElementById("GenderField-2").value,
        Age: document.getElementById("AgeField-2").value,
        Married: document.getElementById("MarriedField-2").value,
        BankCustomer: document.getElementById("CustField-2").value,
        Employed: document.getElementById("EmpField-2").value,
        YearsEmployed: document.getElementById("YrsField-2").value !== "" ? document.getElementById("YrsField-2").value / 1.8 : "",
        PriorDefault: document.getElementById("DefField-2").value,
        DriversLicense: document.getElementById("DLField-2").value,
        Citizen: document.getElementById("CitField-2").value,
        Income: document.getElementById("IncomeField-2").value !== "" ? document.getElementById("IncomeField-2").value / 700 : "",
        Debt: document.getElementById("DebtField-2").value !== "" ? document.getElementById("DebtField-2").value / 200000 : ""
    };

    if (Object.values(formData).some(value => value === null || value === undefined || value === "")) {
        document.getElementById('CreditResult').style="display: flex";
        document.getElementById('CreditResult').style.marginTop = '10px';
        document.getElementById('CreditResult').style.padding = '10px';
        document.getElementById('CResultImg').innerHTML = '<img src="./resources/warning.svg" alt="Value Warning" style="width: 50%;">';
        document.getElementById('CResultText').classList.add('field-label');
        document.getElementById('CResultText').classList.add('nav-cta-button-container');
        document.getElementById('CResultText').innerHTML = "One or more values haven't been entered correctly." + '<br><br>' + 'Please try again.';
        return;
    }

    const requestBody = JSON.stringify({
        Inputs: {
            data: [formData]
        },
        GlobalParameters: {
            method: "predict"
        }
    });

    const url = "https://api-mgmnt.azure-api.net/credit/score";
    const apiKey = "p6GarWhdtGrqELL2SpwAoFOfqhxNaJ5x";

    const options = {
        method: 'POST',
        body: requestBody,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);

        if (response.ok) {
            const result = await response.json();
            //console.log('Result:', result);

            document.getElementById('CreditResult').style="display: flex";
            document.getElementById('CreditResult').style.marginTop = '10px';
            document.getElementById('CreditResult').style.padding = '10px';
            if (result.Results[0] === 1)
            {
                document.getElementById('CResultImg').innerHTML = '<img src="./resources/pass.svg" alt="Credit Pass" style="width: 50%;">';
                document.getElementById('CResultText').classList.add('field-label');
                document.getElementById('CResultText').classList.add('nav-cta-button-container');
                document.getElementById('CResultText').innerHTML = 'Success' + '<br><br>' + 'There is a high chance that your credit card will get approved.';
            }
            else
            {
                document.getElementById('CResultImg').innerHTML = '<img src="./resources/fail.svg" alt="Credit Fail" style="width: 50%;">';
                document.getElementById('CResultText').classList.add('field-label');
                document.getElementById('CResultText').classList.add('nav-cta-button-container');
                document.getElementById('CResultText').innerHTML = 'Sorry'+ '<br><br>' + 'There is a high chance that your credit card will not get approved.';
            }
        } else {
            /*console.error('The request failed with status code:', response.status);
            const responseContent = await response.text();
            console.error('Response Content:', responseContent);*/

            document.getElementById('CreditResult').style="display: flex";
            document.getElementById('CreditResult').style.marginTop = '10px';
            document.getElementById('CreditResult').style.padding = '10px';
            document.getElementById('CResultImg').innerHTML = '<img src="./resources/error.svg" alt="API Error" style="width: 50%;">';
            document.getElementById('CResultText').classList.add('field-label');
            document.getElementById('CResultText').classList.add('nav-cta-button-container');
            document.getElementById('CResultText').innerHTML = error.message + '<br><br>' + 'Please try again.';
        }
    } catch (error) {
        //console.error('Error:', error.message);

        document.getElementById('CreditResult').style="display: flex";
        document.getElementById('CreditResult').style.marginTop = '10px';
        document.getElementById('CreditResult').style.padding = '10px';
        document.getElementById('CResultImg').innerHTML = '<img src="./resources/error.svg" alt="API Error" style="width: 50%;">';
        document.getElementById('CResultText').classList.add('field-label');
        document.getElementById('CResultText').classList.add('nav-cta-button-container');
        document.getElementById('CResultText').innerHTML = error.message + '<br><br>' + 'Please try again.';
    }
}