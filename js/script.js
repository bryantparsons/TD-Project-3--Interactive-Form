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
    if (payChoice.value === 'bitcoin') {
        bitcoin.style.display = 'block';   
    } else {
        creditCard.style.display = 'none';
        payPal.style.display = 'none';
    }
    if (payChoice.value === 'paypal') {
        payPal.style.display = 'block';
    } else {
        bitcoin.style.display = 'none';
        creditCard.style.display = 'none';
    }
    if (payChoice.value === 'credit-card') {
        creditCard.style.display = 'block';
    } else {
        payPal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
});