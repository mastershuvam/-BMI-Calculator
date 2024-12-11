const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validate the inputs
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height in cm.`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight in kg.`;
    return;
  }

  // Calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Classify BMI and display results
  if (bmi < 18.6) {
    results.innerHTML = `<span>Your BMI is ${bmi}. You are underweight.</span>`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    results.innerHTML = `<span>Your BMI is ${bmi}. You are in the normal range.</span>`;
  } else {
    results.innerHTML = `<span>Your BMI is ${bmi}. You are overweight.</span>`;
  }
});
