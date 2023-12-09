const outputYear = document.querySelector('.output-year');
const outputMonth = document.querySelector('.output-month');
const outputDay = document.querySelector('.output-day');
const submitButton = document.querySelector('.submit-button');

let isValid = false;

const inputYear = document.getElementById('year');
const inputMonth = document.getElementById('month');
const inputDay = document.getElementById('day');

const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
const labelDay = document.querySelector('.label-day');
const labelMonth = document.querySelector('.label-month');
const labelYear = document.querySelector('.label-year');

submitButton.addEventListener('click', CalculateDate);
inputDay.addEventListener('input', (e) => {
  if(+inputDay.value > 31) {
    errorDay.textContent = 'must be a valid date';
    labelDay.style.color = 'hsl(0, 100%, 67%)';
    inputDay.style.borderColor = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textContent = '';
    labelDay.style.color = 'initial';
    inputDay.style.borderColor = 'initial';

  }
  if(+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = 'This field is required';
    labelDay.style.color = 'hsl(0, 100%, 67%)';
    inputDay.style.borderColor = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    errorDay.textContent = '';
    labelDay.style.color = 'initial';
    inputDay.style.borderColor = 'initial';
  }
});

inputMonth.addEventListener('input', (e) => {
  if(+inputMonth.value > 12) {
    errorMonth.textContent = 'must be a valid date';
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    inputMonth.style.borderColor = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    isValid = true;
    errorMonth.textContent = '';
    labelMonth.style.color = 'initial';
    inputMonth.style.borderColor = 'initial';

  }
  if(+inputMonth.value === 0) {
    isValid = false;
    errorMonth.textContent = 'This field is required';
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    inputMonth.style.borderColor = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    errorMonth.textContent = '';
    labelMonth.style.color = 'initial';
    inputMonth.style.borderColor = 'initial';
  }
});

inputYear.addEventListener('input', (e) => {
  if(+inputYear.value > 2023) {
    errorYear.textContent = 'must be a valid date';
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    inputYear.style.borderColor = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    isValid = true;
    errorYear.textContent = '';
    labelYear.style.color = 'initial';
    inputYear.style.borderColor = 'initial';
  }
  if(+inputYear.value === 0) {
    isValid = false;
    errorYear.textContent = 'This field is required';
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    inputYear.style.borderColor = 'hsl(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    errorYear.textContent = '';
    labelYear.style.color = 'initial';
    inputYear.style.borderColor = 'initial';
  }
});

function CalculateDate() {
  if (isValid) {
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay();
    // DISPLAYING EVERYTHING
    outputDay.textContent = ageDay;
    outputMonth.textContent = ageMonth;
    outputYear.textContent = ageYears;
  } else {
    alert("error");
  }
}