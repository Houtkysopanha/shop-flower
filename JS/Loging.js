const email = document.getElementById('Email1');
const pass = document.getElementById('Password');
const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('password_error');
const submit_succes = document.getElementById('submit')

form.addEventListener('submit', (e) => {

    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerText = 'Valid Email is Required';
    }
    else{
        email_error.innerText = ' ';
    }

    
    if(pass.value.length <= 5) {
        e.preventDefault();
        pass_error.innerText = 'Password must be 8 character';
    }
    else{
        pass_error.innerHTML = ' '; 
    }

    if(email.value.match(email_check) && pass.value.length > 5){
        showSuccessMessage();
    }
});

function  showSuccessMessage(){
    alert('Form submitted successfully!');
    form.reset();
}