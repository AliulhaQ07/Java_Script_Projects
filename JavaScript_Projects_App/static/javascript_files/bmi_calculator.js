document.addEventListener("DOMContentLoaded", function () {


    const bmi_Result = document.querySelector('#bmi_Result');
    const bmi_Weight = document.querySelector('#bmi_Weight');
    const bmi_Form = document.querySelector('#bmi_Form');

    bmi_Form.addEventListener('submit', (e) => {
        e.preventDefault();

        const height = document.querySelector('#height').value;
        const weight = document.querySelector('#weight').value;
        const feetToMeter = height * 0.3048;
        const squareRootOfMeter = (feetToMeter) ^ 2;
        const calculation_Bmi = (weight / squareRootOfMeter).toFixed(2);

        if (height === '' || isNaN(height) || height <= 0) {
            alert('Invalid Height ');
        } else if (weight === '' || isNaN(weight) || weight <= 0) {
            alert("Invaid Weight")
        } else {
            bmi_Result.innerText = calculation_Bmi;
            if (calculation_Bmi < 16) {
                bmi_Weight.innerText = 'Severe Thinness';
            } else if (calculation_Bmi >= 16 && calculation_Bmi < 17) {
                bmi_Weight.innerText = 'Moderate Thinness';
            } else if (calculation_Bmi >= 17 && calculation_Bmi < 18.5) {
                bmi_Weight.innerText = 'Mild Thinness';
            } else if (calculation_Bmi >= 18.5 && calculation_Bmi < 25.01) {
                bmi_Weight.innerText = 'Normal';
            } else if (calculation_Bmi > 25.01 && calculation_Bmi < 30) {
                bmi_Weight.innerText = 'Over Weight';
            }

        }


    })


})





