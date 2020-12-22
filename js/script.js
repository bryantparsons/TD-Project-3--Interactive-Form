//Global variables for form
const jobTitle = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

otherJobRole.style.display = 'none';

//Code to bring name input for form into focus

document.getElementById('name').focus({preventScroll:true});

jobTitle.addEventListener('change', (e) => {
        const otherJobSelect = e.target;
        otherJobSelect.value = 'other';
        if (otherJobSelect) {
            otherJobRole.style.display = 'block';           
            } else {
            otherJobRole.style.dispay = 'none';
            }
    
});