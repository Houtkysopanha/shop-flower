// const email = document.getElementById('email')
// const pass = document.getElementById('password')
// const card = document.getElementById('Card')
// const cvv = document.getElementById('CVV')
// const start = document.getElementById('startmonth')
// const end = document.getElementById('endmonth')


// const email_error = document.getElementById('email_error')
// const pass_error = document.getElementById('pass_error')
// const card_error = document.getElementById('card_error')
// const cvv_error = document.getElementById('cvv_error')
// const start_error = document.getElementById('startmonth_error')
// const end_error = document.getElementById('endmonth_error')


// form.addEventListener('submit', (e) => {


//     var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     if (!email.value.match(email_check)) {
//         e.preventDefault();
//         email_error.innerText = 'Valid Email is required';
//     }
//     else{
//         email_error.innerText ='';
//     }


// })

// const form = document.getElementById('form_id');

// const email = document.getElementById('email');
// const pass = document.getElementById('password');
// const card = document.getElementById('Card');
// const cvv = document.getElementById('CVV');
// const start = document.getElementById('startmonth');
// const end = document.getElementById('endmonth');

// const email_error = document.getElementById('email_error');
// const pass_error = document.getElementById('pass_error');
// const card_error = document.getElementById('card_error');
// const cvv_error = document.getElementById('cvv_error');
// const start_error = document.getElementById('startmonth_error');
// const end_error = document.getElementById('endmonth_error');

// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // Prevent form submission for now

//     // Clear all previous error messages
//     email_error.innerText = '';
//     pass_error.innerText = '';
//     card_error.innerText = '';
//     cvv_error.innerText = '';
//     start_error.innerText = '';
//     end_error.innerText = '';

//     // Validate email
//     var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     if (!email.value.match(email_check)) {
//         email_error.innerText = 'Valid Email is required';
//         return; // Exit function early if validation fails
//     }
//     if(pass.value.length < 6){
//         pass_error.innerText = 'Password must be 8 character'
//         return;
//     }
//     if(card.value.length < 4){
//         card_error.innerText = 'Card number is required'
//     }
        
    


//     showSuccessMessage();
//     form.reset();
// });

// function showSuccessMessage() {
//     alert('Form submitted successfully!');
// }


const form = document.getElementById('form_id');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Fetching all input fields
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const card = document.getElementById('Card');
    const cvv = document.getElementById('CVV');
    const startmonth = document.getElementById('startmonth');
    const endmonth = document.getElementById('endmonth');

    // Fetching all error display elements
    const email_error = document.getElementById('email_error');
    const pass_error = document.getElementById('pass_error');
    const card_error = document.getElementById('card_error');
    const cvv_error = document.getElementById('cvv_error');
    const startmonth_error = document.getElementById('startmonth_error');
    const endmonth_error = document.getElementById('endmonth_error');

    // Reset all error messages
    email_error.textContent = '';
    pass_error.textContent = '';
    card_error.textContent = '';
    cvv_error.textContent = '';
    startmonth_error.textContent = '';
    endmonth_error.textContent = '';

    // Regular expressions for validation (if needed)
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    // Validation logic for each field
    if (!email.value.match(email_check)) {
        email_error.textContent = 'Valid Email is required';
    }

    if (password.value.length < 6) {
        pass_error.textContent = 'Password must be at least 6 characters';
    }

    // Example validation for card number (you might need to adjust this)
    if (card.value.trim() === '' || isNaN(card.value)) {
        card_error.textContent = 'Valid card number is required';
    }

    // Example validation for CVV (you might need to adjust this)
    if (cvv.value.trim() === '' || isNaN(cvv.value)) {
        cvv_error.textContent = 'Valid CVV is required';
    }

    // Example validation for start month (you might need to adjust this)
    if (startmonth.value.trim() === '') {
        startmonth_error.textContent = 'Start month is required';
    }

    // Example validation for end month (you might need to adjust this)
    if (endmonth.value.trim() === '') {
        endmonth_error.textContent = 'End month is required';
    }

    // If all validations pass, you can submit the form
    if (
        email.value.match(email_check) &&
        password.value.length >= 6 &&
        card.value.trim() !== '' &&
        !isNaN(card.value) &&
        cvv.value.trim() !== '' &&
        !isNaN(cvv.value) &&
        startmonth.value.trim() !== '' &&
        endmonth.value.trim() !== ''
    ) {
        // You can uncomment the form.submit() line to submit the form programmatically
        // form.submit();
        showSuccessMessage();
        form.reset(); // Optional: Reset the form after submission
    }
});

function showSuccessMessage() {
    alert('Your payment has been successfully. Thank you!!' );
}
