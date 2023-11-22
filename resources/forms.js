async function submitLoanForm() {
    var formData = {
        Gender: document.getElementById("GenderField").value,
        Married: document.getElementById("MarriedField").value,
        Dependents: document.getElementById("DepdField").value,
        Education: document.getElementById("EduField").value,
        Self_Employed: document.getElementById("EmpField").value,
        Property_Area: document.getElementById("AreaField").value,
        ApplicantIncome: document.getElementById("Income1Field").value,
        CoapplicantIncome: document.getElementById("Income2Field").value,
        LoanAmount: document.getElementById("AmtField").value,
        Loan_Amount_Term: document.getElementById("TermField").value,
        Credit_History: document.getElementById("HistField").value
    };

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
            'Ocp-Apim-Subscription-Key': '569145f2d4204c90b2cc85957c675d6b'
        }
    };

    try {
        const response = await fetch(url, options);

        if (response.ok) {
            const result = await response.json();
            console.log('Result:', result);

            document.getElementById('LoanResult').style="display: flex";
            document.getElementById('LoanResult').style.marginTop = '10px';
            document.getElementById('LoanResult').style.padding = '10px';
            if (result["Results"]==true)
            {
                document.getElementById('LResultImg').innerHTML = '<img src="./resources/pass.svg" alt="Loan Pass" style="width: 50%;">';
                document.getElementById('LResultImg').classList.add('nav-cta-button-container');
                document.getElementById('LoanResult').innerHTML = 'API Response: ' + JSON.stringify(result);
            }
            else
            {
                document.getElementById('LResultImg').innerHTML = '<img src="./resources/fail.svg" alt="Loan Fail" style="width: 50%;">';
                document.getElementById('LResultImg').classList.add('nav-cta-button-container');
                document.getElementById('LoanResult').innerHTML = 'API Response: ' + JSON.stringify(result);
            }
        } else {
            console.error('The request failed with status code:', response.status);

            const responseContent = await response.text();
            console.error('Response Content:', responseContent);

            document.getElementById('LoanResult').style="display: flex";
            document.getElementById('LoanResult').style.marginTop = '10px';
            document.getElementById('LoanResult').style.padding = '10px';
            document.getElementById('LResultImg').innerHTML = '<img src="./resources/error.svg" alt="API Error" style="width: 50%;">';
            document.getElementById('LResultText').classList.add('nav-cta-button-container');
            document.getElementById('LResultText').innerHTML = error.message + '<br>' + 'Please try again.';
        }
    } catch (error) {
        console.error('Error:', error.message);

        document.getElementById('LoanResult').style="display: flex";
        document.getElementById('LoanResult').style.marginTop = '10px';
        document.getElementById('LoanResult').style.padding = '10px';
        document.getElementById('LResultImg').innerHTML = '<img src="./resources/error.svg" alt="API Error" style="width: 50%;">';
        document.getElementById('LResultText').classList.add('nav-cta-button-container');
        document.getElementById('LResultText').innerHTML = error.message + '<br>' + 'Please try again.';
    }
}

async function submitCreditForm() {
    var formData = {
        Gender: document.getElementById("GenderField-2").value,
        Age: document.getElementById("AgeField-2").value,
        Married: document.getElementById("MarriedField-2").value,
        BankCustomer: document.getElementById("CustField-2").value,
        Employed: document.getElementById("EmpField-2").value,
        YearsEmployed: document.getElementById("YrsField-2").value,
        PriorDefault: document.getElementById("DefField-2").value,
        DriversLicense: document.getElementById("DLField-2").value,
        Citizen: document.getElementById("CitField-2").value,
        Income: document.getElementById("IncomeField-2").value,
        Debt: document.getElementById("DebtField-2").value,
    };

    const requestBody = JSON.stringify({
        Inputs: {
            data: [formData],
        },
        GlobalParameters: {
            method: "predict",
        },
    });

    const url = "https://api-mgmnt.azure-api.net/credit-api/score";
    const apiKey = "p6GarWhdtGrqELL2SpwAoFOfqhxNaJ5x";

    const options = {
        method: 'POST',
        body: requestBody,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        }
    };

    try {
        const response = await fetch(url, options);

        if (response.ok) {
            const result = await response.json();
            console.log('Result:', result);

            //document.getElementById('CreditSuccess').style="display: flex";
            document.getElementById('CreditSuccess').style.marginTop = '10px';
            document.getElementById('CreditSuccess').style.padding = '10px';
            //document.getElementById('CFailImg').innerHTML = '<img src="./resources/error.svg" alt="API Error" style="width: 50%;">';
            //document.getElementById('CFailText').classList.add('nav-cta-button-container');
            //document.getElementById('CFailText').innerHTML = error.message + '<br>' + 'Please try again.';
            document.getElementById('CreditSuccess').innerHTML = 'API Response: ' + JSON.stringify(result);
        } else {
            console.error('The request failed with status code:', response.status);

            console.log('Headers:', response.headers);

            const responseContent = await response.text();
            console.error('Response Content:', responseContent);

            document.getElementById('CreditError').style="display: flex";
            document.getElementById('CreditError').style.marginTop = '10px';
            document.getElementById('CreditError').style.padding = '10px';
            document.getElementById('CErrorImg').innerHTML = '<img src="./resources/error.svg" alt="API Error" style="width: 50%;">';
            document.getElementById('CErrorText').classList.add('nav-cta-button-container');
            document.getElementById('CErrorText').innerHTML = error.message + '<br>' + 'Please try again.';
        }
    } catch (error) {
        console.error('Error:', error.message);

        document.getElementById('CreditError').style="display: flex";
        document.getElementById('CreditError').style.marginTop = '10px';
        document.getElementById('CreditError').style.padding = '10px';
        document.getElementById('CErrorImg').innerHTML = '<img src="./resources/error.svg" alt="API Error" style="width: 50%;">';
        document.getElementById('CErrorText').classList.add('nav-cta-button-container');
        document.getElementById('CErrorText').innerHTML = error.message + '<br>' + 'Please try again.';
    }
}