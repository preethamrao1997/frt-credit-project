# Credit Card & Loan Approval Predictor
#### A machine learning based predictor to ease your mind and secure your finances
<br>

**Screenshots:**
<br><br>
![Screenshot 1](/screenshots/screenshot-1.png?raw=true)
![Screenshot 2](/screenshots/screenshot-2.png?raw=true)
![Screenshot 3](/screenshots/screenshot-3.png?raw=true)

**Industry:** Fin Tech
<br><br>
**Problem Statement:** <br>
In the financial sector, the process of credit card and loan approval is done manually, leading to delays, inefficiencies, and biases. Today, banks face the challenge of making this process faster while ensuring high accuracy.<br>
This is an opportunity to use a machine learning model to automate and enhance the evaluation process, providing a quicker, more consistent, and unbiased approach to determine creditworthiness.
<br><br>
**Project Description:**<br>
The core idea of this project is to use machine learning and Azure services to automate and enhance the credit card and loan approval process. The project aims to address the challenges faced by financial institutions in streamlining decision-making, reducing delays, improving efficiency, and ensuring unbiased credit evaluations.
<br><br>
This project utilizes Azure Machine Learning services for it's predictive model capable of assessing credit risk based on historical data. The model considers various factors, including income, marital status, employment and other relevant features.
<br><br>
By using this model, a static web app was made to present a user-friendly interface. This application allows users to input their information, receive real-time predictions, and understand the factors influencing the credit decision.
<br><br>

**Core Azure Services Used:**
- App Service
- Container Instances
- API Management
<br><br>

**Azure AI Service Used:** Azure Machine Learning

**Details:**
- Loan and Credit Card apporval datasets were obtained from Kaggle to train 2 ML models (one for loan approval and another for credit card approval).
- Automated ML was used inside Azure Machine Learning service to train a Classification model to find out who would get approved for a loan & credit card and who wouldn't.
- The best models (VotingEnsemble) were then deployed as 2 Container instances. This is how Azure Container Instances were used.
- A webpage was made using HTML and CSS (as seen in the screenshots).
- This webpage was then put on this GitHub project and deployed as a web app using Static Web App service on Azure.
- When the Sumbit button is clicked on the forms, a Javascript function makes an API call to the ML models.
- But this was causing a Cross-Origin Request Blocked (CORS) error, which was preventing me from getting the results.
- Upon finding another user having the same issue, API Management service was used where a CORS policy was added to prevent this error from ocurring.
- Thus the project was done using the above mentioned resources.
<br><br>
- The project demo video also has the Azure resources explained, if needed.
  
