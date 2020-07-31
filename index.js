const currencyElementOne = document.getElementById("currency-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountElementTwo = document.getElementById("amount-two");
const amountElementOne = document.getElementById("amount-one");

const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

currencyElementOne.addEventListener("change", calculate);
amountElementOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountElementTwo.addEventListener("input", calculate);

function calculate() {}

calculate();
