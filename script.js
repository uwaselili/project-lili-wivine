const taxForm = document.querySelector("#tax-form");
const calculateButton = document.querySelector("#calculate-btn");
const resultDiv = document.querySelector("#result");

taxForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const income = document.querySelector("#income").valueAsNumber;
  const taxRate = document.querySelector("#tax-rate").valueAsNumber;

  const taxAmount = (income * taxRate) / 100;

  resultDiv.innerHTML = `<p>The tax amount for ${income} at the rate of ${taxRate}% is ${taxAmount.toFixed(
    2
  )}</p>`;
});