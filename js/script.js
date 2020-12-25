//Global variables for form
const jobTitle = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const shirtColor = document.getElementById('color');
const shirtDesign = document.getElementById('design');
const activitiesFieldset = document.getElementById('activities');
const checkboxes = document.querySelectorAll('#activities input');

otherJobRole.style.display = 'none';
shirtColor.disabled = true;

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
    for (let i = 0; i < checkboxes.length; i += 1) {
        const clicked = e.target;
        let activitiesCost = document.getElementById('activities-cost');
        const dataCost = clicked.getAttribute('data-cost');
        if (clicked.checked) {      
            activitiesCost.textContent = dataCost;          
        }
    }
});