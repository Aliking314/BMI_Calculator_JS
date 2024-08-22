// script.js
function calculateBMI() {
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;

    if (heightInput === "" || weightInput === "") {
        alert("Please enter both height and weight");
        return;
    }

    const heightInMeters = heightInput / 100;
    const weight = parseFloat(weightInput);

    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiResult = bmi.toFixed(2);

    let resultMessage = `Your BMI is ${bmiResult}. `;

    if (bmi < 18.5) {
        resultMessage += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultMessage += "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultMessage += "You are overweight.";
    } else {
        resultMessage += "You are obese.";
    }

    document.getElementById('result').textContent = resultMessage;
}
