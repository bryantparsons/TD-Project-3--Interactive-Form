//Global variables for form functionality

const jobTitle = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const shirtColor = document.getElementById('color');
const shirtDesign = document.getElementById('design');
const activitiesFieldset = document.getElementById('activities');
const checkboxes = document.querySelectorAll('#activities input');
let totalCost = 0;
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const paymentOption = payment.children;
const name = document.getElementById('name');
const email = document.getElementById('email');
const ccInput = document.querySelector("#cc-num");
const zip = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");
const form = document.getElementsByTagName("form")[0];

// Loads certain presets for the page

otherJobRole.style.display = 'none';
shirtColor.disabled = true;
payPal.style.display = 'none';
bitcoin.style.display = 'none';
paymentOption.item(1).selected = true;

// Brings the name input into focus when page loads

document.getElementById('name').focus({preventScroll:true});

// Displays the 'other job role' element when that option is selected

jobTitle.addEventListener('change', (e) => {
        const otherJobSelect = e.target;
        if (otherJobSelect.value === 'other') {
            otherJobRole.style.display = 'block';           
            } else {
            otherJobRole.style.display = 'none';
            }
});

//Takes the design theme selected and matches it with the available shirt colors

shirtDesign.addEventListener('change', (e) => {
    shirtColor.disabled = false;
    for (let i = 0; i < shirtColor.length; i += 1) {
        const targetValue = e.target.value;
        const colorData = shirtColor[i].getAttribute('data-theme');
        if (targetValue === colorData) {
            shirtColor[i].style.display = 'block';
        } else {
            shirtColor[i].style.display = 'none';
        }
    }
});

// Adds the total cost of all the activities selected

activitiesFieldset.addEventListener('change', (e) => {  
    const activitiesCost = document.getElementById('activities-cost');
    const clicked = e.target;
    const dataCost = e.target.getAttribute('data-cost'); 
        if (clicked.checked)  {
            totalCost = totalCost += parseInt(dataCost);             
        } else {
            totalCost = totalCost -= parseInt(dataCost); 
        }
    activitiesCost.textContent = `Total: $${totalCost}`;
});

// Displays or hides various options for payment

payment.addEventListener('change', (e) => {
    const payChoice = e.target;    
    const payArray = [payPal, bitcoin, creditCard];
    for (let i = 0; i < payArray.length; i += 1) {
        payArray[i].style.display = 'none';
        if (payChoice.value === 'bitcoin') {
            bitcoin.style.display = 'block';
        }
        if (payChoice.value === 'paypal') {
            payPal.style.display = 'block';
        } 
        if (payChoice.value === 'credit-card') {
            creditCard.style.display = 'block';
        }
    }
});

// Adds validation for form input, and displays error message when user enters incorrect info

form.addEventListener('submit', (e) => {
   
   if (totalCost === 0) {
        e.preventDefault();
        activitiesFieldset.classList.add = 'not-valid';
        activitiesFieldset.classList.remove = 'valid';
        activitiesFieldset.lastElementChild.style.display = 'block';
   } else {
        activitiesFieldset.classList.add = 'valid';
        activitiesFieldset.classList.remove = 'not-valid';
        activitiesFieldset.lastElementChild.style.display = 'none';
   }
   
   const nameInput = name.value;
   const nameLabel = name.parentNode;
   const nameTest = /\w/.test(nameInput);
   if (nameTest === false) {
        e.preventDefault();
        nameLabel.classList.add = 'not-valid';
        nameLabel.classList.remove = 'valid';
        nameLabel.lastElementChild.style.display = 'block';
   } else {
        nameLabel.classList.add = 'valid';
        nameLabel.classList.remove = 'not-valid';
        nameLabel.lastElementChild.style.display = 'none';
   }
  
   const emailInput = email.value;
   const emailLabel = email.parentNode;
   const emailTest = /[^@]+@[^@.]+\.(com)/i.test(emailInput);
    if (emailTest === false) {
       e.preventDefault();
        emailLabel.classList.add = 'not-valid';
        emailLabel.classList.remove = 'valid';
        emailLabel.lastElementChild.style.display = 'block';
   } else {
        emailLabel.classList.add = 'valid';
        emailLabel.classList.remove = 'not-valid';
        emailLabel.lastElementChild.style.display = 'none';
   }
   const creditCardInput = ccInput.value;
   const ccInputLabel = ccInput.parentNode;
   const creditCardTest = /^[0-9]{13,16}$/.test(creditCardInput);
   if (paymentOption.item(1).selected === true && creditCardTest === false) {
       e.preventDefault();
        ccInputLabel.classList.add = 'not-valid';
        ccInputLabel.classList.remove = 'valid';
        ccInputLabel.lastElementChild.style.display = 'block';
   } else {
        ccInputLabel.classList.add = 'valid';
        ccInputLabel.classList.remove = 'not-valid';
        ccInputLabel.lastElementChild.style.display = 'none';
   }
   
   const zipInput = zip.value;
   const zipLabel = zip.parentNode;
   const zipTest = /^[0-9]{5}$/.test(zipInput);
   if (paymentOption.item(1).selected === true && zipTest === false) {
       e.preventDefault();
        zipLabel.classList.add = 'not-valid';
        zipLabel.classList.remove = 'valid';
        zipLabel.lastElementChild.style.display = 'block';
   } else {
        zipLabel.classList.add = 'valid';
        zipLabel.classList.remove = 'not-valid';
        zipLabel.lastElementChild.style.display = 'none';
   }
   
   const cvvInput = cvv.value;
   const cvvLabel = cvv.parentNode;
   const cvvTest = /^[0-9]{3}$/.test(cvvInput);
   if (paymentOption.item(1).selected === true && cvvTest === false) {
       e.preventDefault();
        cvvLabel.classList.add = 'not-valid';
        cvvLabel.classList.remove = 'valid';
        cvvLabel.lastElementChild.style.display = 'block';
   } else {
        cvvLabel.classList.add = 'valid';
        cvvLabel.classList.remove = 'not-valid';
        cvvLabel.lastElementChild.style.display = 'none';
   }
});

// Increases user accessibiity 

for (let i = 0; i < checkboxes.length; i += 1) {
    const checkBoxLabel = checkboxes[i].parentNode;
    checkboxes[i].addEventListener('focus', (e) => {
        const focus = e.target;
        if (checkboxes[i] === focus) {     
            checkBoxLabel.classList.add('focus');
        }
    });
    checkboxes[i].addEventListener('blur', (e) => {
        const blur = e.target;
        if (checkboxes[i] === blur) {
            checkBoxLabel.classList.remove('focus');
        }
    });
}


