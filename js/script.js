//Global variables for form
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

otherJobRole.style.display = 'none';
shirtColor.disabled = true;
payPal.style.display = 'none';
bitcoin.style.display = 'none';
paymentOption.item(1).selected = true;


//Code to bring name input for form into focus

document.getElementById('name').focus({preventScroll:true});

jobTitle.addEventListener('change', (e) => {
        const otherJobSelect = e.target;
        if (otherJobSelect.value === 'other') {
            otherJobRole.style.display = 'block';           
            } else {
            otherJobRole.style.display = 'none';
            }
});

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

form.addEventListener('submit', (e) => {
   if (totalCost === 0) {
        e.preventDefault();
   }
   const nameInput = name.value;
   const nameTest = /\w/.test(nameInput);
   if (nameTest === false) {
        e.preventDefault();
   } 
   const emailInput = email.value;
   const emailTest = /[^@]+@[^@.]+\.(com)/i.test(emailInput);
   if (emailTest === false) {
       e.preventDefault();
   }
   const creditCardInput = ccInput.value;
   const creditCardTest = /^[0-9]{13,16}$/.test(creditCardInput);
   if (paymentOption.item(1).selected === true && creditCardTest === false) {
       e.preventDefault();
   }
   const zipInput = zip.value;
   const zipTest = /^[0-9]{5}$/.test(zipInput);
   if (paymentOption.item(1).selected === true && zipTest === false) {
       e.preventDefault();
   }
   const cvvInput = cvv.value;
   const cvvTest = /^[0-9]{3}$/.test(cvvInput);
   if (paymentOption.item(1).selected === true && cvvTest === false) {
       e.preventDefault();
   }
});

