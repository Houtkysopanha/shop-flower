const first_name = document.getElementById('Firstname');
const last_name = document.getElementById('Lastname');
const describe = document.getElementById('Describe');
const firstname_error = document.getElementById('Firstname_error');
const lastname_error = document.getElementById('Lastname_error');
const describe_error = document.getElementById('Describe_error');

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    let isValid = true;

    if (first_name.value.trim() === '') {
        firstname_error.innerText = 'First Name is required';
        isValid = false;
    } else {
        firstname_error.innerText = '';
    }

    if (last_name.value.trim() === '') {
        lastname_error.innerText = 'Last Name is required';
        isValid = false;
    } else {
        lastname_error.innerText = '';
    }

    if (describe.value.trim() === '') {
        describe_error.innerText = 'Feedback is required';
        isValid = false;
    } else {
        describe_error.innerText = '';
    }


    if (!isValid) {
        e.preventDefault();
    } else {
        showSuccessMessage();
        form.reset();
    }
});

function showSuccessMessage() {
    alert('Your feedback has been submitted. Thank you!');
}
