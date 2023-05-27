// VARIABLES======================================
const numberOutput = document.querySelector(".number");
const nameOutput = document.querySelector(".name");
const monthOutput = document.querySelector(".month");
const yearOutput = document.querySelector(".year");
const cvcOutput = document.querySelector(".cvc");
const cardNameInput = document.querySelector(".card-name");
const cardNumberInput = document.querySelector(".card-number");
const cardMonthInput = document.querySelector(".card-month");
const cardYearInput = document.querySelector(".card-year");
const cardCvcInput = document.querySelector(".card-cvc");
const submitBtn = document.querySelector(".submit-btn");
const completedBtn = document.querySelector(".completed-btn");
const form = document.querySelector(".form");
const completed = document.querySelector(".completed");


// ERRORS MESSAGE==========================================

const nameErrorMessage = document.querySelector(".name-error-message");
const numberErrorMessage = document.querySelector(".number-error-message");
const monthErrorMessage = document.querySelector(".month-error-message");
const yearErrorMessage = document.querySelector(".year-error-message");
const cvcErrorMessage = document.querySelector(".cvc-error-message");


let isValid = false

validateCard()

function validateCard() {
  // ============================CARD NAME==============================
  cardNameInput.addEventListener("input", () => {
    if (
      cardNameInput.value != "" &&
      cardNameInput.value.match(/^[A-Za-z\s]*$/)
    ) {
      nameOutput.innerHTML = cardNameInput.value;
      cardNameInput.classList.remove("error");
      nameErrorMessage.innerHTML = "";
      isValid = true;
    } else {
      cardNameInput.classList.add("error");
      nameErrorMessage.innerHTML = `Wrong format, letters only`;

      isValid = false;
    }
  });

  // ============================CARD NUMBER==============================
  cardNumberInput.addEventListener("input", () => {
    if (
      cardNumberInput.value != "" &&
      cardNumberInput.value.match(/^[0-9]+$/) &&
      cardNumberInput.value.length === 16
    ) {
      numberOutput.innerHTML = cardNumberInput.value.match(/.{1,4}/g).join(" ");
      cardNumberInput.classList.remove("error");
      numberErrorMessage.innerHTML = "";
      isValid = true;
    } else {
      cardNumberInput.classList.add("error");
      numberErrorMessage.innerHTML = `Wrong format, numbers only`;
      isValid = false;
    }
  });

  // ============================CARD MONTH==============================
  cardMonthInput.addEventListener("input", () => {
    if (
      cardMonthInput.value != "" &&
      cardMonthInput.value.match(/^[0-9]+$/) &&
      cardMonthInput.value.length === 2 &&
      cardMonthInput.value <= 12
    ) {
      monthOutput.innerHTML = cardMonthInput.value;
      cardMonthInput.classList.remove("error");
      monthErrorMessage.innerHTML = "";
      isValid = true;
    } else {
      cardMonthInput.classList.add("error");
      monthErrorMessage.innerHTML = `Invalid date`;
      isValid = false;
    }
  });

  // ============================CARD YEAR==============================
  cardYearInput.addEventListener("input", () => {
    if (
      cardYearInput.value != "" &&
      cardYearInput.value.match(/^[0-9]+$/) &&
      cardYearInput.value.length === 2 &&
      cardYearInput.value >= 20
    ) {
      yearOutput.innerHTML = cardYearInput.value;
      cardYearInput.classList.remove("error");
      yearErrorMessage.innerHTML = "";
      isValid = true;
    } else {
      cardYearInput.classList.add("error");
      yearErrorMessage.innerHTML = `Invalid date`;
      isValid = false;
    }
  });

  // ============================CARD CVC==============================
  cardCvcInput.addEventListener("input", () => {
    if (
      cardCvcInput.value != "" &&
      cardCvcInput.value.match(/^[0-9]+$/) &&
      cardCvcInput.value.length === 3
    ) {
      cvcOutput.innerHTML = cardCvcInput.value;
      cardCvcInput.classList.remove("error");
      cvcErrorMessage.innerHTML = "";
      isValid = true;
    } else {
      cardCvcInput.classList.add("error");
      cvcErrorMessage.innerHTML = `Wrong cvc format`;

      isValid = false;
    }
  });
}


submitBtn.addEventListener("click", () => {

    if(isValid){
      validateCard()
        form.classList.add("hidden");
        completed.classList.remove("hidden");
    } else{
        validateCard()
    }

});

completedBtn.addEventListener('click', ()=>{
    form.classList.remove("hidden");
    completed.classList.add("hidden");


numberOutput.innerHTML = ''
nameOutput.innerHTML = ''
monthOutput.innerHTML = ''
yearOutput.innerHTML = ''
cvcOutput.innerHTML = ''
cardNameInput.value = ''
cardNumberInput.value = ''
cardMonthInput.value = ''
cardYearInput.value = ''
cardCvcInput.value = ''
})